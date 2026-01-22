type BookingEmailData = {
  fullname: string, 
  phone: string, 
  date: string, 
  quantity: string, 
  packageName: string, 
  packagePrice: string, 
  includes: string[],
  duration: string
}

export function bookingSummaryEmail(data: BookingEmailData) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 16px;">
      <h2 style="color: #111;">Booking Summary</h2>

      <div style="border: 1px solid #ddd; padding: 12px; border-radius: 8px;">
        <p><strong>Customer Name:</strong> ${data.fullname}</p>
        <p><strong>Phone Number:</strong> +251 ${data.phone}</p>
        <p><strong>Person quantity:</strong> ${data.quantity}</p>
        <p><strong>Booked date:</strong> ${data.date}</p>
        <p><strong>Service selected:</strong> ${data.packageName}</p>
        <p><strong>Packages include:</strong> ${data.includes}</p>
        <p><strong>Duration:</strong> ${data.duration}</p>

        <p></p>
      </div>

      <p style="margin-top: 16px; color: #555;">
        This booking was made from your website, Hanberry Beauty.
      </p>
    </div>
  `
}
