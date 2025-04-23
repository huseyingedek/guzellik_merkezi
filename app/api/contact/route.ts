import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || 'website@goksumguzellikmerkezi.com',
      to: process.env.EMAIL_TO || 'info@goksumguzellikmerkezi.com',
      subject: `İletişim Formu: ${name}`,
      text: `
        Ad Soyad: ${name}
        E-posta: ${email}
        Telefon: ${phone}
        Seçilen Hizmet: ${service || 'Belirtilmemiş'}
        Mesaj: ${message}
      `,
      html: `
        <h3>Yeni İletişim Formu Mesajı</h3>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Seçilen Hizmet:</strong> ${service || 'Belirtilmemiş'}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('İletişim formu gönderimi hatası:', error);
    return NextResponse.json(
      { error: 'Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    );
  }
} 