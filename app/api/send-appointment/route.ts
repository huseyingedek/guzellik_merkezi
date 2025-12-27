import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    console.log('Randevu formu verileri alındı:', formData);
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const date = new Date(formData.date);
    const formattedDate = date.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    const emailContent = `
      <h2>Yeni Randevu Talebi</h2>
      <p><strong>İsim:</strong> ${formData.name}</p>
      <p><strong>E-posta:</strong> ${formData.email || 'Belirtilmemiş'}</p>
      <p><strong>Telefon:</strong> ${formData.phone}</p>
      <p><strong>Hizmet:</strong> ${formData.service}</p>
      <p><strong>Tarih:</strong> ${formattedDate}</p>
      <p><strong>Saat:</strong> ${formData.time}</p>
      <p><strong>Mesaj:</strong> ${formData.message || 'Belirtilmemiş'}</p>
    `;

    console.log('Randevu e-posta gönderimi hazırlığı:', process.env.EMAIL_USER, process.env.EMAIL_TO);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'huseyinxgedek@gmail.com',
      subject: 'Göksum Güzellik Merkezi - Yeni Randevu Talebi',
      html: emailContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Randevu e-postası gönderildi:', info.messageId);

    return NextResponse.json({ success: true, message: 'Randevu talebiniz başarıyla alındı' });
  } catch (error) {
    console.error('Randevu e-posta gönderimi sırasında hata:', error);
    return NextResponse.json(
      { success: false, message: 'Randevu talebi gönderilemedi', error: error.message },
      { status: 500 }
    );
  }
} 