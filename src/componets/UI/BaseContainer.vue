<template>
    <div class="container">
        <slot/>
    </div>
</template>
<style scoped>
.container {
  margin: 1rem;
  max-width: 992px;
}

@media screen and (min-width: 992px) {
  .container {
  margin: auto;
    }  
}

</style>