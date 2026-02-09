// Helper function to send form data to API
export const submitForm = async (formData, formType) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData,
        formType
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit form');
    }

    return { success: true, message: result.message };
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, error: error.message };
  }
};