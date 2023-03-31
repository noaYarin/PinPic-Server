require("dotenv").config();
const express = require("express");
app = express();
(mongoose = require("mongoose")),
  (host = process.env.HOST || "localhost"),
  (port = 3000 || process.env.PORT),
  (dbhost = process.env.DBHOST || "mongodb://0.0.0.0:27017"),
  (logger = require("./services/logger")),
  (postRouter = require("./routes/postRouter")),
  (userRouter = require("./routes/userRouter")),
  (commentRouter = require("./routes/commentRouter"));

//Middlewars
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

//Routes
app.use("/api/post", postRouter);
app.use("/api/user", userRouter);
app.use("/api/comment", commentRouter);

mongoose
  .connect(`${dbhost}/picPic`)
  .then(() => {
    app.listen(port, () => {
      logger.info(`server start listening on port ${port}`);
    });
  })
  .catch((err) => logger.error(err));
