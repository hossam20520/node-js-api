const errors = require('restify-errors');
const rjwt = require('restify-jwt-community');
const Customer = require('../models/Customer');
const config = require('../config');


module.exports = server => {

    // get customers
    server.get('/customers' , async (req , res , next) => {
        try{
            const customers = await Customer.find({});
            res.send(customers);
            // res.send({'msg':'test'});
            next();
        } catch(err){
           return next(new errors.InsufficientStorageError(err)); 
        }
     
    });

    //get single customer 


    server.get('/customer/:id' , async (req , res , next) => {
        try{
            const customer = await Customer.findById(req.params.id);
            res.send(customer);
             next();
        } catch(err){
           return next(new errors.ResourceNotFoundError(`there is no customer with id ${req.params.id}` )); 
     
        }
     
    });




    server.post('/customers' , rjwt({secret:config.JWT_SECRET})  ,   async (req , res , next) => {
   if(!req.is('application/json')){
       return next(new errors.InvalidContentError("Exept application/json"));
   }
   const {name , email , balance} = req.body;
   const customer = new Customer({
     name,
     email,
     balance
 });
 try {
    const newCustomer = await customer.save();
    res.send(201);
    next();
 } catch (err) {
     return next(new errors.InternalError(err.message));
 }
 
    });

// update user

server.put('/customers/:id' , rjwt({secret:config.JWT_SECRET}) , async (req , res , next) => {
    if(!req.is('application/json')){
        return next(new errors.InvalidContentError("Exept application/json"));
    }

  try {
     const customer = await Customer.findOneAndUpdate({_id: req.params.id} , req.body);
     res.send(200);
     next();
  } catch (err) {

     return next(new errors.ResourceNotFoundError(`there is no customer with id ${req.params.id}` )); 
     


  }
  
     });


     //delete 
     server.del('/customers/:id' , rjwt({secret:config.JWT_SECRET}) ,  async (req , res , next) => {

        try {
            const customer  = await Customer.findOneAndRemove({_id: req.params.id});
            res.send(204);
            next();
        } catch (err) {
            return next(new errors.ResourceNotFoundError(`there is no customer with id ${req.params.id}` )); 
     

        }
      });


};