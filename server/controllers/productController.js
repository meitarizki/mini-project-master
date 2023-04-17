const db = require("../models");
const jwt = require("jsonwebtoken");

const user = db.User;
const merchant = db.Merchant;
const product = db.Product;

module.exports = {
  addProduct: async (req, res) => {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(400).send(`Token Unauthorize or expired`);
    }

    try {
      token = token.split(" ")[1];

      const verifyUser = jwt.verify(token, "JWT");
      console.log(verifyUser);

      const userExist = await user.findOne({
        where: {
          id: verifyUser.id,
        },
      });

      const merchantExist = await merchant.findOne({
        where: {
          user_id: verifyUser.id,
        },
      });

      if (userExist.merchant_status) {
        const data = await product.create({
          merchant_id: merchantExist.id,
          ...req.body,
        });

        res.status(200).send({
          status: true,
          data,
          message: `Success add product`,
        });
      } else {
        throw `You need to be a merchant to sell product`;
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
