import Swiper from 'swiper';

export default class ProductSlider{
    constructor(){
        this.init();
    }

    init(){
        if ($(document).width() > 767){
            let galleryThumbs = new Swiper('.c-product__slider .product-gallery', {
                spaceBetween: 30,
                slidesPerView: 3,
                preloadImages: false,
                lazy: true,
                loop: true,
                loopedSlides: 4,
            });


            let galleryTop = new Swiper('.c-product__slider .product-image', {
                spaceBetween: 0,
                autoplay:true,
                slidesPerView: 1,
                preloadImages: false,
                lazy: true,
                loop: true,
                loopedSlides: 4,
                preventClicks: false,
                preventClicksPropagation: false,
                // simulateTouch: false,
                thumbs: {
                    swiper: galleryThumbs
                },
                on: {
                    init: function () {
                    productZoom.refresh();
                    },
                },
            });

            // Hover pause
            $('.c-product__slider .product-image').hover(function() {
                galleryTop.autoplay.stop();
            }, function() {
                galleryTop.autoplay.start();
            });
        }
        else {
            let galleryTop = new Swiper('.c-product__slider--mobile .product-image', {
                spaceBetween: 0,
                autoplay:true,
                slidesPerView: 1,
                preloadImages: false,
                lazy: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });
            
            // Hover pause
            $('.c-product__slider .product-image').hover(function() {
                galleryTop.autoplay.stop();
            }, function() {
                galleryTop.autoplay.start();
            });
        }

    }
}