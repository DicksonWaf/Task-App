require('..src/db/mongoose')

const User = require('..src/models/user')
User.findByIdAndUpdate('5dfe9d448835634a68f9ceb8', {age:20}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:20})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    
})