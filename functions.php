<?php

add_theme_support( 'menus' );
add_theme_support( 'post-thumbnails' );

function wpt_excerpt_length( $length ) {

	return 16;
}
add_filter( 'excerpt_length', 'wpt_excerpt_length', 999 );

function register_theme_menus() {

	register_nav_menus(

		array(
			'primary-menu' => __( 'Primary Menu' )
		)
	);

}
add_action( 'init', 'register_theme_menus' );

function wpt_create_widget( $name, $id, $description ) {

	register_sidebar(array(
		'name' => __( $name ),
		'id' => $id,
		'description' => __( $description ),
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<h2 class="module-heading">',
		'after_title' => '</h2>'
	));

}
wpt_create_widget( 'Page Sidebar', 'page', 'Displays on the side of pages with a sidebar' );
wpt_create_widget( 'Blog Sidebar', 'blog', 'Displays on the side of pages in the blog section' );

function wpt_theme_js() {
//
// 	wp_enqueue_script( 'jQuery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js', '', '', true );
// 	wp_enqueue_script( 'modernizr_js', get_template_directory_uri() . '/js/modernizr.js', '', '', true );
// 	wp_enqueue_script( 'foundation_js', get_template_directory_uri() . '/js/foundation.min.js', '', '', true );
// 	wp_enqueue_script( 'main_js', get_template_directory_uri() . '/js/app.js', '', '', true );
	wp_enqueue_script( 'slider_js', get_template_directory_uri() . '/app/js/slider.js', '', '', true );
 }
add_action( 'wp_enqueue_scripts', 'wpt_theme_js' );

function wpt_theme_styles() {

	//wp_enqueue_style( 'foundation_css', get_template_directory_uri() . '/css/foundation.css' );
	wp_enqueue_style( 'icons', get_template_directory_uri() .
	'/app/icons/icon-styles.css' );
	wp_enqueue_style( 'googlefonts_css', 'https://fonts.googleapis.com/css?family=Catamaran|Inconsolata|Indie+Flower|Open+Sans|Oxygen|Permanent+Marker|Quicksand|Roboto' );
	wp_enqueue_style( 'main_css', get_template_directory_uri() .
	'/app/production/css/main.min.css' );
}
add_action( 'wp_enqueue_scripts', 'wpt_theme_styles' );


?>
