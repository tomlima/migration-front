<template>
  <header class="c-header js-header">
    <nav
      class="c-nav l-container l-flex u-justify-content-between u-align-items-center"
    >
      <NuxtLink class="c-nav__logo l-flex  u-align-items-center" to="/">
        <img src="/logo.png" alt="Logo NZN" />
      </NuxtLink>

      <div class="c-nav__menu js-nav__menu">
        <ul class="c-nav__list l-flex u-align-items-center">
          <li class="c-nav__item">
            <a class="c-nav__link is-active" href="javascript:void(0)"
              >Últimas Notícias</a
            >
          </li>
          <li class="c-nav__item">
            <a class="c-nav__link" href="javascript:void(0)">Comparador</a>
          </li>
          <li class="c-nav__item">
            <a class="c-nav__link" href="javascript:void(0)">Tutoriais</a>
          </li>
          <li class="c-nav__item">
            <a class="c-nav__link c-nav__link--cta" href="javascript:void(0)"
              >Anuncie</a
            >
          </li>
        </ul>

        <div @click="closeMenu()" class="c-nav__close">
          <i class="bx bx-x"></i>
        </div>
      </div>

      <div @click="openMenu()" class="c-nav__toggle">
        <i class="bx bx-grid-alt"></i>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  mounted() {
    this.handleMenuClick()
  },
  methods: {
    /**
     * Open menu on mobile
     */
    openMenu() {
      try {
        const navMenu = document.querySelector('.js-nav__menu')
        navMenu.classList.add('is-open')
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * Close menu on mobile
     */
    closeMenu() {
      try {
        const navMenu = document.querySelector('.js-nav__menu')
        navMenu.classList.remove('is-open')
      } catch (error) {
        console.log(error)
      }
    },
    /**
     * Close menu on item click
     */
    handleMenuClick() {
      try {
        let headerLinks = document.querySelectorAll('.c-nav__link')
        const navMenu = document.querySelector('.js-nav__menu')
        for (var i = 0; i < headerLinks.length; i++) {
          headerLinks[i].addEventListener('click', function() {
            navMenu.classList.remove('is-open')
          })
        }
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
.c-header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 200;
  background-color: #fff;
  transition: all 1s ease;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &.is-sticky {
    box-shadow: 0 1px 4px hsla(0, 4%, 15%, 0.1);
    background-color: #fff;
    transition: all 1s ease;
  }
}
.c-nav {
  position: sticky;
  top: 0;
  height: 70px;
  &__logo {
    font-size: 1.5rem;
    img {
      width: 150px;
    }
  }
  &__toggle {
    display: inline-flex;
    font-size: 1.25rem;
    cursor: pointer;
    color: $primary-color;
  }
  &__list {
    list-style: none;
    flex-direction: column;
    row-gap: 1.5rem;
  }
  &__link {
    color: $title-color;
    font-weight: 600;
    transition: 0.3s;
    font-size: 0.9rem;
    &:hover {
      color: $primary-color;
    }
    &.c-nav__link--cta {
      background-color: $primary-color;
      padding: 12px 30px;
      color: #fff;
      border-radius: 8px;
    }
  }
  &__close {
    font-size: 2rem;
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    cursor: pointer;
  }
  @media screen and (min-width: $md-breakpoint) {
    height: 100px;
    column-gap: 3rem;
    &__logo {
      img {
        width: 150px;
      }
    }
    &__menu {
      margin-left: auto;
    }
    &__toggle,
    &__close {
      display: none;
    }
    &__list {
      flex-direction: row;
      column-gap: 3rem;
    }
  }
  @media screen and (max-width: $md-breakpoint) {
    &__menu {
      position: fixed;
      top: -100%;
      left: 0;
      width: 100%;
      padding: 4rem 0;
      border-radius: 0 0 1.5rem 1.5rem;
      box-shadow: 0 1px 4px hsla(0, 4%, 15%, 0.1);
      transition: 2s all ease;
      background-color: #fff;
      &.is-open {
        top: 0;
        transition: 0.5s all ease;
      }
    }
  }
}
</style>
