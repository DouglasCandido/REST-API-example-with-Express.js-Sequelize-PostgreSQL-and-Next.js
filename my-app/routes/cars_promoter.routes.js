module.exports = app => {
    
    const cars = require("../controllers/car.controller.js");
  
    var router = require("express").Router();
  
    router.post("/cars", cars.create);
  
    router.get("/cars", cars.findAll);
  
    // router.get("/cars/:chassi", cars.findOne);

    router.post("/cars/bymodel", cars.findAllByModel);

    // router.get("/cars/bycolor", cars.findAllByColor);
  
    router.put("/cars/update", cars.update);
  
    router.delete("/cars/delete", cars.deleteOne);
  
    // router.delete("/cars", cars.deleteAll);

    app.use('/api', router);

};



