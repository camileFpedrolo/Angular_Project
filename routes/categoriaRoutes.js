import express from 'express';
import { criarCategoria, listarCategorias, excluirCategoria } from '../controllers/categoriaController.js';

const router = express.Router();

router.post('/', criarCategoria);  // Criar uma categoria
router.get('/', listarCategorias); // Listar todas as categorias
router.delete('/:id', excluirCategoria); // Excluir uma categoria

export default router;
