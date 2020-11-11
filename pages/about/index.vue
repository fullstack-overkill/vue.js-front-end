<template>
  <div class="page">
    <div class="layout-box">
      <h1>Minimalist</h1>
      <h4>powered by christopher</h4>
      <ui-menu-nav />
      <hr>
      <h5>About</h5>
      <main class="grows">
        <main>
          <p>
            I created this blog to test my abilities with vue.js and UX.
            Everything was thought to be done most simply and intuitively
            possible Thanks for the visit.
          </p>
          <br>
          <p>Enjoy the blog  : )</p>
        </main>
        <section>
          <div>
            <a target="_blank" href="https://github.com/fullstack-overkill">
              <img
                src="~/assets/imgs/github-icon.png"
                alt="Github logo"
                ondragstart="return false;"
                ondrop="return false;"
              >
              My Github
            </a>
          </div>
        </section>
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
