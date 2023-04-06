let express=require("express")
let mongoose=require("mongoose")
let app=express()
let cors=require("cors")
app.use(cors())
let bodyParser=require("body-parser")                                        
app.use(bodyParser.urlencoded({extended:true}))

let rout=require("./ROUTES/userRouts")
mongoose.connect("mongodb://127.0.0.1:27017/test").then(()=>{console.log("database is connect...")}).catch(()=>{console.log("not connected")})
app.use(express.json())
app.use("",rout)


app.listen(5000,()=>{
    console.log("server is runing.....")
})
