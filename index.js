let podcastButton = $(`#podcastBttn`)
let aboutButton = $(`#aboutBttn`)
let homePage = $("#home")
let aboutPage = $("#about");
let podcastPage = $("#podcast");
let homeButtn = document.querySelectorAll("#homeBttn")


let animatedButtn = $(".animator");

homeButtn.forEach(element => {
    $(element).on("click", () =>{

    podcastPage.hide(490);
    aboutPage.hide(490);

    homePage.show(500);
    animatedButtn.addClass("animated")
    })
});

animatedButtn.on("transitionend", function() {
    animatedButtn.removeClass("animated");
})



podcastButton.on("click", () => {
    homePage.hide(490);
    aboutPage.hide(490);

    podcastPage.show(500);
    animatedButtn.addClass("animated")


})

aboutButton.on("click", () => {
    homePage.hide(490);
    podcastPage.hide(490);

    aboutPage.show(500);

    animatedButtn.addClass("animated")
})


