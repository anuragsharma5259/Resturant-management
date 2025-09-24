const express=require('express')
const cors=require('cors')
const morgan=require('morgan')

const app=express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.get('/',(req,res)=>{
  return res.status(200).send('<h1>Welcome to the Home Page</h1>')
}
)
const port=8080
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
