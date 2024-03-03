const Schema = mongoose.Schema;


mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://myAtlasDBUser:<1234>@myatlasclusteredu.gwagcga.mongodb.net/local_library?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}