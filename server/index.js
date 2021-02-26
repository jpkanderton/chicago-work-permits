const app = require('./app');
const PORT = 5555;

app.listen(PORT, () => {
  console.log(`Listening at PORT ${PORT}`);
});