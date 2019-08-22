var wireUpNav = function () {
	var navItems = document.querySelectorAll(".menu__item");
	var sheetLink = document.querySelector("link#layout");

	navItems.forEach(function (option) {
		option.addEventListener("click", function (event) {
			// "navigate" by repleacing the sheet
			var sheetName = event.target.attributes["name"].value;
			sheetLink.href = sheetLink.href.replace(/\w+\.css/, sheetName)
			// "move" the active class 
			//TODO: move from and to in all menus
			var oldActive = document.querySelector(".menu__item--active");
			oldActive.classList.remove("menu__item--active");
			event.target.classList.add("menu__item--active");

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