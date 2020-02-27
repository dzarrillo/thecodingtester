const CSSExam = require("../models/cssExam");
const ExpressExam = require("../models/expressExam");
const HTMLExam = require("../models/htmlExam");
const JavascriptExam = require("../models/javascriptExam");
const GithubExam = require("../models/githubExam");
const MongoExam = require("../models/mongoExam");
const MysqlExam = require("../models/mysqlExam");
const NodeExam = require("../models/nodeExam");
const ReactExam = require("../models/reactExam");

module.exports = app => {
    app.get("/api/cssexam", async (req, res) => {
      try{
        console.log("IN CSSExam route great");
        let cssExams = await CSSExam.find();
        res.send(cssExams);
      }catch(err){
        res.json({ message: err});
      }
    });

    app.get("/api/htmlexam", async (req, res) => {
      try{
        console.log("IN htmlexam route great");
        let htmlExams = await HTMLExam.find();
        // console.log(`Data ${JSON.stringify(htmlExams)}`);      
        res.send(htmlExams);
      }catch(err){
        res.json({ message: err});
      }
    });

    app.get("/api/expressexam", async (req, res) => {
      try{
        console.log("IN expressexam route great");
        let expressExams = await ExpressExam.find();
        // console.log(`Data ${JSON.stringify(htmlExams)}`);      
        res.send(expressExams);
      }catch(err){
        res.json({ message: err});
      }
    });

    app.get("/api/githubexam", async (req, res) => {
      try{
        console.log("IN githubexam route great");
        let githubExams = await GithubExam.find();
        res.send(githubExams);
      }catch(err){
        res.json({ message: err});
      }
    });

    app.get("/api/mongoexam", async (req, res) => {
      try{
        console.log("IN mongoexam route great");
        let mongoExams = await MongoExam.find();
        res.send(mongoExams);
      }catch(err){
        res.json({ message: err});
      }
    });

    app.get("/api/mysqlexam", async (req, res) => {
      try{
        console.log("IN mysqlexam route great");
        let mysqlExams = await MysqlExam.find();
        res.send(mysqlExams);
      }catch(err){
        res.json({ message: err});
      }
    });

    app.get("/api/nodeexam", async (req, res) => {
      try{
        console.log("IN nodeexam route great");
        let nodeExams = await NodeExam.find();
        res.send(nodeExams);
      }catch(err){
        res.json({ message: err});
      }
    });

    app.get("/api/reactexam", async (req, res) => {
      try{
        console.log("IN reactexam route great");
        let reactExams = await ReactExam.find();
        res.send(reactExams);
      }catch(err){
        res.json({ message: err});
      }
    });

    app.get("/api/jsexam", async (req, res) => {
      try{
        console.log("IN javascriptexam route great");
        let javascriptExams = await JavascriptExam.find();
        res.send(javascriptExams);
      }catch(err){
        res.json({ message: err});
      }
    });
  };
  