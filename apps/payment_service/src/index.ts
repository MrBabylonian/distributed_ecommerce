import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { time } from "console";

const app = new Hono();

app.get("/", (c) => {
    return c.json({ message: "Payment service is running" });
});

app.get("/health", (c) => {
    return c.json({
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


const start = async () => {
    try {
        const server = serve({
            port: 8002,
            fetch: app.fetch
        }, info => {
            console.log(`Payment service listening on port ${info.port} with Hono backend`);
        });

        const signalHandler = () => {
            console.log('Shutting down payment service...');
            server.close(() => {
                process.exit(0);
            });
        };

        process.on('SIGINT', signalHandler);
        process.on('SIGTERM', signalHandler);
    } catch (error) {
        console.log(error);
    }
};

start();

export default app;