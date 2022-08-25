<template>
    <BaseCard>
        <h2>Main menu:</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed architecto at in assumenda dicta! Lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eos modi tenetur!</p>
    
        <BaseButton :mode="learningResourcesListbuttonType" @click="setSelectTab('learning-resources-list')" faicon="archive">Stored Resources</BaseButton>
        
        <BaseButton :mode="addResourceListbuttonType" @click="setSelectTab('add-resource')" faicon="plus">Add Resource</BaseButton>
    </BaseCard>
    <keep-alive>
        <component :is="selectedTab" ></component>
    </keep-alive>
</template>
<script>
import LearningResourcesList from './LearningResourcesList.vue'
import AddResource from './AddResource.vue'
export default {
    components: {
        LearningResourcesList,
        AddResource
    },

    data() {
        return {
            selectedTab: 'learning-resources-list',
            storedResources: [
              {
                  id: "resource-1",
                  title: "Corso vue",
                  description: "Corso vue per pivelli",
                  link: "https://vuejs.org",
              },
                              {
                  id: "resource-2",
                  title: "Google",
                  description: "Motore di ricerca",
                  link: "https://google.com",
              },
          ]
        }
    },
    provide(){
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource,
        }
    },
    computed: {
        learningResourcesListbuttonType(){
            return this.selectedTab === 'learning-resources-list' ? 'primary-flat' : 'flat'
        },
        addResourceListbuttonType(){
            return this.selectedTab === 'add-resource' ? 'primary-flat' : 'flat'
        },
    },
    methods: {
        setSelectTab(tab){
           this.selectedTab = tab;
        },
        addResource(title, description, url){
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url,
            }
            this.storedResources.unshift(newResource);
        },
        removeResource(id){
            const indexToRemove = this.storedResources.findIndex(res => res.id !== id)
            this.storedResources.splice( indexToRemove, 1 )
            console.log(this.storedResources)
        }

    }
}
</script>
