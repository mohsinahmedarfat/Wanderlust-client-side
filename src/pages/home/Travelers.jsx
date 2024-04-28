const Travelers = () => {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-center ">
          What Our Travelers Say About the Trip
        </h2>
        <p className="text-center max-w-xl mx-auto mt-5">
          Hear from our satisfied travelers about their unforgettable
          experiences with us. Discover what they loved most about their trips
          and get inspired for your next adventure.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* 1 */}
        <div className="p-5 flex flex-col items-center group">
          <img
            className="w-36 h-36 mx-auto rounded-full aspect-square mb-5"
            src="https://i.ibb.co/n3CnccL/16-1.jpg"
            alt=""
          />
          <p className="text-center mb-3">
            An immersive journey awaits on Wanderlust. Stunning design,
            comprehensive content, and user-friendly tools make it a top choice
            for travelers seeking inspiration and practical resources.
          </p>
          <h3 className="font-bold text-xl">Jhon Smith</h3>
          <p>London, England</p>
        </div>
        <div className="bg-gray-200 w-[1px]"></div>
        {/* 2 */}
        <div className="p-5 flex flex-col items-center group">
          <img
            className="w-36 h-36 mx-auto rounded-full aspect-square mb-5"
            src="https://i.ibb.co/k5V1RRT/12-1.jpg"
            alt=""
          />
          <p className="text-center mb-3">
            Experience the world at your fingertips with Wanderlust. From
            captivating visuals to practical travel tips, it is your ultimate
            companion for unforgettable adventures.
          </p>
          <h3 className="font-bold text-xl">Neetu Shae</h3>
          <p>Langkawi, Malaysia</p>
        </div>
        <div className="bg-gray-200 w-[1px]"></div>
        {/* 3 */}
        <div className="p-5 flex flex-col items-center group">
          <img
            className="w-36 h-36 mx-auto rounded-full aspect-square mb-5"
            src="https://i.ibb.co/bNkcZb4/19-270x340.jpg"
            alt=""
          />
          <p className="text-center mb-3">
            Embark on a seamless travel experience with Wanderlust. Beautifully
            designed and packed with essential resources, it is a traveler
            paradise.
          </p>
          <h3 className="font-bold text-xl">David William</h3>
          <p>Bangkok, Thailand</p>
        </div>
      </div>
    </div>
  );
};

export default Travelers;
