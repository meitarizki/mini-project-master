const db = require("../models");
const merchant = db.Merchant;
const user = db.User;
const jwt = require("jsonwebtoken");

module.exports = {
  RegisertMerchant: async (req, res) => {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(400).send("token unauthorized or expired");
    }

    try {
      const {name, address} = req.body;

      token = token.split(" ")[1];

      if (!name || !address) throw `Please complete your data`;

      const verifyUser = jwt.verify(token, "JWT");
      console.log(verifyUser);

      const userExist = await user.findOne({
        where: {
          id: verifyUser.id,
        },
      });

      if (userExist.merchant_status === false) {
        const data = await merchant.create({
          user_id: verifyUser.id,
          name,
          address,
        });

        res.status(200).send({
          status: true,
          data: data,
          message: `Success register merchant`,
        });
      } else {
        throw `One account can only have one merchant`;
      }

      await user.update(
        {
          merchant_status: true,
        },
        {
          where: {
            id: verifyUser.id,
          },
        }
      );
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
