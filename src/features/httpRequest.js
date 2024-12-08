//const url = 'http://localhost:3000/api';
const url = 'https://comp229backend.onrender.com/api';

export const getNews = async (cat) => {
    const token = window.localStorage.getItem('token');
    try {
      const response = await fetch(`${url}/news?cat=${cat}`, {method: 'GET', headers: {'Authorization': `Bearer ${token}`}});
      const data = await response.json();
      if (data.success === false) {
        throw new Error(data.message);
      }
  
      return data;
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
};

export const authService = async (data, login) => {
    const typeAuth = login ? 'login-user' : 'create-user';
    try {
      const response = await fetch(`${url}/auth/${typeAuth}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const result = await response.json();
  
      return result;
    } catch (error) {
      console.error('Error al enviar los datos:', error.message);
      throw error;
    }
};