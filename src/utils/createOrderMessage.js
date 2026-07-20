import generateOrderId from "./orderId";

export function createOrderMessage(
  customer,
  cart,
  subtotal,
  shipping,
  total
) {
  let message =
`🟢 *NEW ORDER RECEIVED*

🆔 Order ID : ${orderId}

━━━━━━━━━━━━━━

👤 Customer

${customer.name}

📱 ${customer.whatsapp}

📍 ${customer.address}

${customer.city}

${customer.state}

${customer.pincode}

━━━━━━━━━━━━━━

🛒 PRODUCTS


`;
message +=
`• ${item.name}

Qty : ${item.qty}

Price : ₹${item.price}

Total : ₹${item.qty * item.price}

━━━━━━━━━━━━━━

`;

message +=
`Subtotal : ₹${subtotal}

Shipping : ${shipping===0?"FREE":"₹100"}

Grand Total : ₹${total}

━━━━━━━━━━━━━━

Thank you for choosing
Anmol Laboratories 🌿`;

  return encodeURIComponent(message);
}