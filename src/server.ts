import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './trpc/router';
import { logger } from './logger';

export function createServer() {
    return createHTTPServer({
        router: appRouter,
        createContext: () => ({}),
    });
}