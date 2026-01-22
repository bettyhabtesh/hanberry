type BookingEmailData = {
  useremail: string, 
  message: string
}

export function contactEmail(data: BookingEmailData) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 16px;">
      <h2 style="color: #111;">New Message from Website Contact Form </h2>

      <div style="border: 1px solid #ddd; padding: 12px; border-radius: 8px;">
        <p><strong>Customer Email:</strong> ${data.useremail}</p>
        <p><strong>Customer Message:</strong> +251 ${data.message}</p>
        <p></p>
      </div>

    </div>
  `
}
