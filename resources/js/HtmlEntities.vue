<template>
<div class="row">
  <div class="col-lg-2">
    <FilterHtmlEntities 
      :filterHtmlEntities="filterHtmlEntities"
      :filteredHtmlEntities="filteredHtmlEntities"
      />
  </div>
  <div class="col-lg-10">
    <div>
      <Search :search="search" />
    </div>
    <div>
      <PartialHtmlEntities :HtmlEntities="HtmlEntities" />
    </div>
  </div>
</div>
</template>

<script>
import Search from "./components/Search.vue";
import FilterHtmlEntities from "./components/FilterHtmlEntities.vue";
import PartialHtmlEntities from "./components/PartialHtmlEntities.vue";
import JsonHtmlEntity from '/json/htmlEntity.json'

export default {
  name: 'HtmlEntities',
  components: {
    Search,
    FilterHtmlEntities,
    PartialHtmlEntities
  },
  data () {
    return {
      HtmlEntities: JsonHtmlEntity,
      str: '',
      type: ''
    }
  },
  methods: {
    filterHtmlEntities (catName) {
      this.resetHtmlEntities()
      if (catName !== '全部') {
        this.HtmlEntities = this.HtmlEntities.filter((HtmlEntity) => {
          return HtmlEntity.category === catName
        })
      }
    },
    search (term) {
      this.resetHtmlEntities()
      this.HtmlEntities = this.HtmlEntities.filter((HtmlEntity) => {
        return HtmlEntity.name.toLowerCase().includes(term.toLowerCase());
      })
    },
    resetHtmlEntities() {
      this.HtmlEntities = JsonHtmlEntity
    }
  }
}
</script>
