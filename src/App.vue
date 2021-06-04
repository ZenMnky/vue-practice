<template>
  <section>
    <header>
      <h1>Friends</h1>
    </header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
      ></friend-contact>
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
          name: 'Lexi Mendez',
          phone: '5551231234',
          email: 'lexi@email.com',
          isFavorite: true,
        },
        {
          id: 'sahara',
          name: 'Sahara Strothers',
          phone: '5553214321',
          email: 'sahara@email.com',
          isFavorite: true,
        },
      ],
    };
  },
};
</script>

<style>
@import url(./styles.css);
</style>
