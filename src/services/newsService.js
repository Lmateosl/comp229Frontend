// src/services/newsService.js
export const fetchNews = async (query = '', category = '', pageSize = 10) => {
    // Mocked response simulating a successful API call
    const mockArticles = [
      {
        title: 'Breaking News 1',
        description: 'Description of Breaking News 1',
        url: 'https://example.com'
      },
      {
        title: 'Breaking News 2',
        description: 'Description of Breaking News 2',
        url: 'https://example.com'
      },
      {
        title: 'Breaking News 3',
        description: 'Description of Breaking News 3',
        url: 'https://example.com'
      }
    ];
    return new Promise(resolve => setTimeout(() => resolve(mockArticles), 1000));
  };
  