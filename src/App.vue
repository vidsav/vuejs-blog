<template>
  <div>
      <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'

export default {
  name: 'App',
  components: {
    'add-blog': addBlog
  }
}
</script>

<style>

</style>
