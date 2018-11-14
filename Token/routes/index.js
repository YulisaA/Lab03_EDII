var express = require('express');
var router = express.Router();
var moment = require('moment');
let jwt = require('jwt-simple');
//Defined payload
var payload = { foo: 'bar' };

//Get data and send to index view
router.get('/', function(req, res, next){
   res.render('index', {title: "Generar token", value:'', Token:''});
});

//Validate if token has a secret word
function validate(secretWord){
   if(secretWord)
       return true;
   else
       return false;
}

router.post('/', function(req, res, next){  
  //Obtain secretWord
  key = req.body.secretWord;
  let token = '';

   if(validate(key)){
       //Generate token, payload defined before, and key is the secret word
       token = jwt.encode(payload, key);
   }
   else{
       //If there is no secret word entered, then, return empty token.
       res.render('index', { title: 'Generar token:', value :'', Token:''});
       return;
   }
   //Return token value
   res.render('index', { title: 'Generar token:', value :key, Token:token});
});
module.exports = router;