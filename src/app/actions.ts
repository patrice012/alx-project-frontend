"use server";
import postReq from "@/utils/postReq";

export async function loginProcess(formData: FormData) {
  const rawFormData = {
    username: formData.get("loginUsername"),
    password: formData.get("loginPassword"),
  };

  try {
    const data = await postReq(rawFormData, "auth/login");
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

export async function registerProcess(formData: FormData) {
  const rawFormData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const data = await postReq(rawFormData, "auth/register");
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
