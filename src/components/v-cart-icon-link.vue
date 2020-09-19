<template>
   <g-link class="link" to="/cart">
        <span>
            <shopping-cart-icon size="1x" class="custom-class"></shopping-cart-icon>
            <div class="indicator">12</div>
        </span>
    </g-link>
</template>

<script>
import { ShoppingCartIcon } from 'vue-feather-icons'
export default {
  components : {
    ShoppingCartIcon,
  },
}
</script>

<style lang="scss" scoped>
.link{
  position: relative;

  &:hover,&.active--exact{
    .indicator{
      background: white;
    }
  }
}
.indicator{
  --size : 20px;
  top: 10%;
  right: 10%;
  display: block;
  padding: 0 6px 0 5px;
  min-width: var(--size);
  background:#c9f2f6;
  border-radius: var(--size);
  font-size: 12px;
  line-height: calc(var(--size) + 2px );
  height: var(--size);
  margin: 0 0 0 10px;
  transition: background .2s linear;
}
 svg{
    z-index: 7;
  }
</style>