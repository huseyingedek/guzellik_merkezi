import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

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

    // Hizmet adını düzelt
    const serviceNames: Record<string, string> = {
      'cilt-analizi': 'Cilt Analizi',
      'cilt-bakimi': 'Cilt Bakımı',
      'lazer-epilasyon': 'Lazer Epilasyon',
      'bolgesel-zayiflama': 'Bölgesel Zayıflama',
      'kalici-makyaj': 'Kalıcı Makyaj',
      'leke-tedavi': 'Leke Tedavisi',
      'sac-mezoterapi': 'Saç Mezoterapisi',
      'protez-tirnak': 'Protez Tırnak',
    };
    
    const serviceName = serviceNames[formData.service] || formData.service || '-';

    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #d4a853 0%, #c9983e 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .header h1 { margin: 0; font-size: 24px; }
          .header p { margin: 10px 0 0; opacity: 0.9; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
          .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          .info-table th { background: #f8f4eb; color: #8b6914; padding: 12px 15px; text-align: left; border: 1px solid #e8e0d0; font-weight: 600; }
          .info-table td { padding: 12px 15px; border: 1px solid #e8e0d0; background: #fff; }
          .info-table tr:nth-child(even) td { background: #fdfcfa; }
          .highlight { background: #fff8e7 !important; }
          .message-box { background: #f8f8f8; padding: 15px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #d4a853; }
          .footer { background: #2d2d2d; color: #999; padding: 20px; text-align: center; font-size: 12px; border-radius: 0 0 10px 10px; }
          .footer a { color: #d4a853; text-decoration: none; }
          .badge { display: inline-block; background: #d4a853; color: white; padding: 5px 12px; border-radius: 20px; font-size: 14px; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📅 Yeni Randevu Talebi</h1>
            <p>Göksum Güzellik Merkezi</p>
            <span class="badge">${serviceName}</span>
          </div>
          
          <div class="content">
            <p>Merhaba,</p>
            <p>Web siteniz üzerinden yeni bir randevu talebi aldınız.</p>
            
            <table class="info-table">
              <tr>
                <th style="width: 35%;">Bilgiler</th>
                <th>Değer</th>
              </tr>
              <tr>
                <td><strong>👤 Ad Soyad</strong></td>
                <td>${formData.name || '-'}</td>
              </tr>
              <tr>
                <td><strong>📞 Telefon</strong></td>
                <td>${formData.phone || '-'}</td>
              </tr>
              <tr>
                <td><strong>✉️ E-posta</strong></td>
                <td>${formData.email || '-'}</td>
              </tr>
              <tr>
                <td><strong>💅 Hizmet</strong></td>
                <td><strong>${serviceName}</strong></td>
              </tr>
              <tr class="highlight">
                <td><strong>📆 Tarih</strong></td>
                <td><strong>${formData.date || '-'}</strong></td>
              </tr>
              <tr class="highlight">
                <td><strong>🕐 Saat</strong></td>
                <td><strong>${formData.time || '-'}</strong></td>
              </tr>
            </table>
            
            ${formData.message ? `
            <p><strong>📝 Not:</strong></p>
            <div class="message-box">
              ${formData.message}
            </div>
            ` : ''}
            
            <p style="margin-top: 20px; padding: 15px; background: #e8f5e9; border-radius: 8px; color: #2e7d32;">
              <strong>⚡ Hatırlatma:</strong> Lütfen müşteriye en kısa sürede dönüş yapın!
            </p>
          </div>
          
          <div class="footer">
            <p>Bu e-posta <a href="https://www.goksumguzellik.com">goksumguzellik.com</a> randevu formu üzerinden gönderilmiştir.</p>
            <p>Göksum Güzellik Merkezi | Cemalpaşa, Gazipaşa Blv. No:30 Kat:1, Seyhan/Adana</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"Göksum Güzellik" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || 'goksumguzellik796@gmail.com',
      subject: `📅 Randevu Talebi - ${formData.name} - ${serviceName}`,
      html: emailContent,
      replyTo: formData.email || undefined,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Randevu e-postası gönderildi:', info.messageId);

    return NextResponse.json({ success: true, message: 'Randevu talebi başarıyla gönderildi' });
  } catch (error: any) {
    console.error('E-posta gönderimi sırasında hata:', error);
    return NextResponse.json(
      { success: false, message: 'E-posta gönderilemedi', error: error.message },
      { status: 500 }
    );
  }
}
