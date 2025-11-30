import 'dotenv/config';
import { verifyToken } from "@clerk/backend";
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from "@nestjs/common";

@Injectable()
export class ClerkAuthGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        if (!authHeader?.startsWith("Bearer ")) {
            throw new UnauthorizedException("No bearer token provided");
        }

        const token = authHeader.split(" ")[1];

        try {
            const payload = await verifyToken(token, {
                secretKey: process.env.CLERK_SECRET_KEY,
            });
            request.auth = payload; // Attach to request for later use
            return true;
        } catch (_error) {
            throw new UnauthorizedException("Invalid or expired token");
        }
    }
}
