'use server'

import { redirect } from "next/navigation"

export async function handleSubmit(formData) {
  const request = {
    rollupName: formData.get('rollupName'),
    chainId: parseInt(formData.get('chainId'), 10),
    adminAddress: formData.get('adminAddress'),
    sequencerAddress: formData.get('sequencerAddress'),
    batcherAddress: formData.get('batcherAddress'),
    proposerAddress: formData.get('proposerAddress'),
  }

  const res = await fetch('http://localhost:3030/deploy-config', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request)
  })

  await res.json()

  redirect(`/deploy/devnet?rollupName=${request.rollupName}`)
}

export async function getData(rollupName) {
  const res = await fetch(`http://localhost:3030/deploy-config/${rollupName}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
