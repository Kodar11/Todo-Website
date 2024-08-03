import mongoose , {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase :true,
            trim : true,
            index : true
        },

        email : {
            type : String,
            required : true,
            unique : true,
            lowercase :true,
            trim : true
        },

        email : {
            type : String,
            required : true,
            index :true,
            trim : true
        },

        avatar : {
            type : String,
            required : true,

        },

        todos : {
            type : Schema.Types.ObjectId,
            ref : "Todos"
        },

        password : {
            type : String,
            required : [true, "password is required"]
        },
        
        refreshToken : {
            type : String
        }
    },
    {
        timestamps : true
    }
)

export const user = mongoose.model("User",userSchema)