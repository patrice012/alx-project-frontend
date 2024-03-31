import postReq from "@/utils/postReq";

export async function checkAuth() {
  try {
    const user = await postReq({}, "/auth/check-identity");
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
