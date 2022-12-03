import userTable from "../userTable.js";
import bcrypt from "bcrypt";
const user = new userTable();

let currentlyLoggedIn = [];

const loginInfo = (req, res) => {
  if (req.body.details.email != "" && req.body.details.password != "") {
    user.getByEmail(req.body.details.email).then((result) => {
      if (result == undefined)
        res.send({ message: "Couldn't find your account." });
      else {
        bcrypt
          .compare(req.body.details.password, result.password)
          .then((isPasswordValid) => {
            if (isPasswordValid) {
              req.app.locals.client = result;
              res.send(result);
              currentlyLoggedIn[0] = result;
            } else res.send({ message: "Your password is incorrect" });
          });
      }
    });
  }
};
export default loginInfo;
