=>auth => who you ? , account 
=> authorzation  => persomissions 
 , porivillage 

 => user  login => route ( login , register ) , Controller => check data vala=> database ==> account crweate => token => session
 send data post 
 {
    "name ":"ehdaa",
    "email":abdullahehdaa@gmail.com,
    "password":"1234567890"
 }
 server check  enception for password before store it at database 
 token 

  Jwt token  => server => 


=> structre
model => user.js =>   شكل البيانات ال هتتخزن ف database
controller 
authController.js => methods 
authRoutes.js =>  (login , register )
middleware
   authMiddleware.js =>  valdation JWT 


 server.js  