// express use 
dotenv.config();
const app = express();
app.use(express.json());
//Routes  URL 



// TEST URL Genral  
app.get("/",(req, res)=>{
    res.json({
        message :"aoi its ok"
    });
});
// Route don't exit 
app.use ((req, res , next )=>{
next( 
    new AppError(
       ` Route ${req.originUrl}  url wich you try to test it not found `,
       404
    )
)
});
//  error handling 
app .use (errorHandler );
const PORT= process.env.PORT||3000;
mongoose .connect( process.env.MONGO_URL).then(()=> 
{
console.log("Monog connected");
app.listen (PORT,()=>{
    console.log(`server is connected on this ${PORT}`)
});
}).catch ((error )=>
{
    console.log ("database not connected");
    console.error(error);

});