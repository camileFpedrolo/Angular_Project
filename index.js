import express from 'express';
import connectDB from './config/db.js';
import habitoRoutes from './routes/habitoRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';


// Conectar ao banco de dados
connectDB();

// Criar o servidor Express
const app = express();

// Middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.send('TESTE EXPRESS!!!!');
  });

// Rotas
app.use('/api/habitos', habitoRoutes);
app.use('/api/categorias', categoriaRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});