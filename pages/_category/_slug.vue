<template>
  <main class="l-main" id="main">
    <div class="l-container">
      <div class="wrapper">
        <ul v-if="post.length > 0" class="l-flex breadcrumb">
          <li>Home</li>
          <li>-</li>
          <li>
            {{ categoryName }}
          </li>
          <li>-</li>
          <li>
            {{ post[0].attributes.title }}
          </li>
        </ul>
        <div v-if="post.length > 0">
          <h2>{{ post[0].attributes.title }}</h2>
          <div v-html="post[0].attributes.content"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      post: [],
      categoryName: '',
      postSlug: ''
    }
  },
  async mounted() {
    const categoryName = this.$route.params.category
    const slug = this.$route.params.slug
    this.categoryName = categoryName
    await this.getPost(slug)
    this.createStructuredData()
  },
  methods: {
    createStructuredData() {
      var script = document.createElement('script')
      script.type = 'application/ld+json'
      script.innerHTML = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: this.post[0].attributes.title,
        publisher: {
          '@type': 'Organization',
          name: 'TecMundo',
          logo: {
            '@type': 'ImageObject',
            url:
              'https://www.tecmundo.com.br/desktop/assets/static/publisher-logo.png',
            height: 60,
            width: 600
          }
        },
        author: {
          '@type': 'Person',
          name: this.post[0].attributes.author.data.attributes.name
        },
        articleBody: this.post[0].attributes.content,
        image: {
          '@type': 'ImageObject',
          url:
            'https://tm.ibxk.com.br/2023/08/12/12150231896000.jpg?ims=1200x675'
        },
        datePublished: '2023-08-14T16:15:00',
        dateModified: '2023-08-14T16:15:00',
        articleSection: [
          'Produto',
          'Casa inteligente',
          'Dispositivos Móveis',
          'Positivo',
          'Intelbras'
        ],
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://www.tecmundo.com.br/produto/267550-controle-voz-4-interruptores-inteligentes-compativeis-alexa.htm'
        }
      })

      document.head.appendChild(script)
    },
    async getPost(slug) {
      await this.$axios
        .post(`${this.$config.apiUrl}/posts`, {
          slug: slug
        })
        .then(res => (this.post = res.data.data))
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  background-color: $primary-color;
  border-radius: 10px;
  color: #fff;
  padding: 10px;
}
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
  ul {
    margin-bottom: 30px;
    column-gap: 10px;
    li {
      a {
        font-size: 0.9rem;
      }
    }
  }
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
