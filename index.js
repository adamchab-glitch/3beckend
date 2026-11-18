const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "Moje stránka", zprava: null });
});

app.post("/kontakt", (req, res) => {
  const { jmeno, email, zprava } = req.body;
  console.log("Nová zpráva:", { jmeno, email, zprava });
  res.render("index", {
    title: "Moje stránka",
    zprava: `Díky, ${jmeno}! Zpráva byla odeslána.`,
  });
});

app.listen(PORT, () => {
  console.log(`Server běží na http://localhost:${PORT}`);
});
