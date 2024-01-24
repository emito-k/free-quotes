const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
    const headersList = {
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Accept: "application/json",
    };

    const response = await fetch(
      "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
      {
        method: "GET",
        headers: headersList,
      }
    );

    const data = await response.json();
    console.log(data);

    // Return the response from Forismatic to the client
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
