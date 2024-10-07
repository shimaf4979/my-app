import { z } from "zod";

const MAX_MB = 5;
const MAX_FILE_SIZE = MAX_MB * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"];

export const formSchema = z.object({
  //usernameの指定→最小を設定、ダメならメッセージを流す
  username: z.string().min(2, { message: "Username is too short" }),
  //subjectの指定→最小を設定、ダメならメッセージを流す
  subject: z.string().min(2, { message: "Subject is required" }),
  //emailの指定→メールアドレスのフォーマットがダメならメッセージを流す
  email: z.string().email({ message: "Invalid email address" }),
  //contentの指定→最小を設定、ダメならメッセージを流す
  content: z
    .string()
    .min(10, { message: "You need to write more than 10 characters" })
    .max(100, { message: "You need to write less than 100 characters" }),
  file: z
    .custom<FileList>()
    .refine((files) => files?.length > 0, {
      message: "File is required",
    })
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
      message: `File size is too large, max size is ${MAX_MB}MB`,
    })
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
      message: "Unsupported file type",
    }),
});
