// app/actions/send-email.ts
'use server'

export async function sendEmail(prevState: any, formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    jobTitle: formData.get('job-title'),
    budget: formData.get('budget'),
    message: formData.get('message'),
  }

  const res = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rawFormData),
  })

  const result = await res.json()

  if (!res.ok) {
    return { status: 'error', message: result.message || 'Failed to send email.' }
  }

  return { status: 'success', message: 'Email sent successfully!' }
}
