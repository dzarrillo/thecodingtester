const CSSExam = require("../models/cssExam");

module.exports = app => {
    app.get("/api/cssexam", async (req, res) => {
      try{
        console.log("IN cssexam route");
        let cssExams = await CSSExam.find();
        console.log(`Data ${JSON.stringify(cssExams)}`);      
        res.send(cssExams);
      }catch(err){
        res.json({ message: err});
      }
    });

  };
  