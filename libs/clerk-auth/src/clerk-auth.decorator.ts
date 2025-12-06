import { getAuth } from "@clerk/fastify";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import {type UserId} from "@repo/types/auth"

export const ClerkUserId = createParamDecorator(
    (_data: unknown, ctx: ExecutionContext): UserId => {
        const request = ctx.switchToHttp().getRequest();
        return request.auth?.sub || undefined; // sub is the user id
    },
);

export const ClerkAuth = createParamDecorator(
    (_data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return getAuth(request);
    }
);