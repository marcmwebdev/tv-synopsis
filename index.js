const express = require('express');
const app = express();
const port = 1337;
const data = require('./showdata');
const { title, developedBy, starring, seasons } = data;

app.set('view engine', 'pug');


app.get('/', (req, res) => {
  
  res.render('index', { 
    title: 'TV Synopsis',
    message: title,
    developedBy: developedBy,
    starring: starring,
    seasons: seasons
  });
});


app.get('/seasons/:season', (req, res) => {
 
  const { season } = req.params;

  const [episodes] = seasons.filter(x => x.number == season);
  
  console.log('episodes =>', episodes);

  res.render('seasons', {
    title: `Season ${season}`,
    message: title,
    episodes: episodes.episodes 
  });
});

app.listen(port, () => {
  console.log(`listening on port: ${port}.`);
});
