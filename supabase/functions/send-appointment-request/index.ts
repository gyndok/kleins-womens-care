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

    // Send email to the doctor
    const emailResponse = await resend.emails.send({
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

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
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
