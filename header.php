<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php  bloginfo( 'name' ); wp_title('|', true, 'left'); ?></title>

	<?php wp_head(); ?>

  </head>

  <body <?php body_class(); ?>>

    <header class="header">
  		<div class="header-logo-title">
        <a class='current' href="<?php echo home_url(); ?>">
  	       <img src="http://localhost/wordpress/wp-content/themes/anunnaki/app/img/pajarin2.png" alt="Logo Image" class="logo">
  			   <h1 class="site-title"><?php bloginfo('name'); ?></h1>
        </a>
  		</div>

    <?php

    	$defaults = array(

    		'container' => false,
    		'theme_location' => 'primary-menu',
    		'menu_class' => 'main-nav'
    	);

    	wp_nav_menu( $defaults );

    ?>
<!--
    <ul class="no-bullet">
      <li class="current parent"><a class='current' href="index.html">Portfolio</a>
        <ul class="sub-menu">
          <li><a href="item.html">Portfolio Item</a></li>
          <li><a href="item.html">Portfolio Item</a></li>
          <li><a href="item.html">Portfolio Item</a></li>
          <li><a href="item.html">Portfolio Item</a></li>
        </ul>
      </li>
      <li class="parent"><a href="blog.html">Blog</a>
        <ul class="sub-menu">
          <li><a href="single-post.html">Single Post</a></li>
          <li><a href="author.html">Author Page</a></li>
        </ul>
      </li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
-->
</header>
