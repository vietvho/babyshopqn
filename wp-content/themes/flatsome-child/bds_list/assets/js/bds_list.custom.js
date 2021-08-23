jQuery(function($) {
    function setLand(land, _this) {
        const landElement = $(`
	  <div class="land" >
	    <div class="land-content">
	      <div class="thumbnail" style="background-image: url(${land.thumbnail})">
	          ${land.title}
	      </div>
	      <div class="detail">
	        <h3>${land.title}</h3>
	        <div class="bds_badges">
	          <span class="bds_badge ${land.status_class}">${land.status}</span>
	          <span class="bds_badge ${land.legal_class}">${land.legal}</span>
	          <span class="bds_badge">${land.type}</span>
	        </div>
	        <div class="location">${land.address}</div>
	      </div>
	    </div>
	  </div>`);
        landElement.on('click', function() {
            const modalHeading = `<h2 class="land-title">${land.heading}</h2>`;
            let modalBody = '';
            if (land.gallery.length > 0) {
                let galleryContent = `<div class="land__gallery">`;
                land.gallery.forEach((gallery) => {
                    galleryContent += `
	        <div class='land__gallery_item'>
	          <a href="${gallery}"  style="background-image: url(${gallery})" data-fancybox="gallery" data-options='{"thumb":"${gallery}","loop":1,"thumbs":{"autoStart":1,"axis":"x"},"buttons":["fullScreen","download","thumbs","close"]}'>
	            Hình ảnh
	          </a>
	        </div>
	      `
                })
                galleryContent += `</div>`;
                modalBody += galleryContent;
            }
            modalBody += land.content;
            modalBody = `
	    <div class="land-body">
	      ${modalBody}
	    </div>`;
            const modalFooter = `
	    <div class="land-footer">
	    </div>`;
            const modalContent = `${modalHeading}${modalBody}${modalFooter}`;
            _this.find(".land-modal-content").html(modalContent);
            _this.find(".bds_modal").addClass('active');
        })
        _this.find('.list-item').append(landElement);
    }

    function getLands(page, this_btn_more = false) {
        var loading = `<span class="loading"><span class="lds-ellipsis"><span></span><span></span><span></span><span></span></span></span>`;
        var _bds_list = $('.bds_list');
        if (this_btn_more !== false) {
            _bds_list = this_btn_more.parents('.bds_list');
        }

        _bds_list.each(function() {
            const _this = $(this),
                _data_npost = _this.attr('data-npost'),
                _data_datnen_slug = _this.attr('data-datnen_slug')
            	_data_bds_id = _this.attr('data-bds_id');
		
	        _this.find('.list-item').append(loading);

	        $.ajax({
	            url: wp_ajax.url,
	            data: {
	                action: 'bdslistloadmore',
	                page: page,
	                post: landPageId,
	                data_npost: _data_npost,
	                data_datnen_slug: _data_datnen_slug,
	                data_bds_id: _data_bds_id,
	            },
	            type: "application/json",
	            type: 'POST',
	            success: function(result) {
	                const data = JSON.parse(result);

	                const _this_bds_id = $(`.bds_list[data-bds_id="${data.meta.bds_id}"]`);
	                data.data.forEach((land) => {
	                    setLand(land, _this_bds_id);
	                });
	                if (data.meta.current_page < data.meta.last_page) {
	                    var countMore = data.meta.total - (data.meta.current_page * data.meta.postperpage);
	                    var moreButton = `<div class="view-more"><a class="more" data-paged="${data.meta.current_page}" href="javascript:void(0);">
				            Xem thêm ${countMore} bất động sản khác 
				            <i class="icofont-thin-double-right"></i>
				          </a>
				        </div>`;
	                    _this_bds_id.find('.list-item').append(moreButton);
	                }

	            },
	            error: function(err) {
	                _this_bds_id.find('.list-item').append(err.responseText);
	            }
	        }).always(() => {
	            _this.find('.loading').remove();
	        });


        });


    }
    $(".outside-trigger, .close-modal").click(function(event) {
        event.preventDefault();
        $(this).parents(".bds_modal").removeClass('active');
    })
    $('[data-fancybox="albums"]').fancybox({ thumbs: { autoStart: true, axis: 'x' } });
    

    $(".list-item").on("click", ".view-more a", function(e) {
        var button = $(this),
            view_more = $(this).closest(".view-more");
        const paged = button.data("paged");


        // Load more and Remove this button
        getLands(paged, button);
        view_more.remove();
    });

    getLands(0);
});