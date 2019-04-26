let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/data', (req, res) => {
  console.log('REQUEST!')
  const data = {
    message: 'Heyooooo'
  }
  res.json(data);
})

app.listen(4000, () => console.log('Example app listening on port 4000!'));
