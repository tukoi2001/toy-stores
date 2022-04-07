<template>
  <div class="wrapper">
    <div id="loader"></div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {

    };
  },
  mounted() {
    
  },
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99999;
  background-color: #fff;
  overflow-y: hidden;
}

#loader {
  position: relative;
  top: 40%;
  left: 48%;
}

#loader:before,
#loader:after {
  content: " ";
  display: table-cell;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  animation-duration: 0.8s;
  animation-name: revolve;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  mix-blend-mode: darken;
}

#loader:before {
  background: rgb(77, 232, 244);
}

#loader:after {
  background: rgb(253, 62, 62);
  animation-delay: calc(0.8s / -2);
}

@keyframes revolve {
  0% {
    left: 0;
  }
  25% {
    transform: scale(calc(1 + 0.2));
  }
  50% {
    left: 50px;
  }
  75% {
    transform: scale(calc(1 - 0.2));
  }
  100% {
    left: 0;
  }
}
</style>
