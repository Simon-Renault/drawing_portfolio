<template>
  <div class="layout">


    <header class="header">

      <div class="hero">
        <div class="logo">

        </div>
      </div>

      <div class="nav">
        <nav>
          <a class="link" href="/"><span>Home</span></a>
          <a class="link" href="/"><span>Drawing</span></a>
          <a class="link" href="/"><span>Photography</span></a>
          <a class="link" href="/"><span>Shop</span></a>
          <a class="link" href="/"><span>Contact</span></a>
        </nav>
      </div>

    </header>


    <div class="projects-grid">
      <div class="projects-grid__inner">

        <v-grid-item src="./imgs/crazy_city.jpg" s2/>
        <v-grid-item src="./imgs/farm.jpg" />
        <v-grid-item src="./imgs/flying.jpg" v2/>
        <v-grid-lift>
          <span> Pen, paper ... <br> and a lot of patience </span>
        </v-grid-lift>
        <v-grid-item src="./imgs/farm_1.jpg" />
        <v-grid-item src="./imgs/tower.jpg"  v2/>
        <v-grid-item src="./imgs/tower2.jpg" />
        <v-grid-lift>
          <span> A subtle mixing of order and chaos  </span>
        </v-grid-lift>
        <v-grid-item src="./imgs/coffe_shop.jpg"  v2/>
        <v-grid-item src="./imgs/me.jpeg"  s2/>
        <v-grid-item src="./imgs/bridge.jpg" />
        <v-grid-item src="./imgs/tree.jpg" />
        <v-grid-item src="./imgs/light.jpg"  v2/>
        <v-grid-item src="./imgs/crazy_city_detail.jpg"  s2/>
        <v-grid-item src="./imgs/tower.jpg" />
        <v-grid-item src="./imgs/coffe_high.jpg" v2 />
        <v-grid-lift>
          <span> A really cool description of something </span>
        </v-grid-lift>
        <v-grid-item src="./imgs/elephant_detail.jpeg" v2/>
        <v-grid-item src="./imgs/top.jpeg" />
        <v-grid-item src="./imgs/coffe_shop_detail.jpg"  s2/>
        <v-grid-item src="./imgs/photo.jpg" />
        <v-grid-item src="./imgs/tree.jpg"  l2/>
        <v-grid-item src="./imgs/me.jpeg"  />
         <v-grid-item src="./imgs/elephant.jpeg"  s2/>
        <v-grid-lift>
          <span> A really cool description of something </span>
        </v-grid-lift>
       
        <v-grid-item src="./imgs/elephant_detail.jpeg"  />
        
        <v-grid-item src="./imgs/apartment.jpeg"  s2/>
        <v-grid-item src="./imgs/coffe_high.jpg"  v2/>
        <v-grid-item src="./imgs/bridge.jpg"  />
        <v-grid-item src="./imgs/beast.jpg"  />


      </div>
    </div>

  </div>
</template>

<script>
  import vGridItem from '@/components/v-grid-item.vue'
  import vGridLift from '@/components/v-grid-lift.vue'

  export default {
    components: {
      'v-grid-lift': vGridLift,
      'v-grid-item': vGridItem
    }
  }

  
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


  .hero {
    padding: 90px 0 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo{
      cursor: pointer;
      height:50px;
      width:50px;
      background-image: url("../assets/logo.jpg");
      background-position: center;
      background-size: contain;
      border-radius: 50%;
      box-shadow :0px 0px 0px 0px var(--light-grey);
      transition: all .3s ease;
      &:hover{
          box-shadow :0px 0px 0px 4px var(--light-grey);
      }
    }
  }

  .nav {
    height: 50px;
    display: flex;
    justify-content: center;

    .link {
      color: var(--black);
      position: relative;
      display: inline-flex;
      align-items: center;
      vertical-align: middle;
      height: 100%;
      padding: 0 15px;
      color: #212121;
      font-size: 16px;
      line-height: 24px;
      box-sizing: border-box;
      font-weight: 500;
      
      &:hover{
        span{
          background: var(--light-grey);
          border-radius: 3px;
        }
      }
      span {
        position: relative;
        display: inline-block;
        vertical-align: top;
        padding: 5px 10px;
         transition: all .3s ease;
      }
    }
  }

  .projects-grid {
    padding: 50px 0 100px;
    &__inner {
      max-width: 1330px;
      min-height: 20px;
      padding: 0 20px;
      @media screen and (min-width: 900px) {
         padding: 0 70px;
      }
      margin: auto;
      display: grid;
      grid-gap: 20px;
      grid-auto-flow: row dense;
      grid-template-columns: repeat(1, 1fr);

      @media screen and (min-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (min-width: 1330px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
</style>