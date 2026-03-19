import nodemailer from 'nodemailer';

// Create transporter for sending emails
const createTransporter = () => {
  // Check if environment variables are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email configuration missing. Please set EMAIL_USER and EMAIL_PASS environment variables.');
  }

  // Using Hostinger SMTP configuration
  // For alternative providers, adjust host and port accordingly
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Email templates
const emailTemplates = {
  franchiseEnquiry: (data) => ({
    subject: `New Franchise Enquiry from ${data.fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%); padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 28px;">New Franchise Enquiry</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px;">Kalika Furniture & Industries</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #333; border-bottom: 2px solid #8B4513; padding-bottom: 10px;">Enquiry Details</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Full Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Mobile No:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.mobileNo}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.emailId}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Pincode:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.pincode}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">State:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.stateName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">City:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.cityName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Preferred Time:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.preferredTime}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Location Preference:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.locationPreference}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Owns Franchise:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.ownFranchisee}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Owns Retail Space:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.ownRetailSpace}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Property Availability:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.propertyAvailability || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Area of Property:</td>
                <td style="padding: 10px;">${data.areaOfProperty || 'Not specified'}</td>
              </tr>
            </table>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #8B4513; color: white; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px;">This enquiry was submitted on ${new Date().toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>
    `
  }),

  customerEnquiry: (data) => ({
    subject: `New Customer Enquiry from ${data.fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%); padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 28px;">New Customer Enquiry</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px;">Kalika Furniture & Industries</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #333; border-bottom: 2px solid #8B4513; padding-bottom: 10px;">Enquiry Details</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Full Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Address:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.address}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">City:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.city}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">State:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.state}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Pincode:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.pincode}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Product Interest:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.productInterest}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.budget || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Preferred Contact:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.preferredContact}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Message:</td>
                <td style="padding: 10px;">${data.message || 'No message provided'}</td>
              </tr>
            </table>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #8B4513; color: white; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px;">This enquiry was submitted on ${new Date().toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>
    `
  }),

  dealerEnquiry: (data) => ({
    subject: `New Dealer Enquiry from ${data.fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%); padding: 20px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 28px;">New Dealer Enquiry</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px;">Kalika Furniture & Industries</p>
        </div>
        
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #333; border-bottom: 2px solid #8B4513; padding-bottom: 10px;">Enquiry Details</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Full Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Mobile No:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.mobileNo}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.emailId}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Pincode:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.pincode}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">State:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.stateName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">City:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.cityName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Preferred Time:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.preferredTime}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Location Preference:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.locationPreference}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Business Experience:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.businessExperience}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Investment Capacity:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.investmentCapacity}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Current Business:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.currentBusiness || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Owns Franchise:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.ownFranchisee}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Owns Retail Space:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.ownRetailSpace}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Property Availability:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.propertyAvailability || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Area of Property:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.areaOfProperty || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Target Market:</td>
                <td style="padding: 10px;">${data.targetMarket || 'Not specified'}</td>
              </tr>
            </table>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #8B4513; color: white; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px;">This enquiry was submitted on ${new Date().toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>
    `
  })
};

// Send email function
export const sendEmail = async (formData, formType) => {
  try {
    const transporter = createTransporter();
    
    const template = emailTemplates[formType](formData);
    
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'shivamaiuse1@gmail.com',
      subject: template.subject,
      html: template.html
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};