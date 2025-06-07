import { FormTwoData } from "@/types/formType";

export async function registrationEmail(
  data: FormTwoData
): Promise<{ message: string }> {
  try {
    const response = await fetch("/api/volunter-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
