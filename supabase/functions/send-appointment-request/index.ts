import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AppointmentRequest {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
  isNewPatient: boolean;
}

function getNextBusinessDay(): string {
  const today = new Date();
  let nextDay = new Date(today);
  nextDay.setDate(nextDay.getDate() + 1);
  
  // Skip weekends (Saturday = 6, Sunday = 0)
  while (nextDay.getDay() === 0 || nextDay.getDay() === 6) {
    nextDay.setDate(nextDay.getDate() + 1);
  }
  
  return nextDay.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const appointmentData: AppointmentRequest = await req.json();
    
    console.log("Processing appointment request:", { 
      name: appointmentData.name,
      email: appointmentData.email 
    });

    const nextBusinessDay = getNextBusinessDay();

    // Send email to the doctor
    const doctorEmailResponse = await resend.emails.send({
      from: "Appointment Requests <onboarding@resend.dev>",
      to: ["gyndok@yahoo.com"],
      subject: "New patient request",
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Patient Type:</strong> ${appointmentData.isNewPatient ? 'New Patient' : 'Existing Patient'}</p>
        <p><strong>Name:</strong> ${appointmentData.name}</p>
        <p><strong>Email:</strong> ${appointmentData.email}</p>
        <p><strong>Phone:</strong> ${appointmentData.phone}</p>
        <p><strong>Preferred Date:</strong> ${appointmentData.preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${appointmentData.preferredTime}</p>
        <p><strong>Reason for Visit:</strong></p>
        <p>${appointmentData.reason}</p>
      `,
    });

    console.log("Doctor email sent successfully:", doctorEmailResponse);

    // Send confirmation email to the patient
    const patientEmailResponse = await resend.emails.send({
      from: "Dr. Joseph Gideon's Office <onboarding@resend.dev>",
      to: [appointmentData.email],
      subject: "Appointment Request Received",
      html: `
        <h2>Thank You for Your Appointment Request</h2>
        <p>Dear ${appointmentData.name},</p>
        <p>We have received your appointment request and appreciate you choosing our practice.</p>
        <p><strong>You can expect a call from our office on ${nextBusinessDay}</strong> to confirm your appointment details.</p>
        <h3>Your Request Details:</h3>
        <ul>
          <li><strong>Preferred Date:</strong> ${appointmentData.preferredDate}</li>
          <li><strong>Preferred Time:</strong> ${appointmentData.preferredTime}</li>
        </ul>
        <p>If you have any urgent questions, please don't hesitate to call our office.</p>
        <p>Best regards,<br>Dr. Joseph Gideon's Office</p>
      `,
    });

    console.log("Patient confirmation email sent successfully:", patientEmailResponse);

    return new Response(JSON.stringify({ success: true, data: { doctorEmail: doctorEmailResponse, patientEmail: patientEmailResponse } }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-appointment-request function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
