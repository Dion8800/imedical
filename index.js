
function openMenu() {
  var menu = document.getElementById("mobile-menu");

  if(menu.classList.contains("hidden")){
    menu.classList.remove("hidden");
    document.querySelector("section").classList.add("hidden");
     document.querySelector("footer").classList.add("hidden");
    
     document.getElementById("menu-btn").classList.add("hidden");
     document.getElementById("menu-x").classList.remove("hidden");
  }else {
    menu.classList.add("hidden");
    document.querySelector("section").classList.remove("hidden");
     document.querySelector("footer").classList.remove("hidden");

     document.getElementById("menu-btn").classList.remove("hidden");
     document.getElementById("menu-x").classList.add("hidden");
  }
}