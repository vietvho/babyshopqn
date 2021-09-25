@import './src/js/lib/cookie.js' 
@import './src/js/lib/swiper-bundle.min.js' 
@import './src/js/lib/smooth_style.js' 
@import './src/js/lib/images.js' 
(function($) {

    'use strict'

    /************************************************************
    * Predefined letiables
    *************************************************************/
    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $body = $('body');



    function ChangeUrl(page, url) {
        if (typeof (history.pushState) != "undefined") {
            var obj = { Page: page, Url: url };
            history.pushState(obj, obj.Page, obj.Url);
        } else {
            alert("Browser does not support HTML5.");
        }
    }
    function loadSVG(){
        jQuery('img').filter(function() {
            return this.src.match(/.*\.svg$/);
        }).each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
    }
    var navSlider = function(){
        // var swiper = new Swiper('.nav-slider #menu-main', {
        //     slidesPerView: 'auto',
        //     spaceBetween: 10,
        //     breakpoints: {
        //         992: {
        //           spaceBetween: 18,
        //         },
        //       }
           
        //   });
    }
    var initSetup = function(){
        $body.addClass('is-init');
        
        
    }
    
    var heroSlider = function(){
        var swiper = new Swiper('.hero-slider .swiper-container', {
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
    var carouselProductList = function(){


        var elm = jQuery(".c-carousel-product-list .swiper-container"),
            swiper = null,
            _arrtimeduration = null,
            _timeDelay = null,
            sliderOption = null
            ;
        elm.each(function(){
            var _this = $(this);
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
            // if(_this.find('.swiper-slide').length < 4) {
            //     sliderOption.slidesPerView = _this.find('.swiper-slide').length;
            //     sliderOption.centeredSlides = true;
            //     sliderOption.loop = false;
            // }

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


            $(this).hover(function() {
                swiper.autoplay.stop();
            }, function() {
                swiper.autoplay.start();
            });
        });
      
    }

    var showModal = function(){
        var elmstr = '.c-modal',
            _stt_id=0;

        // Cookie
        $(elmstr + '[data-usercookie]').each(function(){
            var _id_modal = 'modal_id_' + _stt_id,popup = $(this);
            $(this).attr('data-idmodal', _id_modal);
            if(getCookie(_id_modal) === false) {
                setTimeout(function(){popup.addClass('show'); }, 30000);
            }
            _stt_id++;
        });


        $(elmstr + '__close').click(function(e){
            $(this).closest(elmstr).removeClass('show');
            var _id_modal = $(this).closest(elmstr).data('idmodal');
            var _type = $(this).closest(elmstr).data('usercookie');
            if(_type) {
                console.log(_id_modal, _type);
                // setCookie()
                setCookie(_id_modal, 'close', _type);
            }
        });
        jQuery(document).mouseup(function(e) {
            var container = jQuery(elmstr + '__container');
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $(e.target).removeClass('show')
            }
        });
    }
    var showPopover = function(){

        var str_menu = '';
        var elmstr = '.c-popover';
        var hideHtmlPopover = function() {
            // $html.removeClass('dlg_has_showmn');
            $html.removeClass (function (index, className) {
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
                    $(elmstr + '[data-dlgid="' + str_menu + '"]').fadeOut().addClass('is_hide').removeClass('is_show');


                    // Menu thay biến tạm mới
                    str_menu = _classes;

                }

                // show menu mới lên
                $(elmstr + '[data-dlgid="' + str_menu + '"]').fadeIn().addClass("is_show").removeClass('is_hide');

                // Set top
                $(elmstr + '[data-dlgid="' + str_menu + '"]').css('top', this_offset_postop);


                // add body class flag
                $html.addClass('dlg_has_showmn');
                if($(elmstr + '[data-dlgid="' + str_menu + '"]').hasClass('c-popover__menuspbar')) {
                    $html.addClass('dlg_has_showmn_menuspbar');
                }

                // center point
                // Chieu dai popover
                var _dlgwidth = $(elmstr + '[data-dlgid="' + str_menu + '"]').outerWidth();
                this_offset_poscenter = this_offset.left + _this.outerWidth() / 2;

                if((this_offset_poscenter + _dlgwidth / 2) > this_offset_container_right) {
                    $(elmstr + '[data-dlgid="' + str_menu + '"]').css('left', this_offset_poscenter - _dlgwidth + _this.outerWidth());
                } else {
                    $(elmstr + '[data-dlgid="' + str_menu + '"]').css('left', this_offset_poscenter - _dlgwidth / 2);
                }

                // xác định bên trái
                if((this_offset_poscenter - _dlgwidth / 2) < 0) {
                    $(elmstr + '[data-dlgid="' + str_menu + '"]').css('left', this_offset.left);
                }
                
                // Nếu là popover filter 
                if(
                    $(elmstr + '[data-dlgid="' + str_menu + '"]').hasClass('c-popover--filter') ||
                    $(elmstr + '[data-dlgid="' + str_menu + '"]').hasClass('c-popover--filter-bar_sort')
                ) {
                    $(elmstr + '[data-dlgid="' + str_menu + '"]').css('left', this_offset.left + _this.outerWidth() - $(elmstr + '[data-dlgid="' + str_menu + '"]').outerWidth() );

                }
            }
        }


        var _time_hide = 0;
        var _strtemp = '';

        // Point Enter
        $('[data-popover]').mouseenter(
            function() {
                if($window.width() < 767) return false;
                var _this = $(this);
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
                if($window.width() < 767) return false;
                var _this = $(this);
                var _classes = _this.data('popover');
                _time_hide = setTimeout(function(){
                    $(elmstr + '[data-dlgid="' + _classes + '"]').fadeOut().addClass('is_hide').removeClass('is_show');
                    hideHtmlPopover();
                }, 2000);

        })
        .click(
            function() {
                var _this = $(this);
                var _classes = _this.data('popover');
                clearInterval(_time_hide);
                // console.log(jQuery(elmstr + '[data-dlgid="' + _classes + '"]').attr('class'));
                if(jQuery(elmstr + '[data-dlgid="' + _classes + '"]').hasClass('is_show')) {
                    // Show
                    $(elmstr + '[data-dlgid="' + _classes + '"]').removeClass('is_show').addClass('is_hide')
                    hideHtmlPopover();
                } 
                else {
                    getAndShowPopover(_this, _classes);
                    // Hiển thị nó lên 
                    // $(elmstr + '[data-dlgid="' + _classes + '"]').removeClass('is_hide').addClass('is_show').fadeIn('slow', function() {
                    //     $(this).removeClass('is_show').addClass('is_hide')
                    // });
                }
        });


        // Popover Enter
        $(elmstr + '[data-dlgid]').mouseenter(
            function() {
                clearInterval(_time_hide);
            })
        .mouseleave(
            function() {

                var _is_hide = false;

                if($(this).find("*").is(":focus") ) _is_hide = true;
                if($(this).hasClass('c-popover--filter')) _is_hide = true;

                // Dừng việc hiden
                if(_is_hide) return false;


                $(this).fadeOut().addClass('is_hide').removeClass('is_show');
                hideHtmlPopover();
            })
        ;



        $(elmstr + '__close').click(function(e){
            $(this).closest(elmstr).addClass('is_hide').removeClass('is_show');
            hideHtmlPopover();
            // setCookie()
        });

        // Click nằm ngoài AREA thì ẩn đi
        jQuery(document).mouseup(function(e) {
            

            // console.log();
            try{
                var _ispopop_item = $(e.target).attr('data-popover');
                
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


    var FilterCategory = function () {


        $('.brand__filter, ._cancel_filter, ._close_filterpanel').click(function(){
            // $('.brand__filter-panel').toggleClass('open');
            $('.c-popover--filter').removeClass('is_show').addClass('is_hide');
            $html.removeClass('dlg_has_showmn');

        });
        $('.filter_top ._cancel_filter ').click(function(){
            var this_parent = jQuery(this).closest('.filter_top');
            var _taxonomy   = this_parent.data('product_taxonomy');
            var _slug       = this_parent.data('product_slug');
            ChangeUrl('Search Page', '?' + _taxonomy + '=' + _slug);
            jQuery('.category-list input[type="checkbox"]').prop( "checked", false );
            jQuery('.brand__filter-panel .custom-control-input').prop('checked', false);
            // Thực hiện ẩn
            $('.filter_top ._displayresult').attr('data-nrsproduct', "");
        });

        $('.filter_top ._cancel_filter').click(function(){
            $('.products-list .product_containlist').fadeIn();
            if($('.pos_ajax').length > 0) {
                $('.pos_ajax').fadeOut();
            }

            // var button = $(this);
            // var query_group = [];
            
            // // Load 1 lần once load

            // if(button.hasClass('_loading')) return;

            // var data = {
            //     'action': 'filterajaxcategories',
            //     'query_group': query_group, // that's how we get params from wp_localize_script() function
            //     'security' : $('head meta[name="sweb_security_ajax_refer"]').attr('content'),
            // };

            // $.ajax({ // you can also use $.post here
            //     url : sweb_ajaxurl, // AJAX handler
            //     data : data,
            //     type : 'POST',
            //     beforeSend : function ( xhr ) {
            //         $('.category_area').addClass('_x_loadingListProduct ');
            //         button.addClass('_loading'); // change the button text, you can also add a preloader image
            //     },
            //     success : function( data ){
            //         if( data ) { 
            //             button.closest('.category_area').find('._outer_areaload').html(data); // insert new posts

            //             button.removeClass('_loading'); // if last page, remove the button
            //             $('.category_area').removeClass('_x_loadingListProduct ');

            //         }
            //     }
            // });

        });


        function _check_jsonthis(tempArray) {
            // Đầu vào là tempArray (list các checkbox)
            // var _arr_checkbox = ["signature", "purely-ageless", "oils-serums"];
            var _arr_checkbox = tempArray;
            var _list_product = lst_filter_json.list_product;
            var _arr_list = [];
            jQuery.each(_list_product, function(k,_product){
                // console.log(k);
                // console.log(_product);

                // === OR ===
                var _is_thisok = false;
                jQuery.each(_product.term_select, function(ts_k, ts_v){
                    // console.log(ts_v)
                    if(_arr_checkbox.includes(ts_v)) {
                        _is_thisok =  true;
                    }
                });


                //  === AND ===
                // var _is_thisok = false;
                // var _tt = 0;
                // jQuery.each(_product.term_select, function(ts_k, ts_v){
                //     // console.log(ts_v)
                //     if(_arr_checkbox.includes(ts_v)) {
                //         _tt++;
                //     }
                // });
                // // console.log(_tt + " --- " + _arr_checkbox.length);
                // if(_tt === _arr_checkbox.length) {
                //     _is_thisok = true;
                // }


                // Kết quả -> đưa vào hàng đợi
                if(_is_thisok) {
                    _arr_list.push(_product);
                }
            });

            return _arr_list;
        }

        $(document).on('click', '.bar_sort > .btn_short', function(e) {

            var button = $(this);
            var data_sort = button.data('sort');
            var list_allcheck = [];

            // Cancel This Select
            if(button.hasClass('active')) {
                button.removeClass('active');
                $('.products-list .product_containlist').fadeIn();
                if($('.pos_ajax').length > 0) {
                    $('.pos_ajax').fadeOut();
                }
                return false;
            }

            $('.bar_sort > .btn_short').removeClass('active');
            button.addClass('active');


            jQuery('.category-list input[type="checkbox"]:checked').each(function(key, value) {
                var name_input = jQuery(this).attr('name');
                name_input = name_input.replace('[]', '');
                if (jQuery.inArray(name_input, list_allcheck) == -1) {
                    list_allcheck.push(name_input);
                }
            });
            var query_group = [],
                tempArray = [];
            jQuery.each(list_allcheck, function(i, el) {
                jQuery('input[name="' + el + '[]"]:checked').each(function() {
                    tempArray.push(jQuery(this).val());
                })
            });
            // if ((tempArray.length > 0) === false) {
            //     alert('Vui lòng nhập đầy đủ thông tin!')
            //     return;
            // } else {
            //     $('.brand__filter-panel').toggleClass('open');
            //     $('body').toggleClass('_open_filterproduct');
            // }
            // Function check
            var _check_jsonthis = function (tempArray) {
                var _arr_checkbox = tempArray;
                var _list_product = lst_filter_json.list_product;
                var _arr_list = [];
                jQuery.each(_list_product, function(k, _product) {
                    var _is_thisok = false;
                    jQuery.each(_product.term_select, function(ts_k, ts_v) {
                        if (_arr_checkbox.includes(ts_v)) {
                            _is_thisok = true;
                        }
                    });
                    if (_is_thisok) {
                        _arr_list.push(_product);
                    }
                });
                return _arr_list;
            }

            function sortList(list,order) {
                 // if(order=="ASC"){


                 // }
                 // else{
                 //    return list.sort((a,b) => {
                 //        return parseFloat(b.last_price) - parseFloat(a.last_price);
                 //    });
                 // }


                var _a_last_price = null,
                _b_last_price = null;
                return list.sort((a,b) => {
                     _a_last_price = a.last_price || null;
                     _b_last_price = b.last_price || null;

                     // _a_last_price = _a_last_price.replace(/[^0-9\.]+/g,"");
                     // _b_last_price = _b_last_price.replace(/[^0-9\.]+/g,"");
                        // console.log(a.last_price, parseFloat(a.last_price), b.last_price, parseFloat(b.last_price));
                    // if(isNaN(parseFloat(a.last_price))) return false;
                    if (parseFloat(a.last_price) === parseFloat(b.last_price)) {
                        return 0;
                    }
                    // nulls sort after anything else
                    else if (a.last_price === null) {
                        return 1;
                    }
                    else if (b.last_price === null) {
                        return -1;
                    }
                    // otherwise, if we're ascending, lowest sorts first
                    else if (order=="ASC") {
                        _a_last_price = a.last_price.replace(/[^0-9\.]+/g,"");
                        _b_last_price = b.last_price.replace(/[^0-9\.]+/g,"");
                        return parseFloat(_a_last_price) < parseFloat(_b_last_price) ? -1 : 1;
                    }
                    // otherwise, if we're ascending, lowest sorts first
                    // if descending, highest sorts first
                    else { 
                        _a_last_price = a.last_price.replace(/[^0-9\.]+/g,"");
                        _b_last_price = b.last_price.replace(/[^0-9\.]+/g,"");
                        return parseFloat(_a_last_price) < parseFloat(_b_last_price) ? 1 : -1;
                    }
                    // return parseFloat(a.last_price) - parseFloat(b.last_price);
                })
            }
            function sortListByFeature(list,order) {
                var _a_last_price = null,
                _rs  = null,
                _a_average = null,
                _b_average = null,
                _b_last_price = null;
                return list.sort((a,b) => {
                    _rs = 1;
                    // otherwise, if we're ascending, lowest sorts first
                    if (order=="FEATURED") {
                        if (a.is_featured) {
                            console.log(a.is_featured);
                            return a.is_featured ? -1 : 1;
                        }
                        return 1;
                    }
                    if (order=="NEWPRODUCT") {
                        if (a.timesptamp) {
                            return a.timesptamp < b.timesptamp ? 1 : -1;
                        }
                    }
                    if (order=="AVGREVIEW") {
                        _a_average = a.average.replace(/[^0-9\.]+/g,"");
                        _b_average = b.average.replace(/[^0-9\.]+/g,"");
                        return parseFloat(_a_average) < parseFloat(_b_average) ? -1 : 1;
                    }
                    return _rs;
                    // return parseFloat(a.last_price) - parseFloat(b.last_price);
                })
            }

            var _arr_list = _check_jsonthis(tempArray);

            _arr_list = _arr_list.length > 0 ? _arr_list : lst_filter_json.list_product;

            // console.log(data_sort, _arr_list.length, _arr_list); 

            if (data_sort === 'price_hightolow') {
                sortList(_arr_list, 'DESC');
            }

            if (data_sort === 'price_lowtohigh') {
                sortList(_arr_list, 'ASC');                
            }

            if (data_sort === 'price_featured') {
                sortListByFeature(_arr_list, 'FEATURED');                
            }
            if (data_sort === 'new_product') {
                sortListByFeature(_arr_list, 'NEWPRODUCT');                
            }
            if (data_sort === 'customer_review') {
                sortListByFeature(_arr_list, 'AVGREVIEW');                
            }

            
            $('.products-list .product_containlist').fadeOut();
            if ($('.pos_ajax').length > 0) {
                $('.pos_ajax').fadeIn();
            }
            if (($('.products-list .product_containlist').next('.pos_ajax').length > 0) === false) {
                $('.products-list .product_containlist').after('<div class="pos_ajax"></div>');
            }
            var _str_content = '<div class="container"><div class="row"><div class="col"><div class="_x_inner_row"><h2 class="_x_notfofund_title">Chưa có bài viết hay sản phẩm nào ở đây</h2><p class="_x_notfofund_text"><span class="dis_block">Nội dung bạn đang tìm kiếm không được tìm thấy.</span></p></div></div></div></div>';
            if (_arr_list.length > 0) {
                _str_content = '';
                jQuery.each(_arr_list, function(k, v) {
                    var str_class_isbestsell = (v.is_best_sell) ? 'is_this_best_sell' : '';
                    
                    // _str_content += '\
                    // <li class="product type-product post-493 status-publish outofstock product_cat-sukin product_cat-da-dau product_cat-dau-goi product_cat-toc-dau has-post-thumbnail shipping-taxable purchasable product-type-simple">\
                    //     <a href="' + v.link + '" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">' + v.thumbnail + '\
                    //         <h2 class="woocommerce-loop-product__title">' + v.title + '</h2> \
                    //     </a>\
                    //     <div class="product-desc">' + v.content + '</div>\
                    //     ' + v.price + '\
                    // </li>';

                    _str_content += '\
                <li class="product type-product status-publish first instock product_cat-loai-da product_cat-da-hon-hop product_cat-da-thuong product_tag-bo-kit-sang-da-andalou product_tag-bo-duong-sang-da-andalou-mini product_tag-andalou-get-started-brightening has-post-thumbnail shipping-taxable purchasable product-type-simple">\
                    <a href="javascript:void(0)" class="c-carousel-product-list__product woocommerce-LoopProduct-link woocommerce-loop-product__link product-quickview" data-id="' + v.id + '">\
                        <div class="c-carousel-product-list__product-thumb">\
                        ' + v.thumbnail + '\
                        <span class="c-carousel-product-list__product-btn_view">Xem nhanh</span></div>\
                        <h2 class="woocommerce-loop-product__title">' + v.title + '</h2>\
                        ' + v.price + '\
                        <span class="c-carousel-product-list__product-btn">Xem thêm</span>\
                    </a>\
                    <div class="product-desc">' + v.content + '</div>\
                </li>';


                    
                });
                _str_content = '<ul class="products">' + _str_content + '</ul>';
            }
            jQuery('.pos_ajax').html(_str_content);
        });



        // Action checkbox
        jQuery('.filter_top .custom-control input.custom-control-input').change(function(){

            // B1: Lấy danh sách
            var list_allcheck = [];
            jQuery('.category-list input[type="checkbox"]:checked').each(function(key, value){
                var name_input = jQuery(this).attr('name');
                    name_input = name_input.replace('[]', '');
                if (jQuery.inArray(name_input, list_allcheck) ==-1) {
                    list_allcheck.push(name_input);
                    
                }
            });
            var query_group = [], tempArray = [];
            jQuery.each(list_allcheck, function(i, el){
              jQuery('input[name="' + el + '[]"]:checked').each(function(){
                  tempArray.push(jQuery(this).val());
              })
            });

            // console.log(tempArray);
            // console.log(_check_jsonthis(tempArray));
            // Nếu checkbox chọn thì sẽ lọc danh sách sản phẩm
            var nrsproduct = 0;
            if(tempArray.length > 0) {
               nrsproduct = _check_jsonthis(tempArray).length;
            }
            $('.filter_top ._displayresult').attr('data-nrsproduct', "(" + nrsproduct + ")");
        });

        // Action button checkbox
        $('.filter_top ._displayresult').click(function(){
            var button = $(this);


            // ======
            // Ktra checkbox
            // ======

            // B1: Lấy danh sách
            var list_allcheck = [];
            jQuery('.category-list input[type="checkbox"]:checked').each(function(key, value){
                var name_input = jQuery(this).attr('name');
                    name_input = name_input.replace('[]', '');
                if (jQuery.inArray(name_input, list_allcheck) ==-1) {
                    list_allcheck.push(name_input);
                    
                }
            });
            var query_group = [], tempArray = [];
            jQuery.each(list_allcheck, function(i, el){
              jQuery('input[name="' + el + '[]"]:checked').each(function(){
                  tempArray.push(jQuery(this).val());
              })
            });

            // console.log(query_group.join('&'));
            // Bỏ qua nếu không có dũ liệu
            if((tempArray.length > 0) === false )  {
                alert('Vui lòng nhập đầy đủ thông tin!')
                return;
            } else {
                // $('.brand__filter-panel').toggleClass('open');
                // // $('body').toggleClass('cxcvxcv');
                $('.c-popover--filter').removeClass('is_show').addClass('is_hide');
                $html.removeClass('dlg_has_showmn');
            }

            // Thực hiện thay đổi hiển thị
            $('.products-list .product_containlist').fadeOut();
            if($('.pos_ajax').length > 0) {
                $('.pos_ajax').fadeIn();
            }
            if(($('.products-list .product_containlist').next('.pos_ajax').length > 0) === false) {
                $('.products-list .product_containlist').after('<div class="pos_ajax"></div>');
            }
            



            // Đổ dữ liệu filter ra giao diện
            // console.log(tempArray);
            var _arr_list = _check_jsonthis(tempArray);
            // ==== ===== ===== =============
            // ==== Set Content To List =====
            // ==== ===== ===== =============
            var _str_content = '<div class="container"><div class="row"><div class="col"><div class="_x_inner_row"><h2 class="_x_notfofund_title">Chưa có bài viết hay sản phẩm nào ở đây</h2><p class="_x_notfofund_text"><span class="dis_block">Nội dung bạn đang tìm kiếm không được tìm thấy.</span></p></div></div></div></div>';
            if(_arr_list.length > 0) {
                // console.log(_arr_list);

                _str_content = '';
                jQuery.each(_arr_list, function(k,v) {
                    var str_class_isbestsell = (v.is_best_sell) ? 'is_this_best_sell' : '';
                    // _str_content += '<div class="_x_row _x_link_all animated fadeInUp  ' + str_class_isbestsell + ' _item-">\
                    //    <div class="_x_gr">\
                    //       <a href="' + v.link + '" class="_x_thumbnail">' + v.image + '</a>\
                    //       <div class="_x_tt"><a href="' + v.link + '">' + v.title + '</a></div>\
                    //       <div class="_x_content">' + v.content + '</div>\
                    //    </div>\
                    // </div>';

                    _str_content += '\
                    <li class="product type-product status-publish first instock product_cat-loai-da product_cat-da-hon-hop product_cat-da-thuong product_tag-bo-kit-sang-da-andalou product_tag-bo-duong-sang-da-andalou-mini product_tag-andalou-get-started-brightening has-post-thumbnail shipping-taxable purchasable product-type-simple">\
                    <a href="javascript:void(0)" class="c-carousel-product-list__product woocommerce-LoopProduct-link woocommerce-loop-product__link product-quickview" data-id="' + v.id + '">\
                        <div class="c-carousel-product-list__product-thumb">\
                        ' + v.thumbnail + '\
                        <span class="c-carousel-product-list__product-btn_view">Xem nhanh</span></div>\
                        <h2 class="woocommerce-loop-product__title">' + v.title + '</h2>\
                        ' + v.price + '\
                        <span class="c-carousel-product-list__product-btn">Xem thêm</span>\
                    </a>\
                    <div class="product-desc">' + v.content + '</div>\
                </li>';
                    
                });
                _str_content = '<ul class="products">' + _str_content + '</ul>';
                 
            }

            jQuery('.pos_ajax').html(_str_content);
            // B2 Change URL Address bar
            // ChangeUrl('Search Page', '?' + query_group.join('&'));
            // location.hash = query_group.join('&');
            // B3 Send Request Data HYML

            // Load 1 lần once load

            // if(button.hasClass('_loading')) return;

            // var data = {
            //     'action': 'filterajaxcategories',
            //     'query_group': query_group, // that's how we get params from wp_localize_script() function
            //     'security' : $('head meta[name="sweb_security_ajax_refer"]').attr('content'),
            // };

            // $.ajax({ // you can also use $.post here
            //     url : sweb_ajaxurl, // AJAX handler
            //     data : data,
            //     type : 'POST',
            //     beforeSend : function ( xhr ) {
            //         $('.category_area').addClass('_x_loadingListProduct ');
            //         button.addClass('_loading'); // change the button text, you can also add a preloader image
            //     },
            //     success : function( data ){
            //         if( data ) { 
            //             button.closest('.category_area').find('._outer_areaload').html(data); // insert new posts

            //             button.removeClass('_loading'); // if last page, remove the button
            //             $('.category_area').removeClass('_x_loadingListProduct ');

            //         }
            //     }
            // });

        });
        if($(window).width() < 426) {
            $('.brand__filter-panel .category-caption').click(function(){
                $(this).next().addClass('active')
            });
            $('.brand__filter-panel ._backcaption').click(function(){
                $(this).parent().removeClass('active')
            });
        }
    }
    var productSlider = function(){
        if ($(document).width() > 767){
            var galleryThumbs = new Swiper('.c-product__slider .product-gallery', {
                spaceBetween: 30,
                slidesPerView: 3,
                preloadImages: false,
                lazy: true,
                loop: true,
                loopedSlides: 4,
            });


            var galleryTop = new Swiper('.c-product__slider .product-image', {
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
            var galleryTop = new Swiper('.c-product__slider--mobile .product-image', {
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
    var megaMenu = function(){
        var _ninside = 0;

        var isInside = function(_this) {
            if(_this.parent('.menu-item').length) {
                _ninside
            } 
            if(_this.parent('.menu-item').length) {
                _ninside
            } 
        }


        // jQuery('#menu-main>li>a').hover(get_position);
        var n_overmouse = 0;
        var str_menu = '';

        var getAndShowMenu = function(_this, _classes) {
            var this_offset = _this.offset();
            var this_offset_poscenter = this_offset.left + _this.outerWidth() / 2 - 8;
            var hmain_offset = $('.header--main').offset();
            var hmain_offset_postop = hmain_offset.top + $('.header--main').outerHeight();

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


        var outerOverflow = jQuery(".header .nav-slider");
        $( "#menu-main>li.menu-item" ).mouseenter(
            function() {

                // Hover again => auto clear Interval Timeout
                clearInterval(m_interval);

                // xác định tọa độ đối tượng
                var _this = $(this);
                n_overmouse = 1;
                // var classes = $.map($(this).attr('class').split(' '), function(cls, i) {
                //   if (cls.indexOf('mn_') === 0) {
                //     return cls || '';
                //   }
                // })
                var classes = $(this).data('id_nam');
                // console.log(classes);
                // Update liên tục nếu là PC
                if(typeof classes === 'undefined') {
                    $('.c_megamenu').addClass('is_hide').removeClass('is_show');
                    $html.removeClass('megamn_has_showmn');
                }
                


                // Scroll Move by position
                var i = $(this),
                a = (i.offset().left, i.attr("menu-item"));

                var n = outerOverflow.scrollLeft() + (i.offset().left - outerOverflow.offset().left);
                outerOverflow.animate({
                    scrollLeft: n - (outerOverflow.width() / 2 - i.width() / 2 )
                }, 100, function() {
                    // Animation complete.

                    getAndShowMenu(_this, classes);
                    setTimeout(function(){
                       $html.addClass('megamn_finish_scroll') 
                    }, 1000);

                });


                    
            }
        );
        var m_interval = 0;
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
                // console.log(n_overmouse);
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
                var _this = $(this);
                var _classes = _this.data('id_nam');
                var _is_megavisible = $('.c_megamenu[data-class="' + _classes + '"]').hasClass("is_show");

                clearInterval(m_interval);
                if(_is_megavisible) {
                    $('.c_megamenu').addClass('is_hide').removeClass('is_show');
                    $html.removeClass('megamn_has_showmn');
                } else {

                    // console.log(_is_megavisible, 222);
                    getAndShowMenu(_this, _classes);
                    // $('.c_megamenu').addClass('is_show').removeClass('is_hide');
                }
            }
        )
        ;

        // Phát hiện và remove megamenu nếu scroll 
        $('.header .nav-slider').scroll(function (event) {
            // Do something
            if($html.hasClass('megamn_finish_scroll')) {
                $('.c_megamenu').addClass('is_hide').removeClass('is_show');
                $html.removeClass('megamn_has_showmn');
                $html.removeClass('megamn_finish_scroll');
            }
        });



        // Click nằm ngoài megamenu thì ẩn đi
        // jQuery(document).mouseup(function(e) {
        //     var container = jQuery('.c-popover[data-dlgid]');
        //     // if the target of the click isn't the container nor a descendant of the container
        //     if (!container.is(e.target) && container.has(e.target).length === 0) {
        //         $('.c_megamenu').addClass('is_hide').removeClass('is_show');
        //         $html.removeClass('megamn_has_showmn');
        //         $html.removeClass('megamn_finish_scroll');
        //     }
        // });

    }
    var productSingleTabContent = function(){
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
                        // $(_clsparent + '-head[data-id="' + _id + '"]').addClass('active');
                    }
                 });
            });


            // Reset
            var _reset = function() {
                $('.c-product__tabinfo-head ul li').removeClass('active');
                $('.c-product__tabinfo-head ul li[data-id="0"]').addClass('active');

                $('.c-product__tabinfo-item').removeClass('active').hide();
                $('.c-product__tabinfo-item[data-id="0"]').addClass('active').show();
                
                $('.c-product__tabinfo-list > span[data-id]').removeClass('active');
                $('.c-product__tabinfo-list > span[data-id="0"]').addClass('active');
            }
            var _x_once_resize = false;
            window.addEventListener('resize', function(){

                  if($(window).width() > 767 && _x_once_resize === false) {
                    _reset();
                    _x_once_resize = true;
                    // console.log(1,_x_once_resize)
                  }
                  if($(window).width() < 769 &&  _x_once_resize === true) {
                    _reset();
                    _x_once_resize = false;
                    // console.log(2,_x_once_classbody)
                  }
            });

        }
    }
    var catSidebar = function(){
        $('.cat-sidebar > li > a').on('click',function(e){
            e.preventDefault();
            var li = $(this).parent();
            li.toggleClass('open');
        });
    }
    var testAjax = function(){
        $('.header--top_login').on('click',function(e){
            // console.log('XXX');
            e.preventDefault();
            var post__not_in = 'Kcmhito';
            var data = {
                'action': 'testajax',
                'data': post__not_in,
                'security' : $('head meta[name="security_ajax_refer"]').attr('content'),
            };

            $.ajax({ // you can also use $.post here
                url : bbs_theme_ajaxurl, // AJAX handler
                data : data,
                type : 'POST',
                beforeSend : function ( xhr ) {
                    // button.text('Loading...'); // change the button text, you can also add a preloader image
                },
                success : function( data ){
                    if( data ) { 
                        $('#' + data_tab).html(data); // insert new posts

                        // Xóa đi class not-ready sau khi load dc dữ liệu thành công
                        button.removeClass('not-ready')
                        // you can also fire the "post-load" event here if you use a plugin that requires it
                        // $( document.body ).trigger( 'post-load' );
                    }
                }
            });
        });
    }
    var activeNiceSelect = function(){
        if ($.fn.niceSelect){
            $('.woocommerce-ordering select').niceSelect();
        }
    }
    var editToggle = function (){
        function _removeClassName(els,cls) {
            for (var i = 0; i < els.length; i++) {
              els[i].classList.remove(cls)
            }
          }
        var acc = document.getElementsByClassName("edit");
        var i;
        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            var li = this.parentElement.parentElement;
            /* Toggle between hiding and showing the active panel */
            var panel =  li.querySelector('.panel');
            if ( li.querySelector('.edit-account--item').classList.contains('active')){
                _removeClassName(document.querySelectorAll('.edit-account--item'),'active');
            }
            else {
                _removeClassName(document.querySelectorAll('.edit-account--item'),'active');
                li.querySelector('.edit-account--item').classList.add('active');
            }
           
        });
        }
    }
    var myAccountNav = function(){
        var elActive = document.querySelector('.woocommerce-MyAccount-navigation .is-active');
        if (elActive){
            elActive.addEventListener('click',function(e){
                e.preventDefault();
                this.parentElement.parentElement.classList.toggle('expand');
            })
        }
    }
    // action like unlike review
    var actionHelpful = function(){
        $('.actionHelpful').on('click',function(e){
            e.preventDefault();
            var _this = $(this);
            var idComment = {
                'idComment' : $(this).data('idcomment'),
                'actionLike' : $(this).data('like')
            }
            var data = {
                'action': 'actionHelpful',
                'data': idComment,
                'security' : $('head meta[name="security_ajax_refer"]').attr('content'),
            };
            $.ajax({ // you can also use $.post here
                url : bbs_theme_ajaxurl, // AJAX handler
                data : data,
                type : 'POST',
                beforeSend : function ( xhr ) {
                    // button.text('Loading...'); // change the button text, you can also add a preloader image
                },
                success : function( data ){
                    if( data ) { 
                        var getId = _this.data('idcomment');
                        $('.like-'+getId).html(data.add);
                        $('.unlike-'+getId).html(data.reject);
                    }else{
                        // 
                        $('#formLogin').addClass('show');
                    }
                }
            });
        });
    }
    // function login form popup
    var ajaxLogin = function(){
        $('form#loginform').submit(function(event) {
            // get the form data
            // there are many ways to get this data using $ (you can use the class or id also)
            var _this = $(this),
             formData = _this.serialize(),
             redirect_to = _this.find('[name="redirect_to"]'),
             _container = _this.parent(),
             notice_area = _container.find('.woocommerce-notices-wrapper');
            if(notice_area.length <1){
                _container.prepend('<div class="woocommerce-notices-wrapper"></div>');
                notice_area = _container.find('.woocommerce-notices-wrapper');
            }
            // process the form
            $.ajax({
                type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url         : _this.attr('action'), // the url where we want to POST
                data        : formData, // our data object
            })
                // using the done promise callback
                .done(function(data) {
    
                    // log data to the console so we can see
                    var $data = $('<div>').html( data ); 
                    // $data.find('#login_error'); // this works now
                    var errorEl =$data.find('#login_error') ;
                    if (errorEl.length >0){
                        notice_area.html(errorEl.html());
                    }
                    else if(redirect_to.length>0) {
                        window.location.replace(redirect_to.val());
                    }
                    // here we will handle errors and validation messages
                });
    
            // stop the form from submitting the normal way and refreshing the page
            event.preventDefault();
        });
    }
    // action Write a review
    var actionWriteReview = function(){
        // close popup thankyou review
        $('.close-popup').on('click',function(e){
            $('#formThankReview').removeClass('show');
        });
        // select start
        $('.actionStar').on('click',function(e){
            var get_star = $(this).data('star');
            $('#rating').val(get_star);
            $('.rating a').removeClass('active');
            for (var i = 1; i <= get_star; i++) {
                $('.rating a:nth-child('+i+')').addClass('active');
            }
        });
        // hover star
        $( ".actionStar" ).hover(
          function() {
            var hover_star = $(this).data('star');
            for (var i = 1; i <= hover_star; i++) {
                $('.rating a:nth-child('+i+')').addClass('star-hover');
            }
          }, function() {
                $('.rating a').removeClass('star-hover');
                
          }
        );
        // ajax check login => return popup
        $('.action_writeReview').on('click',function(e){
            e.preventDefault();
            var _this = $(this);
            var idreview = $(this).data('idreview');
            var data = {
                'action': 'actionWriteReview',
                'data': idreview,
                'security' : $('head meta[name="security_ajax_refer"]').attr('content'),
            };
            $.ajax({ // you can also use $.post here
                url : bbs_theme_ajaxurl, // AJAX handler
                data : data,
                type : 'POST',
                beforeSend : function ( xhr ) {
                    // button.text('Loading...'); // change the button text, you can also add a preloader image
                },
                success : function( data ){
                    if( data ) { 
                        $('#formReview').addClass('show');
                    }else{
                        // 
                        $('#formLogin').addClass('show');
                    }
                }
            });
        });
    }
    var stickyEl = function (el,screensize){
        if (!screensize){
            screensize = 769
        }
        if (window.screen.width < screensize){
            // When the user scrolls the page, execute myFunction
            window.onscroll = function() {
                // Get the header
                var header = document.querySelector("header"), elDom = document.querySelector(el);
                // Get the offset position of the navbar
                var sticky = header.offsetTop;
                if (window.pageYOffset > sticky) {
                    elDom.classList.add("sticky");
                } else {
                    elDom.classList.remove("sticky");
                }
            }
        }
        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    }
    var modalTrigger = function(){
        $('.c-btn--show-modal').on('click',function(){
            var _this = $(this),_target = _this.data('target');
            if (_target && $(_target).length >0){
                $(_target).addClass('show');
            }
        });
        $('.c-btn--close-modal').on('click',function(){
            var currentModal = $(this).parents('.c-modal');
            currentModal.removeClass('show');
        })
    }
    var orderby = function(){
        $('.orderby').on('change',function(){
            insertParam('orderby',$(this).val());
        })
    }
    var bindLoad = function(){

        var param_action_login = {
               action: 'bbs_browserprivacy_norecaptcha'
        };
        jQuery.post(bbs_theme_ajaxurl, param_action_login , function(data){ 
          if(data._isok) {
            // Nhận key ajax refer
            jQuery('meta[name="security_ajax_refer"]').attr('content', data._key_wpajaxrefer);
            jQuery('body').addClass('website_has_recaptcha')
          } 
        })
        .fail(function() {
        })
        .always(function() {
        });
        

        $(window).bind('load', function(){
            // Events Load
            const event = new Event('readyDocument');
            var htmlElm = document.querySelector( 'html' );
            htmlElm.dispatchEvent(event);
            
            // Fix height margin top vs menubar
            if($window.width < 768) {
                var heightMenuBar = $('.c-menubar').height();
                $('.c-footer').css('margin-bottom', heightMenuBar);
            }
        });

        // Detech Event Ajax
        jQuery(document).ajaxStart(function(e){
            console.log(e)
          jQuery("body").addClass('ajaxLoading')
        });

        jQuery(document).ajaxComplete(function(e){
          jQuery("body").removeClass('ajaxLoading')
        });
    }
    function insertParam(key, value) {
        key = encodeURIComponent(key);
        value = encodeURIComponent(value);
    
        // kvp looks like ['key1=value1', 'key2=value2', ...]
        var kvp = document.location.search.substr(1).split('&');
        let i=0;
    
        for(; i<kvp.length; i++){
            if (kvp[i].startsWith(key + '=')) {
                let pair = kvp[i].split('=');
                pair[1] = value;
                kvp[i] = pair.join('=');
                break;
            }
        }
    
        if(i >= kvp.length){
            kvp[kvp.length] = [key,value].join('=');
        }
    
        // can return this or...
        let params = kvp.join('&');
    
        // reload page with new params
        document.location.search = params;
    }

    var blogLoader = function(){
        $(document).on('click', '.bbs_misha_loadmore.bbs_btn_misha_loadmore', function(e) {
            var button = $(this);
            if (button.hasClass('_loading')) return;
            var this_ajaxurl = button.data('ajaxurl');
            var this_posts = button.data('posts');
            var this_current_page = parseInt(button.data('current_page'));
            var this_max_page = parseInt(button.data('max_page'));
            var data = {
                'action': 'loadmore',
                'query': this_posts,
                'page': this_current_page,
                'security': $('head meta[name="security_ajax_refer"]').attr('content'),
            };
            $.ajax({
                url: bbs_theme_ajaxurl ,
                data: data,
                type: 'POST',
                beforeSend: function(xhr) {
                    button.text('Loading...');
                    button.addClass('_loading');
                },
                success: function(data) {
                    if (data) {
                        button.text(button.attr('data-txtbtn'));
                        button.closest('.outer_areaload').find('.bbs_inner').append(data);
                        this_current_page++;
                        button.data('current_page', this_current_page);
                        button.removeClass('_loading');
                        if (this_current_page == this_max_page)
                            button.remove();

                        lazyLoad(true);
                    } else {
                        button.remove();
                    }
                }
            });
        });
    }
    // action Click View
    var actionClickView = function(){
        // ajax 
        $(document).on('click', '.product-quickview', function(e) {
            e.preventDefault();
            var _this = $(this);
            var idpost = $(this).data('id');
            var data = {
                'action': 'actionClickView',
                'data': idpost,
                'security' : $('head meta[name="security_ajax_refer"]').attr('content'),
            };
            $.ajax({ // you can also use $.post here
                url : bbs_theme_ajaxurl, // AJAX handler
                data : data,
                type : 'POST',
                dataType: "html",
                beforeSend : function ( xhr ) {
                    // button.text('Loading...'); // change the button text, you can also add a preloader image
                },
                success : function( data ){
                    if( data ) { 
                        data = data.replace("null", "");
                        data = data.replace('type="text" class="datepicker"', 'type="date" class="datepicker"');
                        $('#formView .content-view').html(data);
                        $('#formView').addClass('show');
                    }
                }
            });
        });
    }
    // action add to cart ajax
    var actionAddToCart = function(){
        $(document.body).on('click input', 'input.qty', function() {
            $(this).parent().parent().find('a.ajax_add_to_cart').attr('data-quantity', $(this).val());
            $(".added_to_cart").remove();
        });
    }

    // Dom Ready
    $(function() {
        initSetup();
        loadSVG();
        editToggle();
        myAccountNav();
        navSlider();
        heroSlider();
        productSingleTabContent();
        megaMenu();
        productSlider();
        catSidebar();
        activeNiceSelect();
        carouselProductList();
        showModal();
        showPopover();
        actionHelpful();
        ajaxLogin();
        actionWriteReview();
        FilterCategory();
        modalTrigger();
        orderby();
        actionClickView();
        bindLoad();
        blogLoader();
        actionAddToCart();
        // stickyEl('.header',1950);
        // stickyEl('.cat-sidebar');
    });
})(jQuery);