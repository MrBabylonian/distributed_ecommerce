import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
	getHello(): string {
		return "Hello World!";
	}

	getHealth(): object {
		return {
			status: 200,
			message: "Payment Service is running",
			uptime: `${Math.floor(process.uptime()) / 60}  minutes`,
			timestamp: (() => {
				const dateAndTime = new Date().toISOString().split("T");
				return `${dateAndTime[0]} ${dateAndTime[1]?.split(".")[0]}`;
			})(),
		};
	}

	testAuth(): string {
		return "Authentication successful for Payment Service";
	}
}
