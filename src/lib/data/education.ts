import type { EducationEntry } from "@/lib/types";

export const education: EducationEntry[] = [
  {
    institution: "Vellore Institute of Technology, Chennai",
    institutionUrl: "https://chennai.vit.ac.in",
    degree: "B.Tech, Computer Science & Engineering",
    start: "2023",
    end: "Expected May 2027",
    activities: [
      "Chairperson, Open Source Programming Club",
      "Rotaractor, Rotaract Club of VIT-C",
      "Summer Research Intern, Center for Human Movement Analytics",
      "Committee Coordinator, TechnoVIT'25",
      "Organizer, Spectrum'25, VOID.v1, Glytch'25",
      "HR Representative, Centre for Skill & Entrepreneurship Development (CSED)",
      "Member of Management, Microsoft Innovations Club",
      "Graphic Designer, Arignar Anna Thamizh Mandram",
    ],
    coursework: [
      "Database Management Systems",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "Software Engineering",
      "Data Analytics",
    ],
  },
  {
    institution: "St. Michael's Academy",
    institutionUrl: undefined,
    end: "2023",
    levels: [
      { grade: "Grade 10", board: "ICSE", result: "92%" },
      { grade: "Grade 12", board: "ISC", result: "80%" },
    ],
    activities: ["Event Coordinator, Annual Day '22 and Feast Day '22"],
    coursework: [],
  },
];

export const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google, via Coursera",
    date: "January 2026",
    url: "https://www.credly.com/badges/0ba54e47-1f03-4f86-9a0e-2969e3bfbcda",
    skills: ["Pandas", "Feature engineering", "Data cleaning", "Spreadsheets", "SQL", "Tableau"],
  },
];
