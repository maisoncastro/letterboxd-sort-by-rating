if (
  window.location.href.startsWith("https://letterboxd.com/actor/") ||
  window.location.href.startsWith("https://letterboxd.com/director/") ||
  window.location.href.startsWith("https://letterboxd.com/producer/") ||
  window.location.href.startsWith("https://letterboxd.com/writer/") ||
  window.location.href.startsWith("https://letterboxd.com/cinematography/")
) {
  if (!window.location.href.includes("/by/rating/")) {
    window.location.href += "/by/rating/";
  }
}
