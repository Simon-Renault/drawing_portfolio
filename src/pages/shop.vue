<template>
  <Layout>
    <v-centered-container>

      <div class="shop-container">

        <div class="shop-grid">

          <article class="item" v-for="i in 20" :key="i + 'item'">
              <div class="item__img-container">
                <v-image-loader class="item__img" :shouldLoad="true" src="./imgs/beast.jpg"/>
              </div>
            
              <div class="content">
                <h3 class="name">Drawing name</h3>
                <p class="price">200 €</p>
              </div>
          </article>


        </div>

        <div class="sidebar">
          
        </div>

      </div>
      

    </v-centered-container>

     



  </Layout>
</template>


<script>


export default {
  components: {
    
  }
}
</script>


<style lang="scss">
.item{
  & &__img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
  }
  &__img-container{
    position: relative;
    padding-bottom: 100%;
  }
  .name{
    margin: 15px 0 10px ;
  }
  .price{
    color : rgb(162, 162, 162);
    margin: 0 0 20px ;
  }
}

.shop-container{
  padding: 50px 0;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: auto minmax(300px,350px);
}


.shop-grid{
  display: grid;
  grid-gap: 30px;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  
}
</style>
