const express = require("express");
const axios = require("axios");
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

    const response = await axios.get(
      "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
      { headers: headersList }
    );

    const data = response.data;
    console.log(data);

    // return json data
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
