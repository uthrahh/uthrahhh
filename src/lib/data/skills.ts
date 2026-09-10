import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", evidence: ["reckitt-sales-analytics-pipeline", "capital-allocation-risk-optimization", "ai-powered-sap-erp-intelligence-assistant", "aic-erp"] },
      { name: "SQL", evidence: ["reckitt-sales-analytics-pipeline", "aic-erp", "capital-allocation-risk-optimization"] },
      { name: "TypeScript", evidence: ["last-mile-delivery-tracker", "women360"] },
      { name: "JavaScript", evidence: ["aic-facility-booking", "aic-worklog-automation"] },
      { name: "Java, C, C++", evidence: ["VIT Chennai coursework"] },
    ],
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "PySpark", evidence: ["reckitt-sales-analytics-pipeline", "ev-fleet-lakehouse-platform"] },
      { name: "Databricks", evidence: ["ev-fleet-lakehouse-platform", "ai-powered-sap-erp-intelligence-assistant", "ai-data-engineering-assistant"] },
      { name: "Delta Lake", evidence: ["ev-fleet-lakehouse-platform"] },
      { name: "Unity Catalog", evidence: ["ev-fleet-lakehouse-platform", "ai-powered-sap-erp-intelligence-assistant"] },
      { name: "Medallion architecture", evidence: ["ev-fleet-lakehouse-platform"] },
      { name: "Star schema / dimensional modeling", evidence: ["reckitt-sales-analytics-pipeline", "ev-fleet-lakehouse-platform"] },
      { name: "ETL / data validation", evidence: ["reckitt-sales-analytics-pipeline"] },
    ],
  },
  {
    category: "Data & BI",
    skills: [
      { name: "Power BI", evidence: ["KaarTech BI dashboard training", "reckitt-sales-analytics-pipeline"] },
      { name: "DAX", evidence: ["KaarTech BI dashboard training"] },
      { name: "Pandas / NumPy", evidence: ["capital-allocation-risk-optimization", "Google Data Analytics certificate"] },
      { name: "Data modeling & feature engineering", evidence: ["reckitt-sales-analytics-pipeline", "capital-allocation-risk-optimization"] },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", evidence: ["aic-erp", "aic-facility-booking", "aic-worklog-automation", "last-mile-delivery-tracker", "budget-tracker"] },
      { name: "SQLite", evidence: ["aic-erp"] },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Django", evidence: ["aic-erp", "aic-facility-booking"] },
      { name: "FastAPI", evidence: ["aic-worklog-automation", "budget-tracker"] },
      { name: "Express", evidence: ["last-mile-delivery-tracker", "women360"] },
      { name: "REST API design", evidence: ["aic-erp", "last-mile-delivery-tracker"] },
      { name: "RBAC / JWT authentication", evidence: ["aic-erp", "last-mile-delivery-tracker"] },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "XGBoost", evidence: ["capital-allocation-risk-optimization"] },
      { name: "Model evaluation (ROC-AUC)", evidence: ["capital-allocation-risk-optimization"] },
      { name: "Linear/integer programming (Pyomo)", evidence: ["capital-allocation-risk-optimization"] },
    ],
  },
  {
    category: "AI & GenAI",
    skills: [
      { name: "RAG / vector search", evidence: ["ai-powered-sap-erp-intelligence-assistant"] },
      { name: "Databricks Genie", evidence: ["ai-powered-sap-erp-intelligence-assistant"] },
      { name: "LLM prompt engineering", evidence: ["ai-powered-sap-erp-intelligence-assistant", "ai-data-engineering-assistant", "aic-worklog-automation"] },
      { name: "OpenAI / Gemini APIs", evidence: ["aic-worklog-automation"] },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", evidence: ["last-mile-delivery-tracker", "women360", "data-pipeline-sentinel"] },
      { name: "Tailwind CSS", evidence: ["women360"] },
      { name: "Bootstrap 5", evidence: ["aic-erp", "aic-facility-booking", "aic-worklog-automation"] },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git / GitHub", evidence: ["All projects"] },
      { name: "Docker", evidence: ["budget-tracker"] },
      { name: "Alembic migrations", evidence: ["budget-tracker", "aic-worklog-automation"] },
      { name: "pytest", evidence: ["reckitt-sales-analytics-pipeline", "budget-tracker"] },
    ],
  },
];
