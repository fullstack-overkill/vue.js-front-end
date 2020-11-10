<template>
  <nav class="nav">
    <NuxtLink
      v-for="(page, index) in pages"
      :key="page.name"
      :to="page.url"
      ondragstart="return false;"
      ondrop="return false;"
    >
      {{ page.name }} <i v-if="pages[index+1]" class="fas fa-circle" />
    </NuxtLink>
  </nav>
</template>

<script >
export default {
  data () {
    return {
      pages: [
        { name: 'Blog', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Projects', url: '/projects' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped >
  @import './style.styl';
</style>
