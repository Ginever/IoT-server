import express from 'express';
import CatRouter from "./routes/catRouter.js"; 
import connectDB from "./config/db.js";   // <- add this



const app = express();
const port = 3000;

connectDB();                             // <- add this

app.use(express.urlencoded({ extended: true }));
app.use("/api", CatRouter);  

// async function main() {

//   const fluffy = new Kitten({ name: 'fluffy' });
//   await fluffy.save();
//   const kittens = await Kitten.find();
//   console.log(kittens);
// }

// // Route to handle GET request
// app.get('/', async (req, res) => {
//     await mongoose.connect('mongodb://mongo_db:27017/UsersDB');
//     const Kitten = mongoose.model('Kitten', kittySchema);

//     const kittens = await Kitten.find();
//     res.send(kittens);
    
//     const fluffy = new Kitten({ name: 'potato' });
//     await fluffy.save();
// })

// // Route to handle POST request
// app.post('/submit-form', (req, res) => {
//     res.send('Form submitted');
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  
});