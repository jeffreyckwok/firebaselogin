var controller = require('./../controllers/controller');

module.exports = app => {
  app.post('/api/login', controller.loginReg);
  app.get('/api/current', controller.current);
  app.get('/logout', controller.logout);
  app.post('/api/place', controller.savePlace);
  app.get('/api/profile', controller.getAllPlaces);

}
