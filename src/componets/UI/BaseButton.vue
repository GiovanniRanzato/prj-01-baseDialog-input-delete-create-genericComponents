<template>
    <button :class="mode">
        <span v-if="faicon"><i :class="getFaIconClass()"></i></span>
        <slot></slot>
    </button>
</template>
<script>

export default {
    props: ['faicon','type', 'mode'],
    methods: {
        getFaIconClass () {
            return "fas fa-"+this.faicon
        },
    }
}
</script>
<style scoped>
button {
    border: none;
    color: white;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
}
button:last-child{
    margin-right: unset;
}
button i{
    display: inline-block;
    margin-right: 0.5rem;
}
button:hover{
    opacity: 0.85;
    cursor: pointer;
}
/* TYPE STYLE  */
.primary {
    background: var(--cs-primary);
}
.danger {
    background: var(--cs-danger);
}
.primary-flat,
.danger-flat,
.flat {
    background: var(--cs-light);
}
.flat {
    color: var(--cs-dark);
}
.danger-flat {
    color: var(--cs-danger);
}
.primary-flat {
    color: var(--cs-primary);
}
</style>
