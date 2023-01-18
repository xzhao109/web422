/*********************************************************************************
 *  WEB422 – Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Xiaoyue Zhao          Student ID: 124899212      Date: Jan 17
 *  Cyclic Link: _______________________________________________________________
 *
 ********************************************************************************/

const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
require("dotenv").config();
const MoviesDB = require("./modules/moviesDB.js");
const db = new MoviesDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//

const HTTP_PORT = process.env.PORT || 8080;

// Initializing the module
db.initialize(process.env.MONGO_CONNECT_STRING)
  .then(() => {
    app.listen(HTTP_PORT, function () {
      console.log(`Server listening on port ${HTTP_PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Testing the server locally
app.get("/", (req, res) => {
  res.json({ message: "API Listening" });
});

// Getting movie by page, PerPage and title
app.get("/api/movies", (req, res) => {
  if (!req.query.page || !req.query.perPage)
    res.status(500).json({ message: "Missing query parameters" });
  else {
    db.getAllMovies(req.query.page, req.query.perPage, req.query.title)
      .then((data) => {
        if (data.length === 0)
          res.status(204).json({ message: "No data returned" });
        else res.status(201).json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
});

// Getting movie by ID
app.get("/api/movies/:_id", (req, res) => {
  db.getMovieById(req.params._id)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// Adding a new movie
app.post("/api/movies", (req, res) => {
  if (Object.keys(req.body).length === 0)
    res.status(500).json({ error: "Invalid data" });
  else {
    db.addNewMovie(req.body)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
});

// Updating movie by ID
app.put("/api/movies/:_id", (req, res) => {
  if (Object.keys(req.body).length === 0)
    res.status(500).json({ error: "Invalid data" });
  else {
    db.updateMovieById(req.body, req.params._id)
      .then(() => {
        res.status(201).json({
          message: `Successfuly updated movie ${req.params._id}`,
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
});

// Deleting movie by ID
app.delete("/api/movies/:_id", (req, res) => {
  db.deleteMovieById(req.params._id)
    .then(() => {
      res
        .status(201)
        .json({ message: `Successfuly deleted movie ${req.params._id}` });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});
