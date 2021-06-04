<template>
  <section>
    <header>
      <h1>Friends</h1>
    </header>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'lexi',
          name: 'lexi mendez',
          phone: '5551231234',
          email: 'lexi@email.com',
        },
        {
          id: 'sahara',
          name: 'sahara strothers',
          phone: '5553214321',
          email: 'sahara@email.com',
        },
      ],
    };
  },
};
</script>

<style>
@import url(./styles.css);
</style>
