const MenuToggle = document.getElementById("toggle");
const NavRes = document.getElementById("nav-res");
const close = document.getElementById("close");
const Header = document.getElementById("header");

window.addEventListener("scroll", () => {
     if(scrollY> 100){
          Header.classList.add("shrink");
     }else{
          Header.classList.remove("shrink")
     }
})

MenuToggle.addEventListener("click" , () => {
     NavRes.classList.add("show");
})

close.addEventListener("click" , () => {
     NavRes.classList.remove("show");
} )

$(document).ready(function () {
     $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          dots: false,
          autoplay: true,
          responsiveClass: true,
          responsive: {
               0: {
                    items: 1,
                    nav: true,
                    loop: true,
               },
               640: {
                    items: 2,
                    nav: true,
                    loop: true,
               },
               1024: {
                    items: 3,
                    nav: true,
                    loop: true,
               },
               1200: {
                    items: 4,
                    nav: true,
                    loop: true,
               }
          }
      })
});

