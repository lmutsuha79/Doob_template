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
    let hiden_gallery_items = document.querySelectorAll(".item-hidden");

    if (is_gallery_open == 0) {
        hiden_gallery_items.forEach(function (item) {
            item.style.display = 'block';
        });

        open_gallery.textContent = "See less";
        is_gallery_open = 1;
    }
    else {
        hiden_gallery_items.forEach(function (item) {
            item.style.display = 'none';
        });

        open_gallery.textContent = "See More";

        is_gallery_open = 0;
    }



}



// ################################################
//                   Slider

const next_btn = document.getElementById('btn_left');
const prev_btn = document.getElementById('btn_right');
let slider_container = document.querySelector('.slider_container');

let slide_items = document.querySelectorAll('.slide_item');
//  cloning 
// let first_clon = slide_items[0].cloneNode(true);
// let last_clon = slide_items[slide_items.length - 1].cloneNode(true);

// slider_container.append(first_clon);
// slider_container.prepend(last_clon);

function make_slider() {
    console.log('maked');
    let cont_size = document.querySelector('#blog .container').clientWidth - 40;
    // 40 psq padding of container;
    if (cont_size >= 920) {
        // alert("large")
        let item_width = (cont_size - 120) / 3;

        slide_items.forEach(item => {
            console.log('item width ok');
            item.style.width = `${item_width}px`;
            // item.style.width = 'calc((${cont_size}px - 120px)/3))';
        });
        //  to make item 1 in positon 1 in loading
        let wrap_default = item_width * 3 + 120;

        slider_container.style.left = `${-wrap_default}px`;
        // return 3;
        let obj = {

            num_of_items: 3,
            wrap_default: wrap_default,

        }

        return obj;



    }
    else if (cont_size > 500 && cont_size < 920) {
        // alert("med")
        let item_width = (cont_size - 80) / 2;
        slide_items.forEach(item => {

            item.style.width = `${item_width}px`;
        });
        //  to make item 1 in positon 1 in loading

        let wrap_default = item_width * 3 + 120;

        slider_container.style.left = `${-wrap_default}px`;
        let obj = {

            num_of_items: 2,
            wrap_default: wrap_default,

        }

        return obj;



    }
    else {

        let item_width = (cont_size - 40) / 1;
        slide_items.forEach(item => {

            item.style.width = `${item_width}px`;
        });
        //  to make item 1 in positon 1 in loading

        let wrap_default = item_width * 3 + 120;

        slider_container.style.left = `${-wrap_default}px`;
        let obj = {

            num_of_items: 1,
            wrap_default: wrap_default,

        }

        return obj;


    }


}
window.onload = make_slider;
window.onresize = make_slider;
let index = 1;
let stop_index;
change_slide = () => {
    let item_width = slide_items[0].clientWidth;
    // let item_width = make_slider();
    // let num_of_items = make_slider()[num_of_items];
    let num_of_items = make_slider().num_of_items;
    let wrap_default = make_slider().wrap_default;
    // console.log('wrap default ======', make_slider().wrap_default);
    let slide_wrap;

    if (num_of_items == 1) {
        slide_wrap = -item_width * num_of_items - 40;
        // slide_wrap = -wrap_default;
        stop_index = 7;

    }
    else if (num_of_items == 2) {
        slide_wrap = -item_width * num_of_items - 80;
        // slide_wrap = -wrap_default;

        stop_index = 4;



    }
    else {
        slide_wrap = -item_width * num_of_items - 120;
        // slide_wrap = -wrap_default;

        stop_index = 3;



    }
    slider_container.style.transition = `0.7s`;

    // because we dont forgget the default slide wrap ;
    slider_container.style.left = `${(-wrap_default) + (slide_wrap * index)}px`;
    // wait tell transtion end than check the condition;
    index++;

    slider_container.addEventListener('transitionend', () => {

        if (index >= stop_index) {
            slider_container.style.transition = 'none';
            slider_container.style.left = `${-wrap_default}px`;
            index = 1;


        }
    });





}
let drag_start, drag_end;
next_btn.onclick = change_slide;
//  for pc
slider_container.addEventListener('dragstart', (s) => {
    drag_start = s.clientX;
    console.log(`drag start ${drag_start}`)
});
slider_container.addEventListener('dragend', (e) => {
    drag_end = e.clientX;
    console.log(`drag end ${drag_end}`);
    if (drag_end - drag_start < 0) {
        change_slide();
    }

});
// four touche devices
slider_container.addEventListener('touchstart', (e) => {
    drag_start = e.touches[0].clientX;
    console.log('start  ', drag_start);
});

slider_container.addEventListener('touchend', (e) => {
    drag_end = e.changedTouches[0].clientX;
    console.log('end', drag_end);
    if (drag_end - drag_start < 0) {
        console.log('ok')
        change_slide();
    };

});


// slider_container.addEventListener('ondragleave', (t) => {

// });


// change_slide();





