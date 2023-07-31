<template>
  <section class="c-footer">
    <Wave />
    <div class="c-footer__wrapper">
      <div class="l-container">
        <div class="l-grid c-footer__grid">
          <div class="l-flex">
            <img src="/logo.png" alt="Sabionet logo" />
            <span>Siga-nos nas redes</span>
            <ul class="l-flex u-align-items-center">
              <li>
                <a href="www.google.com.br" target="_blank">
                  <i class="bx bxl-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="www.google.com.br" target="_blank">
                  <i class="bx bxl-youtube"></i>
                </a>
              </li>
              <li>
                <a href="www.google.com.br" target="_blank">
                  <i class="bx bxl-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="l-flex">
            <h2>Links</h2>
            <a anchor-to="services" href="javascript:void(0)" class="js-anchor">
              Últimas notícias
            </a>
            <a anchor-to="services" href="javascript:void(0)" class="js-anchor">
              Comparador
            </a>
            <a anchor-to="services" href="javascript:void(0)" class="js-anchor">
              Tutoriais
            </a>
          </div>

          <div class="l-flex">
            <h2>Contato</h2>
            <a href="javascript:void(0)">
              contato@tecmundo.com.br
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=51992594999&text=Hola"
              target="_blank"
            >
              (41) 9983-9284
            </a>
            <a href="https://www.nzn.io" target="_blank">
              nzn.io
            </a>
          </div>
        </div>
      </div>
      <div class="c-footer__copy">
        <span
          >@ {{ new Date().getFullYear() }} Copyright: Tecmundo | Powered by
          <a href="https://nzn.io" target="_blank">NZN</a>
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/*------------------------------------------- 
  Use these variables only for examples purpose.
  --------------------------------------------*/
$primary-color: #458ff6;
$secondary-color: #458ff6;
/*------------------------------------------------------------- 
  When start a new project you must delete these colors variables.
  --------------------------------------------------------------*/
.c-footer {
  margin-top: 2rem;
  &__copy {
    background-color: #23607c;
    padding: 20px 0;
    text-align: center;
    span {
      color: #fff;
      a {
        text-decoration: underline;
        font-size: 1rem;
        color: #fff;
        font-weight: 700;
      }
    }
  }
  &__wrapper {
    background-color: #3384ab;
  }
  &__grid {
    padding: 2rem 0;
    grid-template-columns: repeat(1, 1fr);
    justify-content: space-between;
    row-gap: 2rem;
    & > div {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      row-gap: 1.5rem;
      border-bottom: 1px solid grey;
      padding: 1.5rem 0;
      h2 {
        color: #fff;
        font-weight: 700;
      }
      a {
        color: #fff;
        font-size: 1rem;
        transition: all 0.5s ease;
        &:hover {
          color: $secondary-color;
        }
      }
      img {
        max-width: 150px;
      }
      span {
        color: #fff;
      }
      ul {
        column-gap: 3rem;
        i {
          font-size: 2rem;
          color: #fff;
          transition: all 0.5s ease;
          &:hover {
            color: $secondary-color;
          }
        }
      }
    }
  }
  @media screen and (min-width: $lg-breakpoint) {
    margin-top: 6rem;
    &__grid {
      padding: 6rem 0;
      grid-template-columns: repeat(3, 1fr);
      & > div {
        border-bottom: none;
      }
    }
  }
}
</style>
