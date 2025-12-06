import { Injectable } from "@nestjs/common";
import { type UserId } from "@repo/types/auth";

@Injectable()
export class AppService {
	getHello(): string {
		return "Hello World!";
	}

	getHealth(): object {
		return {
			status: 200,
			message: "Product Service is running",
			uptime: `${Math.floor(process.uptime()) / 60}  minutes`,
			timestamp: (() => {
				const dateAndTime = new Date().toISOString().split("T");
				return `${dateAndTime[0]} ${dateAndTime[1]?.split(".")[0]}`;
			})(),
		};
	}

	getTest(userId: UserId) {
		if (!userId) {
			return { message: "User ID not found in the request." };
		} else if (userId) {
			return { message: { userId } };
		}
		return { message: "Unexpected error occurred." };
	}
}
