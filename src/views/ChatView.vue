<template>
  <div class="chat container">
    <h2>Hi, {{name}}</h2>
  </div>
</template>
<script>
export default {
  name: 'ChatView',
  props: ['name'],
};
</script>
