import express, { Request, Response } from 'express';
import listRoutes from './lists';
import pokeRoutes from './pokemon';
import cors from 'cors';


const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('<button>Hello, TypeScript Express!</button>');
});

app.get("/api/list", (req: Request, res: Response) => {
  const paramName = req.query.name
  const paramAge = req.query.age;

  const currYear = new Date().getFullYear();
  let birthYEar = 0;
  if (paramAge) {
    birthYEar = currYear - parseInt(paramAge as string);
  } else {
    res.status(400).json({
      message: "error, age is required"
    });

  }
  res.status(200).json({
    message: "success",
    name: paramName,
    birthYEar: birthYEar,
  });
});

app.post("/api/use", (req: Request, res: Response) => {
  const paramName = req.query.name
  const paramAge = req.query.age;

  console.log("params", req.body.name)
  res.status(200).json({
    message: "success",
  });
});

app.use("/api/list", listRoutes);
app.use("/api/pokemon", pokeRoutes);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});