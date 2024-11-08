import { z } from "zod";

export const RestaurantSchema = z.object({
    thumbnail: z.string(),
    restaurantName: z.string(),
    description: z.string(),
    isTodayPick: z.boolean(),
})