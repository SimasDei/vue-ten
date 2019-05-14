<template>
  <div class="chat container">
    <h2 class="center teal-text">Chaterino</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li class="message">
            <span class="teal-text">Name</span>
            <span class="grey-text text-darken-3">message content</span>
            <span class="grey-text time">time</span>
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
import NewMessage from '@/components/NewMessage.vue';

export default {
  name: 'ChatView',
  props: ['name'],
  components: {
    NewMessage,
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
        .message {
          span {
            font-size: 1.4em;

            &:first-of-type {
              margin-right: 10px;
            }
          }
          .time {
            display: block;
            font-size: 1.2em;
          }
        }
      }
    }
  }
}
</style>
