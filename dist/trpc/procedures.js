"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.botProcedures = void 0;
const zod_1 = require("zod");
const router_1 = require("./router");
const manager_1 = require("../bots/manager");
const BotRepository_1 = require("../db/repositories/BotRepository");
const botRepo = new BotRepository_1.BotRepository();
exports.botProcedures = {
    listBots: router_1.publicProcedure.query(() => __awaiter(void 0, void 0, void 0, function* () {
        return botRepo.getAll();
    })),
    addBot: router_1.publicProcedure
        .input(zod_1.z.object({ name: zod_1.z.string(), token: zod_1.z.string() }))
        .mutation((_a) => __awaiter(void 0, [_a], void 0, function* ({ input }) {
        return (0, manager_1.addBotAndStart)(input.name, input.token);
    })),
    removeBot: router_1.publicProcedure
        .input(zod_1.z.object({ id: zod_1.z.number() }))
        .mutation((_a) => __awaiter(void 0, [_a], void 0, function* ({ input }) {
        yield (0, manager_1.removeBotAndStop)(input.id);
        return { success: true };
    })),
};
