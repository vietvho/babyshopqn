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