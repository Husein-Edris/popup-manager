/* 
* Show Elementor Popup every 3 days 
*/
function resetPopupCounter() {
	const popupLocalStorage = JSON.parse(localStorage.getItem("elementor")) || {};
	popupLocalStorage.popup_8074_times = "0";
	localStorage.setItem("elementor", JSON.stringify(popupLocalStorage));
}

document.addEventListener("click", function(e) {
	const target = e.target.closest("#elementor-popup-modal-8074 .dialog-close-button");
	if (target) {
		createCookie();
	}
});

// Cookie erstellen
function createCookie() {
	const expirationDate = new Date();
	expirationDate.setTime(expirationDate.getTime() + (3 * 24 * 60 * 60 * 1000)); // 3 days
	document.cookie = "popupcookie=yes; expires=" + expirationDate.toUTCString() + "; path=/";
}

//Check if cookie exists
function checkCookie() {
	if (!document.cookie.includes("popupcookie")) {
		resetPopupCounter();
	}
}

checkCookie();
	
