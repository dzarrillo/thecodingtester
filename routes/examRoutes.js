const CSSExam = require("../models/cssExam");
const HTMLExam = require("../models/htmlExam");
const JAVASCRIPTExam = require("../models/javascriptExam");

module.exports = app => {
    app.get("/api/cssexam", async (req, res) => {
      try{
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

    app.get("/api/javascriptexam", async (req, res) => {
      try{
        console.log("in js backend"); 
        // let javascriptExams = await JAVASCRIPTExam.find();
        // console.log(`Data ${JSON.stringify(javascriptExams)}`);      
        // res.send(javascriptExams);
      }catch(err){
        res.json({ message: err});
      }
    });

  };
  