/*
1/ in mobile nav version links note aligne corectly == ok
2/ in home secion red button and other links is so colose = ok
3/ in mobile version add gap when grid transorm to  = ok
4/ in mobile version when click on lik show section and hide the nav bars == ok
4.1/ fix bug hear when nav is on normal size and click on a links = ok
5/ add shadow to nav when scolling down == ok
*/


// mobile nav bar js Start
let nav_mb_button = document.getElementById("mb_nav_but");
let other_nav_items = document.querySelector(".other_nav_items");
let mb_nav_status = 0;
let main_nav_bar_container = document.querySelector("#main_nav .container");
// to show the mobile nav bar
nav_mb_button.onclick = mobile_nav;
function mobile_nav() {



    if (mb_nav_status == 0) {
        nav_mb_button.classList.add("span_nav_on");

        mb_nav_status = 1;
        other_nav_items.style.height = "100vh";

        main_nav_bar_container.style.height = "100vh";

    } else {
        nav_mb_button.classList.remove("span_nav_on");
        other_nav_items.style.height = "0px";


        mb_nav_status = 0;
        main_nav_bar_container.style.height = "70px";


    }
}
// when click on any nav links nav close to alwo the user show content
let nav_links = document.querySelectorAll('.other_nav_items .nav_links ul li a');
nav_links.forEach(function (link) {
    link.onclick = function () {
        // to avoid problem of (hen click on link and the nav)
        // is in normale state (size);
        // fix this (bug)
        let screan_size_ok = window.matchMedia('(max-width: 992px)').matches;
        if (screan_size_ok == true) {
            mobile_nav();
        }
    };
}, this);



// add shadow to nav when scroling down
let main_nav = document.getElementById('main_nav');
window.addEventListener('scroll', shadow_to_nav);
function shadow_to_nav() {
    let scrolY_position = window.scrollY;
    if (scrolY_position == 0) {
        main_nav.classList.remove('shadow_to_nav');
    }
    else {
        main_nav.classList.add('shadow_to_nav');


    }
}


// mobile nav bar js End

// ########################################
// open totaly the gallery when click

let open_gallery = document.querySelector(".gallery_see");
let gallery = document.querySelector(".portfolio_gallery");
open_gallery.onclick = show_gallery;
let is_gallery_open = 0;
function show_gallery() {
    if (is_gallery_open == 0) {
        gallery.style.height = 'calc(220px * 10 + 25px * 3)';
        open_gallery.textContent = "See less";
        is_gallery_open = 1;
    }
    else {
        gallery.style.height = 'calc(220px * 2 + 25px*2)';
        open_gallery.textContent = "See More";

        is_gallery_open = 0;
    }

}

