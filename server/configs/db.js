import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI is missing. Check your server/.env file.");
        }
        mongoose.connection.on('connected', () => console.log('Database Connected'));
        mongoose.connection.on('error', (error) => console.log("MongoDB connection error:", error.message));
        // Connect to the database
        await mongoose.connect(uri, {
            dbName: "stay-royale",
            serverSelectionTimeoutMS: 10000,
        });
        // await mongoose.connect(`${process.env.MONGODB_URI}/stay-royale`)
        console.log("Database Connected Successfully");
        console.log("Database Name:", mongoose.connection.name);
        console.log("MongoDB Host:", mongoose.connection.host);
    }
    catch(error){
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }
}

export default connectDB;