import React from "react"
import CategoryTitle from "./CategoryTitle"

const Experience = () => (
  <>
    <div className="w-full md:w-1/2 mb-24 md:mb-52">
      <CategoryTitle>Experience & Education</CategoryTitle>
    </div>
    <div className="w-full md:w-1/2 mb-24 md:mb-52">
      <h1 className="text-3xl">SMKN 2 Jakarta</h1>
      <p className="font-axiforma text-gray-400 text-xl md:text-3xl">
        Software Engineer major 2018-2021
      </p>
      <br />
      <ul className="list-disc">
        <li className="pb-4 font-axiforma text-lg md:text-2xl">
          Permata Youthpreneur Fintech Contender (March 2019)
        </li>
        <li className="pb-4 font-axiforma text-lg md:text-2xl">
          Google Code-in 2019 Tensorflow organization (AI/ML/DL) - 11 Tasks
          Completed (Dec 2019 - Jan 2020)
        </li>
        <li className="pb-4 font-axiforma text-lg md:text-2xl">
          1st place Winner LKS (Lomba Kompetensi Siswa) Web Technology Central
          Jakarta (Jan 2020)
        </li>
        <li className="pb-4 font-axiforma text-lg md:text-2xl">
          1st Consolation Winner LKS (Lomba Kompetensi Siswa) Web Technology DKI
          Jakarta Province (Feb 2020)
        </li>
        <li className="pb-4 font-axiforma text-lg md:text-2xl">
          Mindzzle Front-End Developer Internship (Feb 2020 — Apr 2020)
        </li>
        <li className="pb-4 font-axiforma text-lg md:text-2xl">
          Garuda Hacks hackathon Small Business Fintech (Aug 2020)
        </li>
      </ul>
    </div>
  </>
)

export default Experience
