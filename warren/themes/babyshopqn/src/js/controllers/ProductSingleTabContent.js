export default class ProductSingleTabContent{
    constructor(){
        this.init();
        this.onResize();
    }

    init(){
        var _li = '';
        var _clsparent = '.c-product__tabinfo';

        // Once Load
        if($(_clsparent).length  && $(_clsparent).hasClass('finishRender') === false) {

            // Render element
            $(_clsparent + '-item').each(function(index){
                var _this = $(this);
                var _class = (index === 0 ? "class=\"active\"" : "");
                (index === 0 ? _this.addClass('active') : "");
                _this.attr('data-id', index);
                _li += '<li data-id="' + index + '" ' + _class + '>' + _this.data('title') + '</li>';
                _this.before($('<span data-id="' + index + '" ' + _class + ' >' + _this.data('title') + '</span>'));
            });
            var _item = '<div class="c-product__tabinfo-head"><ul>' + _li + '</ul></div>';
            $(_clsparent + '-list').before($(_item));


            // Scroll Move More View
            var outerOverflow = jQuery(_clsparent + "-head ul");
            $(_clsparent + '-head ul li').click(function(){
                var _id = $(this).data('id');
                $(_clsparent + '-item').hide().removeClass('active');
                $(_clsparent + '-item[data-id="' + _id + '"]').show().addClass('active');
                $(_clsparent + '-head ul li').removeClass('active')
                $(this).addClass('active');


                var i = $(this),
                a = (i.offset().left, i.attr("data-tab"));

                var n = outerOverflow.scrollLeft() + (i.offset().left - outerOverflow.offset().left);
                outerOverflow.animate({
                    scrollLeft: n - (outerOverflow.width() / 2 - i.width() / 2 - 64)
                }, 300)

            });

            // actClick
            $(_clsparent + '-list > span[data-id]').click(function(){
                var _this = $(this);
                var _id = $(this).data('id');
                $(_clsparent + '-item[data-id="' + _id + '"]').slideToggle(function() {
                    if($(this).is(":visible")) {
                        _this.addClass('active');
                        // $(_clsparent + '-head[data-id="' + _id + '"]').addClass('active');
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

            if($(window).width() > 767 && _x_once_resize === false) {
                _reset();
                _x_once_resize = true;
                // console.log(1,_x_once_resize)
            }
            if($(window).width() < 769 &&  _x_once_resize === true) {
                this._reset();
                _x_once_resize = false;
                // console.log(2,_x_once_classbody)
            }
        });
    }

    // Reset
    _reset () {
        $('.c-product__tabinfo-head ul li').removeClass('active');
        $('.c-product__tabinfo-head ul li[data-id="0"]').addClass('active');

        $('.c-product__tabinfo-item').removeClass('active').hide();
        $('.c-product__tabinfo-item[data-id="0"]').addClass('active').show();
        
        $('.c-product__tabinfo-list > span[data-id]').removeClass('active');
        $('.c-product__tabinfo-list > span[data-id="0"]').addClass('active');
    }
}