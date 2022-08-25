<template>
    <header>
        <div>
            <h1>{{title}}</h1>
        </div>
    </header>
</template>
<script>


export default {
    props: ["title"]
}
</script>
<style scoped>
    header{
        background: var(--cs-primary);
        color: #fff;
        padding: 0.25rem;
        margin-bottom: 2rem;
        text-align: center;
        box-shadow: var(--cs-box-shadow);
    }

</style>
