<template>
  <div class="c-waves">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
      data-v-5da2a378=""
    >
      <defs data-v-5da2a378="">
        <path
          id="a-wave-1"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          data-v-5da2a378=""
        ></path>
      </defs>
      <g class="c-parallax" data-v-5da2a378="">
        <use
          xlink:href="#a-wave-1"
          x="48"
          y="0"
          fill="rgba(255,255,255,0.7)"
          data-v-5da2a378=""
        ></use>
        <use
          xlink:href="#a-wave-1"
          x="48"
          y="3"
          fill="rgba(255,255,255,0.5)"
          data-v-5da2a378=""
        ></use>
        <use
          xlink:href="#a-wave-1"
          x="48"
          y="5"
          fill="rgba(255,255,255,0.3)"
          data-v-5da2a378=""
        ></use>
        <use
          xlink:href="#a-wave-1"
          x="48"
          y="7"
          fill="#fff"
          data-v-5da2a378=""
        ></use>
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.c-waves {
  top: 0;
  width: 100%;
  svg {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 250px;
  }
}
.c-parallax > use[data-v-5da2a378] {
  animation: move-forever 18s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  &:first-child {
    fill: #3384ab !important;
    opacity: 0.7;
  }
  &:nth-child(1) {
    fill: #3384ab !important;
    animation-delay: -2s;
    animation-duration: 7s;
  }
  &:nth-child(2) {
    fill: #3384ab !important;
    animation-delay: -3s;
    animation-duration: 10s;
    opacity: 0.5;
  }
  &:nth-child(3) {
    fill: #3384ab !important;
    animation-delay: -3s;
    animation-duration: 10s;
    opacity: 0.3;
  }
  &:nth-child(4) {
    fill: #3384ab !important;
    opacity: 0.7;
    animation-delay: -5s;
    animation-duration: 20s;
  }
}
@keyframes move-forever {
  0% {
    transform: translate(-90px);
  }
  100% {
    transform: translate(85px);
  }
}
</style>
