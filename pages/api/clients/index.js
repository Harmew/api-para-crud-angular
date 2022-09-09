import Client from "../../../models/Client";

import dbConnection from "../../../services/dbConnection";

dbConnection();

const METHODS = {
  GET: "GET",
  POST: "POST",
  OPTIONS: "OPTIONS",
};

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case METHODS.GET:
      try {
        const clients = await Client.find();
        res.status(200).json(clients);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;

    case METHODS.POST:
      const client = new Client({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        job: req.body.job,
      });

      try {
        const result = await client.save();
        res.status(201).json(result);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Erro ao cadastrar cliente");
      }
      break;

    case METHODS.OPTIONS:
      res.status(200).send("ok");
      break;

    default:
      res.status(405).json({
        message: "Método não permitido",
      });
      break;
  }
};
