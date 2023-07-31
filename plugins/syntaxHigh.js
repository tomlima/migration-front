import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
import csharp from 'highlight.js/lib/languages/cs'

import 'highlight.js/styles/obsidian.css'

Vue.use(VueHighlightJS, {
  languages: {
    csharp
  }
})
