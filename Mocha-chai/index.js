// const prompt = require('prompt');
const add = (a, b) => +a + +b;
const subtract = (a, b) => a - b;



module.exports = {add, subtract};

// function add() {
//     prompt.start();

//     prompt.get(["num1","num2"], function (err,res) {

//         if(err){
//             console.log(err);
//         }else{
//             var sum = parseInt(res.num1)+ parseInt(res.num2);
//             console.log("Sum of " + res.num1 
//             + " and " + res.num2 + " is " + sum);
//         }
        
//     })
// };

// add();




// const PORT = 9000;

// app.listen(PORT, function(){
//     console.log("Server listening on PORT", PORT);
// });





export const login = async (req, res, next) => {
  try {
    const data = await UserService.login(req.body);
    if(data == null){
      res.status(HttpStatus.NOT_FOUND).json({
        code: HttpStatus.NOT_FOUND,
        message: 'user does not exit'
      });
    }else{
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'login successfully'
    });
  }
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST,).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    })
    next();
  }
};