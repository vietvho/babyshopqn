export default class LazyLoadW {
  constructor(){
    var lazyImages = '';
    var inAdvance = 300;
    var isActionLoad = false;
    this.lazyLoad(true);
    this.bindEvent();
  }

  lazyLoad(is_manual) {
    let lazyImages = [...document.querySelectorAll('.lazy-img')];
    lazyImages.forEach(image => {
      if (window.getComputedStyle(image).display !== "none") {
          isActionLoad = false;
          if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvance) {
            isActionLoad = true;
          }
          if(is_manual) {
            isActionLoad = true; 
          } 
          if(isActionLoad) {
            image.src = image.dataset.src;
            // console.log(image.src);
            if(image.dataset.alt) {
              image.alt = image.dataset.alt;
            }

            image.onload = () => image.classList.add('loaded');
            image.classList.remove("lazy-img");
          }

      }
    }); // if all loaded removeEventListener
  }


  bindEvent(){
    window.addEventListener('scroll', this.lazyLoad());
    window.addEventListener('resize', this.lazyLoad());
    window.addEventListener("orientationchange", this.lazyLoad());
    document.addEventListener("DOMContentLoaded", this.lazyLoadV2() );
    document.addEventListener("scroll", this.lazyLoadV2());
    window.addEventListener("resize",this.lazyLoadV2());
    window.addEventListener("orientationchange", this.lazyLoadV2());
    this.lazyLoadBg();
    window.addEventListener('scroll', this.lazyLoadBg());
    window.addEventListener('resize', this.lazyLoadBg());
  }

  // Image Lazyload
  // This goes in the JS file
  lazyLoadV2() {
    let lazyImages = [].slice.call(document.querySelectorAll(".lazy-img-v2"));
    let active = false;

    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          // Checking if the user has scrolled enough
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy-img");

            if(lazyImage.dataset.alt) {
              lazyImage.alt = lazyImage.dataset.alt;
            }

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            // No need to use the event listeners if there are no images to be lazy loaded
            // if (lazyImages.length === 0) {
            //   document.removeEventListener("scroll", lazyLoadV2);
            //   window.removeEventListener("resize", lazyLoadV2);
            //   window.removeEventListener("orientationchange", lazyLoadV2);
            // }
          }
        });

        active = false;
      }, 250);
    }
  }

  lazyLoadBg() {
      // Background
    let lazyImagesBg = [...document.querySelectorAll('[data-lazybgimg]')];
    let inAdvanceBg = 300;
    lazyImagesBg.forEach(image => {
      if (window.getComputedStyle(image).display !== "none") {
          if (image.offsetTop < window.innerHeight + window.pageYOffset + inAdvanceBg) {
            
            image.style.backgroundImage = "url('" + image.dataset.lazybgimg + "')";
            
            image.onload = () => image.classList.add('loaded');
          }
      }
    }); // if all loaded removeEventListener
  }
  
}