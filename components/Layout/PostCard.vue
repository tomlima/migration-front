<template>
  <NuxtLink :to="post.attributes.slug">
    <article class="c-card">
      <div class="c-card__thumb">
        <img
          src="https://img.ibxk.com.br/2022/07/26/26195257102142.jpg?w=500&mode=crop&scale=both"
          alt=""
        />
        <a href="#" class="c-card__category">
          Ciência
        </a>
      </div>
      <div class="c-card__infos l-flex">
        <div>
          <i class="bx bx-calendar"></i>
          <span>20/07/2023</span>
        </div>

        <div>
          <i class="bx bx-time"></i>
          <span>4 minutos de leitura</span>
        </div>
      </div>
      <h2>{{ post.attributes.title }}</h2>
      <p>
        {{ post.attributes.call_text }}
      </p>
      <a class="c-card__readmore l-flex u-align-items-center" href="#"
        >Leia mais <i class="bx bx-chevron-right"></i
      ></a>
    </article>
  </NuxtLink>
</template>

<script>
export default {
  name: 'PostCardFull',
  props: {
    post: {
      /**
       * The post object.
       */
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.c-card {
  cursor: pointer;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 2rem;
  border-radius: $border-r;
  transition: all 0.8s ease;
  &:hover {
    transform: translateY(-10px);
  }
  h2 {
    font-size: 1.2rem;
    margin: 1.5rem 0;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.3rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  @media screen and (min-width: $lg-breakpoint) {
    padding: 1.3rem;
  }

  &__thumb {
    height: 180px;
    display: block;
    position: relative;
    border-radius: $border-r;
    overflow: hidden;
    @media screen and (min-width: $lg-breakpoint) {
      height: 180px;
    }
    img {
      transition: all 1s ease;
      vertical-align: middle;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__category {
    top: 5%;
    right: 5%;
    position: absolute;
    background-color: $primary-color;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: #fff;
    border-radius: $border-r;
  }
  &__infos {
    margin-top: 1.5rem;
    column-gap: 50px;
    span,
    i {
      font-size: 0.8rem;
      color: $text-color;
    }
  }
  &__readmore {
    color: $primary-color;
    font-weight: 700;
    column-gap: 10px;
    margin-top: 1.5rem;
    font-size: 1rem;
    i {
      margin-top: 1.5px;
    }
  }
}
</style>
