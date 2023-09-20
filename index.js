const express = require("express");
const app = express();
const axios = require("axios");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const org1 = process.env.ORG1_API || "http://127.0.0.1:3003";
const databaseName = 'db1'
const User = require('./user-schema');
const connectDB = require("./db");

connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Connected" });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  console.log(`ORG1_API => ${org1}`);
});

app.post("/test/create", async (req, res) => {
  try {
    const { id, name, quantity } = req.body;
    const url = `${org1}/submit`;
    const fcn = "createAsset";
    const args = [id, JSON.stringify({ name, quantity })];
    const body = { fcn, args };
    const { data } = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message, stack: error.stack });
  }
});

app.get("/test/read/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const url = `${org1}/evaluate`;
    const fcn = "readAsset";
    const args = id;
    const body = { fcn, args };
    const { data } = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message, stack: error.stack });
  }
});

app.post('/users', async (req, res) => {
  try {
      const newUser = new User({
          name: req.body.name,
          age: req.body.age,
          job: req.body.job
      });

      const savedUser = await newUser.save();
      res.json(savedUser);
  } catch (error) {
      res.status(500).send({ message: "Error creating user." });
  }
});

app.get('/users', async (req, res) => {
  try {
      const users = await User.find({});
      res.json(users);
  } catch (error) {
      res.status(500).send({ message: "Error fetching data." });
  }
});



const test = async () =>{
  try {
    const newUser = new User({
        name: 'laza loves eating',
        age: 27,
        job: 'DevOps '
    });

    const savedUser = await newUser.save();
    console.log("=======================================)   create data 🎉✅  (============================================")
    console.log(savedUser);
} catch (error) {
    console.log({ message: "❌❌Error creating user." });
}

try {
  const users = await User.find({});
  console.log("=======================================)  get data ⭐✅ (============================================")
  console.log(users);
} catch (error) {
  console.log({ message: "❌❌Error fetching data." });
}
}


test()