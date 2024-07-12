let url = window.location.href;

if (
  url.startsWith("https://letterboxd.com/actor/") ||
  url.startsWith("https://letterboxd.com/director/") ||
  url.startsWith("https://letterboxd.com/producer/") ||
  url.startsWith("https://letterboxd.com/writer/") ||
  url.startsWith("https://letterboxd.com/cinematography/") ||
  /^https:\/\/letterboxd\.com\/[^\/]+\/list\/[^\/]+/.test(url)
) {
  if (!url.includes("/by/rating/")) {
    window.location.href = url + (url.endsWith('/') ? "by/rating/" : "/by/rating/");
  }
}