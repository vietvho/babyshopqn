import loadSVG from "./lib/svg";
import HeroSlider from './controllers/HeroSliders.js';
import CarouselProductList from './controllers/ProductCarousel';
import PopOver from "./controllers/PopOver";
import FilterCategory from "./controllers/FilterCategory";
import OrderBy from "./controllers/OrderBy";
import ProductSlider from "./controllers/ProductSlider";
import MegaMenu from "./controllers/MegaMenu";
import LazyLoadW from "./controllers/LazyLoadW";
import Modal from "./controllers/Modals";
import ProductSingleTabContent from "./controllers/ProductSingleTabContent";

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
   
    var initSetup = function(){
        $body.addClass('is-init');
    }     
    
    var catSidebar = function(){
        $('.cat-sidebar > li > a').on('click',function(e){
            e.preventDefault();
            var li = $(this).parent();
            li.toggleClass('open');
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
                crossDomain:true,
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
                crossDomain:true
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
                crossDomain:true,
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
          jQuery("body").addClass('ajaxLoading')
        });

        jQuery(document).ajaxComplete(function(e){
          jQuery("body").removeClass('ajaxLoading')
        });
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
                crossDomain:true,
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
                        new  LazyLoadW;
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
                crossDomain:true,
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
    $(function($) {
        initSetup();
        new HeroSlider;
        new CarouselProductList;
        editToggle();
        myAccountNav();
        new ProductSingleTabContent;
        new MegaMenu;
        new ProductSlider;
        catSidebar();
        activeNiceSelect();
        new PopOver;
        actionHelpful();
        ajaxLogin();
        actionWriteReview();
        new FilterCategory;
        modalTrigger();
        new OrderBy;
        new LazyLoadW;
        new Modal;
        actionClickView();
        bindLoad();
        blogLoader();
        actionAddToCart();
    });
})(jQuery);