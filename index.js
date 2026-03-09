import express from 'express';
const app = express();

// Main endpoint
app.get('/', (req, res) => {
  res.send('Hello World from Cloud Run 2026!');
});

// Health check endpoint for Cloud Run
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


if (process.env.NODE_ENV !== 'test') {
  const port = parseInt(process.env.PORT) || 8080;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

export default app;

