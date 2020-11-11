<template>
  <div class="page">
    <div class="layout-box">
      <nav>
        <NuxtLink to="/">
          <i class="fas fa-arrow-left" />
          <span>
            back to list
          </span>
        </NuxtLink>
      </nav>
      <hr>
      <main class="grows">
        <div>
          <h2>Teste</h2>
          <span>Posted on 13/10/2020</span>
        </div>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce pretium magna vel commodo tincidunt.
          Cras nec quam a velit dapibus lacinia. Morbi semper iaculis ornare.
          Sed sit amet mi pulvinar, venenatis sapien at, lacinia justo.
          Etiam scelerisque libero vel tortor sagittis maximus vel vel
          mauris. Nam nisi sem, varius ut bibendum sit amet, euismod
          a enim. Duis auctor scelerisque orci. Vivamus ut quam consectetur,
          tempor tellus sit amet, tempus libero. Nullam maximus,
          enim et vehicula porta, eros metus viverra arcu, ut
          mollis elit erat et odio. Nulla ultrices malesuada
          ipsum. Duis laoreet erat quis metus ultrices, eu
          rhoncus dolor consectetur. Aenean tristique ultricies
          hendrerit. Nullam vel ipsum ut enim feugiat rutrum.
        </article>
      </main>
      <hr>
    </div>
  </div>
</template>

<script>

export default {
  comments: { }
}
</script>

<style lang="stylus" scoped>
  @import './style.styl';
</style>
