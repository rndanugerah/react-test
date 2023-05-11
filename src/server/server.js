const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

const users = [];

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: hashedPassword,
  };

  users.push(user);

  res.status(201).json({
    message: 'User created successfully!',
  });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      message: 'Incorrect password',
    });
  }

  const token = jwt.sign({ email: user.email }, 'secret');

  res.status(200).json({
    message: 'Login successful',
    token: token,
  });
});

app.listen(3000, () => {
  console.log('Server running on port 5000');
});
