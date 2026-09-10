import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "aic-erp",
    title: "Startup Incubation ERP",
    summary:
      "A modular, role-based ERP that replaced spreadsheets, email, and WhatsApp as the system of record for a startup incubation centre.",
    categories: ["Software Engineering"],
    technologies: ["Python", "Django", "Django ORM", "PostgreSQL", "Bootstrap 5", "ReportLab", "OpenPyXL"],
    year: "2026",
    role: "Backend engineer (solo)",
    context: "Software Development Engineer Internship, AIC-CIIC",
    featured: true,
    status: "Shipped internally",
    links: [
      { label: "Repository", href: "https://github.com/uthrahh/AIC-Enterprise-Resource-Planning", kind: "repo" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "The Crescent Innovation & Incubation Council (AIC-CIIC) ran the entire startup lifecycle (applications, onboarding, lab and hall bookings, mentorship, services, and finance) through spreadsheets, email threads, and WhatsApp. There was no single source of truth, no audit trail, and no way to see incubation-wide metrics without manually reconciling records across tools.",
        ],
      },
      {
        heading: "Objective",
        body: [
          "Build a centralized, role-based web platform covering the full startup lifecycle for five distinct roles (Public User, Applicant, Startup, Mentor, Administrator), replacing manual processes while remaining extensible for future modules the incubation team hadn't scoped yet.",
        ],
      },
      {
        heading: "Solution & architecture",
        body: [
          "Built on Django with a PostgreSQL backend, organized into eleven Django apps by domain: accounts, applications, startups, labs, halls, mentors, mentorship, services, finance, feedback, and audit. Each module evolves independently without cross-contaminating models.",
          "Role-based access control gates every module through decorators and middleware, with a permission matrix covering more than 30 resource types across the four authenticated roles (view, create, edit, manage, full access), enforced consistently rather than left to ad-hoc view-level checks.",
          "The data model tracks a startup's full profile (founders, employees, financials, funding rounds, loans, IPR, bank details, social links) as normalized child tables under a single startup record, so dashboards and reports can be computed dynamically instead of maintained by hand.",
        ],
      },
      {
        heading: "Key engineering decisions",
        body: [
          "Startup financial and lifecycle data (funding, valuation, IPR, awards) was modeled as separate related tables rather than JSON blobs on the startup record, keeping it queryable for the dashboard aggregates the incubation team needed: funding stage breakdowns, IPR counts, jobs created.",
          "Lab and equipment booking treats equipment availability independently per item, so a startup can book one piece of equipment in a lab even while other equipment in the same lab is in use elsewhere. This came from a specific requirement in how the physical labs are actually used.",
          "Application review supports an explicit On Hold state distinct from Rejected, which routes the applicant to a mentor for improvement and re-evaluation rather than a hard rejection, modeling the incubation centre's actual decision workflow rather than a generic approve/reject binary.",
        ],
      },
      {
        heading: "What shipped vs. what's pending",
        body: [
          "Shipped: authentication and RBAC, the public website, the full startup application workflow, startup profile management, the startup directory, laboratory and equipment management with Excel import, lab and conference hall booking with calendar views, service requests, feedback and complaints, and audit logging.",
          "Documented as pending at handover: payment gateway integration, automated invoice generation, the quarterly financial-update reminder workflow, mentor scheduling, and the advanced analytics dashboard, captured explicitly in the handover documentation for the next contributor rather than left undocumented.",
        ],
      },
    ],
  },
  {
    slug: "aic-facility-booking",
    title: "Facility Booking System",
    summary:
      "A booking backend for labs, equipment, and conference halls serving 140+ incubated startups, with conflict detection and an approval workflow.",
    categories: ["Software Engineering"],
    technologies: ["Python", "Django 6", "PostgreSQL", "Bootstrap 5", "JavaScript"],
    year: "2026",
    role: "Backend engineer (solo)",
    context: "Software Development Engineer Internship, AIC-CIIC",
    featured: false,
    status: "Shipped internally",
    links: [
      { label: "Repository", href: "https://github.com/uthrahh/AIC-CIIC-Facility-Booking", kind: "repo" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Before this system, booking a lab, a piece of equipment, or a conference hall meant emailing the admin team directly, with no visibility into what was already booked. That led to double-bookings and no historical record of usage.",
        ],
      },
      {
        heading: "Solution",
        body: [
          "A Django backend with separate apps for accounts, startups, labs, bookings, halls, dashboard, and notifications. Startup users request lab, equipment, or hall bookings through validated forms; administrators review and approve or reject through a dedicated dashboard.",
          "Booking validation checks two things independently before confirming a request: time-slot overlap for the resource being booked, and equipment-specific availability, since a lab can host multiple bookings simultaneously if they use different equipment.",
          "Every booking carries an auditable lifecycle (NEW → APPROVED / REJECTED → CANCELLED), with a notification generated at each transition and a booking-history table that preserves the full timeline rather than overwriting the latest state.",
        ],
      },
      {
        heading: "Key features",
        body: [
          "Admin-side CRUD for labs, equipment (with hourly usage fees), and halls (with seating capacity), including bulk import from CSV for initial data load.",
          "A calendar view surfacing approved lab and hall bookings by time slot, so administrators can visually confirm availability before approving a new request.",
          "Separate dashboards for startup users (their bookings, pending vs. approved counts) and administrators (fleet-wide booking volume, pending requests by type, notification counts).",
        ],
      },
    ],
  },
  {
    slug: "aic-worklog-automation",
    title: "WhatsApp Worklog Automation Platform",
    summary:
      "An AI-assisted pipeline that turns unstructured WhatsApp worklog messages into structured, trackable task data and daily reports.",
    categories: ["Software Engineering", "AI & GenAI"],
    technologies: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "whatsapp-web.js", "OpenAI API", "Google Gemini API"],
    year: "2026",
    role: "Backend engineer (solo)",
    context: "Software Development Engineer Internship, AIC-CIIC",
    featured: false,
    status: "Shipped internally",
    links: [
      { label: "Repository", href: "https://github.com/uthrahh/AIC-Whatsapp-Automation-Platform", kind: "repo" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Employees reported daily work updates in a WhatsApp group in free-text form. Turning that into a usable record of who did what, what's still pending, and who's falling behind required someone to manually read and re-type every message into a spreadsheet each day.",
        ],
      },
      {
        heading: "Solution",
        body: [
          "A FastAPI backend syncs the day's messages from a WhatsApp group through a whatsapp-web.js/Puppeteer listener, then extracts completed and pending tasks from each message using an LLM (OpenAI or Gemini, selected via config) with a rule-based parser as a fallback when no API key is configured.",
          "The extraction layer handles multiple real message formats employees actually used: numbered lists with a 'Pending:' section, natural-language updates, collaborator tags after a task, and deadlines embedded inline, rather than enforcing one rigid template.",
          "Pending tasks automatically carry forward day to day until marked complete, so the system reflects a running task backlog per employee rather than a fresh, disconnected list every 24 hours.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Produces a daily dashboard (submissions, pending vs. completed tasks, employee productivity, missing submissions) and exportable Excel/PDF reports, replacing what had been a fully manual, error-prone transcription process.",
        ],
      },
    ],
  },
  {
    slug: "last-mile-delivery-tracker",
    title: "Last-Mile Delivery Tracker",
    summary:
      "A full-stack logistics platform with a configurable pricing engine, zone-based routing, agent assignment, and immutable delivery tracking.",
    categories: ["Full-Stack", "Software Engineering"],
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "Drizzle ORM", "JWT", "Zod", "Vite"],
    year: "2026",
    role: "Full-stack engineer (solo)",
    context: "Independent / academic project",
    featured: true,
    status: "Completed",
    links: [
      { label: "Repository", href: "https://github.com/uthrahh/Last-Mile-Delivery-Tracker", kind: "repo" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "A realistic last-mile delivery operation needs more than order creation and driver assignment: pricing depends on zones and package dimensions, agents need to be assigned by availability and geography, deliveries fail and need recovery without losing history, and administrators need to change pricing without corrupting past orders.",
        ],
      },
      {
        heading: "Solution & architecture",
        body: [
          "Layered architecture: an Express/TypeScript REST API on top of dedicated business services (pricing engine, assignment engine, tracking state machine, rescheduling, notifications), backed by PostgreSQL via Drizzle ORM. The pricing and assignment logic live outside the HTTP layer entirely, callable and testable independent of any route.",
          "Pricing engine: pickup/drop pincodes resolve to areas and then zones; intra- vs inter-zone classification plus B2B/B2C order type selects one of four rate cards; chargeable weight is `MAX(actual weight, volumetric weight)` where volumetric weight is `L×B×H / 5000`; weight-slab pricing and a configurable COD surcharge (flat or percentage, with min/max caps) complete the calculation.",
          "Assignment engine is deliberately separated from the order-management API: it considers agent availability and zone suitability, supports manual admin override, and can be swapped for a smarter strategy (GPS-distance, workload balancing) later without touching order code.",
          "Tracking is append-only: every status transition writes a new tracking event (previous status, new status, timestamp, actor, actor role) rather than overwriting a single 'current status' field, producing a full auditable delivery timeline.",
        ],
      },
      {
        heading: "Key engineering decision: historical pricing",
        body: [
          "An order's price is computed and persisted as a snapshot at creation time, not recalculated from the live rate card. Changing a rate card only affects future orders; existing orders keep the price they were quoted, which matters for financial auditability and customer disputes.",
        ],
      },
      {
        heading: "Failed-delivery recovery",
        body: [
          "A failed delivery triggers a customer notification and a reschedule path rather than terminating the order: reschedule, then a new delivery attempt, then agent reassignment, then continued tracking, with every previous attempt retained in the order's history.",
        ],
      },
      {
        heading: "Security",
        body: [
          "JWT authentication with bcrypt password hashing, role-based route protection for Customer / Agent / Admin, request validation with Zod, Helmet security headers, API rate limiting, and CORS configuration.",
        ],
      },
    ],
    metrics: [
      { label: "Pricing combinations", value: "4 rate cards (B2B/B2C × intra/inter-zone)" },
      { label: "Delivery lifecycle states", value: "5 (Created to Delivered) plus Failed" },
    ],
  },
  {
    slug: "women360",
    title: "Women360: Health & Wellness SaaS",
    summary:
      "A cloud-native SaaS platform unifying menstrual, nutrition, sleep, activity, and mental-wellbeing tracking, with a dedicated Senior Mode for older adults.",
    categories: ["Full-Stack"],
    technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Express", "PostgreSQL", "JWT", "React Router"],
    year: "2026",
    role: "Full-stack engineer (solo)",
    context: "Cloud Computing coursework project, VIT Chennai",
    featured: false,
    status: "In progress",
    links: [
      { label: "Repository", href: "https://github.com/uthrahh/Women360", kind: "repo" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Women currently track menstrual health, nutrition, sleep, and mental wellbeing across separate single-purpose apps with no shared timeline, so lifestyle patterns that correlate across these areas go unnoticed. Existing apps also assume a young, tech-fluent user and create real friction for older adults.",
        ],
      },
      {
        heading: "Solution",
        body: [
          "A unified tracking suite (menstrual cycle, nutrition, activity, sleep, mental wellbeing, preventive care) behind role-based access for three user types: the end user (Woman), a Wellness Coach with permission-gated visibility into a user's data, and an Admin managing users and content.",
          "Senior Mode is a fully separate navigation model, not a scaled-up version of the standard UI: high-contrast typography, larger touch targets, and a short list of plain-language tiles ('My health', 'My medicines', 'My appointments') that the user chooses themselves in Settings, rather than a fixed menu.",
          "Frontend is built against a replaceable mock service layer (every feature calls a function in `src/services/*`, never `fetch` directly), so the real Express/PostgreSQL API, already scaffolded with JWT auth, can be wired in without touching any component.",
        ],
      },
      {
        heading: "Explicit safety boundaries",
        body: [
          "The requirements spec explicitly scopes this as a wellness and tracking tool, not a diagnostic system: it does not claim to autonomously diagnose conditions or prescribe treatment, and risk flags are written to prompt a user toward professional evaluation rather than present a conclusion.",
        ],
      },
      {
        heading: "Status",
        body: [
          "The Woman/end-user experience is complete against the mock service layer: authentication, onboarding, the full app shell, all core tracking modules, light/dark theming, and Senior Mode. The Express/PostgreSQL API exists alongside it; connecting the frontend to it end-to-end and building the Coach and Admin views is the next phase.",
        ],
      },
    ],
  },
  {
    slug: "reckitt-sales-analytics-pipeline",
    title: "FMCG Sales Analytics Pipeline",
    summary:
      "A tested PySpark ETL pipeline transforming raw FMCG retail sales data into a Power BI-ready star schema, with 39 automated tests.",
    categories: ["Data Engineering"],
    technologies: ["PySpark 3.5", "Python 3.12", "YAML", "pytest", "Power BI"],
    year: "2026",
    role: "Data engineer (solo)",
    context: "Data Engineering Internship, KaarTech",
    featured: true,
    status: "Completed",
    links: [
      { label: "Repository", href: "https://github.com/uthrahh/Reckitt-Dashboard", kind: "repo" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "FMCG sales data arrives as a single flat monthly export spanning geography, product, store, supplier, and inventory dimensions. Business users (sales managers, category managers, supply chain and regional heads) need a trustworthy, centralized dataset for BI without manually cleaning or reconciling the raw export every reporting cycle.",
        ],
      },
      {
        heading: "Architecture & pipeline",
        body: [
          "Raw CSV feeds PySpark ingestion (explicit schema, no `inferSchema`), then validation, then cleaning, then feature engineering, then star-schema build (with dimension uniqueness validated before every join), then curated CSV export, then Power BI.",
          "Ingestion reads the source with an explicit, versioned PySpark schema rather than inferred typing, and normalizes column-name whitespace before anything downstream touches the data.",
          "Validation computes null percentages and duplicate-row counts and flags any column exceeding a configurable null threshold, so the pipeline fails fast on data-quality problems instead of silently propagating them.",
        ],
      },
      {
        heading: "Key engineering decisions",
        body: [
          "Cleaning converts placeholder tokens (`-`, `NA`, `N/A`, `NULL`, blank/whitespace) and comma-formatted numbers to proper nulls/numerics before casting, removes exact-duplicate rows, and imputes missing warehouse IDs, without silently dropping otherwise-valid records.",
          "Feature engineering adds calendar attributes, price-per-unit, a category sales rank computed with a window function, and an inventory-risk flag.",
          "The star-schema builder validates that every dimension table has unique natural keys before any fact join runs, specifically to prevent the row-explosion bug that silent duplicate dimension keys cause in joins.",
          "Export writes curated tables to flat CSV via pandas rather than Spark's native writer, deliberately avoiding the Hadoop NativeIO/winutils dependency that otherwise breaks CSV export on Windows.",
        ],
      },
      {
        heading: "Data model",
        body: [
          "One fact table (`fact_sales`, grain: one product sold at one store in one month) joined to six dimensions: date, geography, store, product, supplier, warehouse, modeled for single-direction, one-to-many relationships in Power BI's VertiPaq engine.",
        ],
      },
      {
        heading: "Testing",
        body: [
          "39 automated pytest tests covering ingestion, validation, cleaning, feature engineering, star-schema construction, and full pipeline integration, run via a dedicated `requirements-dev.txt` and `pytest.ini`.",
        ],
      },
    ],
    metrics: [
      { label: "Automated tests", value: "39 (pytest)" },
      { label: "Star schema", value: "1 fact + 6 dimension tables" },
    ],
  },
  {
    slug: "ev-fleet-lakehouse-platform",
    title: "EV Fleet Lakehouse Platform",
    summary:
      "Requirements, data model, and Medallion architecture design for a Databricks Lakehouse consolidating a commercial EV fleet's telemetry, charging, and maintenance data.",
    categories: ["Data Engineering"],
    technologies: ["Databricks", "PySpark", "Delta Lake", "Unity Catalog", "Apache Airflow", "dbt", "Power BI"],
    year: "2026",
    role: "Data engineer, requirements & architecture (solo)",
    context: "Data Engineering Internship, KaarTech",
    featured: true,
    status: "In progress",
    links: [
      { label: "Repository", href: "https://github.com/uthrahh/EV-Fleet-Lakehouse-Platform", kind: "repo" },
      { label: "Requirements & architecture doc", href: "https://github.com/uthrahh/EV-Fleet-Lakehouse-Platform/blob/main/project_requirements.md", kind: "docs" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "A commercial EV fleet operator's data (vehicle telemetry, trip records, charging sessions, diagnostic faults, and maintenance history) originates from six independent source systems with different structures and update frequencies. Without a unified platform, the operator can't reliably answer basic operational questions: which vehicles are underutilized, which batteries are degrading, which vehicles are overdue for service.",
        ],
      },
      {
        heading: "Scope of this phase: requirements and architecture",
        body: [
          "Defined the full source-system model (six systems: telematics/IoT, fleet management, trip management, charging management, diagnostics, maintenance) and the business-entity graph connecting Vehicle, Trip, Charging Session, Fault Event, and Maintenance Event.",
          "Specified a Bronze/Silver/Gold Medallion architecture on Databricks: Bronze as raw source-aligned ingestion via Auto Loader, Silver as cleaned/deduplicated/standardized/integrated data, Gold as business-level, BI-optimized aggregates, with an explicit success criterion that bad records must not reach Gold unnoticed (not that source data itself is ever 100% clean).",
          "Defined 30+ KPIs across six analytics domains (fleet utilization, battery & energy, charging performance, vehicle health, maintenance & reliability, safety) and the Power BI report pages each domain needs.",
        ],
      },
      {
        heading: "Design decisions specified for the build phase",
        body: [
          "Delta Lake is required to demonstrate ACID writes, `MERGE`-based upserts, schema enforcement and evolution, time travel, and `OPTIMIZE`/`VACUUM`, not just used as a storage format.",
          "Every pipeline run is required to produce an audit record (run_id, source/bronze/silver/gold record counts, inserted/updated/rejected counts, quality status) written to a dedicated Delta audit table, making every run independently reconstructable.",
          "Orchestration is specified through Airflow with explicit stage dependencies (Ingestion, then Bronze, then Bronze validation, then Silver, then Silver validation, then Gold via dbt, then Gold validation), retries, and rerun capability, not a single monolithic job.",
        ],
      },
      {
        heading: "Status",
        body: [
          "Requirements, KPI definitions, and architecture are complete; synthetic telemetry, charging, and fault datasets are prepared. The Bronze/Silver/Gold pipeline build and Power BI report layer are the next phase of this internship project.",
        ],
      },
    ],
  },
  {
    slug: "ai-powered-sap-erp-intelligence-assistant",
    title: "AI-Powered SAP ERP Intelligence Assistant",
    summary:
      "A proof-of-concept architecture combining Databricks Genie (structured SAP data) with a RAG layer (policy documents) into a single natural-language procurement assistant.",
    categories: ["AI & GenAI", "Data Engineering"],
    technologies: ["Databricks", "Databricks Genie", "RAG", "Vector Search", "Unity Catalog", "SAP data model"],
    year: "2026",
    role: "AI/data engineer, architecture & knowledge base (solo)",
    context: "Data Engineering Internship, KaarTech",
    featured: true,
    status: "Proof of concept",
    links: [
      { label: "Repository", href: "https://github.com/uthrahh/AI-Powered-SAP-ERP-Intelligence-Assistant", kind: "repo" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "SAP ERP systems hold procurement data behind technical table and field names that business users can't query directly, and the policies governing that data (approval thresholds, vendor eligibility) live in separate documents entirely disconnected from the live data. Answering a real procurement question often needs both at once.",
        ],
      },
      {
        heading: "Architecture",
        body: [
          "Two complementary retrieval paths behind one orchestration layer: Databricks Genie queries structured SAP procurement tables in Unity Catalog (EKKO/purchase order headers, EKPO/line items, LFA1/vendor master, MARA/material master) for spend and transaction questions; a RAG layer over six knowledge-base documents answers policy and process questions.",
          "The knowledge base was purpose-built, not just dumped in: a procurement policy (approval thresholds, compliance rules), a purchase-order SOP (lifecycle stages), a vendor management policy (classification/eligibility), a business glossary translating SAP field names into business language, analytics definitions (so metrics are computed consistently across queries), and an FAQ/scenarios document calibrating response structure.",
          "The orchestration layer routes each query to Genie-only, RAG-only, or a hybrid of both. Hybrid routing matters most for compliance questions, which need a live number from Genie (this quarter's spend with a vendor, for example) evaluated against a policy rule from RAG (the approval threshold that applies).",
        ],
      },
      {
        heading: "Evaluation design",
        body: [
          "Built a 32-question evaluation set deliberately balanced across the three routing patterns: 10 RAG-only (policy/process questions), 10 Genie-only (structured spend aggregations), and 12 hybrid (compliance judgments requiring both live data and policy rules), designed to catch routing errors, not just wrong answers.",
        ],
      },
      {
        heading: "Why the glossary document mattered most",
        body: [
          "The business glossary was treated as the translation layer of the whole system: it's what lets a response convert Genie's technical output (raw SAP field values) into the business-facing language a procurement stakeholder actually uses, which is the core of what 'masking SAP complexity' means in practice rather than just a marketing phrase.",
        ],
      },
      {
        heading: "Status",
        body: [
          "Knowledge base, SAP data extracts, Unity Catalog structure, and the evaluation framework are complete and documented in the repository. Genie configuration and the agentic orchestration layer were built and tested within KaarTech's Databricks workspace as part of the internship.",
        ],
      },
    ],
    metrics: [
      { label: "Evaluation questions", value: "32 (10 RAG / 10 Genie / 12 hybrid)" },
      { label: "Knowledge base documents", value: "6" },
    ],
  },
  {
    slug: "ai-data-engineering-assistant",
    title: "AI Data Operations Assistant (Prototype)",
    summary:
      "A Streamlit chat prototype that classifies natural-language requests into data-engineering operations, replicating an existing internal assistant's intent layer.",
    categories: ["AI & GenAI", "Data Engineering"],
    technologies: ["Python", "Streamlit", "LLM prompt engineering"],
    year: "2026",
    role: "Data/AI engineer (solo)",
    context: "Data Engineering Internship, KaarTech",
    featured: false,
    status: "Proof of concept",
    links: [
      { label: "Repository", href: "https://github.com/uthrahh/Databricks-AIPowered-DataEngg-Assistant", kind: "repo" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Triggering routine data-engineering operations (updating a configuration value, refreshing a dataset, running a validation check) required knowing which Databricks job to run and how to invoke it. The goal was a natural-language front door to these operations.",
        ],
      },
      {
        heading: "What was built",
        body: [
          "A Streamlit chat interface backed by an LLM-based intent classifier that maps a free-text request into exactly one of three operations: UPDATE_CONFIG, DATA_REFRESH, or DATA_VALIDATION, using a tightly constrained prompt and a regex fallback to extract a valid category if the model adds surrounding text.",
          "Built as a deliberate replication exercise: first studied the architecture and workflow of an existing internal AI data-operations assistant, then rebuilt its intent-classification layer independently to understand the design end to end.",
        ],
      },
      {
        heading: "Scope, honestly stated",
        body: [
          "This is the intent-classification layer only. The execution step for each operation (generating and running the approved SQL, triggering the actual Databricks refresh or validation job) is scaffolded as a documented next step in the code, not yet wired to real jobs.",
        ],
      },
    ],
  },
  {
    slug: "capital-allocation-risk-optimization",
    title: "Capital Allocation & Risk Optimization Platform",
    summary:
      "An XGBoost credit-risk model feeding an integer-programming portfolio optimizer that allocates capital across loans and properties under a budget constraint.",
    categories: ["Data Analytics & ML"],
    technologies: ["Python", "XGBoost", "Pyomo", "GLPK", "PostgreSQL", "pandas"],
    year: "2026",
    role: "Data scientist (solo)",
    context: "Independent project",
    featured: true,
    status: "Completed",
    links: [
      { label: "Repository", href: "https://github.com/uthrahh/Capital-Allocation---Risk-Optimization-Platform", kind: "repo" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Given a fixed capital budget and two asset classes with different risk/return profiles, consumer loans and rental properties, how should capital be allocated to maximize expected return without exceeding budget, when each loan's real risk has to be estimated first?",
        ],
      },
      {
        heading: "Pipeline: risk model into optimizer",
        body: [
          "A credit-risk model (`credit_model.py`) pulls loan data from PostgreSQL, engineers features (loan amount, interest rate, annual income, debt-to-income ratio, installment, revolving balance and utilization), and trains an XGBoost classifier (`n_estimators=200`, `max_depth=4`, `learning_rate=0.05`) on a stratified 70/30 split to predict default probability.",
          "Each loan's predicted default probability feeds a risk-adjusted return calculation (expected return minus expected loss), so the optimizer downstream is allocating against risk-adjusted returns, not face-value returns.",
          "The optimizer (`optimizer.py`) treats loan and property selection as binary decisions and solves an integer linear program with Pyomo/GLPK to maximize total risk-adjusted return subject to a hard budget constraint.",
        ],
      },
      {
        heading: "Results",
        body: [
          "Credit model: 0.732 ROC-AUC on held-out test data.",
          "Vacancy/property model: 0.688 concordance index.",
          "Optimizer, given a $5,000,000 budget across 300 candidate loans and 100 candidate properties: selected 232 loans and 22 properties, deployed $4,999,940 of the $5,000,000 budget, for an optimized total return of $1,364,512, solved to a confirmed optimal solution.",
        ],
      },
      {
        heading: "Why this design",
        body: [
          "Separating the risk model from the optimizer keeps each piece independently testable and replaceable. The optimizer doesn't care whether risk-adjusted return came from XGBoost or a different model; it just needs a number per asset and a budget constraint.",
        ],
      },
    ],
    metrics: [
      { label: "Credit model ROC-AUC", value: "0.732" },
      { label: "Capital deployed", value: "$4,999,940 of $5,000,000" },
      { label: "Assets selected", value: "232 loans + 22 properties" },
    ],
  },
  {
    slug: "budget-tracker",
    title: "Budget Tracker",
    summary:
      "A shared-expense and settlement tracker with WhatsApp-based transaction capture, budgets, categories, and refunds, containerized with Docker.",
    categories: ["Software Engineering"],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Alembic", "Docker", "WhatsApp integration"],
    year: "2026",
    role: "Backend engineer (solo)",
    context: "Independent project",
    featured: false,
    status: "Completed",
    links: [
      { label: "Repository", href: "https://github.com/uthrahh/Budget-Tracker", kind: "repo" },
    ],
    sections: [
      {
        heading: "What it does",
        body: [
          "A FastAPI backend for tracking personal and shared expenses: budgets, spending categories, transactions, people, settlements between people, and refunds, with reporting and export.",
          "A WhatsApp listener mirrors the pattern used in the AIC worklog project: transactions can be captured from natural-language messages rather than requiring manual form entry every time.",
        ],
      },
      {
        heading: "Engineering",
        body: [
          "Schema-versioned with Alembic migrations, a service-layer split (auth, budget, category, transaction, settlement, refund, reporting, and export services kept independent of the route handlers), and a pytest suite covering budgets, parsing, refunds, settlements, and transactions.",
          "Fully containerized with Docker and docker-compose for local and deployment parity.",
        ],
      },
    ],
  },
  {
    slug: "data-pipeline-sentinel",
    title: "Data Pipeline Sentinel (UI Concept)",
    summary:
      "A frontend concept for a data-pipeline monitoring dashboard: KPI cards, a pipeline status table, and tabbed navigation.",
    categories: ["Data Analytics & ML"],
    technologies: ["React", "Vite"],
    year: "2026",
    role: "Frontend (solo)",
    context: "Independent exploration",
    featured: false,
    status: "Proof of concept",
    links: [
      { label: "Repository", href: "https://github.com/uthrahh/data_pipeline_sentinel", kind: "repo" },
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "A component-level UI exploration for what a pipeline-monitoring dashboard could look like: a header, tabbed navigation, KPI summary cards, and a pipeline status table.",
          "Frontend only, with no backend or live data. It's an interface concept rather than a working monitoring tool, built to explore the layout and information hierarchy a real version would need.",
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const featuredProjects = () => projects.filter((p) => p.featured);
