<?php 

/**
 * Add menu meta box
 *
 * @param object $object The meta box object
 * @link https://developer.wordpress.org/reference/functions/add_meta_box/
 */
function bbs_custom_add_menu_meta_box_product_cat( $object ) {
	add_meta_box( 'bbs_custom_menu_meta_box_product_cat', __('Quản lý danh mục sản phẩm', 'bbs'), 'bbs_custom_menu_meta_box_product_cat', 'nav-menus', 'side', 'default' );
	return $object;
}
add_filter( 'nav_menu_meta_box_object', 'bbs_custom_add_menu_meta_box_product_cat', 10, 1);
/**
 * Displays a metabox for authors menu item.
 *
 * @global int|string $nav_menu_selected_id (id, name or slug) of the currently-selected menu
 *
 * @link https://core.trac.wordpress.org/browser/tags/4.5/src/wp-admin/includes/nav-menu.php
 * @link https://core.trac.wordpress.org/browser/tags/4.5/src/wp-admin/includes/class-walker-nav-menu-edit.php
 * @link https://core.trac.wordpress.org/browser/tags/4.5/src/wp-admin/includes/class-walker-nav-menu-checklist.php
 */
function bbs_custom_menu_meta_box_product_cat(){
	$box['args'] = (object) array('name' => 'product_cat');

	// hàm này ở file _x_metabox_for_navmenu_wp_libs
	d_nav_menu_item_taxonomy_meta_box( '', $box );

}


// được custom chỉnh sửa từ hàm của WP wp_nav_menu_item_taxonomy_meta_box
function d_nav_menu_item_taxonomy_meta_box( $object, $box ) {
    global $nav_menu_selected_id;
    $taxonomy_name = $box['args']->name;
    $taxonomy      = get_taxonomy( $taxonomy_name );
 
    // Paginate browsing for large numbers of objects.
    $per_page = 50;
    $pagenum  = isset( $_REQUEST[ $taxonomy_name . '-tab' ] ) && isset( $_REQUEST['paged'] ) ? absint( $_REQUEST['paged'] ) : 1;
    $offset   = 0;
 
    $args = array(
        'taxonomy'     => $taxonomy_name,
        'child_of'     => 0,
        // 'exclude'      => '',
        'hide_empty'   => false,
        'hierarchical' => 1,
        // 'include'      => '',
        // 'number'       => $per_page,
        // 'offset'       => $offset,
        // 'order'        => 'ASC',
        'orderby'      => 'menu_order',
        // 'pad_counts'   => false,
    );
 
    $terms = get_terms( $args );
 
    if ( ! $terms || is_wp_error( $terms ) ) {
        echo '<p>' . __( 'No items.' ) . '</p>';
        return;
    }
 
    $num_pages = ceil(
        wp_count_terms(
            $taxonomy_name,
            array_merge(
                $args,
                array(
                    'number' => '',
                    'offset' => '',
                )
            )
        ) / $per_page
    );
 
    $page_links = paginate_links(
        array(
            'base'               => add_query_arg(
                array(
                    $taxonomy_name . '-tab' => 'all',
                    'paged'                 => '%#%',
                    'item-type'             => 'taxonomy',
                    'item-object'           => $taxonomy_name,
                )
            ),
            'format'             => '',
            'prev_text'          => '<span aria-label="' . esc_attr__( 'Previous page' ) . '">' . __( '&laquo;' ) . '</span>',
            'next_text'          => '<span aria-label="' . esc_attr__( 'Next page' ) . '">' . __( '&raquo;' ) . '</span>',
            'before_page_number' => '<span class="screen-reader-text">' . __( 'Page' ) . '</span> ',
            'total'              => $num_pages,
            'current'            => $pagenum,
        )
    );
 
    $db_fields = false;
    if ( is_taxonomy_hierarchical( $taxonomy_name ) ) {
        $db_fields = array(
            'parent' => 'parent',
            'id'     => 'term_id',
        );
    }
 
    $walker = new Walker_Nav_Menu_Checklist( $db_fields );
 
    $current_tab = 'all';
    if ( isset( $_REQUEST[ $taxonomy_name . '-tab' ] ) && in_array( $_REQUEST[ $taxonomy_name . '-tab' ], array( 'all', 'most-used', 'search' ) ) ) {
        $current_tab = $_REQUEST[ $taxonomy_name . '-tab' ];
    }
 
    if ( ! empty( $_REQUEST[ 'quick-search-taxonomy-' . $taxonomy_name ] ) ) {
        $current_tab = 'search';
    }
 
    $removed_args = array(
        'action',
        'customlink-tab',
        'edit-menu-item',
        'menu-item',
        'page-tab',
        '_wpnonce',
    );
 
    $most_used_url = '';
    $view_all_url  = '';
    $search_url    = '';
    if ( $nav_menu_selected_id ) {
        $most_used_url = esc_url( add_query_arg( $taxonomy_name . '-tab', 'most-used', remove_query_arg( $removed_args ) ) );
        $view_all_url  = esc_url( add_query_arg( $taxonomy_name . '-tab', 'all', remove_query_arg( $removed_args ) ) );
        $search_url    = esc_url( add_query_arg( $taxonomy_name . '-tab', 'search', remove_query_arg( $removed_args ) ) );
    }
    ?>
    <div id="taxonomy-<?php echo $taxonomy_name; ?>" class="taxonomydiv">
        <ul id="taxonomy-<?php echo $taxonomy_name; ?>-tabs" class="taxonomy-tabs add-menu-item-tabs">
            <li <?php echo ( 'most-used' == $current_tab ? ' class="tabs"' : '' ); ?>>
                <a class="nav-tab-link" data-type="tabs-panel-<?php echo esc_attr( $taxonomy_name ); ?>-pop" href="<?php echo $most_used_url; ?>#tabs-panel-<?php echo $taxonomy_name; ?>-pop">
                    <?php echo esc_html( $taxonomy->labels->most_used ); ?>
                </a>
            </li>
            <li <?php echo ( 'all' == $current_tab ? ' class="tabs"' : '' ); ?>>
                <a class="nav-tab-link" data-type="tabs-panel-<?php echo esc_attr( $taxonomy_name ); ?>-all" href="<?php echo $view_all_url; ?>#tabs-panel-<?php echo $taxonomy_name; ?>-all">
                    <?php _e( 'View All', 'bbs' ); ?>
                </a>
            </li>
            <li <?php echo ( 'search' == $current_tab ? ' class="tabs"' : '' ); ?>>
                <a class="nav-tab-link" data-type="tabs-panel-search-taxonomy-<?php echo esc_attr( $taxonomy_name ); ?>" href="<?php echo $search_url; ?>#tabs-panel-search-taxonomy-<?php echo $taxonomy_name; ?>">
                    <?php _e( 'Search' ); ?>
                </a>
            </li>
        </ul><!-- .taxonomy-tabs -->
 
        <div id="tabs-panel-<?php echo $taxonomy_name; ?>-pop" class="tabs-panel <?php echo ( 'most-used' == $current_tab ? 'tabs-panel-active' : 'tabs-panel-inactive' ); ?> ">
            <ul id="<?php echo $taxonomy_name; ?>checklist-pop" class="categorychecklist form-no-clear" >
                <?php
                $popular_terms  = get_terms(
                    array(
                        'taxonomy'     => $taxonomy_name,
                        'orderby'      => 'menu_order',
                        'order'        => 'DESC',
                        'number'       => 10,
                        'hierarchical' => false,
                    )
                );
                $args['walker'] = $walker;
                echo walk_nav_menu_tree( array_map( 'wp_setup_nav_menu_item', $popular_terms ), 0, (object) $args );
                ?>
            </ul>
        </div><!-- /.tabs-panel -->
 
        <div id="tabs-panel-<?php echo $taxonomy_name; ?>-all" class="tabs-panel tabs-panel-view-all <?php echo ( 'all' == $current_tab ? 'tabs-panel-active' : 'tabs-panel-inactive' ); ?> ">
            <ul id="<?php echo $taxonomy_name; ?>checklist" data-wp-lists="list:<?php echo $taxonomy_name; ?>" class="categorychecklist form-no-clear">
                <?php
                $args['walker'] = $walker;
                echo walk_nav_menu_tree( array_map( 'wp_setup_nav_menu_item', $terms ), 0, (object) $args );
                ?>
            </ul>
        </div><!-- /.tabs-panel -->
 
        <div class="tabs-panel <?php echo ( 'search' == $current_tab ? 'tabs-panel-active' : 'tabs-panel-inactive' ); ?>" id="tabs-panel-search-taxonomy-<?php echo $taxonomy_name; ?>">
            <?php
            if ( isset( $_REQUEST[ 'quick-search-taxonomy-' . $taxonomy_name ] ) ) {
                $searched       = esc_attr( $_REQUEST[ 'quick-search-taxonomy-' . $taxonomy_name ] );
                $search_results = get_terms(
                    array(
                        'taxonomy'     => $taxonomy_name,
                        'name__like'   => $searched,
                        'fields'       => 'all',
                        'orderby'      => 'count',
                        'order'        => 'DESC',
                        'hierarchical' => false,
                    )
                );
            } else {
                $searched       = '';
                $search_results = array();
            }
            ?>
            <p class="quick-search-wrap">
                <label for="quick-search-taxonomy-<?php echo $taxonomy_name; ?>" class="screen-reader-text"><?php _e( 'Search' ); ?></label>
                <input type="search" class="quick-search" value="<?php echo $searched; ?>" name="quick-search-taxonomy-<?php echo $taxonomy_name; ?>" id="quick-search-taxonomy-<?php echo $taxonomy_name; ?>" />
                <span class="spinner"></span>
                <?php submit_button( __( 'Search' ), 'small quick-search-submit hide-if-js', 'submit', false, array( 'id' => 'submit-quick-search-taxonomy-' . $taxonomy_name ) ); ?>
            </p>
 
            <ul id="<?php echo $taxonomy_name; ?>-search-checklist" data-wp-lists="list:<?php echo $taxonomy_name; ?>" class="categorychecklist form-no-clear">
            <?php if ( ! empty( $search_results ) && ! is_wp_error( $search_results ) ) : ?>
                <?php
                $args['walker'] = $walker;
                echo walk_nav_menu_tree( array_map( 'wp_setup_nav_menu_item', $search_results ), 0, (object) $args );
                ?>
            <?php elseif ( is_wp_error( $search_results ) ) : ?>
                <li><?php echo $search_results->get_error_message(); ?></li>
            <?php elseif ( ! empty( $searched ) ) : ?>
                <li><?php _e( 'No results found.' ); ?></li>
            <?php endif; ?>
            </ul>
        </div><!-- /.tabs-panel -->
 
        <p class="button-controls wp-clearfix" data-items-type="taxonomy-<?php echo esc_attr( $taxonomy_name ); ?>">
            <span class="list-controls hide-if-no-js">
                <input type="checkbox" id="<?php echo esc_attr( $taxonomy_name . '-tab' ); ?>" class="select-all" />
                <label for="<?php echo esc_attr( $taxonomy_name . '-tab' ); ?>"><?php _e( 'Select All' ); ?></label>
            </span>
 
            <span class="add-to-menu">
                <input type="submit"<?php wp_nav_menu_disabled_check( $nav_menu_selected_id ); ?> class="button submit-add-to-menu right" value="<?php esc_attr_e( 'Add to Menu' ); ?>" name="add-taxonomy-menu-item" id="<?php echo esc_attr( 'submit-taxonomy-' . $taxonomy_name ); ?>" />
                <span class="spinner"></span>
            </span>
        </p>
 
    </div><!-- /.taxonomydiv -->
    <?php
}