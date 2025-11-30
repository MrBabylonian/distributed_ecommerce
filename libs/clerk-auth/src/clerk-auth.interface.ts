export interface ClerkAuthInterface {
    isAuthenticated: boolean;
    userId: string;
    sessionId: string;
    sessionClaims: Record<string, any>;
    actor: Record<string, any>;
    getToken: (options?: { template?: string; }) => Promise<string>;
}