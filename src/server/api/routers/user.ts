import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getLoginSession: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
