<template >
  <button 
    class="btn btn-light align_blockToInline"
    v-for="filter in filters"
    :key="filter"
    @click="() => filterIcons(filter)">
    {{ filter }}
  </button>
</template>

<script>
const filters = [
  '全部',
  '1',
  '2'
]

export default {
  props: [
    'filterIcons',
    'filteredIcons'
  ],
  data () {
    return {
      filters
    }
  }
}
</script>

<style scoped>
.align_blockToInline {
    display: block;
    width: 100%;
    margin: 0 5px 10px 0;
}
@media screen and (max-width: 992px) {
    .align_blockToInline {
        display: inline;
        width: calc(100% / 5);
    }
}
</style>