import Swiper from 'swiper';
export default class HeroSlider {
    constructor(){
        this.init();
    }
    
    init() {
        new Swiper('.hero-slider .swiper-container', {
            slidesPerView: '1',
            spaceBetween: 0,
            autoplay: true,
            loop: true,
            lazy: true,
            navigation: {
                nextEl: '.bbs-slide-next',
                prevEl: '.bbs-slide-prev',
              },
          });
    }
}