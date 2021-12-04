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

router.post('/loginUser', async (req, res) => {
const { email, senha } = req.body;

const user = await User.findOne({ email }).select('+senha');

if (!user)
  return res.status(400).send({ error: 'User not found' });

if (senha != user.senha)
  return res.status(400).send({error: 'Senha inválida'});

res.send({user});

});

router.post('/loginClinica', async (req, res) => {
  const { cnpj, senha } = req.body;
  
  const clinica = await UserClinica.findOne({ cnpj }).select('+senha');
  
  if (!clinica)
    return res.status(400).send({ error: 'User not found' });
  
  if (senha != clinica.senha)
    return res.status(400).send({error: 'Senha inválida'});
  
  res.send({clinica});
  
  });


module.exports = app => app.use('/auth', router);