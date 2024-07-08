const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const consentForm = require("./models/consentName");
const friendForm = require("./models/friendForm");
const mainForm = require("./models/mainForm");
const demographicForm = require("./models/DemographicForm");
const { ObjectId } = require("bson");

app.use(express.static("public")); // 將 'public' 文件夾設為靜態文件夾
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const port = process.env.PORT || 10000;

// connect to mongoDB
db_url = process.env.DB_URL;
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

//Global variable
var id = Math.floor(Math.random() * 10000);
var group = Math.floor(Math.random() * 12) % 8;
var startTime = Date.now();

// var group = 0;

// app.use(bodyParser.json());

// 定義提交問卷

app.post("/demographic", async (req, res) => {
  const endTime = Date.now();
  const timeSpan = Math.floor((endTime - startTime) / 1000);
  console.log(req.body);
  console.log(`start time: ${startTime}`);
  console.log(`end time: ${endTime}`);
  console.log(`time span: ${timeSpan}`);
  let {
    gender,
    age,
    education,
    job,
    location,
    DG01,
    DG02,
    DG03,
    DG04,
    DG05,
    DG06,
    DG07,
  } = req.body;
  let newDemographic = new demographicForm({
    ID: id,
    Group: group,
    gender: gender,
    age: age,
    education: education,
    job: job,
    location: location,
    DG01: DG01,
    DG02: DG02,
    DG03: DG03,
    DG04: DG04,
    DG05: DG05,
    DG06: DG06,
    DG07: DG07,
    startTime: startTime,
    endTime: endTime,
    timeSpan: timeSpan,
  });
  newDemographic
    .save()
    .then(() => {
      console.log("accepted Demo form");
      res.render("thanks.ejs");
    })
    .catch((e) => {
      console.log("friend form failed");
      console.log(e);
    });
});

app.get("/mainform", (req, res) => {
  res.render("form_part3_Demographic.ejs");
});

app.post("/mainform", async (req, res) => {
  console.log(req.body);
  let {
    MotExt1,
    MotInt1,
    Tran1,
    Qua1,
    Cre1,
    MotExt2,
    MotInt2,
    Tran2,
    Qua2,
    Cre2,
    MotExt3,
    MotInt3,
    Tran3,
    Qua3,
    Cre3,
    MotExt4,
    MotInt4,
    Tran4,
    Qua4,
    Cre4,
    MotExt5,
    MotInt5,
    Tran5,
    Qua5,
    Cre5,
    Quality1,
    Quality2,
    Quality3,
    Quality4,
    Quality5,
    Credibility1,
    Credibility2,
    Credibility3,
    Credibility4,
    Credibility5,
    Credibility6,
    Credibility7,
  } = req.body;
  let newMain = new mainForm({
    ID: id,
    Group: group,
    MotExt1: MotExt1,
    MotInt1: MotInt1,
    Tran1: Tran1,
    Qua1: Qua1,
    Cre1: Cre1,
    MotExt2: MotExt2,
    MotInt2: MotInt2,
    Tran2: Tran2,
    Qua2: Qua2,
    Cre2: Cre2,
    MotExt3: MotExt3,
    MotInt3: MotInt3,
    Tran3: Tran3,
    Qua3: Qua3,
    Cre3: Cre3,
    MotExt4: MotExt4,
    MotInt4: MotInt4,
    Tran4: Tran4,
    Qua4: Qua4,
    Cre4: Cre4,
    MotExt5: MotExt5,
    MotInt5: MotInt5,
    Tran5: Tran5,
    Qua5: Qua5,
    Cre5: Cre5,
    Quality1: Quality1,
    Quality2: Quality2,
    Quality3: Quality3,
    Quality4: Quality4,
    Quality5: Quality5,
    Credibility1: Credibility1,
    Credibility2: Credibility2,
    Credibility3: Credibility3,
    Credibility4: Credibility4,
    Credibility5: Credibility5,
    Credibility6: Credibility6,
    Credibility7: Credibility7,
  });
  newMain
    .save()
    .then(() => {
      console.log("accepted main form");
      res.render("form_part3_Demographic.ejs", {});
    })
    .catch((e) => {
      console.log("main form failed");
      console.log(e);
    });
});

app.get("/intrinsicT", (req, res) => {
  res.render("form_part2_AutTran.ejs");
});

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
    ID: id,
    Group: group,
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
      if (group == 0 || group == 4) {
        res.render("form_part2_AutTran.ejs", {
          friendname1,
          friendname2,
          friendname3,
          friendname4,
          friendname5,
        });
      } else if (group == 1 || group == 5) {
        res.render("form_part2_AutNoTran.ejs", {
          friendname1,
          friendname2,
          friendname3,
          friendname4,
          friendname5,
        });
      } else if (group == 2 || group == 6) {
        res.render("form_part2_ExtTran.ejs", {
          friendname1,
          friendname2,
          friendname3,
          friendname4,
          friendname5,
        });
      } else {
        res.render("form_part2_ExtNoTran.ejs", {
          friendname1,
          friendname2,
          friendname3,
          friendname4,
          friendname5,
        });
      }
    })
    .catch((e) => {
      console.log("friend form failed");
      console.log(e);
    });
});

// 以下是前端顯示
// 這個 route 沒用到
app.get("/strongtie", (req, res) => {
  res.render("form_part1_StrongTie.ejs");
});

app.get("/start", (req, res) => {
  res.render("consent.ejs");
});

app.post("/start", async (req, res) => {
  console.log(req.body, startTime);
  let { name } = req.body;
  let newSubject = new consentForm({
    name: name,
    ID: id,
    Group: group,
  });
  newSubject
    .save()
    .then(() => {
      console.log("accepted");
      if (group < 4) {
        res.render("form_part1_StrongTie.ejs", {});
      } else {
        res.render("form_part1_WeakTie.ejs", {});
      }
    })
    .catch((e) => {
      console.log("failed");
      console.log(e);
    });
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
