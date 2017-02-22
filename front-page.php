<?php
/*
  Template Name: Front Page
*/
?>

<?php get_header(); ?>

<div class="hero">
  <div class="hero-content">
    <p>exoterismo..fitoterapia
      ...holistica...contemplación de astros....detox
    fuego al aire libre....recogida de alimentos silvestres...
    </p>
  </div>
</div>


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
