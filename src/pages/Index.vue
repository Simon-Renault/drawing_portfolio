<template>
  <Layout>
    <v-centered-container class="project-grid">
      <div class="grid">
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
    </v-centered-container>
   
   
  </Layout>
</template>


<script>
  import vGridItem from '@/components/v-grid-item.vue'
  import vGridLift from '@/components/v-grid-lift.vue'

  import homeConfig from '../../config/home_config.json'

  export default {
    components: {
      'v-grid-lift': vGridLift,
      'v-grid-item': vGridItem
    },
    data(){
      return{
        homeConfig
      }
    }
  }
</script>


<style lang="scss" >

.featured-img{
 
  margin:auto;
  padding: 30px 0;
 
  &__content{
    overflow: hidden;
   
    position: relative;
    margin: auto;
    padding: 0 70px;
    max-width: 1430px;
    img{
      border-radius: 2px;
       max-height: 50vh;
    }
  }
}
.top-image{
  position: relative;
  height: 50vh;
  margin: 50px 0;
}
.project-grid{
  padding: 40px 0;
}
.grid {
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1330px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>