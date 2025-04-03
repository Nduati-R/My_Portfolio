
import { User, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-portfolio-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image column */}
          <div className="w-full md:w-5/12">
            <div className="rounded-2xl overflow-hidden border-2 border-portfolio-green/20 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-green/30 to-portfolio-lightGreen/30 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-300"></div>
              <div className="relative bg-portfolio-darkGray rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
                <User size={120} className="text-portfolio-green/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-portfolio-black/80"></div>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="w-full md:w-7/12">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg text-portfolio-gray mb-6">
              I'm a passionate UX/UI designer with a keen eye for creating
              intuitive and visually appealing digital experiences. My journey
              in the digital world is fueled by a fascination with the
              intersection of design and technology.
            </p>
            <p className="text-lg text-portfolio-gray mb-8">
              Currently expanding my skills into full-stack development, I bring
              a unique perspective that bridges the gap between beautiful design
              and functional implementation. I believe that great products come
              from understanding both the user's needs and the technical
              possibilities.
            </p>

            <div className="mt-8">
              <h3 className="text-xl text-white font-semibold mb-4 flex items-center">
                <Heart size={20} className="text-portfolio-green mr-2" />
                What Drives Me
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="text-portfolio-green mr-2">•</span>
                  <span className="text-portfolio-gray">Creating intuitive user experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-green mr-2">•</span>
                  <span className="text-portfolio-gray">Solving complex design challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-green mr-2">•</span>
                  <span className="text-portfolio-gray">Learning new technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-portfolio-green mr-2">•</span>
                  <span className="text-portfolio-gray">Bridging design and development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
