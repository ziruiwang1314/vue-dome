<template>
  <div class="loading">
    <div class="container">
      <div class="loader loader-7">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
        <div class="load_text">loading&nbsp;...</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>
  .loading {
    height: 100%;
    background: rgba(247, 249, 250, 1);
  }

  .container {
    text-align: center;
    width: 160px;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .loader {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .loader-star {
    position: absolute;
    top: calc(50% - 12px);
  }

  .loader-7 .line {
    width: 8px;
    position: absolute;
    border-radius: 5px;
    bottom: 0; 
    /*background: -webkit-gradient(linear, left top, left bottom, from(#1ee95d), to(#5714ce));
            background: -webkit-linear-gradient(top, #1ee95d, #5714ce);
            background: linear-gradient(to bottom, #1ee95d, #5714ce);*/
  }

  .loader-7 .line1 {
    left: 0;
    -webkit-animation: line-grow 0.5s ease alternate infinite;
    animation: line-grow 0.5s ease alternate infinite;
    background: rgba(9, 189, 210, 1);
  }

  .loader-7 .line2 {
    left: 20px;
    -webkit-animation: line-grow 0.5s 0.2s ease alternate infinite;
    animation: line-grow 0.5s 0.2s ease alternate infinite;
    background: rgba(6, 158, 248, 1);
  }

  .loader-7 .line3 {
    left: 40px;
    -webkit-animation: line-grow 0.5s 0.4s ease alternate infinite;
    animation: line-grow 0.5s 0.4s ease alternate infinite;
    background: rgba(38, 112, 255, 1);
  }

  .load_text {
    position: absolute;
    top: 30px;
    left: 80px;
    font-size: 24px;
    font-weight: 500;
    color: rgba(46, 50, 51, 1);
  }

  @-webkit-keyframes line-grow {
    0% {
      height: 0;
    }
    100% {
      height: 75%;
    }
  }

  @keyframes line-grow {
    0% {
      height: 0;
    }
    100% {
      height: 75%;
    }
  }
</style>
