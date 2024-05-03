import express from 'express';
import router from './routes/index';

// Creater server
const app = express();
const port = 1245;

// Use router
app.use('/', router);
// Assign port
app.listen(1245, () => {
  console.log(`Express server app listening at http://localhost:${port}`);
});

module.exports = app;
