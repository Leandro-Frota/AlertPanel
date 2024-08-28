import express from 'express'
import logMiddleware from './middleware/logMiddleware.js';
import rateLimitMiddleware from './middleware/rateLimitMiddleware.js';
import registerRoom from './routes/roomRoutes.js'



const app = express();

const PORT = 3001;

app.use(express.json());
app.use(logMiddleware);
app.use(rateLimitMiddleware);

app.use('/room',registerRoom)



app.listen(PORT, ()=>{
    console.log(`Server is runnig port ${PORT}`)
});

export default app;