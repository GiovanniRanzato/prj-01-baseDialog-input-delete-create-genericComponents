<template> 

    <TheHeader :title="title" />
    <BaseContainer>
      <TheResources />
    </BaseContainer>

</template>
<script>
import TheHeader from './componets/layouts/TheHeader.vue'
import TheResources from './componets/learning-resources/TheResources.vue'
export default {
    components: { TheHeader, TheResources },
    data() {
        return {
          title: "App vue 3"
        }
    },
    setSelectedComponent(component){
      this.activeComponent = component
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
:root{
    --cs-primary: #5F9CC9;
    --cs-secondary: #c95fbb;
    --cs-danger: #fc1b3d;
    --cs-warning: #f1a707;

    --cs-primary-l: #5F9CC925;
    --cs-secondary-l: #c95fbb25;
    --cs-danger-l: #fc1b3d25;
    --cs-warning-l: #f1a70725;

    --cs-color-1: #ff0076;
    --cs-color-2: #af4cce;
    --cs-color-3: #00ffc4;
    --cs-color-4: #85ccfc;
    --cs-color-fb: #1bbeff;
    --cs-color-in: #ff4eff;
    --cs-color-yt: #fc1b3d;
    
    --cs-white: #fff;
    --cs-light: #f5f5f5;
    --cs-dark: #333;
    --cs-black:#222; 

    --cs-box-shadow: 0px 5px 20px 10px rgba(220,220,220,0.50), 0px 28px 10px -23px rgba(180,180,180,0.65);
}
* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>