/** Contains logic using which we will connect to the database. */
import mongoose from "mongoose";

 export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://greatstack:123451@cluster0.kc89x.mongodb.net/food-del')).isObjectIdOrHexString(() =>console.log("DB Connected"));
}