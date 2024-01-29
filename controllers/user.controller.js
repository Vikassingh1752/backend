const bcrypt = require("bcrypt");
const { userAuthmodel } = require("../model/usermodel");

const userRegister = async (req, res) => {
    
    try {
      const { name, email, password, username, mobile, address, gender } =
        req.body;     
        
       
      const newUser = new userAuthmodel({
        name,
        email,
        password: password,
        username,
        mobile,
        address: {
          street: address.street,
          city: address.city,
          state: address.state,
          postalCode: address.postalCode,
          country: address.country,
        },
        gender,
      });
      await newUser.save();
      res.status(200).send({ message: "Registered Successfully" });
    } catch (err) {
      console.error(err);
      res.status(502).send({ message: err.message });
    }
  }



  const userLogin = async (req,res)=>{
    const {email,password} = req.body;

    const user  = await userAuthmodel.findOne({email:email})
    console.log(user,"uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");

    res.status(200).send({ message: "Registered Successfully", user:user});



  }

module.exports = {
  userRegister,
  userLogin
};















