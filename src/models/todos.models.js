import mongoose, {Schema} from "mongoose";  

const todosSchema = new Schema(
    {
        title : {
            type : String,
            required : true,
            index : true
        },

        complete : {
            type : Boolean,
        },

        subtodos : {
            type : Schema.Types.ObjectId,
            ref : "SubTodos"
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


export const todos = mongoose.model("Todos",todosSchema) 