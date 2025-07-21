"use server";

import { redirect } from "next/navigation";

export const contactAction = async (previousState, formData) => {
  //   const fullName = formData.get("fullName");
  //   const email = formData.get("email");
  //   const message = formData.get("message");

  try {
    const { fullName, email, message } = Object.fromEntries(formData.entries());
    console.log(fullName, email, message);

    // redirect("/");
    return { success: true, message: "form submitted successfully" };
  } catch (error) {
    // if(error.message === "NEXT_REDIRECT") throw error;
    console.log("server action: ", error);

    return { success: false, message: "error while submitting" };
  }
};