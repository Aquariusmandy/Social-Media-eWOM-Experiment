const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const consentForm = require("./models/consentName");
const friendForm = require("./models/friendForm");
const { ObjectId } = require("bson");

app.use(express.static("public")); // 將 'public' 文件夾設為靜態文件夾
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// connect to mongoDB
db_url =
  "mongodb+srv://aquariusmandy1122:ok7TWaQZN3xExhPO@cluster0.ud6ryv5.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((err) => {
    console.log("Connection Failed.");
    console.log(err);
  });

// // create an object
// const Test00 = new ConsentForm({
//   name: "Mandy",
//   ID: 0,
//   Group: 8,
// });

// // save to DB
// Test00.save()
//   .then(() => {
//     console.log("Saved.");
//   })
//   .catch((err) => {
//     console.log("error");
//     console.log(err);
//   });

// app.use(bodyParser.json());

// 定義提交問卷

// 提交好友姓名顯示在下一頁
// app.get("/friends", async (req, res) => {
//   console.log(req.query);
//   let {
//     friendname1,
//     friendname2,
//     friendname3,
//     friendname4,
//     friendname5,
//     STS1,
//     STS2,
//     STS3,
//     STS4,
//     STS5,
//   } = req.query;
//   console.log(friendname1);
//   res.render("temp.ejs", {
//     friendname1,
//     friendname2,
//     friendname3,
//     friendname4,
//     friendname5,
//     STS1,
//     STS2,
//     STS3,
//     STS4,
//     STS5,
//   });
// });

app.post("/friends", async (req, res) => {
  console.log(req.body);
  let {
    friendname1,
    friendname2,
    friendname3,
    friendname4,
    friendname5,
    STS1,
    STS2,
    STS3,
    STS4,
    STS5,
  } = req.body;
  let newFriend = new friendForm({
    name1: friendname1,
    name2: friendname2,
    name3: friendname3,
    name4: friendname4,
    name5: friendname5,
    STS1: STS1,
    STS2: STS2,
    STS3: STS3,
    STS4: STS4,
    STS5: STS5,
  });
  newFriend
    .save()
    .then(() => {
      console.log("accepted friend form");
      res.render("form_part2_AutTran.ejs", {
        friendname1,
        friendname2,
        friendname3,
        friendname4,
        friendname5,
        STS1,
        STS2,
        STS3,
        STS4,
        STS5,
      });
    })
    .catch((e) => {
      console.log("friend form failed");
      console.log(e);
    });
});

// 以下是前端顯示

app.get("/strongtie", (req, res) => {
  res.render("form_part1_StrongTie.ejs");
});

app.get("/start", (req, res) => {
  res.render("consent.ejs");
});

app.post("/start", async (req, res) => {
  console.log(req.body);
  let { name } = req.body;
  var id = Math.floor(Math.random() * 10000);
  var group = Math.floor(Math.random() * 12) % 8;
  let newSubject = new consentForm({
    name: name,
    ID: id,
    Group: group,
  });
  newSubject
    .save()
    .then(() => {
      console.log("accepted");
      res.render("form_part1_StrongTie.ejs");
    })
    .catch((e) => {
      console.log("failed");
      console.log(e);
    });
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(5501, () => {
  console.log("Server is running on port 5501.");
});
