import { z } from "zod";

export const PostSchema = z.object({
  thumbnail: z.string(),
  content: z.string(),
  username: z.string(),
  postApproval: z.boolean(),
});
