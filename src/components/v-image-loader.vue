
<template>
  <figure :class="{'box-image' : true ,'placeholder':true, 'loaded' :loaded}" :style="padding">
    <transition name="fade">
      <img v-if="shouldLoad" v-show="loaded" v-on:load="onLoaded" :src="src"  :alt="alt" >
    </transition>
  </figure>
</template>

<script>
export default {
    name: 'image-loader',
    props: {
        shouldLoad : {
            type: Boolean,
            required: false,
            default : true
        },
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: false
        }
    },
    data () {
      return {
        loaded: false,
        loadedPlaceholder: false,
      }
    },
    computed: {
      padding(){
        return{ paddingBottom : this.ratio }
      }
    },
    methods: {
      onLoaded () {
        this.loaded = true
      },
      onLoadedPlaceholder () {
        this.loadedPlaceholder = true
      }
    }
}
</script>

<style scoped lang="scss">

.fade-enter-active {
    transition: opacity 800ms ease-in-out;
}
.fade-enter-to {
    opacity: 1;
}
.fade-enter {
    opacity: 0;
}
.box-image {
    display: flex;
    position: relative;
    overflow: hidden;
    background: #f6f7f8;
    position: relative;
}
.box-image img {
    border-radius: 2px;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: 800ms all ease-in-out;
} 
.blured {
    filter: blur(25px);
}

</style>
