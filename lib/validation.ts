import { z } from 'zod';

export const candidateSchema = z.object({
  fullName: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  email: z.string()
    .email('Email inválido')
    .max(255, 'Email deve ter no máximo 255 caracteres'),
  phone: z.string()
    .min(10, 'Telefone deve ter pelo menos 10 dígitos')
    .max(20, 'Telefone deve ter no máximo 20 dígitos')
    .regex(/^[\d\s\+\-\(\)]+$/, 'Formato de telefone inválido'),
  experience: z.string()
    .min(50, 'Descreva sua experiência com pelo menos 50 caracteres')
    .max(2000, 'Descrição deve ter no máximo 2000 caracteres'),
  availability: z.enum(['part-time', 'full-time', 'freelancer'], {
    errorMap: () => ({ message: 'Selecione uma opção de disponibilidade' })
  }),
  linkedinProfile: z.string()
    .url('URL do LinkedIn inválida')
    .optional()
    .or(z.literal('')),
  dataConsent: z.boolean()
    .refine(val => val === true, 'Você deve concordar com o processamento de dados')
});

export type CandidateFormData = z.infer<typeof candidateSchema>;