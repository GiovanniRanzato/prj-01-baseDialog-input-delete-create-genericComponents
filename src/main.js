import { createApp } from 'vue';
import App from './App.vue'
import BaseCard from './componets/UI/BaseCard'
import BaseButton from './componets/UI/BaseButton'
import BaseContainer from './componets/UI/BaseContainer'
import BaseInput from './componets/UI/BaseInput'
import BaseDialog from './componets/UI/BaseDialog'

const app = createApp(App)
app.component('BaseCard', BaseCard)
app.component('BaseButton', BaseButton)
app.component('BaseContainer', BaseContainer)
app.component('BaseInput', BaseInput)
app.component('BaseDialog', BaseDialog)
app.mount('#app');
