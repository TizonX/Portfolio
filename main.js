$(document).ready(function()
{
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass: 'dots',
    });

    let hamburger = document.getElementById("hamburger");
    let times = document.getElementById("timesT");
    // let mobileNav = document.querySelector(".mobile-nav");
    let hamMenu = document.querySelector('.div');
    hamburger.addEventListener("click", ()=>
    {
        hamMenu.classList.remove("div");
        hamMenu.classList.add("hamburger-menu");

        // console.log("click");
    });


    times.addEventListener("click", ()=>
    {
        hamMenu.classList.add("div");
        hamMenu.classList.remove("hamburger-menu");
        // mobileNav.classList.remove("open");
    });
});