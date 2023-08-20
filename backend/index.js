import express from 'express'
import axios from 'axios'
import cors from 'cors'
require('dotenv').config()

const apiToken = process.env.STRAPI_TOKEN
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/posts', (req, res) => {
  axios
    .get('http://localhost:1337/api/posts?populate=*', {
      headers: {
        Authorization: `bearer ${apiToken}`
      }
    })
    .then(result => res.status(202).json(result.data))
    .catch(err => console.log(err))
})

app.post('/posts', (req, res) => {
  axios
    .get(
      `http://localhost:1337/api/posts?populate=*&filters[slug][$eq]=${req.body.slug}`,
      {
        headers: {
          Authorization: `bearer ${apiToken}`
        }
      }
    )
    .then(result => res.status(202).json(result.data))
    .catch(err => res.status(500).json(err))
})

app.get('/highlights', (req, res) => {
  axios
    .get(
      'http://localhost:1337/api/highlight?populate[post][populate][0]=thumb',
      {
        headers: {
          Authorization: `bearer ${apiToken}`
        }
      }
    )
    .then(result => res.status(202).json(result.data))
    .catch(err => console.log(err))
})

export default {
  path: '/api',
  handler: app
}
