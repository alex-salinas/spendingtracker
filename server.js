const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/spendingtracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const txnSchema = new mongoose.Schema({
  type: { type: String, enum: ['expense', 'income'], required: true },
  amount: Number,
  category: String,
  date: String,
});

const Transaction = mongoose.model('Transaction', txnSchema);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/transactions', async (req, res) => {
  try {
    const txns = await Transaction.find().sort({ date: 1 });
    res.json(txns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/transactions', async (req, res) => {
  try {
    const txn = new Transaction(req.body);
    await txn.save();
    res.json(txn);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
