
const res = require("express/lib/response");

const error_Handler = (err)=>{
let errors = {full_name:" ", email:" ", phone_no:" "};
    if (err.code === 11000){
        if (err.message.includes("full_name dup key")){
            errors.full_name = "User is already existing"
        };
        if (err.message.includes("email_1 dup key")){
            errors.email = "Email address already exist"
        };
        if (err.message.includes("phone_no_1 dup key")){
            errors.phone_no = "Phone number belongs to another user"
        };
        return {errors}
    }
        
    console.log(err.message);
}

module.exports = {error_Handler};