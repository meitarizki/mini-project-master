const db = require("../models");
const user = db.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    const {username, email, phone_number, password, confPassword} = req.body;

    try {
      if (!username || !email || !phone_number || !password || !confPassword)
        throw `Please complete your data`;

      if (password !== confPassword) throw `password does not match`;

      const hashPass = await bcrypt.hashSync(password, 5);

      const data = await user.create({
        username,
        email,
        phone_number,
        password: hashPass,
      });

      res.status(201).send({
        status: true,
        data,
        message: `Register Success`,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  login: async (req, res) => {
    const {email, password} = req.body;

    try {
      const findUser = await user.findOne({
        where: {
          email,
        },
      });

      if (!findUser) throw `User not found`;

      const passCompare = await bcrypt.compareSync(password, findUser.password);
      if (!passCompare) throw `Wrong Password`;

      // menyimpan data ini ke token
      const payload = {
        id: findUser.id,
        merchant_status: findUser.merchant_status,
      };

      const token = jwt.sign(payload, "JWT", {expiresIn: "5h"});

      res.status(200).send({
        status: true,
        message: "Login success",
        data: {
          id: findUser.id,
          username: findUser.username,
          email: findUser.email,
          phone_number: findUser.phone_number,
          merchant_status: findUser.merchant_status,
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
