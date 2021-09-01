const diasDaSemana = require('../diasdasemana');

const proximoDiaSemana = async (req, res) => {
  const { startday, amountOfDays } = req.query;

  const starter = diasDaSemana.indexOf(startday);

  const daysToPass = amountOfDays >= 7 ? amountOfDays % 7 : Number(amountOfDays);

  const index = starter + daysToPass;

  const answer = diasDaSemana[index > 6 ? index - 7 : index];

  return res.status(200).json({ answer });
};

module.exports = proximoDiaSemana;
