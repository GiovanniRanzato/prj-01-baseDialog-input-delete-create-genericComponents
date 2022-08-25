
<!-- 
Use component on template like this to bind prop value to data of parent component:
<BaseInput id="name" name="name" type="text" label="name" :value="nameValue" @update="nameValue = $event" /> 
-->
<template>
    <div>
        <div class="form-control" v-if="isInput()">
            <label :for="name">{{ label }}</label>
            <input :id="id" :name="name" :type="type" :placeholder="placeholder" :value="value" @input="$emit('update', $event.target.value)" >
        </div>
        <div class="form-control" v-if="isTextArea()">
            <label :for="name">{{ label}}</label>
            <textarea :id="id" :name="name" :placeholder="placeholder" :rows="rows" :value="value" @input="$emit('update', $event.target.value)"></textarea>
        </div>
    </div>

</template>
<script>

export default {
    props: {
        id: String,
        name: String,
        type: String,
        label: String,
        placeholder: String,
        value: {
            type: String,
        },
        rows: {
            type: Number,
            default: 5
        }
    },
    methods: {
        isInput(){
            return !this.isTextArea() ? true : false
        },
        isTextArea(){
            return this.type === 'textarea' ? true : false
        },
    },
}
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.75rem 1.5rem;
  border: 1px solid #ccc;
  border-radius: 2rem;
}
textarea {
    padding: 1.5rem;
    resize: vertical;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--cs-primary);
  background-color: var(--cs-primary-l);
}

.form-control {
  margin: 1rem 0;
}
</style>
