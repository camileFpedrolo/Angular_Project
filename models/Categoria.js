import mongoose from 'mongoose';

const CategoriaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now }
});

export default mongoose.model('Categoria', CategoriaSchema);
