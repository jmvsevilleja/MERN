// console.log('Hello World!!');

const express = require('express');
const app = express();

// get variable in .env file
require('dotenv/config');

const api = process.env.API_URL;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// without + concat we use ${} backtick
app.get(`${api}/patients`, (req, res) => {
  const product = {
    'data':
      [{"id": "60d0fe4f5311236168a109ca", "title": "ms", "firstName": "Sara", "lastName": "Andersen", "email": "sara.andersen@example.com", "picture": "https://randomuser.me/api/portraits/women/58.jpg", "verified": true}, {"id": "60d0fe4f5311236168a109cb", "title": "miss", "firstName": "Edita", "lastName": "Vestering", "email": "edita.vestering@example.com", "picture": "https://randomuser.me/api/portraits/med/women/89.jpg", "verified": false}, {"id": "60d0fe4f5311236168a109cc", "title": "ms", "firstName": "Adina", "lastName": "Barbosa", "email": "edina.barbosa@example.com", "picture": "https://randomuser.me/api/portraits/med/women/28.jpg", "verified": true}, {"id": "60d0fe4f5311236168a109cd", "title": "mr", "firstName": "Roberto", "lastName": "Vega", "email": "roberto.vega@example.com", "picture": "https://randomuser.me/api/portraits/med/men/25.jpg", "verified": null}, {"id": "60d0fe4f5311236168a109ce", "title": "mr", "firstName": "Rudi", "lastName": "Droste", "email": "rudi.droste@example.com", "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"}, {"id": "60d0fe4f5311236168a109cf", "title": "mrs", "firstName": "Carolina", "lastName": "Lima", "email": "carolina.lima@example.com", "picture": "https://randomuser.me/api/portraits/med/women/5.jpg", "verified": true}, {"id": "60d0fe4f5311236168a109d0", "title": "mr", "firstName": "Emre", "lastName": "Asikoglu", "email": "emre.asikoglu@example.com", "picture": "https://randomuser.me/api/portraits/med/men/23.jpg"}, {"id": "60d0fe4f5311236168a109d1", "title": "mr", "firstName": "Kent", "lastName": "Brewer", "email": "kent.brewer@example.com", "picture": "https://randomuser.me/api/portraits/med/men/52.jpg"}, {"id": "60d0fe4f5311236168a109d2", "title": "mr", "firstName": "Evan", "lastName": "Carlson", "email": "evan.carlson@example.com", "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"}, {"id": "60d0fe4f5311236168a109d3", "title": "mr", "firstName": "Friedrich-Karl", "lastName": "Brand", "email": "friedrich-karl.brand@example.com", "picture": "https://randomuser.me/api/portraits/med/men/7.jpg"}, {"id": "60d0fe4f5311236168a109d4", "title": "mr", "firstName": "Valentin", "lastName": "Ortega", "email": "valentin.ortega@example.com", "picture": "https://randomuser.me/api/portraits/med/men/3.jpg"}, {"id": "60d0fe4f5311236168a109d5", "title": "mrs", "firstName": "Sibylle", "lastName": "Leibold", "email": "sibylle.leibold@example.com", "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"}, {"id": "60d0fe4f5311236168a109d6", "title": "mrs", "firstName": "Elisa", "lastName": "Lorenzo", "email": "elisa.lorenzo@example.com", "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"}, {"id": "60d0fe4f5311236168a109d7", "title": "mr", "firstName": "Leevi", "lastName": "Savela", "email": "leevi.savela@example.com", "picture": "https://randomuser.me/api/portraits/med/men/67.jpg"}, {"id": "60d0fe4f5311236168a109d8", "title": "mrs", "firstName": "Karoline", "lastName": "Sviggum", "email": "karoline.sviggum@example.com", "picture": "https://randomuser.me/api/portraits/med/women/61.jpg"}, {"id": "60d0fe4f5311236168a109d9", "title": "ms", "firstName": "Nuria", "lastName": "Leon", "email": "nuria.leon@example.com", "picture": "https://randomuser.me/api/portraits/med/women/93.jpg"}, {"id": "60d0fe4f5311236168a109da", "title": "mr", "firstName": "Lance", "lastName": "Foster", "email": "lance.foster@example.com", "picture": "https://randomuser.me/api/portraits/med/men/13.jpg"}, {"id": "60d0fe4f5311236168a109db", "title": "miss", "firstName": "Naomi", "lastName": "Rodrigues", "email": "naomi.rodrigues@example.com", "picture": "https://randomuser.me/api/portraits/med/women/39.jpg"}, {"id": "60d0fe4f5311236168a109dc", "title": "mr", "firstName": "Evan", "lastName": "Roux", "email": "evan.roux@example.com", "picture": "https://randomuser.me/api/portraits/med/men/59.jpg"}, {"id": "60d0fe4f5311236168a109dd", "title": "mr", "firstName": "Miguel", "lastName": "Lima", "email": "miguel.lima@example.com", "picture": "https://randomuser.me/api/portraits/med/men/31.jpg"}]
  }

  res.send(product);
})

app.post(`${api}/verification`, (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
  res.send(newProduct);
})

app.listen(3000, () => {
  console.log('server is running localhost:3000');
})