<?php
/*
  Template Name: Front Page
*/
?>

<?php get_header(); ?>

<div class="hero">
  <img src="<?php echo get_template_directory_uri() .
  '/app/img/album/slider1.jpeg' ?>"
  alt="anunnaki" id="im2" class="slider-img out">
  <img src="<?php echo get_template_directory_uri().
  '/app/img/album/slider2.jpeg' ?>"
  alt="anunnaki" id="im2" class="slider-img out">
  <img src="<?php echo get_template_directory_uri().
  '/app/img/album/slider3.jpeg' ?>"
  alt="anunnaki" id="im2" class="slider-img out">

  <div class="hero-content">
    <p>exoterismo..fitoterapia
      ...holistica...contemplación de astros....detox
    fuego al aire libre....recogida de alimentos silvestres...
    </p>
  </div>
</div>

<?php include('front_page_modules/_intereses.php'); ?>

<section id="cta-section1" class="cta-section">
    <div class="cta">
      <h3>Que te apetece hacer?</h3>
      <div class="cta-buttons-wrapper">
        <button class="cta-button">Conocer quien somos</button>
        <button class="cta-button">Saber que ofrecemos</button>
        <button class="cta-button">Ver las fotos</button>
      </div>
    </div>
</section>

<?php include('front_page_modules/_fotos.php'); ?>

<?php include('front_page_modules/_about.php'); ?>

    <section class="row">
      <div class="small-12 columns text-center">
        <div class="leader">

        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

          <h1><?php the_title(); ?></h1>
          <p><?php the_content(); ?></p>

	        <?php endwhile; endif; ?>

        </div>
      </div>
    </section>

<?php get_template_part( 'content', 'portfolio' ); ?>

<?php get_footer(); ?>
