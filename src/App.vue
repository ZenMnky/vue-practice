<template>
  <section>
    <header>
      <h1>Friends</h1>
    </header>
    <ul>
      <friend-contact
        name="Lexi Mendez"
        phone-number="503 123 1234"
        email-address="lexi@acro.yoga"
        is-favorite="1"
      ></friend-contact>
      <friend-contact
        name="Sahara Strothers"
        phone-number="503 321 4321"
        email-address="sahara@birdsofwisdom.com"
        is-favorite="1"
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
