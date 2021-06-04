import { createApp } from 'vue';

// app configuration
import App from './App';

// components
import FriendContact from './components/FriendContact';

// app instance
const app = createApp(App);

// component registration
app.component('friend-contact', FriendContact);

app.mount('#app');
