const { default: mongoose } = require("mongoose");
export const DBconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
