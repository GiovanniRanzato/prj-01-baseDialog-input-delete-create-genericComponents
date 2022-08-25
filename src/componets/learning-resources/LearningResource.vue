<template>
    <li >
      <BaseCard>
        <header>
            <h3>{{title}}</h3>
            <BaseButton 
              text="delete"
              mode="danger-flat"
              faicon="trash"
              @click="removeResource(id)"
            >Delete</BaseButton>
        </header>
        <p>{{description }}</p>
        <nav><a :href="link" target="_blank">See resource</a></nav>
      </BaseCard>
    </li>
</template>
<script>


export default {
    props: ['id','title','description','link'] ,
    inject: ['removeResource']
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color:var(--cs-primary);
}

a:hover,
a:active {
  opacity: 0.85;;
}
</style>