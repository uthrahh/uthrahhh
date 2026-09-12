import type { EducationEntry, CertificationEntry } from "@/lib/types";
import { clubLeadership } from "@/lib/data/leadership";

export const education: EducationEntry[] = [
  {
    institution: "Vellore Institute of Technology, Chennai",
    institutionUrl: "https://chennai.vit.ac.in",
    degree: "B.Tech. in Computer Science and Engineering",
    start: "2023",
    end: "May 2027",
    activities: [
      { label: "Chairperson - Open Source Programming Club", history: clubLeadership },
      { label: "Rotaractor - Rotaract Club of VIT-C" },
      { label: "Summer Research Intern - Center for Human Movement Analytics" },
      { label: "Committee Coordinator - TechnoVIT'25" },
      { label: "Organizer - Spectrum'25, VOID.v1, Glytch'25" },
      { label: "HR Representative - Centre for Skill & Entrepreneurship Development (CSED)" },
      { label: "Member of Management - Microsoft Innovations Club" },
      { label: "Graphic Designer - Arignar Anna Thamizh Mandram" },
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
    photos: [
      { kind: "event", alt: "VIT Chennai photo, to be added", aspect: "4/3" },
      { kind: "event", alt: "VIT Chennai photo, to be added", aspect: "4/3" },
      { kind: "event", alt: "VIT Chennai photo, to be added", aspect: "4/3" },
      { kind: "event", alt: "VIT Chennai photo, to be added", aspect: "4/3" },
    ],
  },
  {
    institution: "St. Michael's Academy, Chennai",
    institutionUrl: "https://www.st-michaelsacademy.com/#",
    degree: "High School Diploma",
    end: "Graduated 2023",
    levels: [
      { grade: "Grade 12", board: "ISC", result: "80%" },
      { grade: "Grade 10", board: "ICSE", result: "92%" },
    ],
    activities: [{ label: "Event Coordinator - Annual Day '22 and Feast Day '22" }],
    coursework: [],
  },
];

export const certifications: CertificationEntry[] = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google, via Coursera",
    date: "January 2026",
    url: "https://www.credly.com/badges/0ba54e47-1f03-4f86-9a0e-2969e3bfbcda",
  },
];
