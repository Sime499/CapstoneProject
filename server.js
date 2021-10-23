import express from 'express';
import mongoose from 'mongoose';
import productRouter from './Backend/routers/productRouter.js';
import userRouter from './Backend/routers/userRouter.js';
import dotenv from 'dotenv';
import path from 'path';
import uploadRouter from './Backend/routers/uploadRouter.js';
import orderRouter from './Backend/routers/orderRouter.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/anjucoffee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, '/FinalProject/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/FinalProject/build/index.html'))
);
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Serve at http://localhost:${port}`);
// });

httpServer.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});