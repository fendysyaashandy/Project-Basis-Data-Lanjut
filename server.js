const express = require('express');
const cors = require('cors');
const db = require('./app/models');
const app = express();

const corsOption = {
  origin: '*',
};

//register cors middleware
app.use(cors(corsOption));
app.use(express.json());

//connect database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log('database connected'))
  .catch((err) => {
    console.log(`gagal konek ${err.message}`);
    process.exit();
  });

//routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello' });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
