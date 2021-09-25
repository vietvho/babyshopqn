export default class ProductSingleTabContent{
    constructor(){
        this.init();
        this.onResize();
    }

    init(){
        var _li = '';
        var _clsparent = '.c-product__tabinfo';

        // Once Load
        if(jQuery(_clsparent).length  && jQuery(_clsparent).hasClass('finishRender') === false) {

            // Render element
            jQuery(_clsparent + '-item').each(function(index){
                var _this = jQuery(this);
                var _class = (index === 0 ? "class=\"active\"" : "");
                (index === 0 ? _this.addClass('active') : "");
                _this.attr('data-id', index);
                _li += '<li data-id="' + index + '" ' + _class + '>' + _this.data('title') + '</li>';
                _this.before(jQuery('<span data-id="' + index + '" ' + _class + ' >' + _this.data('title') + '</span>'));
            });
            var _item = '<div class="c-product__tabinfo-head"><ul>' + _li + '</ul></div>';
            jQuery(_clsparent + '-list').before(jQuery(_item));


            // Scroll Move More View
            var outerOverflow = jQuery(_clsparent + "-head ul");
            jQuery(_clsparent + '-head ul li').click(function(){
                var _id = jQuery(this).data('id');
                jQuery(_clsparent + '-item').hide().removeClass('active');
                jQuery(_clsparent + '-item[data-id="' + _id + '"]').show().addClass('active');
                jQuery(_clsparent + '-head ul li').removeClass('active')
                jQuery(this).addClass('active');


                var i = jQuery(this),
                a = (i.offset().left, i.attr("data-tab"));

                var n = outerOverflow.scrollLeft() + (i.offset().left - outerOverflow.offset().left);
                outerOverflow.animate({
                    scrollLeft: n - (outerOverflow.width() / 2 - i.width() / 2 - 64)
                }, 300)

            });

            // actClick
            jQuery(_clsparent + '-list > span[data-id]').click(function(){
                var _this = jQuery(this);
                var _id = jQuery(this).data('id');
                jQuery(_clsparent + '-item[data-id="' + _id + '"]').slideToggle(function() {
                    if(jQuery(this).is(":visible")) {
                        _this.addClass('active');
                        // jQuery(_clsparent + '-head[data-id="' + _id + '"]').addClass('active');
                    } else {
                        _this.removeClass('active');
                    }
                });
            });
        }
    }

    onResize(){
        var _x_once_resize = false;
        window.addEventListener('resize', ()=>{

            if(jQuery(window).width() > 767 && _x_once_resize === false) {
                this._reset();
                _x_once_resize = true;
                // console.log(1,_x_once_resize)
            }
            if(jQuery(window).width() < 769 &&  _x_once_resize === true) {
                this._reset();
                _x_once_resize = false;
                // console.log(2,_x_once_classbody)
            }
        });
    }

    // Reset
    _reset () {
        jQuery('.c-product__tabinfo-head ul li').removeClass('active');
        jQuery('.c-product__tabinfo-head ul li[data-id="0"]').addClass('active');

        jQuery('.c-product__tabinfo-item').removeClass('active').hide();
        jQuery('.c-product__tabinfo-item[data-id="0"]').addClass('active').show();
        
        jQuery('.c-product__tabinfo-list > span[data-id]').removeClass('active');
        jQuery('.c-product__tabinfo-list > span[data-id="0"]').addClass('active');
    }
}