import PageIllustration from "./PageIlustration";
import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import Ellipse3 from "../assets/Ellipse3.png";
import Ellipse4 from "../assets/Ellipse4.png";
import { Link } from "react-router-dom";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-3xl font-normal [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Revolutionizing the Way Education <br className="max-lg:hidden" />
              is Financed
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Dream big, and we will help fund it because we understand what
                it takes to dare to dream. Join our transparent, decentralized,
                and community-driven platform to access educational loans and
                grants that will turn your aspirations into reality and set you
                up for success.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className=" space-x-12 mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <Link
                    to={"/signup"}
                    className="btn group mb-4 w-full bg-[#0244F1] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Register Student
                    </span>
                  </Link>
                  <a
                    className="btn w-full text-[#0244F1] bg-[#FFFF]shadow hover:bg-gray-50 sm:ml-4 sm:w-auto border border-[#0244F1] text-sm"
                    href="#0"
                  >
                    watch Demo
                  </a>
                </div>
              </div>
            </div>
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] my-8"
              data-aos="zoom-y-out"
            >
              <div className="mx-3 flex justify-center -space-x-3">
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Ellipse1}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Ellipse2}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Ellipse3}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Ellipse4}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <div>
                  <span>Join 1000+ Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
