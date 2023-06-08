<template >
    <div class="page_loader" v-if="!isLoading">
       <div class="dot"></div>
       <div class="dot"></div>
       <div class="dot"></div>
    </div>
</template>

<style scoped>
.page_loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .2);
  z-index: 100;
}
.dot {
  background-color: gray;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 50%;
}
.dot:first-child {
  animation: right 1s infinite;
}
.dot:last-child {
  animation: left 1s infinite .5s;
}

@keyframes right {
  40% {
    transform: translateX(-20px);
  }
  50% {
    transform: translateX(0);
  }
}

@keyframes left {
  40% {
    transform: translateX(20px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>

<script>
export default {
      data: () => {
          return {
              isLoading: false,
          }
      },
      mounted() {
        document.onreadystatechange = () => {
          if( document.readyState == "complete" ) {
            this.isLoading = true;
          }
        }
      }
  }
</script>
