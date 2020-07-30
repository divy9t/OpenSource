const express = require('express');
const router = express.Router();
const UserModel = require('../modules/users');

router.get("/",async(req, res)=>{
	const users = await UserModel.find();
	res.json(users);
	
});

router.get("/sparta",(req, res)=>{
	res.send("This is sparta")
});

router.post("/create",async(req, res)=>{
	if (!req.body.password){
		res.status(403).send("Please input a password")
	}else if (!req.body.email){
		res.status(403).send("Please input a email")
	}else if (!req.body.username){
		res.status(403).send("Please input a username")
	} else{
		const newUser = new UserModel({
			title: req.body.title,
			email: req.body.email,
			userName: req.body.username
		});

		newUser.password = newUser.generateHash(req.body.password);

		
		try{
			const dataSave = await newUser.save();
			res.json(dataSave);
		}catch(err){
			 res.status(404).send(err)
		}
	}
});

router.post("/login", async(req, res)=>{
	UserModel.findOne({'userName':req.body.username},(req, user) => {
		if(!user){
			res.status(401).send("User Doesn't Exists")
		}else if (!user.validPassword(req.body.password)){
			res.status(401).send("Wrong Password")
		}else{
			res.json({"status":"Login Successful","authenticated":true});
		}
	});
});


module.exports = router;