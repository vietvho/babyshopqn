export default class Modal {
    constructor(){
        const Wcookies = require("../lib/cookie");
        this.showModal(Wcookies, ".c-modal");
        this.modalTrigger();
    }

    showModal(Wcookies, elmstr) {
        if (!elmstr) {
            elmstr = '.c-modal';
        }
        
        // Cookie
        jQuery(`${elmstr}[data-usercookie]`).each((i,v)=>{
            const idModal = `modal_id_${i}`;
            v.setAttribute('data-idmodal', idModal);
            
            if(Wcookies.getCookie(idModal) === false) {
                setTimeout(function(){v.classList.add('show'); }, 30000);
            }
        });
    
    
        jQuery(`${elmstr}__close`).on('click',function(e){
            jQuery(this).closest(elmstr).removeClass('show');
            const idModal = jQuery(this).closest(elmstr).data('idmodal');
            const usercookie = jQuery(this).closest(elmstr).data('usercookie');
            
            if(usercookie) {
                Wcookies.setCookie(idModal, 'close', usercookie);
            }
        });
        
        jQuery(document).mouseup(function(e) {
            var container = jQuery(`${elmstr}__container`);
            
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                jQuery(e.target).removeClass('show')
            }
        });
    }

    modalTrigger(){
        jQuery('.c-btn--show-modal').on('click',function(){
            const el = jQuery(this),targetModal = el.data('target');
            if (targetModal && jQuery(targetModal).length >0){
                jQuery(targetModal).addClass('show');
            }
        });

        jQuery('.c-btn--close-modal').on('click',function(){
            const currentModal = jQuery(this).parents('.c-modal');
            currentModal.removeClass('show');
        })
    }
}