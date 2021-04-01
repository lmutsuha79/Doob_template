// mobile nav bar js Start
let nav_mb_button = document.getElementById("mb_nav_but");
let other_nav_items = document.querySelector(".other_nav_items");
let mb_nav_status = 0;
let main_nav_bar_container = document.querySelector("#main_nav .container");

nav_mb_button.onclick = function () {
    if (mb_nav_status == 0) {
        nav_mb_button.classList.add("span_nav_on");
        // add a calass which can make the item display none

        // other_nav_items.classList.add("mb_nav_is_open");
        mb_nav_status = 1;
        other_nav_items.style.height = "100vh";

        main_nav_bar_container.style.height = "100vh";

    } else {
        nav_mb_button.classList.remove("span_nav_on");
        other_nav_items.style.height = "0px";

        // remove a calass which can make the item display none

        // other_nav_items.classList.remove("mb_nav_is_open");
        mb_nav_status = 0;
        main_nav_bar_container.style.height = "70px";


    }
}
// mobile nav bar js End
