export function createWhatsAppLink(number, product) {
  const message = `Hello,

I'm interested in the following product:

Product: ${product.name}
Category: ${product.category}
Pack Size: ${product.packSize}

Please share pricing, availability and more details.

Thank you.`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}