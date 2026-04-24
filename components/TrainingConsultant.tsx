import { ArrowUpRight, ChevronRight } from "lucide-react";

const TrainingConsultant = () => {
  return (
    <section className="bg-[#5712441A] p-5 sm:p-15">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-nunito font-semibold text-[24px] sm:text-3xl text-primary">
          Training The Consultant
        </h2>
        <p className="text-base font-semibold text-primary mt-1.5">
          Maximise Your Potential as a Certified Trainer:
        </p>
        <p className="mt-2 text-main_text text-sm sm:text-base">
          With the help of our Training Consultants program, take a
          revolutionary step toward becoming a distinguished certified
          training consultant. Learn from professionals in the field, immerse
          yourself in a thorough curriculum, and hone your training methods
          through interactive workshops. Participating in our program will
          enable you to gain expertise in diverse courses while also
          developing the abilities to mentor and encourage others in their
          career advancement.
        </p>

        <div className="grid md:grid-cols-2 bg-primary p-5 text-white rounded-lg mt-4 gap-4">
          <div>
            <h3 className="font-semibold mb-3">Expert-Led Learning</h3>
            <p className="text-sm sm:text-base">
              Gain insight from seasoned professionals in the field as they
              mentor you through the subtleties of business analysis.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Comprehensive Curriculum</h3>
            <p className="text-sm sm:text-base">
              Access a robust curriculum that covers fundamental principles
              and advanced methodologies, ensuring a well-rounded
              understanding.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Interactive Workshops</h3>
            <p className="text-sm sm:text-base">
              Engage in hands-on workshops designed to enhance your training
              capabilities and provide practical insights.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Global Recognition</h3>
            <p className="text-sm sm:text-base">
              Engage in hands-on workshops designed to enhance your training
              capabilities and provide practical insights.
            </p>
          </div>
        </div>
        <button className="w-fit flex items-center gap-2 text-white bg-primary sm:text-base px-4.5 text-sm py-3 sm:px-6 sm:py-2.5 font-semibold rounded-lg sm:rounded-sm mt-9">
          Learn More{" "}
          <span className="hidden sm:block">
            <ArrowUpRight />
          </span>{" "}
          <span className="block sm:hidden">
            <ChevronRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default TrainingConsultant;
