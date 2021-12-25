export default class MegaMenu {
    constructor(){
        this.init();
        this.document = jQuery(document);
        this.html = jQuery('html');
        this.headerMainEl = jQuery('.header--main');
        this.megaEls = jQuery('.c-megamenu');
    }

    init () {
        let _ninside = 0;
        let doc = jQuery(document);

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
                // Update liên tục nếu là PC
                if(typeof classes === 'undefined') {
                    megaEls.addClass('is-hide').removeClass('is-show');
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

                    megaEls.removeClass('is-hide').addClass('is-show');
                    this.megaEls.filters('[data-class="' + _classes + '"]');

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
                    // Ẩn menu sau 2 giây -> hủy nếu ở trên phân vùng mega menu
                    megaEls.addClass('is-hide').removeClass('is-show');
                    this.html.removeClass('megamn_has_showmn');
                }, 1000);
            }
        );

        doc.on("mouseenter","html.megamn_has_showmn .c-megamenu",
            function() {
                clearInterval(m_interval);
            }
        ); 

        doc.on("mouseleave","html.megamn_has_showmn .c-megamenu", 
            ()=> {
                n_overmouse--;
                
                megaEls.addClass('is-hide').removeClass('is-show');
                this.html.removeClass('megamn_has_showmn');
            }
        );

        jQuery( "#menu-main>li.menu-item" ).click(
            (e) =>{
                let _this = jQuery(this);
                let _classes = _this.data('id_nam');
                const currentMega = this.megaEls.filters('[data-class="' + _classes + '"]');
                clearInterval(m_interval);

                if(currentMega.hasClass("is-show")) {
                    megaEls.addClass('is-hide').removeClass('is-show');
                    this.html.removeClass('megamn_has_showmn');
                } else {
                    megaEls.addClass('is-hide').removeClass('is-show');
                    currentMega.addClass('is-show').removeClass('is-hide');
                }
            }
        );

        // Phát hiện và remove megamenu nếu scroll 
        jQuery('.header .nav-slider').scroll( (event) => {
            // Do something
            if(this.html.hasClass('megamn_finish_scroll')) {
                megaEls.addClass('is-hide').removeClass('is-show');
                this.html.removeClass('megamn_has_showmn');
                this.html.removeClass('megamn_finish_scroll');
            }
        });

    }

}