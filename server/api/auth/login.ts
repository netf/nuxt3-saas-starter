import { createError, eventHandler, readBody } from "h3";
import { z } from "zod";
import { sign } from "jsonwebtoken";

export const SECRET = "dummy";

export default eventHandler(async (event) => {
  const result = z
    .object({ email: z.string().min(1), password: z.literal("hunter2") })
    .safeParse(await readBody(event));
  if (!result.success) {
    throw createError({
      statusCode: 403,
      statusMessage: "Unauthorized, hint: try `hunter2` as password",
    });
  }

  const expiresIn = 60 * 60 * 24; // 24 hours

  const { email } = result.data;

  const user = {
    email,
    picture: "https://github.com/nuxt.png",
    name: "User " + email,
  };

  const accessToken = sign({ ...user, scope: ["test", "user"] }, SECRET, {
    expiresIn,
  });
  const refreshToken = sign({ ...user, scope: ["test", "user"] }, SECRET, {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
  });

  return {
    token: {
      accessToken,
      refreshToken,
    },
  };
});
