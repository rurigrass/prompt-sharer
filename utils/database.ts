import mongoose from "mongoose";

let isConnected = false; //track the status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MONGODB is already connected");
    return;
  }

  const options = {
    dbName: "share_prompt",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`, options);
    isConnected = true;
    console.log("MONGODB connectedƒ");
  } catch (error) {
    console.log(error);
  }
};
