import mongoose from "mongoose";



const userSchema = new mongoose.Schema(

{

    googleId:{

        type:String,

        default:null

    },


    firstName:{

        type:String,

        required:true,

        trim:true

    },


    lastName:{

        type:String,

        required:true,

        trim:true

    },


    email:{

        type:String,

        required:true,

        unique:true,

        lowercase:true,

        trim:true

    },


    profileImage:{

        type:String,

        default:null

    },


    role:{

        type:String,

        enum:[

            "doctor",
            "patient"

        ],

        default:"patient"

    }

},

{

    timestamps:true

}

);



const User = mongoose.model(

    "User",

    userSchema

);



export default User;