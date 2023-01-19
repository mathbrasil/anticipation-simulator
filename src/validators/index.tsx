import * as z from "zod"

const dataSchema = z.object({
  amount: z.string(),
  installments: z.string(),
  mdr: z.string()
})

export default dataSchema