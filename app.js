const express = require('express');
const volleyball = require('volleyball');
const { db } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

const app = express();

app.use(volleyball);
app.use(express.static(__dirname + '/public'));
app.use('/wiki', wikiRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.redirect('/wiki');
});


db.authenticate()
.then(() => {
  console.log('connected to the database');
});

async function init() {
  await db.sync();

  const PORT = 8080;
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

init();
