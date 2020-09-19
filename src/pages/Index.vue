<template>
  <Layout>
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
   
  </Layout>
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


<style lang="scss" >
.projects-grid {
    padding: 50px 0 100px;
    &__inner {
      max-width: 1430px;
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