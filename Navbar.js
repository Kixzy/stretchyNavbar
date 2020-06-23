const navTrigger = document.querySelector(".nav-trigger");
const nav = document.querySelector(".stretchy-nav")
const aHref = document.querySelector(".links").children;



for (let i = 0; i < aHref.length; i++) {
    aHref[i].addEventListener("click", function () {
        //console.log(this.querySelector("a"))
        // remove class active from all links
        for (let j = 0; j < aHref.length; j++) {
            aHref[j].querySelector("a").classList.remove("active");
        }

        //add class active to clicked link
        this.querySelector("a").classList.add("active");
    })
}

navTrigger.addEventListener("click", function () {
    nav.classList.toggle("nav-is-visible");
})

//close navigation when click to anywhere outside of navigation

window.onclick = function (event) {
    if (event.target != navTrigger && event.target != navTrigger.querySelector("span")) {
        nav.classList.remove("nav-is-visible");
    }
}