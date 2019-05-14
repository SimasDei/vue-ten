<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="new-message">New Message (press enter)</label>
      <input type="text" name="new-message" v-model="newMessage">
      <div v-if="feedback" class="red-text">{{feedback}}</div>
    </form>
  </div>
</template>
<script>
import db from '@/firebase/init';

export default {
  name: 'NewMessage',
  data() {
    return {
      newMessage: null,
      feedback: null,
    };
  },
  props: ['name'],
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection('messages')
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now(),
          })
          .catch((error) => {
            this.feedback = error;
          });
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = 'Type something, will ya?';
      }
    },
  },
};
</script>
