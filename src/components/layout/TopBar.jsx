import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
} from "react-icons/hi";

const TopBar = () => {
  return (
    <div className="hidden bg-green-900 text-white lg:block">
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-8 text-sm">

          <a
            href="tel:+919696765887"
            className="flex items-center gap-2 hover:text-green-200 transition"
          >
            <HiOutlinePhone />
            +91 9696765887
          </a>

          <a
            href="mailto:aanmolbhargava@gmail.com"
            className="flex items-center gap-2 hover:text-green-200 transition"
          >
            <HiOutlineMail />
            aanmolbhargava@gmail.com
          </a>

        </div>

        <div className="flex items-center gap-2 text-sm">

          <HiOutlineClock />

          Monday - Saturday | 9:00 AM – 5:30 PM

        </div>

      </div>
    </div>
  );
};

export default TopBar;