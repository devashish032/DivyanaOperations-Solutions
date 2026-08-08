import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, company, email, phone, service, message } = req.body;

    const data = await resend.emails.send({
      from: 'Divyana Operations And Solutions <notifications@divyanaoperationsandsolutions.com>', 
      to: 'info.divyana@gmail.com', // <-- UPDATE THIS TO YOUR EMAIL
      subject: `📩 General Inquiry from ${name} (${company || 'New Client'})`,
      html: `
        <h2>New Logistics Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${service}</p>
        <br/>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    return res.status(400).json({ success: false, error: error.message });
  }
}
