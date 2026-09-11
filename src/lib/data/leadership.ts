import type { ActivityEntry, HackathonEntry } from "@/lib/types";

export const clubLeadership: ActivityEntry[] = [
  {
    org: "Open Source Programming Club, VIT Chennai",
    orgUrl: "https://www.linkedin.com/company/opensource-programming-club-vitc/",
    role: "Chairperson",
    start: "April 2026",
    end: "Present",
    detail: [
      "Took over as Chairperson for the 2026-27 tenure after the club was recognized as VIT Chennai's Best Tech Club for 2025-26.",
    ],
  },
  {
    org: "Open Source Programming Club, VIT Chennai",
    orgUrl: "https://www.linkedin.com/company/opensource-programming-club-vitc/",
    role: "Vice Chairperson",
    start: "April 2025",
    end: "April 2026",
    detail: [
      "Lead a 250+ member technical community and helped scale the club to the #1 position among 110+ student clubs within two years of its founding.",
      "Organized 3 national-level hackathons and 10+ workshops, competitions, and technical events across the tenure.",
      "Coordinated cross-functional teams spanning operations, design, technical, and outreach.",
      "Head of Organizing Committee for OSPC's four-event TechnoVIT'25 portfolio (Agentic AI, Stranger Clues, Craft My Site, Game Jam); each event drew 120-170 participants. Built and guided event-specific teams and maintained documentation.",
      "Core coordination team for Spectrum'25, OSPC's flagship annual event (11-12 April, MG Auditorium): design, registration, sponsorship, and finance.",
      "Core coordination team for Glytch'25, a national-level hackathon at MG Auditorium (5-6 December): planning, execution, and liaison with institutional bodies.",
      "Student coordinator for VOID.v1, a TechnoVIT hackathon at MG Auditorium (28-29 October): registration process, design, and on-day logistics.",
      "Coordinate communication between the management, social media, marketing, and design teams; manage the club's FFCS wing.",
      "Led recruitment of team leads across departments and ensured timely, high-quality delivery from technical departments.",
      "Co-organized Spectrum'25, the club's flagship annual event."
    ],
  },
  {
    org: "Open Source Programming Club, VIT Chennai",
    orgUrl: "https://www.linkedin.com/company/opensource-programming-club-vitc/",
    role: "Design & Content Lead",
    start: "December 2024",
    end: "April 2025",
    detail: [
      "Managed a 15-member design team; created 30+ graphics across 10+ events.",
      "Oversaw poster design for all events during the tenure and directed social media content creation.",
      "Directly handled Spectrum'25 design deliverables: posters, banners, stickers, and certificates.",
    ],
  },
  {
    org: "Open Source Programming Club, VIT Chennai",
    orgUrl: "https://www.linkedin.com/company/opensource-programming-club-vitc/",
    role: "Web Development Member",
    start: "October 2024",
    end: "December 2024",
    detail: ["Part of the club's website development team."],
  },
];

export const community: ActivityEntry[] = [
  {
    org: "U&I Trust",
    role: "Student Mentor Volunteer",
    start: "July 2026",
    end: "Present",
    detail: [
      "Provide weekly academic tutoring and mentorship to a group of primary school students, supporting their educational progress and personal development.",
    ],
  },
];

export const hackathons: HackathonEntry[] = [
  {
    name: "AI-Powered Lead Conversion and Appointment Booking Agent",
    result: "Track Winner",
    date: "March 2026",
    organizer: "GlitchCon 2.0, VITAA x ECDS",
    problem:
      "Healthcare providers lose leads to delayed responses and inconsistent qualification, causing high drop-off between first contact and booked appointment.",
    solution: [
      "A 24/7 conversational agent capturing leads from web and WhatsApp and extracting key details automatically.",
      "Contextual, personalized engagement with adaptive, structured follow-up questions for qualification.",
      "Automatic classification of leads into Hot, Warm, and Cold based on intent and urgency.",
      "Autonomous appointment booking for high-intent leads by checking availability in real time.",
      "Full-pipeline analytics across channels and services, with the agent improving from past interactions.",
    ],
    contribution:
      "Built against mock datasets and structured APIs to simulate real-world constraints within the hackathon's time limit.",
  },
  {
    name: "AutCore: AI-Driven Autism Screening & Risk Assessment",
    result: "1st Place, Team Perry the Platypus",
    date: "March 2025",
    organizer: "HackHub'25, IEEE Computer Society VITC, sponsored by GitHub & Devfolio",
    team: "With Prannavakhanth A, Lohita Lakshmi L.S, and Prasanth V",
    problem:
      "Autism screening tools are largely subjective and inaccessible; the team set out to make early screening faster, more objective, and more available.",
    solution: [
      "Oculomotor and facial-behavior analysis using computer vision.",
      "Speech and language disfluency analysis.",
      "Intelligent autism symptom profiling and risk evaluation.",
      "A conversational assistant layer for guided interaction.",
    ],
    contribution:
      "Built the web platform with Prasanth V, integrating the ML/CV components, real-time analysis, and the user-facing experience, joining a 36-hour hackathon with 24 hours remaining. Placed 1st out of 500 teams that entered (60 reached the final round).",
  },
];
