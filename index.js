import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! Shipped via GitHub Actions.');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// const express = require('express');
// const crypto = require('crypto');
// const app = express();

// // A Secret Key you will also put in GitHub settings
// const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'your_temporary_secret';

// // Middleware to capture the RAW body needed for signature verification
// app.use(express.json({
//   verify: (req, res, buf) => {
//     req.rawBody = buf;
//   }
// }));

// // The Webhook Listener Route
// app.post('/webhook', (req, res) => {
//   const signature = req.headers['x-hub-signature-256'];
  
//   if (!signature) {
//     console.error('No signature found');
//     return res.status(401).send('No signature');
//   }

//   // 1. Re-calculate the signature locally using your secret
//   const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
//   const digest = 'sha256=' + hmac.update(req.rawBody).digest('hex');

//   // 2. Securely compare signatures (prevents timing attacks)
//   const isValid = crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));

//   if (!isValid) {
//     console.error('Invalid signature!');
//     return res.status(401).send('Unauthorized');
//   }

//   // 3. If valid, do something with the data!
//   const event = req.headers['x-github-event'];
//   console.log(`✅ Received ${event} from GitHub:`, req.body);

//   // Always respond with 200 OK immediately
//   res.status(200).send('Webhook received');
// });

// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//   console.log(`Webhook listener running on port ${port}`);
// });