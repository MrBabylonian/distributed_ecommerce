import { Controller, Get, UseGuards } from "@nestjs/common";
import { type UserIdRequest } from "fastify";
import { ClerkAuthGuard, ClerkUserId } from "@/libs/clerk-auth";
import { AppService } from "./app.service";

declare module "fastify" {
	interface UserIdRequest {
		userId: string | undefined;
	}
}

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Get("/health")
	getHealth(): object {
		return this.appService.getHealth();
	}

	@Get("/test")
	@UseGuards(ClerkAuthGuard)
	getTest(@ClerkUserId() userId: UserIdRequest) {
		return this.appService.getTest(userId);
	}
}
