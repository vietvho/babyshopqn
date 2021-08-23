
export default class Modal {
    constructor(){
        this.showModal();
    }

    showModal() {
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
}