<template>
  <div class="l-container">
    <div class="wrapper">
      <TheMenu />
      <div v-if="post.length > 0" class="post">
        <div class="post__wrapper">
          <h1>{{ post[0].attributes.Title }}</h1>
          <span class="post__summary">
            {{ post[0].attributes.Summary }}
          </span>
        </div>
        <div class="post__content" v-if="contentBlocks.length > 0">
          <div
            class="test"
            v-for="(block, index) in contentBlocks"
            :key="index"
          >
            <!-- H2 Header -->
            <h2
              v-if="block.type == 'header' && block.data.level == 2"
              v-html="block.data.text"
            ></h2>

            <!-- H3 Header -->
            <h3
              v-if="block.type == 'header' && block.data.level == 3"
              v-html="block.data.text"
            ></h3>

            <!-- H4 Header -->
            <h4
              v-if="block.type == 'header' && block.data.level == 4"
              v-html="block.data.text"
            ></h4>

            <!-- Link -->
            <a
              :href="block.data.link"
              v-if="block.type == 'LinkTool'"
              v-html="block.data.meta.title"
              target="_blank"
            ></a>

            <!-- Paragraph -->
            <p v-if="block.type == 'paragraph'" v-html="block.data.text"></p>

            <ul v-if="block.type == 'list'">
              <li v-for="(item, index) in block.data.items" :key="index">
                <p v-html="item"></p>
              </li>
            </ul>

            <highlight-code v-if="block.type == 'code'" lang="csharp">
              {{ block.data.code }}
            </highlight-code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      post: [],
      contentBlocks: []
    }
  },
  computed: {
    ...mapGetters({
      cacheTiming: 'cache/getCacheTiming'
    })
  },
  watch: {
    post: function() {
      const content = JSON.parse(this.post[0].attributes.Content)
      this.contentBlocks = content.blocks
    }
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
    await this.$axios(`${this.$config.apiUrl}/posts/${this.$route.params.slug}`)
      .then(res => (this.post = res.data.data))
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 100px;
  column-gap: 150px;
  display: flex;
}
.post {
  padding: 50px 50px 50px 0;
  h1 {
    margin-bottom: 25px;
  }
  &__wrapper {
    border-bottom: 4px solid rgba(128, 128, 128, 0.194);
    padding: 0 0 50px 0;
  }
  &__summary {
    background-color: $primary-color;
    color: #fff;
    font-style: italic;
    padding: 10px;
    border-radius: 5px;
    display: block;
  }
  &__content {
    margin-top: 50px;
    p {
      margin: 1rem 0 1rem 0;
    }
    h2 {
      margin: 1.5rem 0 1.5rem 0;
    }
    h3 {
      margin: 1rem 0 1rem 0;
    }
    ul {
      margin: 15px 0 50px 0;
      li {
        margin: 20px 0px 10px 20px;
      }
    }
    a {
      color: blue;
      text-decoration: underline;
    }
  }
}

@media screen and (max-width: $sm-breakpoint) {
  .wrapper {
    margin-top: 30px;
    display: block;
  }
  .post {
    padding: 0;
  }
}
</style>
