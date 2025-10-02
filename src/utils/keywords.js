const stopwords = new Set([
  "a",
  "an",
  "the",
  "and",
  "or",
  "but",
  "is",
  "are",
  "was",
  "were",
  "will",
  "of",
  "to",
  "in",
  "on",
  "with",
  "has",
  "have",
  "after",
  "for",
  "by",
  "at",
  "it",
  "its",
  "as",
  "this",
  "that",
  "be",
  "from",
  "about",
  "into",
  "over",
  "up",
  "down",
  "so",
]);

export const extractKeywords = (text, max = 10) => {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter((word) => word && !stopwords.has(word));

  const freq = {};
  words.forEach((word) => {
    freq[word] = (freq[word] || 0) + 1;
  });

  const sorted = Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .map(([word]) => word);

  return sorted.slice(0, max);
};

export const formatKeywords = (keywords, showLimit = 2) => {
  const shown = keywords.slice(0, showLimit);
  const remaining = keywords.length - showLimit;

  if (remaining > 0) {
    return ` ${shown.join(", ")}, and ${remaining} other${
      remaining > 1 ? "s" : ""
    }`;
  } else {
    return ` No key words for now${shown.join(", ")}`;
  }
};
export const getFirstKeywordsFromArticles = (articles) => {
  return articles.map((article) => {
    const combinedText = `${article.title} ${article.description || ""}`;
    const keywords = extractKeywords(combinedText);
    return keywords.length > 0 ? keywords[0] : null;
  });
};
