import axios from 'axios';

const authService = {
  register: async (data) => {
    try {
      const response = await axios.post('/api/register', data);
      return response; // Ensure response includes role or user data
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },
  // Other methods
};

export default authService;
