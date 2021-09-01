const Documento = require('../modelo/documento');
const connectMongoDB = require('../conexao/mongodb');

const criarDocumento = async (req, res) => {
  const {
    kbSize, name, content, createdAt,
  } = req.body;

  const doc = new Documento({
    name,
    content,
    kbSize,
    createdAt,
  });

  try {
    await connectMongoDB();

    const savedDoc = await doc.save();

    return res.status(200).json(savedDoc);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const listarDocumentos = async (req, res) => {
  try {
    await connectMongoDB();

    const docs = await Documento.find();

    return res.status(200).json(docs);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const buscarDocumento = async (req, res) => {
  const { id } = req.params;

  try {
    await connectMongoDB();

    const doc = await Documento.findById(id);

    return res.status(200).json(doc);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const deletarDocumento = async (req, res) => {
  const { id } = req.params;

  try {
    await connectMongoDB();

    // exclusão lógica:
    const docDeleted = await Documento.findByIdAndUpdate(id, { deletedAt: Date() }, { new: true });

    return res.status(200).json(doc);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  criarDocumento,
  listarDocumentos,
  buscarDocumento,
  deletarDocumento,
};
