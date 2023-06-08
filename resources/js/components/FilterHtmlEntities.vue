<template>
<div class="row g-2 row-cols-lg-1 row-cols-md-5 row-cols-sm-4 row-cols-3 mb-3">
  <div class="col"
      v-for="filter in filters"
      :key="filter">
    <button 
      class="btn btn-light w-100"
      @click="() => filterHtmlEntities(filter)">
      {{ filter }}
    </button>
  </div>
</div>
</template>

<script>
const filters = [
  '全部',
  'arrows',
  'currency',
  'letters',
  'math',
  'numbers',
  'punctuation',
  'symbols',
]

export default {
  props: [
    'filterHtmlEntities',
    'filteredHtmlEntities'
  ],
  data () {
    return {
      filters
    }
  }
}
</script>

<style scoped>
</style>