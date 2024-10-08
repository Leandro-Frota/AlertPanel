import express from 'express'
import logMiddleware from './middleware/logMiddleware.js';
import rateLimitMiddleware from './middleware/rateLimitMiddleware.js';
import registerRoom from './routes/roomRoutes.js'
import registerEmployee from './routes/registerEmployee.js'
import { connectDB } from './config/db.js';

const app = express();

const PORT = 3001;

app.use(express.json());
// app.use(logMiddleware);
// app.use(rateLimitMiddleware);

app.use('/room',registerRoom)
app.use('/employee',registerEmployee)



app.listen(PORT, async ()=>{
    console.log(`Server is runnig port ${PORT}`)
    await connectDB() 
});

export default app;