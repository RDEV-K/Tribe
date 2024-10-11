const express = require("express");
const db = require("./database/connect");
const config = require("./config/config");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const help = `
      <pre>
        Welcome to the API!
        Use an x-access-token header to work with your own data:
        fetch(url, { headers: { 'x-access-token': 'whatever-you-want' }})
        The following endpoints are available:
      </pre>`;
  res.send(help);
});

app.use("/registration", require("./routes/registration.routes"));
app.use("/operators", require("./routes/operators.routes"));
app.use("/concierge", require("./routes/concierge.routes"));
app.use("/peer-ambassadors", require("./routes/peer_ambassador.routes"));
app.use("/service-partners", require("./routes/service_partners.routes"));
app.use("/sign", require("./routes/sign_form.routes"));
app.use("/siged-form", require("./routes/signed_forms.routes"));
app.use("/pending-forms", require("./routes/get_pending_forms_hr.routes"));

db.authenticate()
  .then((success) => {
    console.info("Connection has been established successfully. ");
  })
  .catch((err) => {
    console.error("Error: " + err);
  });

app.listen(config.SERVER_PORT).on("listening", () => {
  console.info(`API is live on ${config.SERVER_PORT}`);
});

module.exports = app;
