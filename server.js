const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/usuarios', async (req, res) => {
    const usuarios =  await prisma.usuario.findMany({});
    res.json(usuarios);
  });

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});