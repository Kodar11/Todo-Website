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

userSchema.pre("save", async function (next) {
    if(!(this.isModified("password"))) return next ();

    this.password = bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.method.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id,
            username : this.username,
            email : this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expireIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.method.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id : this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expireIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const user = mongoose.model("User",userSchema)