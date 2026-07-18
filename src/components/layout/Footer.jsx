const Footer = () => {
  return (
    <footer className="mt-20 bg-green-900 py-12 text-center text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold">
          Anmol Laboratories
        </h2>

        <p className="mt-3 text-green-100">
          Your Trusted Herbal Health Partner
        </p>

        <p className="mt-8 text-sm text-green-200">
          © {new Date().getFullYear()} Anmol Laboratories.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;