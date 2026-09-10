import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    org: "KaarTech",
    orgUrl: "https://www.kaartech.com",
    role: "Data Engineer Intern",
    location: "Chennai, India · On-site",
    start: "July 2026",
    end: "Present",
    summary:
      "Data engineering internship on Databricks: training across Python, SQL, PySpark, Power BI and data modelling, followed by hands-on work building a production-style BI pipeline, a Lakehouse architecture for EV fleet telemetry, and two natural-language interfaces over enterprise data (SAP procurement and internal data operations).",
    workstreams: [
      {
        title: "FMCG sales analytics pipeline",
        detail:
          "Built an end-to-end PySpark pipeline that ingests raw FMCG retail sales data with an explicit schema, validates and cleans it, engineers features, and models it as a star schema for Power BI, covered by 39 automated pytest tests.",
        projectSlug: "reckitt-sales-analytics-pipeline",
      },
      {
        title: "EV fleet Lakehouse architecture",
        detail:
          "Defined the business requirements, source-system model, and Medallion (Bronze/Silver/Gold) architecture for a Databricks Lakehouse consolidating vehicle telemetry, trips, charging sessions, faults, and maintenance records for a commercial EV fleet.",
        projectSlug: "ev-fleet-lakehouse-platform",
      },
      {
        title: "AI-powered SAP ERP intelligence assistant",
        detail:
          "Designed a proof-of-concept architecture combining Databricks Genie (structured SAP procurement data) with a RAG layer (policy and process documents), including the routing logic between the two and a 32-question evaluation set.",
        projectSlug: "ai-powered-sap-erp-intelligence-assistant",
      },
      {
        title: "Natural-language data operations assistant",
        detail:
          "Studied an existing internal AI data-operations assistant and built a replication prototype: a Streamlit chat interface that classifies natural-language requests into config-update, data-refresh, or data-validation workflows.",
        projectSlug: "ai-data-engineering-assistant",
      },
    ],
    technologies: [
      "Python",
      "SQL",
      "PySpark",
      "Databricks",
      "Delta Lake",
      "Unity Catalog",
      "Power BI",
      "DAX",
      "Databricks Genie",
      "Snowflake",
    ],
  },
  {
    org: "AIC-CIIC",
    orgUrl: "https://aic-ciic.ventures",
    role: "Software Development Engineer Intern",
    location: "Chennai, India · On-site",
    start: "May 2026",
    end: "June 2026",
    summary:
      "One-month backend-focused internship at the Crescent Innovation & Incubation Council. Owned the complete development lifecycle (requirements gathering, database design, API development, testing, and handover) for three production-oriented internal systems, delivered end to end within the internship window.",
    workstreams: [
      {
        title: "Startup incubation ERP",
        detail:
          "Architected the backend foundation of a modular, role-based ERP (Django + PostgreSQL) managing the full startup lifecycle for the incubation centre (applications, startup profiles, finance, mentorship, lab/hall bookings, and services) with RBAC across Public, Applicant, Startup, Mentor, and Admin roles.",
        projectSlug: "aic-erp",
      },
      {
        title: "Facility booking system",
        detail:
          "Built a production-ready booking backend serving 140+ incubated startups: slot-based lab and hall scheduling, equipment-level conflict detection, automated tariff calculation, approval workflows, and a booking calendar.",
        projectSlug: "aic-facility-booking",
      },
      {
        title: "WhatsApp worklog automation",
        detail:
          "Built an AI-assisted pipeline that extracts structured task data (completed / pending, with owners and deadlines) from unstructured WhatsApp worklog messages, reconciles task state across days, and generates daily reports.",
        projectSlug: "aic-worklog-automation",
      },
    ],
    technologies: [
      "Python",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "RBAC",
      "OpenAI API",
      "Google Gemini API",
      "Bootstrap 5",
    ],
  },
];
