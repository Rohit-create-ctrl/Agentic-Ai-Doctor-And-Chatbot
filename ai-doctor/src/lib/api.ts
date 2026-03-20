const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const fetchData = async (endpoint: string, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...((options as any).headers || {}),
      },
    });
    if (!response.ok) throw new Error('API request failed');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
