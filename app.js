// Importação de pacotes
import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
// Importação de arquivos
import router from "./routes/api.js";
// Correção do dirname para a aplicação
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Variáveis globais
const app = express();
const PORT = 3000;
// Middlewares
app.use(express.json());
app.use("/api", router);
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// Passando a porta para o servidor
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
