import { selectUser } from "../configDB.js";
import bcrypt from "bcrypt";

let currentlyLoggedIn = [];

const loginInfo = async (req, res) => {
  if (req.body.details.email != "" && req.body.details.password != "") {
    const result = await selectUser(req.body.details.email);

    if (result == "") res.send({ message: "Couldn't find your account." });
    else {
      const isPasswordValid = await bcrypt.compare(
        req.body.details.password,
        result[0].password
      );

      if (isPasswordValid) {
        req.app.locals.client = result;
        res.send(result);
        currentlyLoggedIn[0] = result;
      } else {
        res.send({ message: "Your password is incorrect" });
      }
    }
  }
};
export default loginInfo;
