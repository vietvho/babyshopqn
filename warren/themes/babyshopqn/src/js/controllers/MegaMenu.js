export default class MegaMenu {
    constructor(){
        this.init();
    }

    init () {
        let _ninside = 0;

        let isInside = function(_this) {
            if(_this.parent('.menu-item').length) {
                _ninside
            } 
            if(_this.parent('.menu-item').length) {
                _ninside
            } 
        }
        // jQuery('#menu-main>li>a').hover(get_position);
        let n_overmouse = 0;
        let str_menu = '';

        let outerOverflow = jQuery(".header .nav-slider");
        $( "#menu-main>li.menu-item" ).mouseenter(
            function() {
                // Hover again => auto clear Interval Timeout
                clearInterval(m_interval);

                // xác định tọa độ đối tượng
                let _this = $(this);
                n_overmouse = 1;
               
                let classes = $(this).data('id_nam');
                // console.log(classes);
                // Update liên tục nếu là PC
                if(typeof classes === 'undefined') {
                    $('.c_megamenu').addClass('is_hide').removeClass('is_show');
                    $html.removeClass('megamn_has_showmn');
                }
                


                // Scroll Move by position
                let i = $(this),
                a = (i.offset().left, i.attr("menu-item"));

                let n = outerOverflow.scrollLeft() + (i.offset().left - outerOverflow.offset().left);
                outerOverflow.animate({
                    scrollLeft: n - (outerOverflow.width() / 2 - i.width() / 2 )
                }, 100, function() {
                    // Animation complete.

                    this.getAndShowMenu(_this, classes);
                    setTimeout(function(){
                    $html.addClass('megamn_finish_scroll') 
                    }, 1000);

                });


                    
            }
        );

        let m_interval = 0;
        $document.on("mouseleave","html.megamn_has_showmn .header--main",
            function() {
                m_interval = setTimeout(function() {
                    n_overmouse--;
                    // console.log(n_overmouse);
                    
                    // Ẩn menu sau 2 giây -> hủy nếu ở trên phân vùng mega menu
                    $('.c_megamenu').addClass('is_hide').removeClass('is_show');
                    $html.removeClass('megamn_has_showmn');
                }, 1000);
            }
        );

        $document.on("mouseenter","html.megamn_has_showmn .c_megamenu",
            function() {
                clearInterval(m_interval);
            }
        ); 

        $document.on("mouseleave","html.megamn_has_showmn .c_megamenu", 
            function() {
                n_overmouse--;
                // console.log(n_overmouse);
                
                $('.c_megamenu').addClass('is_hide').removeClass('is_show');
                $html.removeClass('megamn_has_showmn');
            }
        );

        $( "#menu-main>li.menu-item" ).click(
            function(e) {
                let _this = $(this);
                let _classes = _this.data('id_nam');
                let _is_megavisible = $('.c_megamenu[data-class="' + _classes + '"]').hasClass("is_show");

                clearInterval(m_interval);
                if(_is_megavisible) {
                    $('.c_megamenu').addClass('is_hide').removeClass('is_show');
                    $html.removeClass('megamn_has_showmn');
                } else {
                    this.getAndShowMenu(_this, _classes);
                }
            }
        );

        // Phát hiện và remove megamenu nếu scroll 
        $('.header .nav-slider').scroll(function (event) {
            // Do something
            if($html.hasClass('megamn_finish_scroll')) {
                $('.c_megamenu').addClass('is_hide').removeClass('is_show');
                $html.removeClass('megamn_has_showmn');
                $html.removeClass('megamn_finish_scroll');
            }
        });

    }

    getAndShowMenu (_this, _classes) {
        let this_offset = _this.offset();
        let this_offset_poscenter = this_offset.left + _this.outerWidth() / 2 - 8;
        let hmain_offset = $('.header--main').offset();
        let hmain_offset_postop = hmain_offset.top + $('.header--main').outerHeight();

        if( typeof _classes !== "undefined") {

            if(str_menu !== _classes) {
                // Menu cũ ẩn đi
                $('.c_megamenu[data-class="' + str_menu + '"]').addClass('is_hide').removeClass('is_show');
                // Menu thay biến tạm mới
                str_menu = _classes;
            }
            // show menu mới lên
            $('.c_megamenu[data-class="' + str_menu + '"]').addClass("is_show").removeClass('is_hide');

            // set toa do
            $('.c_megamenu[data-class="' + str_menu + '"]').css('top', hmain_offset_postop);

            // center point
            $('.c_megamenu[data-class="' + str_menu + '"] .c_megamenu__point').css('left', this_offset_poscenter);

            // add body class flag
            $html.addClass('megamn_has_showmn');
        }

        
    }
}