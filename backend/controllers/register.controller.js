import { addUser, selectUser } from "../configDB.js";
import bcrypt from "bcrypt";

const registerInfo = async (req, res) => {
  if (req.body.details.email != "" && req.body.details.password != "") {
    const result = await selectUser(req.body.details.email);

    if (result == "") {
      let password = req.body.details.password;
      const hashPassword = await bcrypt.hash(password, 10);
      console.log("Hashed password: ", hashPassword);
      const answer = await addUser(req.body.details, hashPassword);
      res.send(answer);
    } else {
      return res.send({
        message: "An account with that email already exists.",
      });
    }
  }
};

export default registerInfo;
