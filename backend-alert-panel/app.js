import express from 'express'
import logMiddleware from './middleware/logMiddleware.js';
import rateLimitMiddleware from './middleware/rateLimitMiddleware.js';

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(logMiddleware);
app.use(rateLimitMiddleware);

app.use('/', (req,res)=>{
    res.send("Hello, world")
})

app.router('/', (req,res)=>{

})

app.listen(PORT, ()=>{
    console.log(`Server is runnig port ${PORT}`)
});

export default app;