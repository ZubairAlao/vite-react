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
    <Element name="experience"  className="bg-primary-light dark:bg-dark-primary min-h-screen flex flex-col justify-center items-center ~gap-10/32 ~py-20/40">
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
              <p className="font-bold">
                {job.startDate}
              </p>

              <div className="w-5 h-5 rounded-full bg-white relative">
                <div className="relative min-h-40 bg-white w-[2px] mt-8 top-0 left-1/2 transform -translate-x-1/2 z-20"></div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                    <p className="font-bold">{job.company}</p>
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
