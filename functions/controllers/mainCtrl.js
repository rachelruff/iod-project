const getAllEmployees = (req, res, next) => {
  const db = req.app.get("db");
  // console.log(db)
  db.get_all_employees()
    .then(employees => {
      console.log(employees);
      res.status(200).send(employees);
    })
    .catch(() => res.status(500).send());
};

module.exports = {
  getAllEmployees
};
