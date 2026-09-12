import type { ExperienceItem } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    org: "KaarTech",
    orgUrl: "https://www.kaartech.com",
    role: "Data Engineer",
    employmentType: "Internship",
    workMode: "On-site",
    city: "Chennai",
    duration: "3mo",
    start: "July 2026",
    end: "September 2026",

    summary: `Worked as a Data Engineer Intern on enterprise data and analytics solutions, focusing on scalable data pipelines, complex data transformation, and business intelligence.
  • Designed and developed ETL/ELT pipelines using Python, PySpark, and SQL.\n\n
  • Built structured datasets through data cleaning, transformation, feature engineering, and dimensional modeling.
  • Developed star schemas and analytical data models for efficient reporting and business intelligence.
  • Created interactive Power BI dashboards to translate data into actionable business insights.
  • Worked with Databricks, Delta Lake, Apache Spark, and lakehouse architecture for scalable data processing.
  • Explored AI-powered data and ERP intelligence solutions using natural-language interaction with enterprise data and analytics workflows.
  • Gained experience working with SAP-oriented enterprise data, data quality, governance, and analytics requirements.`,

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
          {
            kind: "code",
            alt: "PySpark validation stage output",
            aspect: "4/3",
          },
          {
            kind: "dashboard",
            alt: "Power BI star schema dashboard",
            aspect: "4/3",
          },
        ],
      },

      {
        title: "EV fleet Lakehouse architecture",
        oneLiner:
          "Medallion architecture design for a commercial EV fleet Lakehouse.",
        technologies: [
          "Databricks",
          "PySpark",
          "Delta Lake",
          "Unity Catalog",
          "Airflow",
          "dbt",
        ],
        projectSlug: "ev-fleet-lakehouse-platform",
        context:
          "A commercial EV fleet operator's telemetry, trip, charging, fault, and maintenance data lived in six disconnected source systems with no unified analytics platform.",
        contribution:
          "Defined the source-system model, business-entity graph, Bronze/Silver/Gold architecture, 30+ KPIs, and audit/orchestration requirements; prepared the synthetic datasets for the build phase.",
      },

      {
        title: "AI-powered SAP ERP intelligence assistant",
        oneLiner:
          "RAG + Genie architecture for a natural-language SAP procurement assistant.",
        technologies: [
          "Databricks",
          "Databricks Genie",
          "RAG",
          "Vector Search",
          "Unity Catalog",
        ],
        projectSlug: "ai-powered-sap-erp-intelligence-assistant",
        context:
          "SAP procurement data sits behind technical field names business users can't query, while the policies governing that data live in separate, disconnected documents.",
        contribution:
          "Designed the two-path retrieval architecture (Genie for structured SAP data, RAG for policy documents), built the six-document knowledge base, and authored a 32-question evaluation set balanced across routing patterns.",
      },

      {
        title: "Natural-language data operations assistant",
        oneLiner:
          "Streamlit prototype classifying requests into data-ops workflows.",
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
];