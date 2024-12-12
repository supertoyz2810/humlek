import { z } from "zod";

export const CafeSchema = z.object({
    thumbnail: z.string(),
    cafeName: z.string(),
    description: z.string(),
    isTodayPick: z.boolean(),
})

export const AdvanceFilterSearchCafeSchema = z.object({
  cafeName: z.string().optional(),
  city: z.string().optional(),
  district: z.string().optional(),
  price: z.number().int().optional(),
  isBestChoice: z.boolean().optional(),
  isHoldingEvents: z.boolean().optional(),
  isOnPromotions: z.boolean().optional(),
  cafeCategory: z.array(z.number().int()).optional(),
});