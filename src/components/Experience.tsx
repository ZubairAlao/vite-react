import { Element } from "react-scroll";

const Experience = () => {
  const experience = [
    {
      company: "JVEC Solutions Inc",
      role: "Frontend Web Developer",
      startDate: "2024",
      endDate: "Present",
      responsibilities: [
        "Building and optimizing high-quality, responsive websites using modern frontend technologies.",
        "Collaborating with UI/UX designers to implement interactive, accessible user interfaces.",
      ],
    },
    {
      company: "Freelance",
      role: "Frontend Web Developer",
      startDate: "2023",
      endDate: "2024",
      responsibilities: [
        "Specializing in crafting engaging, user-centric interfaces.",
        "Creating applications that deliver high performance and responsiveness across devices.",
      ],
    },
  ];

  return (
    <Element name="experience"  className="bg-primary-light dark:bg-dark-primary flex flex-col justify-center items-center ~gap-10/32 ~py-20/40">
      <div className="container mx-auto px-5">
        <h2 className="h1 text-center mb-12">
          Professional Experience
        </h2>
        <div className="space-y-10 max-w-3xl mx-auto">
          {experience.map((job, index) => (
            <div
              key={index}
              className="flex justify-start items-start gap-6"
            >
              <p className="font-bold leading-[1]">
                {job.startDate}
              </p>

              {/* circle */}
              <div className="min-w-5 min-h-5 rounded-full h-full bg-foreground dark:bg-dark-foreground"></div>

              <div className="relative">
                <div className="absolute h-full bg-foreground dark:bg-dark-foreground w-[2px] mt-8 top-0 -left-9 transform -translate-x-1/2 z-20"></div>
                <div className="mb-4">
                    <p className="font-bold mb-2 leading-[1]">{job.company}</p>
                    <h3 className="">{job.role}</h3>
                </div>
                <ul className="list-disc list-inside space-y-1">
                    {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Experience;
