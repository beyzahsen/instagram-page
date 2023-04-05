require("./db")
const User = require("./User")

const getUser = async(name) => {
    const user = await User.findOne({name:name})
    if(user != null) {
        return user
    }
    else{
        return {error:"User doesn't existe"}
    }
}

