<template>
 
    <g-link class="v-grid-item hidden"  to="/" :class="item.size"  :style="{'animation-delay':delay+'ms'}" >

        <v-image-loader class="v-grid-item__img" :shouldLoad="isVisible" :src="item.item.cover_image"/>

        <div class="hover-content">
            <div class="inner">
                <span class="title">
                    {{item.item.title}}
                </span>
                <span class="subtitle">Category</span>
            </div>
        </div>
    </g-link>
        
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default {
    props : ["item"],
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
    border-radius: 2px;
    background: var(--light-grey);
    padding-bottom: 100%;
    opacity: 0;
    &.visible{
       animation: appear .7s ease-out 0s 1 forwards ;
    }
    & &__img{
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
    &.horizontal{
        padding-bottom: 50%;
        @media screen and (min-width: 900px) {
            grid-column : span 2;
        }
    }
    &.vertical{
        padding-bottom: 200%;
        @media screen and (min-width: 900px) {
             grid-row : span 2;
        }
    }
    &.square{
        padding-bottom: 100%;
        @media screen and (min-width: 900px) {
            grid-row : span 2;
            grid-column : span 2;
        }
    }
}

</style>
