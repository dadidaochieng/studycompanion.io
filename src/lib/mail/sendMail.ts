import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';

export const sendMail = async (to: string, subject: string, body: string, attachments: { filename: string; content: string | Buffer; }[] = []) => {
  let transport;
  if (process.env.SENDGRID_API_KEY) {
    transport = nodemailer.createTransport(nodemailerSendgrid({
      apiKey: process.env.SENDGRID_API_KEY,
    }));
  }

  if(process.env.SMTP_MAIL_HOST) {
    transport = nodemailer.createTransport({
      host: process.env.SMTP_MAIL_HOST,
      port: Number(process.env.SMTP_MAIL_PORT) || 587,
      secure: true,
      auth: {
        user: process.env.SMTP_MAIL_USER,
        pass: process.env.SMTP_MAIL_PASS,
      },
    });
  }

  if(!transport) {
    throw new Error('No transport configured for NodeMailer. Probably missing SENDGRID_API_KEY or SMTP_MAIL_HOST');
  }

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to,
    subject,
    html: body,
    attachments,
  })
  .catch((err) => {
    console.error(err);
    throw new Error('Error sending mail');
  });
};
