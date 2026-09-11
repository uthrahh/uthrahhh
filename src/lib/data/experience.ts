import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    org: "KaarTech",
    orgUrl: "https://www.kaartech.com",
    role: "Data Engineer",
    employmentType: "Internship",
    workMode: "On-site",
    city: "Chennai, India",
    duration: "3mo",
    start: "July 2026",
    end: "September 2026",
    summary:
      "Data engineering internship on Databricks: training across Python, SQL, PySpark, Power BI and data modelling, followed by hands-on work building a production-style BI pipeline, a Lakehouse architecture for EV fleet telemetry, and two natural-language interfaces over enterprise data.",
    workstreams: [
      {
        title: "FMCG sales analytics pipeline",
        oneLiner: "Tested PySpark ETL pipeline feeding a Power BI star schema.",
        technologies: ["PySpark", "Python", "YAML", "pytest", "Power BI"],
        projectSlug: "reckitt-sales-analytics-pipeline",
        context:
          "Raw FMCG retail sales data arrived as a single flat monthly export across geography, product, store, supplier, and inventory dimensions, with no trustworthy centralized dataset for BI.",
        contribution:
          "Built the full ingestion-to-star-schema pipeline solo: explicit-schema ingestion, null/duplicate validation, cleaning of placeholder tokens, feature engineering, and a validated star schema, covered by 39 automated pytest tests.",
        media: [
          { kind: "code", alt: "PySpark validation stage output", aspect: "4/3" },
          { kind: "dashboard", alt: "Power BI star schema dashboard", aspect: "4/3" },
        ],
      },
      {
        title: "EV fleet Lakehouse architecture",
        oneLiner: "Medallion architecture design for a commercial EV fleet Lakehouse.",
        technologies: ["Databricks", "PySpark", "Delta Lake", "Unity Catalog", "Airflow", "dbt"],
        projectSlug: "ev-fleet-lakehouse-platform",
        context:
          "A commercial EV fleet operator's telemetry, trip, charging, fault, and maintenance data lived in six disconnected source systems with no unified analytics platform.",
        contribution:
          "Defined the source-system model, business-entity graph, Bronze/Silver/Gold architecture, 30+ KPIs, and audit/orchestration requirements; prepared the synthetic datasets for the build phase.",
      },
      {
        title: "AI-powered SAP ERP intelligence assistant",
        oneLiner: "RAG + Genie architecture for a natural-language SAP procurement assistant.",
        technologies: ["Databricks", "Databricks Genie", "RAG", "Vector Search", "Unity Catalog"],
        projectSlug: "ai-powered-sap-erp-intelligence-assistant",
        context:
          "SAP procurement data sits behind technical field names business users can't query, while the policies governing that data live in separate, disconnected documents.",
        contribution:
          "Designed the two-path retrieval architecture (Genie for structured SAP data, RAG for policy documents), built the six-document knowledge base, and authored a 32-question evaluation set balanced across routing patterns.",
      },
      {
        title: "Natural-language data operations assistant",
        oneLiner: "Streamlit prototype classifying requests into data-ops workflows.",
        technologies: ["Python", "Streamlit", "LLM prompt engineering"],
        projectSlug: "ai-data-engineering-assistant",
        context:
          "Triggering routine data-engineering operations required knowing which Databricks job to run and how to invoke it manually.",
        contribution:
          "Studied an existing internal AI data-operations assistant with the team, then rebuilt its intent-classification layer: a constrained LLM prompt mapping free text to one of three operations, with a regex fallback.",
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
    org: "AIC - Crescent Innovation and Incubation Council",
    orgUrl: "https://aic-ciic.ventures",
    role: "Software Development Engineer",
    employmentType: "Internship",
    workMode: "On-site",
    city: "Chennai, India",
    duration: "1mo",
    start: "May 2026",
    end: "June 2026",
    summary:
      "One-month backend-focused internship at AIC - Crescent Innovation and Incubation Council. Owned the complete development lifecycle (requirements gathering, database design, API development, testing, and handover) for three production-oriented internal systems, delivered end to end within the internship window.",
    workstreams: [
      {
        title: "Startup incubation ERP",
        oneLiner: "Modular, role-based ERP for the full startup lifecycle.",
        technologies: ["Django", "PostgreSQL", "RBAC", "Bootstrap 5"],
        projectSlug: "aic-erp",
        context:
          "The incubation centre ran its entire startup lifecycle, applications, bookings, mentorship, and finance, through spreadsheets, email, and WhatsApp with no single source of truth.",
        contribution:
          "Architected the backend across eleven Django apps with RBAC spanning five roles, modeling startup profiles, funding, IPR, and bookings as normalized, dashboard-ready tables.",
        media: [
          { kind: "screenshot", alt: "Startup directory and application review screen", aspect: "4/3" },
          { kind: "architecture", alt: "RBAC and module architecture diagram", aspect: "4/3" },
        ],
      },
      {
        title: "Facility booking system",
        oneLiner: "Slot-based booking backend serving 140+ startups.",
        technologies: ["Django 6", "PostgreSQL", "JavaScript"],
        projectSlug: "aic-facility-booking",
        context:
          "Booking a lab, piece of equipment, or hall meant emailing the admin team directly, with no visibility into existing bookings and frequent double-bookings.",
        contribution:
          "Built slot-based scheduling with independent equipment-level and time-slot conflict detection, an approval workflow, and a booking calendar, from data model to admin dashboard.",
      },
      {
        title: "WhatsApp worklog automation",
        oneLiner: "AI extraction pipeline turning chat updates into task data.",
        technologies: ["FastAPI", "PostgreSQL", "OpenAI API", "Gemini API"],
        projectSlug: "aic-worklog-automation",
        context:
          "Employees reported daily updates as free-text WhatsApp messages; turning that into a trackable task record required manual re-typing every day.",
        contribution:
          "Built the WhatsApp sync listener, the LLM-based task extractor with a rule-based fallback, and the task-carry-forward logic that keeps a running backlog per employee.",
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
