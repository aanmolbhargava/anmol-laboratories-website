export async function fetchPincode(pin) {
  if (pin.length !== 6) return null;

  try {
    const response = await fetch(`https://api.postalpincode.in/pincode/${pin}`);

    const data = await response.json();

    if (data[0].Status === "Success" && data[0].PostOffice.length > 0) {
      return {
        state: data[0].PostOffice[0].State,
        city: data[0].PostOffice[0].District,
      };
    }

    return null;
  } catch {
    return null;
  }
}
