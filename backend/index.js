import express from 'express'
import axios from 'axios'
import cors from 'cors'

const apiToken = process.env.STRAPI_TOKEN
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/posts', (req, res) => {
  axios
    .get('htpp://localhost:1337/api/posts?populate=*', {
      headers: {
        Authorization: `bearer ${apiToken}`
      }
    })
    .then(result => res.status(202).json(result.data))
    .catch(err => res.status(err.response.status).json(err))
})

app.get('/posts/:slug', (req, res) => {
  axios
    .get(
      `http://localhost:1337/api/posts?filters[slug][$eq]=${req.params.slug}`,
      {
        headers: {
          Authorization: `bearer ${apiToken}`
        }
      }
    )
    .then(result => res.status(202).json(result.data))
    .catch(err => res.status(err.response.status).json(err))
})

export default {
  path: '/api',
  handler: app
}
