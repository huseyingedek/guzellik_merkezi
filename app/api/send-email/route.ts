import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('Form verileri alındı:', formData);
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const emailContent = `
      <h2>Yeni İletişim Formu Mesajı</h2>
      <p><strong>İsim:</strong> ${formData.name}</p>
      <p><strong>E-posta:</strong> ${formData.email}</p>
      <p><strong>Telefon:</strong> ${formData.phone}</p>
      <p><strong>Mesaj:</strong> ${formData.message}</p>
    `;

    console.log('E-posta gönderim hazırlığı:', process.env.EMAIL_USER, process.env.RECIPIENT_EMAIL);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || 'bilgi@goksumguzellik.com',
      subject: 'Göksum Güzellik Merkezi - Yeni İletişim Formu Mesajı',
      html: emailContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('E-posta gönderildi:', info.messageId);

    return NextResponse.json({ success: true, message: 'E-posta başarıyla gönderildi' });
  } catch (error) {
    console.error('E-posta gönderimi sırasında hata:', error);
    return NextResponse.json(
      { success: false, message: 'E-posta gönderilemedi', error: error.message },
      { status: 500 }
    );
  }
} 