export default class PopOver{
    constructor(){
        this.elmstr = '.c-popover';
        this.init();
        this.html = jQuery('html');
    }

    init() {
        var str_menu = '';
        var elmstr = this.elmstr;
        var hideHtmlPopover = ()=> {
            // $html.removeClass('dlg_has_showmn');
            this.html.removeClass(function (index, className) {
                return (className.match (/(^|\s)dlg_has_show\S+/g) || []).join(' ');
            });
        }
        
        var getAndShowPopover = function(_this, _classes) {
            var this_offset = _this.offset();
            var this_offset_postop = this_offset.top + _this.outerHeight() + 8;
            var this_offset_poscenter = 0;
            var this_offset_container_right = 0;
            if(jQuery('.bbs2-container').length) 
                this_offset_container_right = jQuery('.bbs2-container').offset().left + jQuery('.bbs2-container').outerWidth();
            else 
                this_offset_container_right = jQuery('body').outerWidth();
            // console.log(this_offset);
            if( typeof _classes !== "undefined") {  
                // console.log(str_menu , _classes);     
                if(str_menu !== _classes) {

                    // Popover cũ ẩn đi
                    jQuery(elmstr + '[data-dlgid="' + str_menu + '"]').fadeOut().addClass('is_hide').removeClass('is_show');


                    // Menu thay biến tạm mới
                    str_menu = _classes;

                }

                // show menu mới lên
                jQuery(elmstr + '[data-dlgid="' + str_menu + '"]').fadeIn().addClass("is_show").removeClass('is_hide');

                // Set top
                jQuery(elmstr + '[data-dlgid="' + str_menu + '"]').css('top', this_offset_postop);


                // add body class flag
                document.documentElement.classList.add('dlg_has_showmn');
                if(jQuery(elmstr + '[data-dlgid="' + str_menu + '"]').hasClass('c-popover__menuspbar')) {
                    document.documentElement.classList.add('dlg_has_showmn_menuspbar');
                }

                // center point
                // Chieu dai popover
                var _dlgwidth = jQuery(elmstr + '[data-dlgid="' + str_menu + '"]').outerWidth();
                this_offset_poscenter = this_offset.left + _this.outerWidth() / 2;

                if((this_offset_poscenter + _dlgwidth / 2) > this_offset_container_right) {
                    jQuery(elmstr + '[data-dlgid="' + str_menu + '"]').css('left', this_offset_poscenter - _dlgwidth + _this.outerWidth());
                } else {
                    jQuery(elmstr + '[data-dlgid="' + str_menu + '"]').css('left', this_offset_poscenter - _dlgwidth / 2);
                }

                // xác định bên trái
                if((this_offset_poscenter - _dlgwidth / 2) < 0) {
                    jQuery(elmstr + '[data-dlgid="' + str_menu + '"]').css('left', this_offset.left);
                }
                
                // Nếu là popover filter 
                if(
                    jQuery(elmstr + '[data-dlgid="' + str_menu + '"]').hasClass('c-popover--filter') ||
                    jQuery(elmstr + '[data-dlgid="' + str_menu + '"]').hasClass('c-popover--filter-bar_sort')
                ) {
                    jQuery(elmstr + '[data-dlgid="' + str_menu + '"]').css('left', this_offset.left + _this.outerWidth() - jQuery(elmstr + '[data-dlgid="' + str_menu + '"]').outerWidth() );

                }
            }
        }


        var _time_hide = 0;
        var _strtemp = '';

        // Point Enter
        jQuery('[data-popover]').mouseenter(
            function() {
                if(window.innerWidth < 767) return false;
                var _this = jQuery(this);
                var _classes = _this.data('popover');
                getAndShowPopover(_this, _classes);
                // console.log(_strtemp, _classes);
                clearInterval(_time_hide);
                if(_strtemp !== _classes) {
                    _strtemp = _classes
                }
        })
        .mouseleave(
            function() {
                if(window.innerWidth < 767) return false;
                var _this = jQuery(this);
                var _classes = _this.data('popover');
                _time_hide = setTimeout(function(){
                    jQuery(elmstr + '[data-dlgid="' + _classes + '"]').fadeOut().addClass('is_hide').removeClass('is_show');
                    hideHtmlPopover();
                }, 2000);

        })
        .click(
            function() {
                var _this = jQuery(this);
                var _classes = _this.data('popover');
                clearInterval(_time_hide);
                // console.log(jQuery(elmstr + '[data-dlgid="' + _classes + '"]').attr('class'));
                if(jQuery(elmstr + '[data-dlgid="' + _classes + '"]').hasClass('is_show')) {
                    // Show
                    jQuery(elmstr + '[data-dlgid="' + _classes + '"]').removeClass('is_show').addClass('is_hide')
                    hideHtmlPopover();
                } 
                else {
                    getAndShowPopover(_this, _classes);
                    // Hiển thị nó lên 
                }
        });


        // Popover Enter
        jQuery(elmstr + '[data-dlgid]').mouseenter(
            function() {
                clearInterval(_time_hide);
            })
        .mouseleave(
            function() {

                var _is_hide = false;

                if(jQuery(this).find("*").is(":focus") ) _is_hide = true;
                if(jQuery(this).hasClass('c-popover--filter')) _is_hide = true;

                // Dừng việc hiden
                if(_is_hide) return false;


                jQuery(this).fadeOut().addClass('is_hide').removeClass('is_show');
                hideHtmlPopover();
            })
        ;



        jQuery(elmstr + '__close').click(function(e){
            jQuery(this).closest(elmstr).addClass('is_hide').removeClass('is_show');
            hideHtmlPopover();
            // setCookie()
        });

        // Click nằm ngoài AREA thì ẩn đi
        jQuery(document).mouseup(function(e) {
            

            // console.log();
            try{
                var _ispopop_item = jQuery(e.target).attr('data-popover');
                
                // Dùng cái keytimehide này để once hiển thị chống overlap - hơi tệ tí
                if(!_ispopop_item) {
                    var container = jQuery(elmstr + '[data-dlgid]');
                    // if the target of the click isn't the container nor a descendant of the container
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        
                        container.fadeOut().addClass('is_hide').removeClass('is_show');
                        hideHtmlPopover();
                    }
                }

            } catch(e) {
                console.log(e);
            }

        });
    }
}