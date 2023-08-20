<template>
  <main class="l-main" id="main">
    <div class="l-container">
      <div class="toggle" @click="toggleMenuEvent()">
        <i id="toggle" class="bx bx-coffee-togo"></i>
      </div>
      <Slider />
      <div class="wrapper">
        <h1>Últimas matérias</h1>
        <div class="posts">
          <ul class="posts__grid">
            <li v-for="(post, index) in posts" :key="index">
              <PostCard :post="post" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      posts: []
    }
  },
  computed: {
    ...mapGetters({
      cacheTiming: 'cache/getCacheTiming'
    })
  },
  /**
   * Cache fetch request for 30seconds.
   */
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - this.cacheTiming) {
      this.$fetch()
    }
  },
  methods: {
    toggleMenuEvent() {
      this.$nuxt.$emit('toggle-menu')
    }
  },
  /**
   * Get all posts
   */
  async fetch() {
    await this.$axios(`${this.$config.apiUrl}/posts`)
      .then(res => (this.posts = res.data.data))
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>
.posts {
  margin-bottom: 20px;
  &__grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 50px;
    li {
      max-width: 31%;
    }
  }
  &__card {
    cursor: pointer;
    width: 300px;
    height: auto;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
}
.toggle {
  display: none;
  position: fixed;
  top: 3%;
  right: 5%;
  i {
    font-size: 2rem;
  }
}
.wrapper {
  margin-top: 50px;
  column-gap: 150px;
  h1 {
    font-size: 2rem;
    color: rgba(10, 10, 10, 0.719);
    display: block;
    margin-bottom: 30px;
  }
}
.about {
  padding: 50px 50px 50px 0;
  width: 100%;
  h1 {
    margin-bottom: 0.5rem;
  }
  &__content {
    margin-top: 2rem;
  }
}

@media screen and (max-width: $sm-breakpoint) {
  .wrapper {
    margin-top: 30px;
  }
  .toggle {
    display: block;
  }
}
</style>
