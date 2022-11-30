let details = [];

const registerInfo = (req, res) => {
  console.log("Received new user details!");
  var newDetails = {
    firstName: req.body.details.firstName,
    lastName: req.body.details.lastName,
    phoneNumber: req.body.details.phoneNumber,
    mailingAddress: req.body.details.mailingAddress,
    billingAddress: req.body.details.billingAddress,
    email: req.body.details.email,
    password: req.body.details.password,
  };
  details.push(newDetails);
  console.log(details);

  res.json({
    status: "success",
    Details: req.body,
  });
};

export default registerInfo;
