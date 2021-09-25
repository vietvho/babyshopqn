export default class MegaMenu {
    constructor(){
        this.init();
        this.document = jQuery(document);
        this.html = jQuery('html');
    }

    init () {
        let _ninside = 0;
        let doc = jQuery(document);
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
        jQuery( "#menu-main>li.menu-item" ).mouseenter(
            function() {
                // Hover again => auto clear Interval Timeout
                clearInterval(m_interval);
                // xác định tọa độ đối tượng
                let _this = jQuery(this);
                n_overmouse = 1;
               
                let classes = jQuery(this).data('id_nam');
                // console.log(classes);
                // Update liên tục nếu là PC
                if(typeof classes === 'undefined') {
                    jQuery('.c_megamenu').addClass('is_hide').removeClass('is_show');
                    document.documentElement.classList.remove('megamn_has_showmn');
                }
                


                // Scroll Move by position
                let i = jQuery(this),
                a = (i.offset().left, i.attr("menu-item"));

                let n = outerOverflow.scrollLeft() + (i.offset().left - outerOverflow.offset().left);
                outerOverflow.animate({
                    scrollLeft: n - (outerOverflow.width() / 2 - i.width() / 2 )
                }, 100, ()=> {
                    // Animation complete.

                    this.getAndShowMenu(_this, classes);
                    setTimeout(function(){
                    document.documentElement.addClass('megamn_finish_scroll') 
                    }, 1000);

                });


                    
            }
        );

        let m_interval = 0;
        doc.on("mouseleave","html.megamn_has_showmn .header--main",
            () => {
                m_interval = setTimeout(()=> {
                    n_overmouse--;
                    // console.log(n_overmouse);
                    
                    // Ẩn menu sau 2 giây -> hủy nếu ở trên phân vùng mega menu
                    jQuery('.c_megamenu').addClass('is_hide').removeClass('is_show');
                    this.html.removeClass('megamn_has_showmn');
                }, 1000);
            }
        );

        doc.on("mouseenter","html.megamn_has_showmn .c_megamenu",
            function() {
                clearInterval(m_interval);
            }
        ); 

        doc.on("mouseleave","html.megamn_has_showmn .c_megamenu", 
            ()=> {
                n_overmouse--;
                // console.log(n_overmouse);
                
                jQuery('.c_megamenu').addClass('is_hide').removeClass('is_show');
                this.html.removeClass('megamn_has_showmn');
            }
        );

        jQuery( "#menu-main>li.menu-item" ).click(
            (e) =>{
                let _this = jQuery(this);
                let _classes = _this.data('id_nam');
                let _is_megavisible = jQuery('.c_megamenu[data-class="' + _classes + '"]').hasClass("is_show");

                clearInterval(m_interval);
                if(_is_megavisible) {
                    jQuery('.c_megamenu').addClass('is_hide').removeClass('is_show');
                    this.html.removeClass('megamn_has_showmn');
                } else {
                    this.getAndShowMenu(_this, _classes);
                }
            }
        );

        // Phát hiện và remove megamenu nếu scroll 
        jQuery('.header .nav-slider').scroll( (event) => {
            // Do something
            if(this.html.hasClass('megamn_finish_scroll')) {
                jQuery('.c_megamenu').addClass('is_hide').removeClass('is_show');
                this.html.removeClass('megamn_has_showmn');
                this.html.removeClass('megamn_finish_scroll');
            }
        });

    }

    getAndShowMenu (_this, _classes) {
        let this_offset = _this.offset();
        let this_offset_poscenter = this_offset.left + _this.outerWidth() / 2 - 8;
        let hmain_offset = jQuery('.header--main').offset();
        let hmain_offset_postop = hmain_offset.top + jQuery('.header--main').outerHeight();

        if( typeof _classes !== "undefined") {

            if(str_menu !== _classes) {
                // Menu cũ ẩn đi
                jQuery('.c_megamenu[data-class="' + str_menu + '"]').addClass('is_hide').removeClass('is_show');
                // Menu thay biến tạm mới
                str_menu = _classes;
            }
            // show menu mới lên
            jQuery('.c_megamenu[data-class="' + str_menu + '"]').addClass("is_show").removeClass('is_hide');

            // set toa do
            jQuery('.c_megamenu[data-class="' + str_menu + '"]').css('top', hmain_offset_postop);

            // center point
            jQuery('.c_megamenu[data-class="' + str_menu + '"] .c_megamenu__point').css('left', this_offset_poscenter);

            // add body class flag
            this.html.addClass('megamn_has_showmn');
        }

        
    }
}