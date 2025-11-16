import express, {Request, Response} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';


dotenv.config();

const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000


app.get('/', (req: Request, res:Response) => {
    res.json({message:'Hello, World!'})
})



app.get('/health', (req: Request, res: Response) => {
    res.json({status:'ok!'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})