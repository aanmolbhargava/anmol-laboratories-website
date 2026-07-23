import generateOrderId from "./orderId";

export function createOrderMessage(customer, cart, subtotal, shipping, total) {
  const orderId = generateOrderId();

  let message = `🟢 *NEW ORDER RECEIVED*

🆔 Order ID : ${orderId}

━━━━━━━━━━━━━━

👤 *Customer Details*

Name : ${customer.name}

WhatsApp : ${customer.whatsapp}

Address :
${customer.address}

${customer.city}, ${customer.state}

Pincode : ${customer.pincode}

${
  customer.notes
    ? `Notes : ${customer.notes}

`
    : ""
}

━━━━━━━━━━━━━━

🛒 *ORDER ITEMS*

`;

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name}

Pack : ${item.packSize}

Qty : ${item.qty}

Price : ₹${item.price}

Total : ₹${item.qty * item.price}

━━━━━━━━━━━━━━

`;
  });

  message += `💰 *ORDER SUMMARY*

Subtotal : ₹${subtotal}

Shipping : ${shipping === 0 ? "FREE" : `₹${shipping}`}

Grand Total : ₹${total}

━━━━━━━━━━━━━━

🌿 Thank you for choosing

*Anmol Laboratories*`;

  return message;
}
