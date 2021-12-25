<?php 
/**
 * Use ACF image field as avatar
 * @author Mike Hemberger
 * @link https://thestizmedia.com/acf-pro-simple-local-avatars/
 * @uses ACF Pro image field (tested return value set as Array )
 */

if( function_exists('acf_add_local_field_group') ) {
    acf_add_local_field_group(array(
     'key' => 'group_5da28051723f3',
     'title' => 'User Profile',
     'fields' => array(
         array(
             'key' => 'field_5da28059f0cd8',
             'label' => 'Profile Avatar',
             'name' => '_profile_local_avatar',
             'type' => 'image',
             'instructions' => '',
             'required' => 0,
             'conditional_logic' => 0,
             'wrapper' => array(
                 'width' => '',
                 'class' => '',
                 'id' => '',
             ),
             'return_format' => 'array',
             'preview_size' => 'thumbnail',
             'library' => 'all',
             'min_width' => '',
             'min_height' => '',
             'min_size' => '',
             'max_width' => '',
             'max_height' => '',
             'max_size' => '',
             'mime_types' => '',
         ),
     ),
     'location' => array(
         array(
             array(
                 'param' => 'user_form',
                 'operator' => '==',
                 'value' => 'edit',
             ),
         ),
     ),
     'menu_order' => 0,
     'position' => 'normal',
     'style' => 'default',
     'label_placement' => 'top',
     'instruction_placement' => 'label',
     'hide_on_screen' => '',
     'active' => 1,
     'description' => '',
    ));

    add_filter('get_avatar', 'feature_x_acf_profile_avatar', 10, 6);
    function feature_x_acf_profile_avatar( $avatar, $id_or_email, $size, $default, $alt, $args = null ) {

        $user = '';
        
        // Get user by id or email
        if ( is_numeric( $id_or_email ) ) {
            $id   = (int) $id_or_email;
            $user = get_user_by( 'id' , $id );
        } elseif ( is_object( $id_or_email ) ) {
            if ( ! empty( $id_or_email->user_id ) ) {
                $id   = (int) $id_or_email->user_id;
                $user = get_user_by( 'id' , $id );
            }
        } else {
            $user = get_user_by( 'email', $id_or_email );
        }
        if ( ! $user ) {
            return $avatar;
        }
        // Get the user id
        $user_id = $user->ID;
        // Get the file id
        $image_id = get_user_meta($user_id, '_profile_local_avatar', true); // CHANGE TO YOUR FIELD NAME
        // Bail if we don't have a local avatar
        if ( ! $image_id ) {
            return $avatar;
        }
        // Get the file size
        $image_url  = wp_get_attachment_image_src( $image_id, 'thumbnail' ); // Set image size by name
        // Get the file url
        $avatar_url = $image_url[0];
        // Get the img markup

        $class = array( 'avatar', 'avatar-' . $size );
        
        
        if ( $args['class'] ) {
            if ( is_array( $args['class'] ) ) {
                $class = array_merge( $class, $args['class'] );
            } else {
                $class[] = $args['class'];
            }
        }

        $avatar = '<img alt="' . $alt . '" src="' . $avatar_url . '" class="' . esc_attr( join( ' ', $class ) ) . '" height="' . $size . '" width="' . $size . '"/>';
        
        // Return our new avatar
        return $avatar;
    }

    add_filter('get_avatar_url', 'feature_x_acf_profile_avatar_url', 10, 6);
    function feature_x_acf_profile_avatar_url( $avatar, $id_or_email, $args = null ) {

        $user = '';
        
        // Get user by id or email
        if ( is_numeric( $id_or_email ) ) {
            $id   = (int) $id_or_email;
            $user = get_user_by( 'id' , $id );
        } elseif ( is_object( $id_or_email ) ) {
            if ( ! empty( $id_or_email->user_id ) ) {
                $id   = (int) $id_or_email->user_id;
                $user = get_user_by( 'id' , $id );
            }
        } else {
            $user = get_user_by( 'email', $id_or_email );
        }
        if ( ! $user ) {
            return $avatar;
        }
        // Get the user id
        $user_id = $user->ID;
        // Get the file id
        $image_id = get_user_meta($user_id, '_profile_local_avatar', true); // CHANGE TO YOUR FIELD NAME
        // Bail if we don't have a local avatar
        if ( ! $image_id ) {
            return $avatar;
        }
        // Get the file size
        $image_url  = wp_get_attachment_image_url( $image_id, 'thumbnail' ); // Set image size by name
        // Get the file url

        // Return our new avatar
        return $image_url;
    }
}