<template>
    <ul>
        <LearningResource 
            v-for="resource in resources" 
            :id="resource.id" 
            :key="resource.id" 
            :title="resource.title"
            :description="resource.description"
            :link="resource.link"
        />
    </ul>  
</template>
<script>
import LearningResource from './LearningResource.vue'

export default {
    components: { LearningResource },
    inject: ['resources']

}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
}
</style>
