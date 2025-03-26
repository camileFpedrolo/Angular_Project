import mongoose from 'mongoose';

const HabitoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    categoria: { type: String, required: true },
    descricao: { type: String },
    frequencia: { type: String }, // Ex: "Diário", "Semanal"
    criadoEm: { type: Date, default: Date.now }
});

export default mongoose.model('Habito', HabitoSchema);
