export default class AccountDashboard {
    constructor(){
        this.accEdit = document.getElementsByClassName("edit");
        this.elActive = document.querySelector('.woocommerce-MyAccount-navigation .is-active');
        this.editToggle();
        this.myAccountNav() ;
    }
    
    editToggle() {
        for (let i = 0; i < this.accEdit.length; i++) {
            this.accEdit[i].addEventListener("click", function() {
                /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel */
                const li = this.closest('li'), editItem = li.querySelector('.edit-account--item'), liContainer = li.closest('ul'),editItems = liContainer.querySelectorAll('.edit-account--item');
                /* Toggle between hiding and showing the active panel */
                const panel =  li.querySelector('.panel');
               
                if ( editItem.classList.contains('active')){
                    this.removeClassName(editItems,'active');
                    editItem.classList.remove('active');
                    panel.classList.remove('active');
                }
                else {
                    this.removeClassName(editItems,'active');
                    editItem.classList.add('active');
                    panel.classList.add('active');
                }
               
            });
        }
    }

    myAccountNav() {
        if (this.elActive){
            this.elActive.addEventListener('click',function(e){
                e.preventDefault();
                this.parentElement.parentElement.classList.toggle('expand');
            })
        }
    }
   
}
