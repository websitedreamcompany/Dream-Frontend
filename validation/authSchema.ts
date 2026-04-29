 import zod from "zod";

export const createAccountSchema = zod.object({
 email:zod.email().regex(/^\S+@\S+\.\S+$/,{
        message:'Invalid email address provided'
    }).nonempty(),
    password:zod.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/,{
        message:'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    }).nonempty().min(6),
     adClassification:zod.enum(['private','Commercial'],{
        message:'Invalid ad classification provided. Must be either "private" or "Commercial".'
      }).optional(),
      signup_for_newsletter:zod.boolean().optional()
});

export const LoginAccountValidationSchema = zod.object({
 email:zod.email().regex(/^\S+@\S+\.\S+$/,{
        message:'Invalid email address provided'
    }).nonempty(),
    password:zod.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8,}$/,{
        message:'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    }).nonempty().min(6),

})

export type CreateAccountSchemaType = zod.infer<typeof createAccountSchema>;