import { Controller, Get, UseGuards } from "@nestjs/common";
import { type UserId } from "@repo/types/auth";
import { ClerkAuthGuard, ClerkUserId } from "@/libs/clerk-auth";
import { AppService } from "./app.service";

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
	getTest(@ClerkUserId() userId: UserId) {
		return this.appService.getTest(userId);
	}
}
