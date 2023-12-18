export const DB_CONNECT = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database");
    // console.error(error);
  }
};
