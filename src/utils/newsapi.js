export function getNews() {
  const apiKey = "c20174d44a15409d97e4315fe1bbbac0";
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching news:", error);
      throw error;
    });
}
export function filterArticles(articles) {
  return articles.map((article) => ({
    title: article.title,
    description: article.description,
    publishedAt: article.publishedAt,
    url: article.url,
    urlToImage: article.urlToImage,
  }));
}
