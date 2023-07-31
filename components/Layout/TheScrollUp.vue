<template>
  <a
    href="javascript:void(0)"
    @click="scrollToTop()"
    class="c-scrollup js-scrollup"
  >
    <i class="bx bx-up-arrow-alt c-scrollup__icon"></i>
  </a>
</template>

<script>
export default {
  name: 'TheScrollUp',
  mounted() {
    this.scrollHandle()
  },
  methods: {
    /**
     * Toggle scroll class on pageYOffset rule
     */
    scrollHandle() {
      try {
        window.addEventListener('scroll', function() {
          let scroll = document.querySelector('.js-scrollup')
          if (window.pageYOffset > 350) {
            scroll.classList.add('is-active')
          } else {
            scroll.classList.remove('is-active')
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * Scroll to top
     */
    scrollToTop() {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * Error object
     */
    getErrorObject(error) {
      return {
        website: window.location.href,
        component: this._name,
        err: error.message
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-scrollup {
  position: fixed;
  right: 2rem;
  bottom: -30%;
  background-color: #fff;
  box-shadow: 0 4px 12px hsl(0, 0%, 20%, 0.1);
  display: inline-flex;
  padding: 0.35rem;
  border-radius: 0.25rem;
  z-index: 200;
  opacity: 0.8;
  transition: 0.4s;
  &.is-active {
    bottom: 3rem;
  }
  &:hover {
    opacity: 1;
  }
  &__icon {
    font-size: 1.25rem;
    color: $title-color;
  }
}
</style>
