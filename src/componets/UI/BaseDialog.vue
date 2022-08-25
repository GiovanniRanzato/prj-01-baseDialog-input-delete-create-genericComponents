<template>
  <teleport to="body">
    <dialog open>
        <header><slot name="header"><h2>{{title}}</h2></slot></header>
        <section>
            <slot default></slot>
        </section>
        <menu>
            <slot name="actions">
              <BaseButton mode="flat" @click="$emit('close')">Close</BaseButton>
            </slot>
        </menu>
    </dialog>
    <div class="backdrop" @click="$emit('close')"></div>
  </teleport>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: "alert"
        },
    },
    data(){
        return {
            show: true
        }
    },
    emits: ["close"] 

}
</script>
<style scoped>

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 2rem;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  background-color: var(--cs-primary);
  color: white;
  width: 100%;
}

header h2 {
  margin: 0;
}

section {
  padding: 2rem;
}
header,
section,
footer,
menu {
   padding: 1rem 2rem;
}

section,
footer,
menu {
  background: #fff;
}
menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}
menu button {
  margin-bottom: unset;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>