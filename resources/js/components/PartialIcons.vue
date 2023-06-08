<template>
<div class="row g-2 mt-1">
  <div class="col_align" 
        v-for="icon in icons"
        :key="icon.DI_id"
        >
      <div class="block_icon">
          <img v-if="icon.DI_img !== ''" :src="icon.DI_img" loading="lazy"
              class="icon" alt="icon">
          <div class="text-center mt-2">
              <div>{{ icon.DI_en }}</div>
              <div>{{ icon.DI_tw }}</div>
          </div>
      </div> 
  </div>
</div>
</template>

<script>
export default {
  props: [
    'icons'
  ]
}
</script>

<style scoped>
.block_icon {
    background-color: #fff;
    border-radius: .3rem;
    padding: .5rem;
    text-align: center;
    width: 8rem;
}
.icon {
    width: 3rem;
}
.col_align {
    flex: 0 0%;
}
</style>
