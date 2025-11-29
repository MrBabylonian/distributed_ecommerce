import fastify from "fastify";

const app = fastify({
    logger: true
});

const start = async () => {
    try {
        await app.listen({ port: 8001 });
        console.log("Order service is running on port 8001");

        const signalHandler = async (signal: string) => {
            console.log(`${signal} received. Closing server...`);
            await app.close();
            process.exit(0);
        };

        process.on('SIGINT', () => signalHandler('SIGINT'));
        process.on('SIGTERM', () => signalHandler('SIGTERM'));
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};

app.get("/", async (request, response) => {
    response.send({ message: "Order service is running" });
});

app.get("/health", async (request, response) => {
    response.send({
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

start();


