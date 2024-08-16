const requestEmail = async (email, subject, text) => {
  return await fetch('/api/resend-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, subject, text })
  }).then(r => r.json())
}

export default requestEmail
