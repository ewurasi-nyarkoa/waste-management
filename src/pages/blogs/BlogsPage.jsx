import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BlogsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGNews = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_GNEWS_BASE_URL, {
        params: {
          q: 'green development',
          lang: 'en',
          token: import.meta.env.VITE_GNEWS_API_KEY,
        },
      });

      setArticles(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GNews articles:', error);
      setError('Failed to fetch news articles.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGNews();
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600 text-center">{error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sustainable Development News</h1>
      {articles.length === 0 ? (
        <div className="text-center">No articles found.</div>
      ) : (
        articles.map((article, index) => (
          <div key={index} className="mb-6 border p-4 rounded shadow-md bg-white">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <p className="text-gray-700">{article.description}</p>
            {article.url && (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Read More
              </a>
            )}
            {article.image && (
              <img src={article.image} alt={article.title} className="mt-2 w-full h-auto rounded" />
            )}
            <p className="text-sm text-gray-500 mt-1">{`Published: ${new Date(article.published).toLocaleString()}`}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogsPage;
