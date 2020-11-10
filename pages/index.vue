<template>
  <div class="page">
    <div class="layout-box">
      <h1>Minimalist</h1>
      <h4>powered by christopher</h4>
      <ui-menu-nav />
      <hr>
      <div>
        <h5>Blog</h5>
        <div class="grows">
          <ui-post-resume />
          <ui-post-resume />
          <ui-post-resume />
        </div>
        <hr>
      </div>
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
