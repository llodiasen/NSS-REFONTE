import { z } from "zod";
import { Role } from "@prisma/client";

export const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(8, "Mot de passe trop court"),
});

export const invitationSchema = z.object({
  email: z.string().email("Email invalide"),
  role: z.nativeEnum(Role),
});

export const activateAccountSchema = z
  .object({
    token: z.string().min(1, "Token requis"),
    firstName: z.string().min(2, "Prénom requis"),
    name: z.string().min(2, "Nom requis"),
    password: z
      .string()
      .min(8, "Minimum 8 caractères")
      .regex(/[A-Z]/, "Au moins une majuscule")
      .regex(/[0-9]/, "Au moins un chiffre"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export const profileSchema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  name: z.string().min(2, "Nom requis"),
  organisation: z.string().optional(),
  country: z.string().optional(),
  bio: z.string().max(500, "500 caractères maximum").optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type InvitationInput = z.infer<typeof invitationSchema>;
export type ActivateAccountInput = z.infer<typeof activateAccountSchema>;
export type ProfileInput = z.infer<typeof profileSchema>;
