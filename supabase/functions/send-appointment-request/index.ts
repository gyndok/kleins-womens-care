import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const appointmentSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
  preferredDate: z.string().trim().min(1).max(50),
  preferredTime: z.string().trim().min(1).max(50),
  reason: z.string().trim().min(1).max(2000),
  isNewPatient: z.boolean(),
});

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

function getNextBusinessDay(): string {
  const today = new Date();
  let nextDay = new Date(today);
  nextDay.setDate(nextDay.getDate() + 1);

  while (nextDay.getDay() === 0 || nextDay.getDay() === 6) {
    nextDay.setDate(nextDay.getDate() + 1);
  }

  return nextDay.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON body." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const parsed = appointmentSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: "Invalid input." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    const appointmentData = parsed.data;

    console.log("Processing appointment request:", {
      name: appointmentData.name,
      email: appointmentData.email,
    });

    const nextBusinessDay = getNextBusinessDay();

    const doctorEmailResponse = await resend.emails.send({
      from: "Appointment Requests <noreply@santelishealth.com>",
      to: ["gyndok@yahoo.com"],
      subject: "New patient request",
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Patient Type:</strong> ${appointmentData.isNewPatient ? "New Patient" : "Existing Patient"}</p>
        <p><strong>Name:</strong> ${esc(appointmentData.name)}</p>
        <p><strong>Email:</strong> ${esc(appointmentData.email)}</p>
        <p><strong>Phone:</strong> ${esc(appointmentData.phone)}</p>
        <p><strong>Preferred Date:</strong> ${esc(appointmentData.preferredDate)}</p>
        <p><strong>Preferred Time:</strong> ${esc(appointmentData.preferredTime)}</p>
        <p><strong>Reason for Visit:</strong></p>
        <p>${esc(appointmentData.reason)}</p>
      `,
    });

    console.log("Doctor email sent successfully:", doctorEmailResponse);

    const patientEmailResponse = await resend.emails.send({
      from: "Geffrey Klein, MD <noreply@santelishealth.com>",
      to: [appointmentData.email],
      subject: "Appointment Request Received",
      html: `
        <h2>Thank You for Your Appointment Request</h2>
        <p>Dear ${esc(appointmentData.name)},</p>
        <p>We have received your appointment request and appreciate you choosing our practice.</p>
        <p><strong>You can expect a call from our office on ${esc(nextBusinessDay)}</strong> to confirm your appointment details.</p>
        <h3>Your Request Details:</h3>
        <ul>
          <li><strong>Preferred Date:</strong> ${esc(appointmentData.preferredDate)}</li>
          <li><strong>Preferred Time:</strong> ${esc(appointmentData.preferredTime)}</li>
        </ul>
        <p>If you have any urgent questions, please don't hesitate to call our office.</p>
        <p>Best regards,<br>Geffrey Klein, MD</p>
      `,
    });

    console.log("Patient confirmation email sent successfully:", patientEmailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-appointment-request function:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process appointment request." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
