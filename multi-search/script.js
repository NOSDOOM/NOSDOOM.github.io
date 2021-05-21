$( document ).ready(function() {
  $("#search-input").focus();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    var searchVal = $("#search-input")[0].value.toLowerCase().replaceAll(" ", "%20");
    var malLink = "https://myanimelist.net/manga.php?cat=manga&q=" + searchVal + "&type=0&score=0&status=0&mid=0&sm=0&sd=0&sy=0&em=0&ed=0&ey=0&c%5B%5D=a&c%5B%5D=b&c%5B%5D=c&c%5B%5D=f&gx=0#recsearch";
    var aniListLink = "https://anilist.co/search/manga?search=" + searchVal + "#recsearch";
    var animePlanetLink = "https://www.anime-planet.com/manga/all?name=" + searchVal + "#recsearch";
    window.open(malLink);
    window.open(aniListLink);
    window.open(animePlanetLink);
  }
});