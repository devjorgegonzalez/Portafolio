import ResumeBodySection from "./components/global/ResumeBodySection";
import InformationSideBar from "./components/information/InformationSideBar";
import SectionSelector from "./components/global/SectionSelector";

export default function Home() {
  return (
    <main className="grid grid-cols-12 bg-white">
      <div className="col-span-3 bg-zinc-800 min-h-screen max-h-screen p-3 sticky top-0">
        <InformationSideBar />
      </div>
      <div id="SectionContainer" className="col-span-9">
        <SectionSelector
          sections={[
            { id: "profile", label: "Profile" },
            { id: "education", label: "Education" },
            { id: "experience", label: "Experience" },
          ]}
        />
        <ResumeBodySection id="profile">
          <h1 className="text-3xl font-bold uppercase tracking-wide mb-2">
            Profile
          </h1>
          <div className="w-16 h-1 bg-zinc-900 mb-4"></div>
          <p className="text-base text-gray-700 mb-4">
            Hi, I'm Jorge, a passionate software developer with over 5 years of
            experience building web applications. I specialize in React and
            Next.js, and I enjoy creating clear, accessible user interfaces.
          </p>
          <h2 className="text-base font-semibold mt-4 mb-2">Skills</h2>
          <ul className="list-disc pl-5 text-base text-gray-700 mb-4">
            <li>Frontend: React, Next.js, HTML, CSS, JavaScript</li>
            <li>Backend: Node.js, Express</li>
            <li>Tools: Git, Docker, AWS</li>
          </ul>
          <h2 className="text-base font-semibold mt-4 mb-2">Interests</h2>
          <p className="text-base text-gray-700 mb-4">
            AI, machine learning, open-source contributions, hiking and tech
            reading.
          </p>
        </ResumeBodySection>

        <ResumeBodySection id="education">
          <h1 className="text-3xl font-bold uppercase tracking-wide mb-2">
            Education
          </h1>
          <div className="w-16 h-1 bg-zinc-900 mb-4"></div>
          <div className="grid grid-cols-2 gap-6 text-base text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-sm">University of Example, 2015 - 2019</p>
              <p className="text-sm">GPA: 3.8/4.0</p>
              <p className="mt-2">
                Relevant coursework: Data Structures, Algorithms, Web
                Development, Database Systems
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">High School Diploma</h3>
              <p className="text-sm">Example High School, 2011 - 2015</p>
              <p className="mt-2">Graduated with honors</p>
            </div>
          </div>
        </ResumeBodySection>

        <ResumeBodySection id="experience">
          <h1 className="text-3xl font-bold uppercase tracking-wide mb-2">
            Experience
          </h1>
          <div className="w-16 h-1 bg-zinc-900 mb-4"></div>
          <div className="space-y-6 text-base text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">
                Senior Frontend Developer
              </h3>
              <p className="text-sm">Tech Company Inc., 2020 - Present</p>
              <ul className="list-disc pl-5 mt-2 text-base">
                <li>Developed and maintained React-based web applications</li>
                <li>
                  Collaborated with design teams to implement pixel-perfect UIs
                </li>
                <li>Mentored junior developers and led code reviews</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Junior Developer</h3>
              <p className="text-sm">Startup XYZ, 2019 - 2020</p>
              <ul className="list-disc pl-5 mt-2 text-base">
                <li>
                  Built responsive websites using HTML, CSS, and JavaScript
                </li>
                <li>Integrated APIs and collaborated with backend teams</li>
                <li>Worked in agile development cycles</li>
              </ul>
            </div>
          </div>
        </ResumeBodySection>
      </div>
    </main>
  );
}
