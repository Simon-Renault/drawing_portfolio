<template>
  <div class="layout">

    <v-header type="row" />


    <slot/>

  </div>
</template>

<script>
 
</script>


<style lang="scss">

@font-face {
    font-family: hk-grotesk;
    font-weight: 200;
    src: url(../assets/fonts/HKGrotesk-Light.woff2);
    font-display: swap
}

@font-face {
    font-family: hk-grotesk;
    font-weight: 400;
    src: url(../assets/fonts/HKGrotesk-Regular.woff2);
    font-display: swap
}

@font-face {
    font-family: hk-grotesk;
    font-weight: 600;
    src: url(../assets/fonts/HKGrotesk-Medium.woff2);
    font-display: swap
}

@font-face {
    font-family: hk-grotesk;
    font-weight: 700;
    src: url(../assets/fonts/HKGrotesk-SemiBold.woff2);
    font-display: swap
}

@font-face {
    font-family: hk-grotesk;
    font-weight: 800;
    src: url(../assets/fonts/HKGrotesk-Bold.woff2);
    font-display: swap
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

  }

  :root {
    font-family: hk-grotesk , sans-serif;
    --black: #212121;
    --light-grey: #F3F3F5;
  }

  a {
    text-decoration: none;
  }

  .layout{

  }

  
  
</style>