import Ellipse4 from "../assets/Ellipse4.png";
import icon from "../assets/icon.png";
import Star from "../assets/Star.png";
import image from "../assets/image.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import Vecto from "../assets/Vecto.png";
const Testimonial = () => {
  const renderStars = () => {
    return (
      <div className="flex space-x-1">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className="text-yellow-400">
            &#9733;
          </span> // Star character
        ))}
      </div>
    );
  };

  return (
    <>
      {/*Collage */}
      <div className="max-w-6xl mx-auto p-0">
        <div className="relative flex">
          {/* First Image (smaller) */}
          <div className="absolute -left-9 -bottom-1 z-10">
            <img
              src={image} // Replace with your image URL
              alt="Image 1"
              className=" object-cover" // Adjust size as needed
            />
          </div>

          {/* Second Image (larger) */}
          <div className="flex-shrink-0">
            <img
              src={image1} // Replace with your image URL
              alt="Image 2"
              className="object-cover" // Adjust size as needed
            />
          </div>

          {/* Third Image (larger) */}
          <div className="flex-shrink-0">
            <img
              src={image2} // Replace with your image URL
              alt="Image 3"
              className="object-cover" // Adjust size as needed
            />
            {/* Fourth Image (same size as first, overlapping third) */}
            <div className="absolute -right-10 top-0 z-10">
              <img
                src={image} // Replace with your image URL
                alt="Image 4"
                className=" object-cover" // Adjust size as needed
              />
            </div>
          </div>
        </div>
      </div>
      {/* Governance */}
      <div className="max-w-6xl mx-auto p-6 bg-[#0244F11A] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className=" p-6 flex flex-col items-center">
            <p className="text-center text-[#303030] text-sm">
              <span className="text-[#4A4A4A] font-semibold">Application:</span>
              <span className="text-[#F3943D]">
                Seamlessly apply for education loans and grants.{" "}
              </span>
            </p>
          </div>

          {/* Card 2 */}
          <div className="  p-6 flex flex-col items-center">
            <p className="text-center text-[#303030] text-sm">
              <span className="text-[#4A4A4A] font-semibold">Governance:</span>{" "}
              <span className="text-[#F3943D]">
                The community votes on loan and grant proposals, ensuring
                transparency and fairness
              </span>
            </p>
          </div>

          {/* Card 3 */}
          <div className=" p-6 flex flex-col items-center">
            <p className="text-center text-[#303030] text-sm">
              <span className="text-[#4A4A4A] font-semibold">Funding:</span>
              <span className="text-[#F3943D]">
                Receive funding through our decentralized, transparent platform{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/*Use Cases */}
      <div className="max-w-6xl mx-auto p-6">
        <h4 className="flex text-3xl font-bold mb-8 text-center text-[#303030] justify-center items-center">
          <span>
            <img src={Star} alt="" />
          </span>{" "}
          Use Cases{" "}
          <span>
            <img src={Star} alt="" />
          </span>
        </h4>
        <div
          style={{
            backgroundImage: `url('${Vecto}')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "400px 420px",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-md p-2 flex flex-col items-center">
              <img
                src={icon}
                alt="Quality"
                className="mb-4 h-8 w-8 object-cover"
              />
              <p className="font-medium">Smart Contract</p>
              <p className="text-center text-[#303030] text-sm">
                Automate and secure loan agreements and repayments using smart
                contracts.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <img
                src={icon}
                alt="Expertise"
                className="mb-4 h-8 w-8 object-cover"
              />
              <p className="font-medium">Smart Contract</p>
              <p className="text-center text-[#303030] text-sm">
                Automate and secure loan agreements and repayments using smart
                contracts.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <img
                src={icon}
                alt="Customer Focus"
                className="mb-4 h-8 w-8 object-cover"
              />
              <p className="font-medium">Smart Contract</p>
              <p className="text-center text-[#303030] text-sm">
                Automate and secure loan agreements and repayments using smart
                contracts.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <img
                src={icon}
                alt="Innovation"
                className="mb-4 h-8 w-8 object-cover"
              />
              <p className="font-medium">Smart Contract</p>
              <p className="text-center text-[#303030] text-sm">
                Automate and secure loan agreements and repayments using smart
                contracts.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <img
                src={icon}
                alt="Reliability"
                className="mb-4 h-8 w-8 object-cover"
              />
              <p className="font-medium">Smart Contract</p>
              <p className="text-center text-[#303030] text-sm">
                Automate and secure loan agreements and repayments using smart
                contracts.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <img
                src={icon}
                alt="Support"
                className="mb-4 h-8 w-8 object-cover"
              />
              <p className="font-medium">Smart Contract</p>
              <p className="text-center text-[#303030] text-sm">
                Automate and secure loan agreements and repayments using smart
                contracts.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Why Us? */}
      <div className="max-w-6xl mx-auto p-6">
        <h4 className="text-3xl font-bold mb-4 text-center text-[#303030]">
          Why Choose Us?
        </h4>
        <p className="text-lg text-black text-center mb-8">
          Discover the reasons why we stand out in our industry and why our
          services can make a difference for you.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <h5 className="text-5xl font-semibold text-center">96%</h5>
            <p className="text-[#303030] text-sm text-center">
              of our students have developed sustainable solutions with the
              support of accessible funding.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <h5 className="text-5xl font-semibold text-center">96%</h5>
            <p className="text-[#303030] text-sm text-center">
              of our students have developed sustainable solutions with the
              support of accessible funding.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <h5 className="text-5xl font-semibold text-center">96%</h5>
            <p className="text-[#303030] text-sm text-center">
              of our students have developed sustainable solutions with the
              support of accessible funding.
            </p>
          </div>
        </div>
      </div>
      {/*Testimonial */}
      <div className="max-w-6xl mx-auto p-6">
        <h4 className="text-3xl font-bold mb-4 text-center text-[#303030]">
          Testimonials
        </h4>
        <p className="text-lg text-black text-center mb-8">
          Our Beneficiaries have this to say
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <div className="flex items-center mb-2">
              <img
                src={Ellipse4}
                alt="Mfon Eta"
                width={32}
                height={32}
                className="rounded-full mr-2"
              />
              <h5 className="text-xl font-semibold">Mfon Eta</h5>
            </div>
            <p className="font-medium py-3">Introduction to Software Testing</p>
            <p className="text-[#303030] text-sm">
              As an individual coming from a non-technical background, acquiring
              technical knowledge in a way that is easy to comprehend and
              utilize is of utmost importance.
            </p>
            {renderStars()}
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 max-w-md">
            <div className="flex items-center mb-2">
              <img
                src={Ellipse4}
                alt="Mfon Eta"
                width={32}
                height={32}
                className="rounded-full mr-2"
              />
              <h5 className="text-xl font-semibold">Mfon Eta</h5>
            </div>
            <p className="font-medium py-3">Introduction to Software Testing</p>
            <p className="text-[#303030] mb-4 text-sm">
              As an individual coming from a non-technical background, acquiring
              technical knowledge in a way that is easy to comprehend and
              utilize is of utmost importance.
            </p>
            {renderStars()}
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <div className="flex items-center mb-2">
              <img
                src={Ellipse4}
                alt="Mfon Eta"
                width={32}
                height={32}
                className="rounded-full mr-2"
              />
              <h5 className="text-xl font-semibold">Mfon Eta</h5>
            </div>
            <p className="font-medium py-3">Introduction to Software Testing</p>
            <p className="text-[#303030] text-sm">
              As an individual coming from a non-technical background, acquiring
              technical knowledge in a way that is easy to comprehend and
              utilize is of utmost importance.
            </p>
            {renderStars()}
          </div>
        </div>

        <h5 className="text-2xl font-bold text-center mb-2">
          Join Our Happy Customers!
        </h5>
        <p className="text-lg text-gray-600 text-center">
          Discover the difference our services can make for you. Reach out to us
          today!
        </p>
      </div>
    </>
  );
};

export default Testimonial;
