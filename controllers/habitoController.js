import Habito from '../models/Habito.js';

// Criar um novo hábito
export const criarHabito = async (req, res) => {
    try {
        const novoHabito = new Habito(req.body);
        await novoHabito.save();
        res.status(201).json(novoHabito);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Listar todos os hábitos
export const listarHabitos = async (req, res) => {
    try {
        const habitos = await Habito.find();
        res.json(habitos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Atualizar um hábito
export const atualizarHabito = async (req, res) => {
    try {
        const habitoAtualizado = await Habito.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(habitoAtualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Excluir um hábito
export const excluirHabito = async (req, res) => {
    try {
        await Habito.findByIdAndDelete(req.params.id);
        res.json({ message: 'Hábito excluído com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
