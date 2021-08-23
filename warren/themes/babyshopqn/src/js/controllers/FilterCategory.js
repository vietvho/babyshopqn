export default class FilterCategory {
    constructor(){
        this.init();
        this.bindAction();
        this.showProduct();
        this.bindCheckbox();
        this.mobileAction();
    }

    init() {
        $('.brand__filter, ._cancel_filter, ._close_filterpanel').click(function(){
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

        });
    }

    bindShort(){
        jQuery(document).on('click', '.bar_sort > .btn_short', (e) => {
            let button = $(this);
            let data_sort = button.data('sort');
            let list_allcheck = [];
    
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
                let name_input = jQuery(this).attr('name');
                name_input = name_input.replace('[]', '');
                if (jQuery.inArray(name_input, list_allcheck) == -1) {
                    list_allcheck.push(name_input);
                }
            });
    
            let query_group = [],
                tempArray = [];
            jQuery.each(list_allcheck, function(i, el) {
                jQuery('input[name="' + el + '[]"]:checked').each(function() {
                    tempArray.push(jQuery(this).val());
                })
            });
    
            let _arr_list = this._check_jsonthis(tempArray);
    
            _arr_list = _arr_list.length > 0 ? _arr_list : lst_filter_json.list_product;
    
            if (data_sort === 'price_hightolow') {
                this.sortList(_arr_list, 'DESC');
            }
    
            if (data_sort === 'price_lowtohigh') {
                this.sortList(_arr_list, 'ASC');                
            }
    
            if (data_sort === 'price_featured') {
                this.sortListByFeature(_arr_list, 'FEATURED');                
            }

            if (data_sort === 'new_product') {
                this.sortListByFeature(_arr_list, 'NEWPRODUCT');                
            }

            if (data_sort === 'customer_review') {
                this.sortListByFeature(_arr_list, 'AVGREVIEW');                
            }
    
            $('.products-list .product_containlist').fadeOut();
            if ($('.pos_ajax').length > 0) {
                $('.pos_ajax').fadeIn();
            }

            if (($('.products-list .product_containlist').next('.pos_ajax').length > 0) === false) {
                $('.products-list .product_containlist').after('<div class="pos_ajax"></div>');
            }

            let _str_content = '<div class="container"><div class="row"><div class="col"><div class="_x_inner_row"><h2 class="_x_notfofund_title">Chưa có bài viết hay sản phẩm nào ở đây</h2><p class="_x_notfofund_text"><span class="dis_block">Nội dung bạn đang tìm kiếm không được tìm thấy.</span></p></div></div></div></div>';
            
            if (_arr_list.length > 0) {
                _str_content = '';
                jQuery.each(_arr_list, function(k, v) {
    
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
    
    }

    sortListByFeature(list,order) {
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
        })
    }

    sortList(list,order) {
        var _a_last_price = null,
        _b_last_price = null;
        return list.sort((a,b) => {
             _a_last_price = a.last_price || null;
             _b_last_price = b.last_price || null;

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
            else { 
                _a_last_price = a.last_price.replace(/[^0-9\.]+/g,"");
                _b_last_price = b.last_price.replace(/[^0-9\.]+/g,"");
                return parseFloat(_a_last_price) < parseFloat(_b_last_price) ? 1 : -1;
            }
        })
    }


    _check_jsonthis(tempArray) {
        // Đầu vào là tempArray (list các checkbox)
        var _arr_checkbox = tempArray;
        var _list_product = lst_filter_json.list_product;
        var _arr_list = [];
        jQuery.each(_list_product, function(k,_product){

            // === OR ===
            var _is_thisok = false;
            jQuery.each(_product.term_select, function(ts_k, ts_v){
                // console.log(ts_v)
                if(_arr_checkbox.includes(ts_v)) {
                    _is_thisok =  true;
                }
            });

            // Kết quả -> đưa vào hàng đợi
            if(_is_thisok) {
                _arr_list.push(_product);
            }
        });

        return _arr_list;
    }

    showProduct() {

        // Action checkbox
        jQuery('.filter_top .custom-control input.custom-control-input').change(()=>{

            // B1: Lấy danh sách
            var list_allcheck = [];
            jQuery('.category-list input[type="checkbox"]:checked').each(function(key, value){
                let name_input = jQuery(this).attr('name');
                    name_input = name_input.replace('[]', '');
                if (jQuery.inArray(name_input, list_allcheck) ==-1) {
                    list_allcheck.push(name_input);
                    
                }
            });

            let query_group = [], tempArray = [];
            jQuery.each(list_allcheck, function(i, el){
                jQuery('input[name="' + el + '[]"]:checked').each(function(){
                    tempArray.push(jQuery(this).val());
                })
            });

            // Nếu checkbox chọn thì sẽ lọc danh sách sản phẩm
            let nrsproduct = 0;
            if(tempArray.length > 0) {
                nrsproduct = this._check_jsonthis(tempArray).length;
            }
            $('.filter_top ._displayresult').attr('data-nrsproduct', "(" + nrsproduct + ")");
        });
    }

    bindCheckbox(){

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

            // Bỏ qua nếu không có dũ liệu
            if((tempArray.length > 0) === false )  {
                alert('Vui lòng nhập đầy đủ thông tin!')
                return;
            } else {
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
    }

    mobileAction(){

        if($(window).width() < 426) {
            $('.brand__filter-panel .category-caption').click(function(){
                $(this).next().addClass('active')
            });
            $('.brand__filter-panel ._backcaption').click(function(){
                $(this).parent().removeClass('active')
            });
        }
    }
}