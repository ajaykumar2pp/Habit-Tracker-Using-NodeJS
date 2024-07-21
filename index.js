require('dotenv').config()
const express =require('express');
const path = require('path');
const app =express();
const router =require('./routes/mainRoutes')

// ************************  Database Connection  **********************************//
const {connectMonggose} = require('./app/db')
connectMonggose();


// *************************   express middleware    ****************************************//

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// *******************    // Setup View Engine (EJS)  ***********************************//
app.set("view engine","ejs")
app.set('views', path.join(__dirname, 'views'))
// console.log(app.get("view engine"))



// ***************************  Routes  *************************************//
app.use(router);



const PORT = process.env.PORT || 7500

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})
