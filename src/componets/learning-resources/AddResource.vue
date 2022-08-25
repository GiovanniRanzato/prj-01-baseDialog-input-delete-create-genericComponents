<template>
    <BaseCard>
    <h2>Add resource</h2>
    <form @submit.prevent="submit">
        <BaseInput id="name" name="name" type="text" label="name" placeholder="type resource title..." :value="nameValue" @update="nameValue = $event" />
        <BaseInput id="description" name="description" type="textarea" label="description" placeholder="type resource description..." :value="descriptionValue" @update="descriptionValue = $event" />
        <BaseInput id="link" name="link" type="text" label="resource url" placeholder="http:://resource.com" :value="linkValue" @update="linkValue = $event"  />
        <BaseButton type="submit" faicon="plus" mode="primary">Add resource</BaseButton>
    </form>
    </BaseCard>
    <BaseDialog v-if="formError" title="Input error" @close="formError = false"  >
        <template #default><p>You must fill all the fields...</p></template>
        <!-- <template #actions><BaseButton @click="formError=false" mode="flat">Ok</BaseButton></template> -->
    </BaseDialog>
</template>
<script>
export default {
    data(){
        return{ 
            nameValue: null,
            descriptionValue: null,
            linkValue: null,
            formError: false
        }
    },
    inject: ["addResource"],
    methods: {
        submit(event){
            event.preventDefault()
            
            const title = this.nameValue;
            const description = this.descriptionValue;
            const url = this.linkValue;

            if ( this.validateForm() ){
                this.addResource(title, description, url) 
                this.resetForm()
            } else {
                this.showError()
            } 
        },
        resetForm(){
            this.nameValue = null
            this.descriptionValue = null
            this.linkValue = null
        },
        validateForm(){
            return this.nameValue && this.descriptionValue && this.linkValue
        },
        showError() {
            this.formError = true;
        }
    },

}
</script>
