import { getAuth } from "@clerk/fastify";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const ClerkUserId = createParamDecorator(
    (_data: unknown, ctx: ExecutionContext): string | null => {
        const request = ctx.switchToHttp().getRequest();
        return request.auth?.sub || undefined;
    },
);

export const ClerkAuth = createParamDecorator(
    (_data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return getAuth(request);
    }
);