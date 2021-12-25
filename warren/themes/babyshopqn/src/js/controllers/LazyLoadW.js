export default class LazyLoadW {
  constructor(){   
    this.lazyLoad(true);
    this.bindEvent();
    this.renderSVG();
  }

  renderSVG() {
    // Select the current image.
    let images = document.querySelectorAll('img[src*=".svg"]');
    for(let i=0; i<images.length ; i++) {
    // Create a new dom parser to turn the SVG string into an element.
    const parser = new DOMParser();

    // Fetch the file from the server.
    fetch(images[i].getAttribute("src"))
      .then(response => response.text())
      .then(text => {

        // Turn the raw text into a document with the svg element in it.
        const parsed = parser.parseFromString(text, 'text/html');

        // Select the <svg> element from that document.
        const svg = parsed.querySelector('svg');

        // If both the image and svg are found, replace the image with the svg.
        if (images[i] !== null && svg !== null) {
        svg.setAttribute("class",images[i].getAttribute("class"));
          images[i].replaceWith(svg);
        }

      });
    }
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