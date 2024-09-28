const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.querySelector("#sidebar");


function togglesidebar(){
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');

    closeAllSubMenus();
}



function toggleSubMenu(button){

    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubMenus();
        //The condition is checking if the submenu does not already have the show class,
        // meaning the submenu is currently hidden.
        // If the submenu is hidden, the closeAllSubMenus() function is called,
        // which hides any other open submenus.
    }

    button.nextElementSibling.classList.toggle("show");
    button.classList.toggle("rotate");

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
    }
 }

function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName('show')).forEach( ul => {
        ul.classList.remove("show");
        ul.previousElementSibling.classList.remove("rotate");
       })
}