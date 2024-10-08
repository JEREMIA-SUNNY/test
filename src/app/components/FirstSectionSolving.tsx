import { motion } from "framer-motion";
import { TextGenerateEffectDemo } from "../OxygenEffect";
import SuggestedCarousel from "../Slider";
import { ImageCarousel } from "./ImageCar";
import Link from "next/link";

function FirstSectionSolving() {
  return (
    <div className="basis-[100%]     ">
      <section>
        <div className="  flex justify-center items-center">
          <section className="bg-cover basis-[80%] bg-center py-20 w-full">
            <div className=" text-left text-black">
              <div className="flex items-center gap-8">
                <div className="w-1/2">
                  <h1 className="text-3xl font-medium mb-6">OUR FACILITIES</h1>
                  <p className="font-Barlow mb-12">
                    We have two prestigious manufacturing units in Dubai
                    Investment Park 2. Our head office extends over 75,000 sq.
                    ft. with synergic support from our branch office that
                    extends over 55,000 sq. ft.
                  </p>
                  <Link
                    href={"/facility"}
                    className="flex items-center font-Barlow"
                  >
                    <button className="group relative h-12 border-2 hover:border-0 border-greenTNF w- px-5 overflow-hidden rounded-lg bg-white text-base shadow">
                      <div className="absolute inset-0 w-0 bg-greenTNF transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                      <span className="relative font-semibold text-greenTNF group-hover:text-white">
                        Learn More
                      </span>
                    </button>
                  </Link>
                </div>
                <div className="w-1/2">
                  <ImageCarousel />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default FirstSectionSolving;
