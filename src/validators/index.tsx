import * as z from "zod";

const dataSchema = z.object({
  amount: z
      .number({ invalid_type_error: "Por favor, utilize números!" })
      .gte(1000, {message: "deve ser maior ou igual a 1000"}),
  installments: z
      .number({ invalid_type_error: "Por favor, utilize números!" })
      .gte(1, {message: "deve ser maior ou igual a 1"})
      .lte(12, {message: "deve ser menor ou igual a 12"}),
  mdr: z
      .number({ invalid_type_error: "Por favor, utilize números!" })
      .gte(0.1, {message: "deve ser maior ou igual a 0.1"}),
  days: z.string({}),
});

export default dataSchema;
