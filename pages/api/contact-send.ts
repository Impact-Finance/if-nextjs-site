import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const { name, email, organization, message } = req.body;

      const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        auth: {
          user: 'impact.finance.utility@gmail.com',
          pass: process.env.GOOGLE_PW,
        },
        secure: true,
      });

      const mailData = {
        from: 'impact.finance.utility@gmail.com',
        to: 'info@impact-finance.io',
        subject: `IF Contact Form Submission from ${name}`,
        text:
          message +
          ' | Sent from: ' +
          email +
          ' | Organization: ' +
          organization,
        html: `<div>${message}</div><p>Sent from:
        ${email}</p><p>Organization: ${organization}</p>`,
      };

      await transporter.sendMail(mailData);

      res.status(201).json({ message: 'Message received!' });
    } catch {
      res.status(500).json({ message: 'Error sending message' });
    }
  }
}
