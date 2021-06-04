<template>
  <section>
    <header>
      <h1>Friends</h1>
    </header>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
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
          phone: '555 123 1234',
          email: 'lexi@acro.yoga',
          isFavorite: true,
        },
        {
          id: 'sahara',
          name: 'Sahara Strothers',
          phone: '555 321 4321',
          email: 'sahara@birdsofwisdom.com',
          isFavorite: true,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(props) {
      const match = this.friends.find((friend) => friend.id === props.id);
      match.isFavorite = !match.isFavorite;
    },
  },
};
</script>

<style>
@import url(./styles.css);
</style>
