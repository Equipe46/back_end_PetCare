const express = require('express');

const User = require('../models/cadastroUser.js');
const UserClinica = require('../models/cadastroClinica.js')

const router = express.Router();

router.post('/registerUser', async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.send({ user });

  } catch (err) {

    return res.status(400).send({ error: 'Registration failed' });
  }
});

router.post('/registerClinica', async (req, res) => {
  try {
    const clinica = await UserClinica.create(req.body);

    return res.send({ clinica });

  } catch (err) {

    return res.status(400).send({ error: 'Registration failed' });
  }
});


module.exports = app => app.use('/auth', router);