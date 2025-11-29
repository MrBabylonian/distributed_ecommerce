import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors({
    origin: ["http://localhost:3002", "http://localhost:3003"],
    credentials: true
}));

app.get("/", (req, res) => {
    res.json({ message: "Product service is running now" });
});

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        uptime: `${Math.floor(process.uptime() / 60)} minutes`,
        timestamp: (() => {
            const date = new Date().toISOString().split('Z')[0]?.split('T');
            return {
                date: date![0],
                time: date![1]
            };
        })()
    });
});



const server = app.listen(8000, () => {
    console.log("Product service is running on port 8000");
});

const signalHandler = () => {
    console.log('Shutting down product service...');
    server.close(() => {
        process.exit(0);
    });
};

process.on('SIGINT', signalHandler);
process.on('SIGTERM', signalHandler);
