/**For Yumburger menu in Android */
function toggleMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('show');
}
    // 404.js

// Check if the current page exists
function checkPageExistence() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 404) {
                // Redirect to the 404 page
                window.location.href = '/404.html';
            }
        }
    };
    // Use the current page URL for the check
    xhttp.open('GET', window.location.href, true);
    xhttp.send();
}

// Run the check when the page loads
window.onload = checkPageExistence;
