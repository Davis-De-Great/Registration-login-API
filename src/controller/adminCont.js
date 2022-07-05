
const User = require("../model/userModel");


module.exports = {

    create_admin: async (req,res)=>{
        const user_id = '62befd2ae557903b0079968c';
        User.findOneAndUpdate({_id: user_id}, {isAdmin: true})
    },

    get_users: async (req,res)=>{
        try {
            const user = await User.find()
            return res.status(200).json({user})
        } catch (error) {
            let err = "No user has registered";
            return res.status(200).json({err});
        }
    },

    get_profile: async (req,res)=>{
        
    }
}