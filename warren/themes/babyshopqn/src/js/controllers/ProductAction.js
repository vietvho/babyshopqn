export default class ProductAction {
    constructor() {
        this.elements = document.querySelectorAll('.product-quickview');
        this.formView = document.querySelector('#formView');
        this.contentView = this.formView.querySelector('.content-view');
        this.ajaxRefer = document.querySelector('head meta[name="security_ajax_refer"]').getAttribute("content");
        if (this.elements.length >0){
            this.actionClickView();
        }
    }

    actionClickView () {
        const ajaxRefer = this.ajaxRefer, formView = this.formView, contentView =this.contentView;
        const root = document.getElementsByTagName( 'html' )[0];

        for (let i =0; i<this.elements.length; i++){
            this.elements[i].addEventListener("click",function() {
               root.classList.add('ajaxLoading');
               console.log(this);
                var formData = new FormData();
                formData.append( 'action', 'actionClickView' );
                formData.append( 'data', this.dataset.id );
                formData.append( 'security',  ajaxRefer);

                fetch( bbs_theme_ajaxurl, {
                    method: 'POST',
                    body: formData,
                } ) // wrapped
                    .then( res => res.text() )
                    .then( data =>  {
                        console.log(data);
                        console.log(formView);
                        data = data.replace('type="text" class="datepicker"', 'type="date" class="datepicker"');
                        contentView.innerHTML = data; 
                        formView.classList.add('show');
                        root.classList.remove('ajaxLoading');
                    })
                    .catch( err => console.log( err ) );
            })
        }
    }
}