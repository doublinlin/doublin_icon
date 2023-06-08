<template>
<div class="row">
  <div class="col-lg-2">
    <Filter 
      :filterIcons="filterIcons"
      :filteredIcons="filteredIcons"
      />
  </div>
  <div class="col-lg-10">
    <div>
      <Search :search="search" />
    </div>
    <div>
      <PartialIcons :icons="icons" />
    </div>
  </div>
</div>
</template>

<script>
import Search from "./components/Search.vue";
import Filter from "./components/Filter.vue";
import PartialIcons from "./components/PartialIcons.vue";
import JsonIcon from '/json/icon.json'

export default {
  name: 'Icons',
  components: {
    Search,
    Filter,
    PartialIcons
  },
  data () {
    return {
      icons: JsonIcon.icons,
      str: '',
      type: ''
    }
  },
  methods: {
    filterIcons (catName) {
      this.resetIcons()
      if (catName !== '全部') {
        this.icons = this.icons.filter((icon) => {
          return icon.DI_category === catName
        })
      }
    },
    search (term) {
      this.resetIcons()
      this.icons = this.icons.filter((icon) => {
        return icon.DI_en.toLowerCase().includes(term.toLowerCase());
      })
    },
    resetIcons() {
      this.icons = JsonIcon.icons
    }
  }
}
</script>
