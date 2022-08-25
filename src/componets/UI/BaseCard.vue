<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style scoped>
.card {
    background: #fff;
    border: none;
    border-radius: 2rem;
    box-shadow: var(--cs-box-shadow);
    padding: 2rem;
    margin-bottom: 2rem;
}

</style>