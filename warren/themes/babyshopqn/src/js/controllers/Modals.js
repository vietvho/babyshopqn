export default class Modal {
    constructor(){
        const Wcookies = require("../lib/cookie");
        this.showModal(Wcookies);

        // console.log()
    }

    showModal(Wcookies) {
            var elmstr = '.c-modal';
        
            // Cookie
            jQuery(elmstr + '[data-usercookie]').each((i,v)=>{
                var _id_modal = 'modal_id_' + i;
                v.setAttribute('data-idmodal', _id_modal);
                if(Wcookies.getCookie(_id_modal) === false) {
                    setTimeout(function(){v.classList.add('show'); }, 30000);
                }
            });
        
        
            jQuery(elmstr + '__close').on('click',function(e){
                jQuery(this).closest(elmstr).removeClass('show');
                var _id_modal = jQuery(this).closest(elmstr).data('idmodal');
                var _type = jQuery(this).closest(elmstr).data('usercookie');
                if(_type) {
                    Wcookies.setCookie(_id_modal, 'close', _type);
                }
            });
            
            jQuery(document).mouseup(function(e) {
                var container = jQuery(elmstr + '__container');
                // if the target of the click isn't the container nor a descendant of the container
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    jQuery(e.target).removeClass('show')
                }
            });
    }
}