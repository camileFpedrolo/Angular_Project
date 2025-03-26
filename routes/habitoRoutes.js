import express from 'express';
import { criarHabito, listarHabitos, atualizarHabito, excluirHabito } from '../controllers/habitoController.js';

const router = express.Router();

router.post('/', criarHabito);   // Criar um novo hábito
router.get('/', listarHabitos);  // Listar todos os hábitos
router.put('/:id', atualizarHabito);  // Atualizar um hábito
router.delete('/:id', excluirHabito); // Excluir um hábito

export default router;
