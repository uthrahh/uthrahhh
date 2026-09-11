import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "TypeScript", "JavaScript", "Java", "C", "C++"],
  },
  {
    category: "Data Engineering",
    skills: [
      "PySpark",
      "Databricks",
      "Delta Lake",
      "Unity Catalog",
      "Medallion architecture",
      "Star schema / dimensional modeling",
      "ETL & data validation",
      "Apache Airflow",
      "dbt",
    ],
  },
  {
    category: "Machine Learning",
    skills: ["XGBoost", "Model evaluation (ROC-AUC)", "Linear/integer programming (Pyomo)"],
  },
  {
    category: "Backend & APIs",
    skills: ["Django", "FastAPI", "Express", "REST API design", "RBAC", "JWT authentication"],
  },
  {
    category: "Data & BI",
    skills: ["Power BI", "DAX", "Tableau", "Pandas", "NumPy", "Feature engineering"],
  },
  {
    category: "AI & GenAI",
    skills: ["RAG", "Vector search", "Databricks Genie", "LLM prompt engineering", "OpenAI / Gemini APIs"],
  },
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Bootstrap 5"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "SQLite"],
  },
  {
    category: "Cloud & Tools",
    skills: ["Azure Databricks", "Docker", "Git / GitHub", "Alembic migrations", "pytest"],
  },
];
