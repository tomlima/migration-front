<template>
  <main class="l-main" id="main">
    <div class="l-container">
      <div class="toggle" @click="toggleMenuEvent()">
        <i id="toggle" class="bx bx-coffee-togo"></i>
      </div>
      <div class="l-flex wrapper">
        <TheMenu />
        <div class="notes">
          <h1>Notes</h1>
          <div class="notes__list">
            <ul>
              <li v-for="(post, index) in posts" :key="index">
                <NuxtLink :to="post.attributes.Slug">
                  <h3>{{ post.attributes.Title }}</h3>
                  <span>{{ post.attributes.Summary }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
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
  margin-top: 100px;
  column-gap: 150px;
}
.notes {
  padding: 50px 50px 50px 0;
  width: 100%;
  h1 {
    margin-bottom: 0.5rem;
  }
  button {
    background-color: transparent;
    color: $primary-color;
    padding: 0;
    text-decoration: underline;
    font-size: 1.2rem;
  }
  &__list {
    margin-top: 2rem;
    ul {
      list-style: none;
      li {
        margin-bottom: 30px;
        padding: 0px 0px 30px 0px;
        border-bottom: 3px solid rgba(31, 28, 28, 0.064);
      }
    }
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
