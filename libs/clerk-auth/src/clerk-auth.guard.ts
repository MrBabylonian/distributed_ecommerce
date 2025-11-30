import { getAuth } from "@clerk/fastify";
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from "@nestjs/common";

@Injectable()
export class ClerkAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const { isAuthenticated, userId } = getAuth(request);
        if (!isAuthenticated || !userId) {
            throw new UnauthorizedException("User is not authenticated. ");
        }
        return true;
    }
}
