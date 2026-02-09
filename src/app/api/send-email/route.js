import { sendEmail } from '@/lib/emailService';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { formData, formType } = body;

    // Validate required fields
    if (!formData || !formType) {
      return NextResponse.json(
        { error: 'Form data and form type are required' },
        { status: 400 }
      );
    }

    // Validate form type
    const validFormTypes = ['franchiseEnquiry', 'customerEnquiry', 'dealerEnquiry'];
    if (!validFormTypes.includes(formType)) {
      return NextResponse.json(
        { error: 'Invalid form type' },
        { status: 400 }
      );
    }

    // Send email
    const result = await sendEmail(formData, formType);

    if (result.success) {
      return NextResponse.json(
        { 
          message: 'Form submitted successfully! We will contact you soon.',
          messageId: result.messageId 
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send email notification' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}