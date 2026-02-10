import express from "express";
import { matchRoutes } from "./routes/matches.js";

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

app.use('/matches', matchRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})