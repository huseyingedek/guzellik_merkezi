# Email Setup Instructions

This application uses nodemailer to send contact form submissions via email. Follow these steps to configure email functionality:

## Setup Steps

1. **Create a `.env.local` file** at the root of your project if it doesn't already exist.

2. **For Gmail Users:**
   - Use an "App Password" instead of your regular Gmail password
   - To generate an App Password:
     1. Go to your Google Account settings
     2. Navigate to "Security" → "2-Step Verification" → "App passwords"
     3. Select "Mail" as the app and your device type
     4. Click "Generate" to get a 16-character password

3. **Configure your `.env.local` file** with the following variables:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   RECIPIENT_EMAIL=email-to-receive-form-submissions@example.com
   ```

4. **For other email services:**
   - You may need to modify the configuration in `app/api/send-email/route.ts`
   - Update the `createTransport` function with your email service details:
   ```javascript
   const transporter = nodemailer.createTransport({
     host: 'smtp.your-email-provider.com',
     port: 587,
     secure: false,
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASSWORD,
     },
   });
   ```

## Security Notes

- Never commit your `.env.local` file to version control
- Use environment variables in your hosting platform (Vercel, Netlify, etc.) to set these values in production
- Regularly rotate your app passwords as a security best practice 