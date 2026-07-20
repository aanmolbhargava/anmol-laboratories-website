export function createBusinessWhatsapp(number, form) {

  const text = `Hello Anmol Laboratories,

Business Enquiry

Name : ${form.name}

WhatsApp : ${form.whatsapp}

Address : ${form.address}

Requirement :

${form.requirement}`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

}