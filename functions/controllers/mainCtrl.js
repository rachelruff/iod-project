const getAllEmployees = (req, res, next) => {
  const db = req.app.get("db");
  db.get_all_employees()
    .then(employees => {
      console.log(employees);
      res.status(200).send(employees);
    })
    .catch(() => res.status(500).send());
};

const getEmployee = (req, res, next) => {
  const db = req.app.get("db");
  db
    .get_employee([req.params.id])
    .then(resp => res.status(200).send(resp))
    .catch((err) => res.status(500).catch(err));
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

const deleteEmployee = (req, res, next) => {
  const db = req.app.get("db");
  const { id } = req.params;
  db
    .delete_employee([id])
    .then(()=>res.status(200).send())
    .catch(err => { console.log(err); next(err) });
};

const updateEmployee = (req, res, next) => {
  const db = req.app.get("db");
  const {id} = req.params;
  const { firstName, lastName, email, salary } = req.body;
  // console.log('editNetworkName ctrl:',req.body)
  db
    .update_employee([id, firstName, lastName, email, salary])
    .then(() => res.status(200).send())
    .catch(() => res.status(500).catch());
};



module.exports = {
  getAllEmployees,
  getEmployee,
  addEmployee,
  deleteEmployee,
  updateEmployee
};
