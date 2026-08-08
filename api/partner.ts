import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { companyName, industry, contactName, email, partnershipType, volume, regions, description } = req.body;

    const data = await resend.emails.send({
      from: 'Divyana Operations And Solutions <notifications@divyanaoperationsandsolutions.com>', 
      to: 'info.divyana@gmail.com', // <-- UPDATE THIS TO YOUR EMAIL
      subject: `🤝 Strategic Partnership Application: ${companyName}`,
      html: `
        <h2>New Corporate Partnership Application</h2>
        
        <h3>Company Profile</h3>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Contact Authority:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${email}</p>
        
        <hr style="margin: 20px 0; border: 1px solid #eee;" />
        
        <h3>Operational Requirements</h3>
        <p><strong>Partnership Category:</strong> ${partnershipType}</p>
        <p><strong>Anticipated Volume:</strong> ${volume}</p>
        <p><strong>Regions of Interest:</strong> ${regions && regions.length > 0 ? regions.join(', ') : 'None specified'}</p>
        
        <hr style="margin: 20px 0; border: 1px solid #eee;" />
        
        <h3>Partnership Objectives</h3>
        <p>${description || 'No description provided.'}</p>
      `
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    return res.status(400).json({ success: false, error: error.message });
  }
}
