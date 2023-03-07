// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/project" , {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() =>{
//     console.log("connection successfull");
// }).catch((error) => {
//     console.log(error);
// })


const db = 'mongodb+srv://11yatinbindra:yatinbindra@cluster0.km20gva.mongodb.net/11yatinbindra?retryWrites=true&w=majorityty';

const mongoose = require('mongoose');
mongoose.connect(db , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log("connection successfull");
}).catch((error) => {
    console.log(error);
})