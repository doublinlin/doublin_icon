<template >
  <input 
    type="search" 
    id="search" 
    class="form-control" 
    placeholder="搜尋..."
    v-model="term" 
    @keypress.enter="search(term)">
</template>

<script>
export default {
  props: [
    'search',
  ],
  data () {
    return {
      term: '',
    }
  }
}
</script>

<style scoped>
.form-control {
    border: 1px solid #ffffff;
}
</style>