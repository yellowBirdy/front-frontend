var wireUpNav = function () {
	var navItems = document.querySelectorAll("header ul.nav li");
	var sheetLink = document.querySelector("link#layout");

	navItems.forEach(function (option) {
		option.addEventListener("click", function (event) {
			// "navigate" by repleacing the sheet
			var sheetName = event.target.attributes["name"].value;
			sheetLink.href = sheetLink.href.replace(/\w+\.css/, sheetName)
			// "move" the active class
			var oldActive = document.querySelector("ul.nav li.active");
			oldActive.classList.remove("active");
			event.target.classList.add("active");

		})
	})
}


var wireUpTiles = function () {

	var tileImgs = document.querySelectorAll('.gallery__pic');
	tileImgs.forEach(function (pic) {
		pic.addEventListener('click', function (event) {
			var bigpic = document.querySelector(".gallery img.bigpic-pic");
			bigpic.src = event.target.src;

			//selected live during event handling,
			var tile = event.target.parentElement;
			var activeTile = document.querySelector(".gallery__tile--active");

			activeTile.classList.remove("gallery__tile--active");
			tile.classList.add("gallery__tile--active");


		})
	})
}
//TODO: use event capturing
document.addEventListener("DOMContentLoaded", function () {
	wireUpNav();
	wireUpTiles();
})