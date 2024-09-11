const express = require("express");
const router = express.Router();

const collection = require("./employeeModel");
const fileUpload =require('express-fileupload');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());

router.get("/getUsers", cors(), (req, res) => {
    collection
        .find()
        .then((employeedata) => res.json(employeedata))
        .catch((err) => res.json(err));
});

router.get("/getEmployeeByPosition", cors(), async (req, res) => {
    const { position } = req.query;

    try {
        const employeeData = await collection.find({ selectPosition: position });
        res.json(employeeData);
    } catch (err) {
        console.error(err);
        res.json(err);
    }
});

router.put("/updateEmployee/:id", async (req, res) => {
    const id = req.params.id;
    const updatedEmployeeData = req.body;
  
    try {
      const result = await collection.updateOne({ _id: id }, { $set: updatedEmployeeData });
      if (result.modifiedCount > 0) {
        res.json({ message: "Employee updated successfully", data: result });
      } else {
        res.status(404).json({ error: "Employee not found" });
      }
    } catch (error) {
      console.error("Error updating employee:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  router.post("/login", async (req, res) => {
    const { empId, password } = req.body;
  
    try {
      const employeeData = await collection.findOne({
        empId: empId,
        password: password,
      });
  
      if (employeeData) {
        //console.log("Fetched employee data:", employeeData);
        res.json(employeeData); // Return employee data on successful login
      } else {
        res.status(404).json({ error: "Employee not found" });
      }
    } catch (e) {
      console.error("Error fetching employee data:", e);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  router.post("/signup", async (req, res) => {
  
    const {
      email,
      password,
      empId,
      firstName,
      lastName,
      address,
      dob,
      selectedBank,
      accNum,
      selectPosition,
      nicNumber,
      gender,
      
    } = req.body;
  console.log(req.body.photo);
    const data = {
      email: email,
      password: password,
      empId: empId,
      firstName: firstName,
      lastName: lastName,
      address: address,
      dob: dob,
      selectedBank: selectedBank,
      accNum: accNum,
      selectPosition: selectPosition,
      nicNumber: nicNumber,
      gender: gender,
      
    };
  
   
  //   if (req.files != null) 
              
  //             const path = public/${empId}.jpg;
  //             const file = req.files.photo;
  //             file.mv(path, (error) => {
  //                 if (error) {
  //                     return res.status(ec.serverError).json({
  //                         status: "error",
  //                         message: "Couldn't save the profile picture.",
  //                         error: error.message,
  //                     });
  //                 }
  //             });
  //         }
  
    try {
      const check = await collection.findOne({ empId: empId });
  
      if (check) {
        res.json("exist");
      } else {
        res.json("notexist");
        await collection.insertMany([data]);
      }
    } catch (e) {
      console.log(e);
      res.json("fail");
    }
  });
  module.exports = router;
