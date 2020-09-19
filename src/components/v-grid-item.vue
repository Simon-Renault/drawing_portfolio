<template>
 
    <article class="v-grid-item hidden" :class="{'v2':v2,'l2':l2,'s2':s2}"  :style="{'animation-delay':delay+'ms'}" >
        <div class="content">
            <v-image-loader :shouldLoad="isVisible" :src="src"/>
        </div>
        <div class="hover-content">
            <div class="inner">
                <span class="title">
                    Drawing name
                </span>
                <span class="subtitle">Category</span>
            </div>
        </div>
    </article>
        
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vImageLoader from '@/components/v-image-loader.vue'

export default {
    components: {
      'v-image-loader': vImageLoader
    },
    props : {
        v2 : {
            type : Boolean,
            default : false
        },
        src : {
            type : String,
            default :  'https://picsum.photos/1000/1000?grayscale&&random=' + Math.random()
        },
        l2 : {
            type : Boolean,
            default : false
        },
        s2 : {
            type : Boolean,
            default : false
        }
    },
    data(){
        return {
            isVisible : false,
            delay :  0,
        }
    },
    beforeMount(){
        this.delay = Math.random() * 500
    },
    mounted(){
        if (!process.isClient) return
        gsap.registerPlugin(ScrollTrigger);
        new ScrollTrigger({
            trigger : this.$el,
            toggleActions: "play none none none",
            toggleClass: "visible",
            start: "top bottom",
            end: "bottom top",
            once : true,
            onToggle: self =>  this.isVisible = true 
        })

    }
}

</script>


<style lang="scss">


@keyframes appear {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.v-grid-item{
    overflow: hidden;
    cursor: pointer;
    position: relative;
    border-radius: 3px;
    background: var(--light-grey);
    padding-bottom: 100%;
    opacity: 0;
    &.visible{
       animation: appear .7s ease-out 0s 1 forwards ;
    }
    .content{
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
    }
    &:hover {
        .content{
            filter : blur(20px);
        }
        .hover-content{
            opacity: 1;
            @supports (backdrop-filter: blur()) {
                backdrop-filter: blur(20px);
            }
        }
    }
    .hover-content{
        opacity: 0;
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        padding: 40px;
        background: rgba(255,255,255,0.8);
        transition: all .3s ease;
        display: flex;
        align-items: center;
        .inner{
            .title{
                display: block;
                padding: 5px 0;
                font-weight: 800;
                font-size: 25px;
                line-height: 1.5em;
                color: var(--black);
            }
            .subtitle{
                font-size: 15px;
                color: #555;
            }
        }
    }
    &.l2{
        padding-bottom: 50%;
        @media screen and (min-width: 900px) {
            grid-column : span 2;
        }
    }
    &.v2{
        padding-bottom: 200%;
        @media screen and (min-width: 900px) {
             grid-row : span 2;
        }
    }
    &.s2{
        padding-bottom: 100%;
        @media screen and (min-width: 900px) {
            grid-row : span 2;
            grid-column : span 2;
        }
    }
}





</style>
