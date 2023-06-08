<template>
  <footer class="footer">
    <div class="copyrights">
      <div>Doublin &copy; 2022 - {{ currentYear }} All Rights Reserved</div>
      <div>Design by Doublin</div>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    width: 100%;
    padding: 1rem;
    background-color:rgb(244, 244, 244);
  }
  .copyrights {
    text-align: center;
    color: rgb(136, 136, 136);
  }
</style>

<script scoped>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  }
}
</script>
