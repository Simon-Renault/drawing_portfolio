<template>
        <article class="v-grid-lift" >
            <div class="content" ref="content">
                <slot/>
                
            </div>
        </article>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default {
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


        gsap.fromTo(this.$refs.content, {
                y: '100%'
            },{
                y: '0%',
                scrollTrigger: {
                    trigger: this.$el,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
        });
    }
}
</script>


<style lang="scss" >


@keyframes appear1 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.v-grid-lift{
    overflow: hidden;
    position: relative;
    border-radius: 3px;
    background: transparent;
    padding-bottom: 100%;
    opacity: 0;
    &.visible{
       animation: appear1 1s ease-out 0.6s 1 forwards ;
    }
    @media screen and (min-width: 900px) {
        grid-row : span 2;
    }
    .content{
        color: var(--black);
        position: relative;
        display: flex;
        align-items: center;
        border-radius: 3px;
        height: calc(100% - 10px);
        font-weight: 800;
        font-size: 30px;padding:20px;
        line-height: 1.2em;
        color: var(--black);
        width: 80%;
    }
}
</style>
