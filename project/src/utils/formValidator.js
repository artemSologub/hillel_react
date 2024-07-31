import { z } from 'zod';

const schema = z.object({
  customer: z.string().min('2'),
  phone: z.string().min('7'),
  address: z.string().min('9'),
  priority: z.boolean(),
});

export default schema;
