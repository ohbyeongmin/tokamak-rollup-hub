'use server'
import { redirect } from "next/navigation"

export async function handleSubmit(formData) {

  console.log(formData)

  redirect('/deploy/devnet')
}
