const app = require('express')()

var counter = 0;
const handleRequest = (req, res) => {
  if (counter < 3) {
    counter++;
    console.log('504');
    return res.status(504).end();
  }

  console.log('200');
  res.status(200).send('{}');
};
app.get('*', handleRequest);
app.post('*', handleRequest);

app.listen(3000, () => console.log('Mock listening on port 3000'))
