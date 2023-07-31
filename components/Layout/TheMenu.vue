<template>
  <div id="menu" class="menu">
    <h2>LINKS</h2>
    <ul>
      <li>
        <i class="bx bx-home-alt-2"></i>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <i class="bx bx-note"></i>
        <NuxtLink to="notes">Notes</NuxtLink>
      </li>
      <li>
        <i class="bx bxl-github"></i>
        <a href="https://github.com/tomlima" target="_blank">Github</a>
      </li>
      <li>
        <i class="bx bxs-cube-alt"></i>
        <a href="https://codepen.io/tomlima" target="_blank">Codepen</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.$nuxt.$on('toggle-menu', () => {
      this.toggleMenu()
    })
  },
  methods: {
    toggleMenu() {
      const menu = document.getElementById('menu', 'menu2')
      const toggleIcon = document.getElementById('toggle')
      const toggleIconclass = toggleIcon.getAttribute('class')
      if (toggleIconclass == 'bx bx-coffee-togo') {
        menu.classList.add('is-active')
        toggleIcon.classList.replace('bx-coffee-togo', 'bxs-coffee-togo')
      } else {
        menu.classList.remove('is-active')
        toggleIcon.classList.replace('bxs-coffee-togo', 'bx-coffee-togo')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  border-right: 3px solid rgba(31, 28, 28, 0.064);
  padding: 50px 50px 50px 0;
  h2 {
    margin-bottom: 50px;
    color: hsl(229deg, 11%, 51%);
  }
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    a,
    li {
      display: flex;
      align-content: center;
      column-gap: 15px;
      &.is-active > i {
        color: $primary-color;
      }
      &.is-active > a {
        color: $primary-color;
      }
      &:hover > i {
        transform: translateX(-5px);
        color: $primary-color;
      }
      &:hover > a {
        color: $primary-color;
      }
      i {
        transition: all 0.2s ease;
        font-size: 1.5rem;
        color: hsl(229deg, 11%, 51%);
      }
    }
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
  .menu {
    transition: all 0.5s ease-in-out;
    border-right: none;
    padding: 0;
    width: 60%;
    left: -100%;
    top: 0;
    height: 100%;
    background-color: #fff;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    h2 {
      margin-top: 50px;
    }
    &.is-active {
      transition: all 0.5s ease;
      left: 0;
    }
  }
}
</style>
