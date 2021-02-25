import 'reflect-metadata';
import express from 'express';
import "./database";

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "nlw 04" })
});

app.post("/", (request, response) => {
    return response.json({ message: "Os dados foram salvos com sucesso." })
});

app.listen(3000, () => console.log('server is running'));