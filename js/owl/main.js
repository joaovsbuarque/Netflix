$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function ToggleVideo(){
    const botao = document.querySelector('.video');
    const video = document.querySelector('video');
    video.classList.toggle('active');

    video.currentTime = 0;
    video.pause();

}

