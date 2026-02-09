'use client';
import React, { useState } from 'react';
import { submitForm } from '@/lib/formHelpers';

const EmailTest = () => {
  const [testStatus, setTestStatus] = useState('');
  const [isTesting, setIsTesting] = useState(false);

  const runTest = async () => {
    setIsTesting(true);
    setTestStatus('Testing email functionality...');
    
    try {
      // Test data for each form type
      const testData = {
        fullName: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        message: 'This is a test message to verify email functionality is working correctly.'
      };

      // Test customer enquiry
      const result = await submitForm(testData, 'customerEnquiry');
      
      if (result.success) {
        setTestStatus('✅ Test successful! Check your email (shivamaiuse1@gmail.com) for the test notification.');
      } else {
        setTestStatus(`❌ Test failed: ${result.error}`);
      }
    } catch (error) {
      setTestStatus(`❌ Test failed with error: ${error.message}`);
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Email Notification Test</h2>
      <p className="text-gray-600 mb-6">
        Click the button below to send a test email notification to verify the email system is working correctly.
      </p>
      
      <button
        onClick={runTest}
        disabled={isTesting}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isTesting ? 'Sending Test Email...' : 'Send Test Email'}
      </button>
      
      {testStatus && (
        <div className="mt-6 p-4 rounded-lg bg-gray-50">
          <p className="text-gray-700">{testStatus}</p>
        </div>
      )}
      
      <div className="mt-6 text-sm text-gray-500">
        <p><strong>Note:</strong> Make sure you have configured your email credentials in the .env.local file before testing.</p>
        <p>Check your email at: <strong>shivamaiuse1@gmail.com</strong></p>
      </div>
    </div>
  );
};

export default EmailTest;