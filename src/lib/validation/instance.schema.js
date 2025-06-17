import { z } from "zod";
import { pricingModelOptions } from "../constant";

export const instanceSchema = z.object({
  region: z.string().nonempty("Region is required")
  ,
  instanceType: z.string()
    .nonempty("Instance Type is required")
  ,
  uuid: z.string().optional(),
  pricingModel: z.string()
    .nonempty("Pricing Model is required")
    .refine(val => pricingModelOptions.includes(val), {
      message: "Invalid pricing model selected",
    }),
  quantity: z.string().min(1, "Required"),
  noOfHours: z.string().min(1, "Required")
});
