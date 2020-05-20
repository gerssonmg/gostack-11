const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

const middleware = (request, response, next) => {
  console.log(request.route.path);
  console.log(Object.keys(request.route.methods));
  console.log("_____")
  return next();
};

app.get("/repositories", middleware, (request, response) => {
  // TODO
  return response.json(repositories);
});

app.post("/repositories", middleware, (request, response) => {
  // TODO
  const body = request.body;
  const { title, url, techs } = request.body;

  id = uuid();
  likes = 0;
  repositories.push({ id, title, url, techs, likes })
  return response.json(
    {
      id,
      amount_repositories: repositories.length
    }
  );
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
