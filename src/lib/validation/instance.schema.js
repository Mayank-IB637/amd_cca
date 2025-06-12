import { z } from "zod";
import { instanceOptions, pricingModelOptions, regionOptions } from "../constant";

export const instanceSchema = z.object({ 
  region: z.string()    .nonempty("Region is required")
    .refine(val => regionOptions.includes(val), {
      message: "Invalid region selected",
    }),
  instanceType: z.string()
    .nonempty("Instance Type is required")
    .refine(val => instanceOptions.includes(val), {
      message: "Invalid instance type selected",
    }),
  uuid: z.string().optional(),
  pricingModel: z.string()
    .nonempty("Pricing Model is required")
    .refine(val => pricingModelOptions.includes(val), {
      message: "Invalid pricing model selected",
    }),
  quantity: z.string().min(1, "Required"),
  noOfHours: z.string().min(1, "Required")
});
