const yup = require('yup');

const documentoFiltrado = async (req, res, next) => {
  const schema = yup.object().shape({
    name: yup.string().trim().required(),
    content: yup.string().trim().required(),
  });

  try {
    await schema.validate(req.body);
  } catch (error) {
    return res.status(400).json(error.message);
  }

  return next();
};

const diaDaSemanaFiltrado = async (req, res, next) => {
  const schema = yup.object().shape({
    amountOfDays: yup.number().integer().required().positive(),
    startday: yup.string().trim().required(),
  });

  try {
    await schema.validate(req.query);
  } catch (error) {
    return res.status(400).json(error.message);
  }

  return next();
};

module.exports = {
  documentoFiltrado,
  diaDaSemanaFiltrado,
};
