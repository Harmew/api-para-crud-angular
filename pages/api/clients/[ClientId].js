import Client from "../../../models/Client";
import dbConnection from "../../../services/dbConnection";

dbConnection();

const METHODS = {
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
  OPTIONS: "OPTIONS",
};

export default async (req, res) => {
  const { method } = req;
  const { ClientId } = req.query;

  switch (method) {
    case METHODS.GET:
      try {
        const client = await Client.findById(ClientId);
        res.status(200).json(client);
      } catch (error) {
        res.status(500).json({ error: "Erro ao buscar cliente" });
      }
      break;

    case METHODS.PUT:
      try {
        const client = await Client.findById(ClientId);
        client.name = req.body.name;
        client.email = req.body.email;
        client.phone = req.body.phone;
        client.job = req.body.job;

        const result = await client.save();
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar cliente" });
      }
      break;

    case METHODS.DELETE:
      try {
        const client = await Client.findById(ClientId);
        await client.remove();
        res.status(200).json({ message: "Cliente removido com sucesso" });
      } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Erro ao deletar clients" });
      }
      break;
    default:
      res.status(405).json({
        message: "Método não permitido",
      });
      break;
  }
};
