import mongoose, {Schema} from "mongoose";  

const subtodosSchema = new Schema(
    {
        content : {
            type : String,
            required : true,
            index : true
        },

        complete : {
            type : Boolean,
        },

        todos : {
            type : Schema.Types.ObjectId,
            ref : "Todos"
        },

        createdBy : {
            type : Schema.Types.ObjectId,
            ref : "User"
        }


    },
    {
        timestamps : true
    }
)


export const subtodos = mongoose.model("SubTodos",subtodosSchema) 