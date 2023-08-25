const express = require('express')
const app = express()
const ejs = require('ejs')

const DUMMYDB_USERS = [
  {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg",
    "username": "george",
    "likesIcecream": true
  },
  {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg",
    "username": "janet",
    "likesIcecream": false
  },
  {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg",
    "username": "emma",
    "likesIcecream": true
  },
];

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.json({ message: 'All good!' })
})

app.get('/:username', (req, res) => {
  const { username } = req.params
  const userDetails = DUMMYDB_USERS.find(user => user.username === username)
  if(userDetails) {
    res.render('profile', userDetails)
  } else {
    res.render('not-found')
  }
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})


/* ------------------------------------- */

// View Engine: EJS
// Request Parameters: Variables in the URL

/*

app.get('/book', (req, res) => {
  res.render('temp', { 
    heading: 'Book', 
    paragraph: 'Books are good!' 
  })
})

app.get('/sports', (req, res) => {
  res.render('temp', { 
    heading: 'Sports', 
    paragraph: 'Sports are good to play!' 
  })
})

app.get('/movies', (req, res) => {
  res.render('temp', { 
    heading: 'Movies', 
    paragraph: 'Movies are good to watch!' 
  })
})

app.get('/example/:category/:subcategory', (req, res) => {
  const { category, subcategory } = req.params
  res.json({ category, subcategory })
})

*/