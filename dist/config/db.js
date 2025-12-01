import mongoose from "mongoose";
const connectDB = async () => {
    try {
        // if (!process.env.MONGO_URI) {
        //   throw new Error("MONGO_URI is not defined in .env");
        // }
        const conn = await mongoose.connect("mongodb+srv://krsnagupta79822:Ehgyukfyk786jyyg57hk@cluster0.q2775xw.mongodb.net/BrainlyDB");
        console.log(`MongoDB Connected Successfully`);
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map