const db = require("../models");

const Car = db.cars;

const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const car = {

      chassi: req.body.chassi,
      model: req.body.model,
      color: req.body.color
      
    };
  
    Car.create(car)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Car."
        });
      });

};

exports.findAll = (req, res) => {
  
    Car.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Cars."
        });
      });

};

exports.findOne = (req, res) => {

  const chassi = req.params.chassi;

  Car.findByPk(chassi)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Car with chassi=" + chassi
      });
    });

};

exports.findAllByModel = (req, res) => {

  const model = req.query.model;

  var condition = model ? { model: { [Op.like]: `%${model}%` } } : null;

  Car.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Cars."
      });
    });

};

exports.findAllByColor = (req, res) => {

  const color = req.query.color;

  var condition = color ? { color: { [Op.like]: `%${color}%` } } : null;

  Car.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Cars."
      });
    });

};

exports.update = (req, res) => {

    const chassi = req.body.chassi;
  
    Car.update(req.body, {
      where: { chassi: chassi }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Car was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Car with chassi=${chassi}. Maybe Car was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Car with chassi=" + chassi
        });
      });

};

exports.deleteOne = (req, res) => {

    const chassi = req.body.chassi;
  
    Car.destroy({
      where: { chassi: chassi }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Car was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Car with chassi=${chassi}. Maybe Car was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Car with chassi=" + chassi
        });
      });

};

exports.deleteAll = (req, res) => {
    Car.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Cars were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Cars."
        });
      });
      
};


