const getAllEmployees = (req, res, next) => {
  const db = req.app.get("db");
  console.log("hit getall");
  db.get_all_employees()
    .then(employees => {
      console.log(employees);
      res.status(200).send(employees);
    })
    .catch(() => res.status(500).send());
};

const addEmployee = (req, res, next) => {
  const db = req.app.get("db");
  console.log(req.body);
  const { firstName, lastName, email, salary } = req.body;
  db.add_employee([firstName, lastName, email, salary])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(() => res.status(500).send());
};

module.exports = {
  getAllEmployees,
  addEmployee
};
