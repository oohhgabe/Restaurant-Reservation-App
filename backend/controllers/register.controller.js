import userTable from "../userTable.js";
import bcrypt from "bcrypt";
const user = new userTable();

const registerInfo = (req, res) => {
  if (req.body.details.email != "" && req.body.details.password != "") {
    user.getByEmail(req.body.details.email).then((result) => {
      if (result == undefined) {
        let password = req.body.details.password;
        bcrypt.hash(password, 10).then((hashPassword) => {
          console.log("Hashed password: " + hashPassword);
          user
            .createUser(
              req.body.details.email,
              hashPassword,
              req.body.details.firstName,
              req.body.details.lastName,
              req.body.details.phoneNumber,
              req.body.details.mailingAddress,
              req.body.details.billingAddress
            )
            .then((answer) => {
              res.send(answer);
            });
        });
      }
    });
  } else
    res.send({
      message: "An account with that email already exists.",
    });
};

export default registerInfo;
