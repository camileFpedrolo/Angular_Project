import Categoria from '../models/Categoria.js';

// Criar uma nova categoria
export const criarCategoria = async (req, res) => {
    try {
        const novaCategoria = new Categoria(req.body);
        await novaCategoria.save();
        res.status(201).json(novaCategoria);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Listar todas as categorias
export const listarCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Excluir uma categoria
export const excluirCategoria = async (req, res) => {
    try {
        await Categoria.findByIdAndDelete(req.params.id);
        res.json({ message: 'Categoria excluída com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
