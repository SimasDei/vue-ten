<template>
  <div class="chat container">
    <h2 class="center teal-text">Chaterino</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li class="message" v-for="message in messages" :key="message.id">
            <span class="teal-text">{{message.name}}</span>
            <span class="grey-text text-darken-3">{{message.content}}</span>
            <span class="grey-text time">{{message.timestamp}}</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <new-message :name="name"></new-message>
      </div>
    </div>
  </div>
</template>
<script>
import db from '@/firebase/init';
import moment from 'moment';

import NewMessage from '@/components/NewMessage.vue';

export default {
  name: 'ChatView',
  props: ['name'],
  data() {
    return {
      messages: [],
    };
  },
  components: {
    NewMessage,
  },
  created() {
    const ref = db.collection('messages').orderBy('timestamp');
    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((element) => {
        if (element.type === 'added') {
          const { doc } = element;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll'),
          });
        }
      });
    });
  },
};
</script>
<style lang="scss" scoped>
.chat {
  h2 {
    font-size: 2.6em;
    margin-bottom: 40px;
  }
  .card {
    .card-content {
      .messages {
        max-height: 300px;
        overflow-y: auto;
        &::-webkit-scrollbar {
          width: 5px;
          border: none;
        }
        &::-webkit-scrollbar-track {
          background: #ddd;
          border-radius: 45px;
        }
        &::-webkit-scrollbar-thumb {
          background: #aaa;
          border-radius: 45px;
        }
        .message {
          span {
            font-size: 1.4em;

            &:first-of-type {
              margin-right: 10px;
            }
          }
          .time {
            display: block;
            font-size: 0.8em;
          }
        }
      }
    }
  }
}
</style>
