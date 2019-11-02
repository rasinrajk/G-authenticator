const express =  require('express');
const router = express.Router();


//Routes for post method
console.log("in apiservice")
router.get('/',(req,res)=> {
    res.send('we are on api0.0.0');
});

module.exports = router;