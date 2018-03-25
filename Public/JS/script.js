// tabbed panels

// declare globals to hold all the links and all the panel elements
var tabLinks;
var tabPanels;

window.onload = function () {
    // when the page loads, grab the li elements
    tabLinks = document.getElementById("NavigationPane").getElementsByTagName("button");
    tabPanels = document.getElementById("mainTab").getElementsByTagName("div");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].onclick = function () {
            displayPanel(this);
            return false;
        }
        tabLinks[i].onfocus = function () {
            displayPanel(this);
            return false;
        }
    }
}
function displayPanel(tabToActivate) {
    // go through the li elements
    for (var i = 0; i < tabLinks.length; i++) {
        if (tabLinks[i] == tabToActivate) {
            tabLinks[i].classList.add("active");

            tabPanels[i].style.display = "block";
        } else {
            tabLinks[i].classList.remove("active");

            tabPanels[i].style.display = "none";
        }
    }
}
// to open form 
function openForm() {

}