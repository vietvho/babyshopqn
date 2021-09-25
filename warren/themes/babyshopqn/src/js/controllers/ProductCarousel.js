import Swiper from 'swiper/bundle';

export default class CarouselProductList {

    constructor(){
        this.init();
    }

    init() {
        let elm = jQuery(".c-carousel-product-list .swiper-container"),
            swiper = null,
            _arrtimeduration = null,
            _timeDelay = null,
            sliderOption = null
            ;
        elm.each(function(){
            var _this = jQuery(this);
            var _select = '[data-swiperid="' + _this.data('swiperid') + '"]', 
                swiper_nextid = '[data-swiper_nextid="' + _this.data('swiperid') + '"]', 
                swiper_previd = '[data-swiper_previd="' + _this.data('swiperid') + '"]',
                swiper_pagination = '[data-swiper_pagination="' + _this.data('swiperid') + '"]';
            
            

            // Ngẩu nhiên về thời gian delay
            _arrtimeduration = [4000, 4500, 3000, 5000, 5500, 3500]; 
            var nRandom = function(mn, mx) {  
                return Math.random() * (mx - mn) + mn;  
            }


            _timeDelay = _arrtimeduration[Math.floor(nRandom(1, 5))-1];


            sliderOption = {
                slidesPerView: 4,
                centeredSlides: false,
                loop: true,
            };


            // Nếu số lượng item nhỏ hơn 2 thì clone nó ra nhiều cái
            if(_this.find('.swiper-slide').length < 2) {
                _this.find('.swiper-slide:nth-child(1)').clone().appendTo( _this.find(".swiper-wrapper") );
                _this.find('.swiper-slide:nth-child(2)').clone().appendTo( _this.find(".swiper-wrapper") );
                _this.find('.swiper-slide:nth-child(3)').clone().appendTo( _this.find(".swiper-wrapper") );
            }

            swiper = new Swiper(_select, {
                slidesPerView: sliderOption.slidesPerView,
                spaceBetween: 32,
                loop: sliderOption.loop,
                autoplay: true,
                lazy: true,
                centeredSlides: sliderOption.centeredSlides,
                autoplay: {
                    delay: _timeDelay,
                },

                pagination: {
                    el: swiper_pagination,
                },
                navigation: {
                    nextEl: swiper_nextid,
                    prevEl: swiper_previd,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    640: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                },
                on: {
                    init: function () {
                    _this
                    },
                },
            });


            jQuery(this).hover(() => {
                swiper.autoplay.stop();
            }, () => {
                swiper.autoplay.start();
            });
        });
    }
}