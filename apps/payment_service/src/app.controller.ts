import { Controller, Get, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { ClerkAuthGuard, ClerkUserId } from "@/libs/clerk-auth";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

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
    testAuth(@ClerkUserId() _userId: string) {
        return this.appService.testAuth();
    }
}
