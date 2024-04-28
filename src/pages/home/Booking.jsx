import { MdOutlineTour } from "react-icons/md";
import { GiTripleGate } from "react-icons/gi";
import { TbBrandBooking } from "react-icons/tb";

const Booking = () => {
  return (
    <div className="my-10 space-y-6">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-center ">
          Tour Booking Made Simple
        </h2>
        <p className="text-center max-w-xl mx-auto mt-5">
          Discover the ease and convenience of booking your next adventure with
          us. With our intuitive platform, planning your dream vacation has
          never been easier.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1 */}
        <div className="border p-10 flex flex-col items-center space-y-4 group  hover:border-green-400">
          <MdOutlineTour className="text-7xl group-hover:text-green-400" />
          <h3 className="font-bold text-2xl group-hover:text-green-400">
            Reliable Tours
          </h3>
          <p className="text-center">
            Embark on unforgettable adventures with Reliable Tours. Explore new
            destinations and create lasting memories with our trusted travel
            services.
          </p>
        </div>
        {/* 2 */}
        <div className="border p-10 flex flex-col items-center space-y-4 group  hover:border-green-400">
          <TbBrandBooking className="text-7xl group-hover:text-green-400" />
          <h3 className="font-bold text-2xl group-hover:text-green-400">
            Quick Reservations
          </h3>
          <p className="text-center">
            Experience the ease and speed of booking your next adventure with
            Fast Booking. Secure your spot in just a few clicks and get ready
            for an unforgettable journey.
          </p>
        </div>
        {/* 3 */}
        <div className="border p-10 flex flex-col items-center space-y-4 group  hover:border-green-400">
          <GiTripleGate className="text-7xl group-hover:text-green-400" />
          <h3 className="font-bold text-2xl group-hover:text-green-400">
            Tailored Adventures
          </h3>
          <p className="text-center">
            Indulge in personalized trips with our expert guidance. Let us craft
            a unique travel experience that matches your interests and
            preferences perfectly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
