export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "",
} as const;

export function isEmailConfigured(): boolean {
  return !!(
    emailConfig.serviceId &&
    emailConfig.templateId &&
    emailConfig.userId
  );
}
