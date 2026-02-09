# Email Notification Setup for Kalika Furniture Website

## Overview
This implementation adds email notifications for all forms on the Kalika Furniture website. When users submit any form (Franchise, Customer Enquiry, or Dealer Registration), the form data will be sent directly to your email: **shivamaiuse1@gmail.com**

## Forms Covered
1. **Franchise Enquiry Form** - Accessible via header button
2. **Customer Enquiry Form** - Located at `/customers` page  
3. **Dealer Registration Form** - Located at `/dealers` page

## Setup Instructions

### 1. Email Configuration
Create a `.env.local` file in your project root with the following content:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### 2. Gmail Setup (Recommended for Development)
1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this 16-character password in your `.env.local` file

### 3. Alternative Email Services (For Production)
For production use, consider these services:
- **SendGrid**: Better deliverability and reliability
- **Mailgun**: Good for high-volume emails
- **AWS SES**: Cost-effective for large scale
- **Resend**: Developer-friendly email API

### 4. Testing the Implementation
1. Start your development server: `npm run dev`
2. Navigate to each form:
   - Franchise form: Click "Franchise Enquiry" in header
   - Customer form: Visit `/customers` page
   - Dealer form: Visit `/dealers` page
3. Fill out and submit each form
4. Check your email (shivamaiuse1@gmail.com) for notifications

## Features Implemented

### ✅ Email Templates
- Professional HTML email templates for each form type
- Responsive design that works on all devices
- Kalika Furniture branding with brown/gold color scheme
- Complete form data organized in tables
- Timestamp of submission

### ✅ Form Enhancements
- Loading states during submission
- Success/error feedback to users
- Form reset after successful submission
- Error handling with user-friendly messages

### ✅ Backend Architecture
- RESTful API endpoint at `/api/send-email`
- Server-side email processing
- Input validation and error handling
- Secure environment variable usage

## Email Content Structure

Each email includes:
- **Subject**: Clear identification of form type and submitter name
- **Header**: Branded Kalika Furniture header
- **Body**: Complete form data in organized table format
- **Footer**: Timestamp of submission

## Troubleshooting

### Common Issues:
1. **Emails not sending**: Check your `.env.local` configuration
2. **Authentication errors**: Verify your Gmail app password is correct
3. **Form not submitting**: Check browser console for JavaScript errors
4. **Emails going to spam**: This may happen with Gmail SMTP; consider production email services

### Debugging:
- Check server console logs for detailed error messages
- Verify environment variables are loaded correctly
- Test API endpoint directly with tools like Postman

## Security Notes
- Never commit `.env.local` files to version control
- Use app passwords, not regular Gmail passwords
- For production, use dedicated email services with proper authentication

## Next Steps
1. Configure your email credentials in `.env.local`
2. Test all forms to ensure emails are received
3. Consider upgrading to a production email service for better deliverability
4. Monitor email delivery and spam folder placement