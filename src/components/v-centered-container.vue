<template>
    <div class="centered-container">
        <div class="centered-container__inner">
            <slot/>
        </div>
    </div>
</template>

<style lang="scss">

.centered-container{
    &__inner{
        margin: auto;
        max-width: 1430px;
        min-height: 20px;
        padding: 0 20px;
        @media screen and (min-width: 900px) {
            padding: 0 70px;
        }
    }
}

</style>