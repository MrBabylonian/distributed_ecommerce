import "dotenv/config";
import { clerkPlugin } from "@clerk/fastify";
import { NestFactory } from "@nestjs/core";
import {
	FastifyAdapter,
	type NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter({ logger: true }),
		{ abortOnError: false },
	);
	app.enableShutdownHooks();
	await app.register(clerkPlugin);
	await app.listen(process.env.PORT || 9000, "0.0.0.0");
}
bootstrap();
