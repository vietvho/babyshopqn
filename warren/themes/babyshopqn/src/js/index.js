import loadSVG from "./lib/svg";
import HeroSlider from './controllers/HeroSliders.js';
import CarouselProductList from './controllers/ProductCarousel';
import PopOver from "./controllers/PopOver";
import FilterCategory from "./controllers/FilterCategory";
import OrderBy from "./controllers/OrderBy";
import ProductSlider from "./controllers/ProductSlider";
import LazyLoadW from "./controllers/LazyLoadW";
import Modal from "./controllers/Modals";
import ProductSingleTabContent from "./controllers/ProductSingleTabContent";
import AccountDashboard from "./controllers/AccountDashboard";
import ProductAction from "./controllers/ProductAction";

(function($) {

    'use strict'

    /************************************************************
    * Predefined letiables
    *************************************************************/
    

    // Dom Ready
    $(function($) {
        new HeroSlider;
        new CarouselProductList;
        new ProductSingleTabContent;
        new ProductSlider;
        new PopOver;
        // ajaxLogin();
        new FilterCategory;
        new OrderBy;
        new LazyLoadW;
        new Modal;
        new AccountDashboard();
        new ProductAction();
        // bindLoad();
        // blogLoader();
        // actionAddToCart();
    });
})(jQuery);