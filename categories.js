
//---------------------------------------------Development------------------------------------------------------

let data_science_content = [
  { name: "Machine Learning" },
  { name: "Python" },
  { name: "Deep Learning" },
  { name: "Artificial Intelligence (AI)" },
  { name: "Natural Language Processing (NLP)" },
  { name: "LangChain" },
  { name: "Data Analysis" },
  { name: "R (Programming Language)" },

]

let data_science = document.querySelector(".data_science")
data_science_content.forEach(element => {
  data_science.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          href="${element.url}"
                          class="dropdown-item pad pad_2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});


let mobile_development_content = [
  { name: "Google Flutter", url: "google_flutter.html" },
  { name: "iOS Development", url: "ios_development.html" },
  { name: "Android Development", url: "android_development.html" },
  { name: "React Native", url: "react_native.html" },
  { name: "Dart (programming language)", url: "dart.html" },
  { name: "Swift", url: "swift.html" },
  { name: "Kotlin", url: "kotlin.html" },
  { name: "Mobile App Development", url: "mobile_app_development.html" },
  { name: "SwiftUI", url: "swiftui.html" },
]

let mobile_development = document.querySelector(".mobile_development")
mobile_development_content.forEach(element => {
  mobile_development.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          href="${element.url}"
                          class="dropdown-item pad pad_2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});


let programming_language_content = [
  { name: "Python", url: "python.html" },
  { name: "Java", url: "java.html" },
  { name: "C# (programming language)", url: "c#.html" },
  { name: "C++ (programming language)", url: "c++.html" },
  { name: "React JS", url: "react_js.html" },
  { name: "C (programming language)", url: "c.html" },
  { name: "Go (programming language)", url: "go.html" },
  { name: "Spring Framework", url: "spring_framework.html" },
  { name: "Javascript", url: "javascript.html" },
]

let programming_language = document.querySelector(".programming_language")
programming_language_content.forEach(element => {
  programming_language.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          href="${element.url}"
                          class="dropdown-item pad pad_2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});

let game_development_content = [
  { name: "Unreal Engine", url: "unreal_engine.html" },
  { name: "Unity", url: "unity.html" },
  { name: "Game Development Fundamental", url: "game_development_fundametal.html" },
  { name: "3D Game Development", url: "3d_game_development.html" },
  { name: "3D Game Development", url: "3d_game_development.html" },
  { name: "C# (programming language)", url: "c#.html" },
  { name: "Godot", url: "godot.html" },
  { name: "C++ (programming language)", url: "c++.html" },
  { name: "2D Game Development", url: "2d_game_development.html" },
  { name: "Unreal Engine Blueprints", url: "unreal_engine_blueprints.html" },
]

let game_development = document.querySelector(".game_development")
game_development_content.forEach(element => {
  game_development.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          href="${element.url}"
                          class="dropdown-item pad pad_2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});


let database_design_development_content = [
  { name: "SQL", url: "sql.html" },
  { name: "MySQL", url: "mysql.html" },
  { name: "Database Management System (DBMS)", url: "dbms.html" },
  { name: "SQL Server", url: "sql_server.html" },
  { name: "PostgreSQL", url: "postgresql.html" },
  { name: "Apache Kafka", url: "apache_kafka.html" },
  { name: "Oracle SQL", url: "oracle_sql.html" },
  { name: "Database Programming", url: "dbms_programming.html" },
  { name: "MongoDB", url: "mongodb.html" },
]

let database_design_development = document.querySelector(".database_design_development")
database_design_development_content.forEach(element => {
  database_design_development.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          href="${element.url}"
                          class="dropdown-item pad pad_2 pe-2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});


let software_testing_content = [
  { name: "Selenium WebDriver", url: "selenium_webdriver.html" },
  { name: "Microsoft Playwright ", url: "microsoft_playwright.html" },
  { name: "Automation Testing ", url: "automation_testing.html" },
  { name: "Java ", url: "java.html" },
  { name: "Postman", url: "postman.html" },
  { name: "ISTQB Certified Tester Foundation Level (CTFL)", url: "istbq.html" },
  { name: "Selenium Testing Framework", url: "selenium_testing_framework.html" },
  { name: "API Testing", url: "api_testing.html" },
]

let software_testing = document.querySelector(".software_testing")
software_testing_content.forEach(element => {
  software_testing.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          href="${element.url}"
                          class="dropdown-item pad pad_2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});

let software_engineering_content = [
  { name: "Data Structures", url: "data_structure.html" },
  { name: "Algorithms ", url: "algorithms.html" },
  { name: "Software Architecture ", url: "software_architecture.html" },
  { name: "Certified Kubernetes Application Developer (CKAD)", url: "ckad.html" },
  { name: "Coding Interview", url: "coding_interview.html" },
  { name: "Microservices ", url: "microservices.html" },
  { name: "Java Algorithms ", url: "java_algorithms.html" },
  { name: "Back End Web Development", url: "back_end_web_development.html" },
]

let software_engineering = document.querySelector(".software_engineering")
software_engineering_content.forEach(element => {
  software_engineering.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          href="${element.url}"
                          class="dropdown-item pad pad_2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});


let software_development_tools_content = [
  { name: "Docker", url: "docker.html" },
  { name: "Git", url: "git.html" },
  { name: "Kubernetes", url: "kubernetes.html" },
  { name: "Prompt Engineering", url: "prompt_engineering.html" },
  { name: "JIRA", url: "jira.html" },
  { name: "GitHub", url: "github.html" },
  { name: "Confluence", url: "confluence.html" },
  { name: "CI/CD", url: "ci/cd.html" },
  { name: "Terraform", url: "terraform.html" },
]

let software_development_tools = document.querySelector(".software_development_tools")
software_development_tools_content.forEach(element => {
  software_development_tools.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          href="${element.url}"
                          class="dropdown-item pad pad_2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});

let no_code_development_content = [
  { name: "Generative AI (Gen AI)", url: "generative_ai.html" },
  { name: "WordPress", url: "wordpress.html" },
  { name: "Bubble Visual Programming", url: "wordpress.html" },
  { name: "Microsoft Power Apps", url: "microsoft_power_apps.html" },
  { name: "Microsoft Power Platform", url: "microsoft_power_platform.html" },
  { name: "Microsoft Power Automate", url: "microsoft_power_automate.html" },
  { name: "Microsoft 365 Copilot", url: "microsoft_365_copilot.html" },
  { name: "Web Design", url: "web_design.html" },
  { name: "App Development", url: "app_development.html" },
]

let no_code_development = document.querySelector(".no_code_development")
no_code_development_content.forEach(element => {
  no_code_development.innerHTML += `
                    <li class="px-3 py-1">
                      <a
                        href="${element.url}"
                        class="dropdown-item pad pad_2"
                        >${element.name}</a
                      >
                    </li>
  
  `
});

// --------------------------------------------Development end-----------------------------------------------------------



//---------------------------------------------Business---------------------------------------------------------------


let entrepreneurship_content = [
  { name: "Business Fundamentals", url: "business_fundamentals.html" },
  { name: "Entrepreneurship Fundamentals", url: "entrepreneurship_fundamentals.html" },
  { name: "Business Strategy ", url: "business_strategy.html" },
  { name: "Freelancing ", url: "freelancing.html" },
  { name: "Online Business ", url: "online_business.html" },
  { name: "ChatGPT", url: "chatgpt.html" },
  { name: "Startup", url: "startup.html" },
  { name: "Business Plan", url: "business_plan.html" },
  { name: "QuickBooks", url: "quickbooks.html" },
]

let entrepreneurship = document.querySelector(".entrepreneurship")
entrepreneurship_content.forEach(element => {
  entrepreneurship.innerHTML += `
                    <li class="px-3 py-1">
                      <a
                        href="${element.url}"
                        class="dropdown-item pad pad_2"
                        >${element.name}</a
                      >
                    </li>
  
  `
});


let communication_content = [
  { name: "Communication Skills", url: "communication_skills.html" },
  { name: "Presentation Skills", url: "presentation_skills.html" },
  { name: "Public Speaking", url: "public_speaking.html" },
  { name: "Writing ", url: "writing.html" },
  { name: "Fiction Writing ", url: "fiction_writing.html" },
  { name: "Business Communication ", url: "business_communication.html" },
  { name: "Business Writing ", url: "business_writing.html" },
  { name: "Assertiveness ", url: "assertiveness.html" },
  { name: "Email Writing & Etiquette ", url: "email_writing.html" },
]

let communication = document.querySelector(".communication")
communication_content.forEach(element => {
  communication.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let management_content = [
  { name: "Product Management", url: "product_management.html" },
  { name: "Leadership", url: "leadership.html" },
  { name: "Management Skills", url: "management_skills.html" },
  { name: "ISO 9001", url: "iso9001.html" },
  { name: "Business Strategy", url: "business_strategy.html" },
  { name: "CIPS Level 4 Diploma in Procurement and Supply", url: "cips.html" },
  { name: "Quality Management", url: "quality_management.html" },
  { name: "Product Management", url: "prdouct_management.html" },
  { name: "Risk Management", url: "risk_management.html" },
]

let management = document.querySelector(".management")
management_content.forEach(element => {
  management.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let sales_content = [
  { name: "Sales Skills", url: "sales_skills.html" },
  { name: "B2B Sales", url: "b2b_skills.html" },
  { name: "Customer Service", url: "customer_service.html" },
  { name: "LinkedIn", url: "linkedin.html" },
  { name: "Sales Management", url: "sales_management.html" },
  { name: "Business Development", url: "business_development.html" },
  { name: "Lead Generation", url: "lead_generation.html" },
  { name: "Cold Calling", url: "cold_calling.html" },
  { name: "Cold Email", url: "cold_email.html" },
]

let sales = document.querySelector(".sales")
sales_content.forEach(element => {
  sales.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let business_strategy_content = [
  { name: "IIBA Entry Certificate in Business Analytics (ECBA)", url: "iiba_entry.html" },
  { name: "Environmental Social and Governance (ESG)", url: "environmental_social.html" },
  { name: "Prompt Engineering", url: "prompt_engineering.html" },
  { name: "Management Consulting", url: "management_consulting.html" },
  { name: "The Open Group Certified: TOGAF Enterprise Architectural Foundation", url: "the_open.html" },
  { name: "Generative AI (GenAI)", url: "generative_ai.html" },
  { name: "Artificial Intelligence", url: "artificial_intelligence.html" },
  { name: "TOGAF", url: "togaf.html" },
]

let business_strategy = document.querySelector(".business_strategy")
business_strategy_content.forEach(element => {
  business_strategy.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let operations_content = [
  { name: "Supply Chain", url: "supply_chain.html" },
  { name: "Logistics Management", url: "logistics_management.html" },
  { name: "Lean Six Sigma Green Belt Certification", url: "lean_six.html" },
  { name: "Lean Six Sigma Black Belt Certification", url: "lean_six_black.html" },
  { name: "Virtual Assistant Skills", url: "virtual_assistant.html" },
  { name: "Quality Management", url: "qualtiy_management.html" },
  { name: "Operations Management", url: "operations_management.html" },
  { name: "Lean", url: "lean.html" },
  { name: "Ceritfied Quality Engineer (CQE)", url: "certified_qualtiy.html" },
]
let operations = document.querySelector(".operations")
operations_content.forEach(element => {
  operations.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let project_management_content = [
  { name: "PMI Project Management Professional (PMP)", url: "pmi_project.html" },
  { name: "PMI PMBOK", url: "pmi_pmbok.html" },
  { name: "PMI Certified Associate in Project Management (CAPM)", url: "pmi_certified.html" },
  { name: "Scrum", url: "scrum.html" },
  { name: "Agile", url: "agile.html" },
  { name: "Professional Scrum Master (PSM)", url: "professional_scrum.html" },
  { name: "PRINCE2", url: "prince2.html" },
  { name: "PMI Agile Certified Practitioner (PMI-ACP)", url: "pmi_agile.html" },
]

let project_management = document.querySelector(".project_management")
project_management_content.forEach(element => {
  project_management.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let business_law_content = [
  { name: "AI Ethics and Governance", url: "ai_ethics.html" },
  { name: "Law", url: "law.html" },
  { name: "GDPR", url: "gdpr.html" },
  { name: "Certified Information Privacy Professional (CIPP)", url: "certified_information.html" },
  { name: "Contract Management", url: "contract_management.html" },
  { name: "Contract Law", url: "contract_law.html" },
  { name: "Legal English", url: "legal_english.html" },
  { name: "Compliance Management", url: "compliance_management.html" },
]

let business_law = document.querySelector(".business_law")
business_law_content.forEach(element => {
  business_law.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let business_analytics_content = [
  { name: "Microsoft Power BI", url: "microsoft_power.html" },
  { name: "SQL", url: "sql.html" },
  { name: "Data Modeling", url: "data_modeling.html" },
  { name: "Data Analysis", url: "data_analysis.html" },
  { name: "Business Analysis", url: "business_analysis.html" },
  { name: "Tableau", url: "tableau.html" },
  { name: "Data Analysis Expression (DAX)", url: "data_analysis_expression.html" },
  { name: "Business Analytics", url: "business_analytics.html" },
  { name: "Business Intelligence (BI)", url: "business_intelligence.html" },
]

let business_analytics = document.querySelector(".business_analytics")
business_analytics_content.forEach(element => {
  business_analytics.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let human_resources_content = [
  { name: "Recruiting and Hiring", url: "recruiting_and_hiring.html" },
  { name: "HR Analytics", url: "hr_analytics.html" },
  { name: "Employment Law", url: "employment_law.html" },
  { name: "Corporate Learning and Development (L&D)", url: "corporate_learning.html" },
  { name: "Society for Human Resource Management Certified Professional (SHRM-CP)", url: "society.html" },
  { name: "Conflict Management", url: "conflict_management.html" },
  { name: "Emotional Intelligence", url: "emotional_intelligence.html" },
  { name: "Diversity and Inclusion", url: "diversity_and_inclusion.html" },
]

let human_resources = document.querySelector(".human_resources")
human_resources_content.forEach(element => {
  human_resources.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let industry_content = [
  { name: "Piping", url: "piping.html" },
  { name: "Oil and Gas Industry", url: "oil_and_gas_industry.html" },
  { name: "Control Engineering", url: "control_engineering.html" },
  { name: "Workplace Health and Safety", url: "workplace.html" },
  { name: "Chemical Engineering", url: "chemical_engineering.html" },
  { name: "Life Coach Training", url: "life.html" },
  { name: "Aviation", url: "avaiation.html" },
  { name: "Electrical Engineering", url: "electrical_engineering.html" },
  { name: "Aspen Plus", url: "aspen_plus.html" },
]

let industry = document.querySelector(".industry")
industry_content.forEach(element => {
  industry.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let e_commerce_content = [
  { name: "Amazon FBA", url: "amazon_fba.html" },
  { name: "Dropshipping", url: "dropshipping.html" },
  { name: "Shopify Dropshipping", url: "shopify_dropshipping.html" },
  { name: "Shopify", url: "shopify.html" },
  { name: "Etsy", url: "etsy.html" },
  { name: "Amazon Kindle Direct Publishing (KDP)", url: "kdp.html" },
  { name: "Selling on Amazon", url: "selling_on_amazon.html" },
  { name: "Passive Income", url: "passive_income.html" },
]

let e_commerce = document.querySelector(".e_commerce")
e_commerce_content.forEach(element => {
  e_commerce.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let media_content = [
  { name: "Screen Writing and Script Writing", url: "screen.html" },
  { name: "Amazon Kindle Direct Publising (KDP)", url: "amazon_kindle.html" },
  { name: "Audiobook Creation", url: "audiobook_creation.html" },
  { name: "Search Engine Optimization (SEO)", url: "search_engine_optimization.html" },
  { name: "Content Creation", url: "content_creation.html" },
  { name: "Journalism", url: "journalism.html" },
  { name: "Generative AI (GenAI)", url: "generative_ai.html" },
  { name: "Scrivener", url: "scrivener.html" },
  { name: "Creative Writing", url: "creative_writing.html" },
]

let media = document.querySelector(".media")
media_content.forEach(element => {
  media.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let real_estate_content = [
  { name: "Real Estate Investing", url: "real_estate_investing.html" },
  { name: "Airbnb Hosting", url: "airbnb_hosting.html" },
  { name: "Construction", url: "construction.html" },
  { name: "Mortgage", url: "mortgage.html" },
  { name: "Financial Modeling", url: "financial_modeling.html" },
  { name: "Real Estate Marketing", url: "real_estate_marketing.html" },
  { name: "Real Estate Flipping", url: "real_estate_flipping.html" },
  { name: "Property Management", url: "property_management.html" },
]

let real_estate = document.querySelector(".real_estate")
real_estate_content.forEach(element => {
  real_estate.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let other_business_content = [
  { name: "QuickBooks", url: "quickbooks.html" },
  { name: "Data Entry Skills", url: "data_entry_skills.html" },
  { name: "Grant Writing", url: "grant_writing.html" },
  { name: "ChatGPT", url: "chatgpt.html" },
  { name: "Transcription", url: "transcription.html" },
  { name: "Rieki", url: "rieki.html" },
  { name: "Freelance Writing", url: "freelance_writing.html" },
  { name: "CIPS Level 4 Diploma in Procurement and Supply", url: "cips.html" },
  { name: "Electronics", url: "electronics.html" },
]

let other_business = document.querySelector(".other_business")
other_business_content.forEach(element => {
  other_business.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


//------------------------------------------------------Business End-------------------------------------------------------------

//-----------------------------------------Finance & Accounting----------------------------------------------------------------

let accounting_and_bookkeeping_content = [
  { name: "Accounting", url: "accounting.html" },
  { name: "Bookkeeping", url: "bookkeeping.html" },
  { name: "QuickBooks", url: "quickbooks.html" },
  { name: "Financial Accounting", url: "financial_accounting.html" },
  { name: "Financial Fundamental", url: "financial_fundamental.html" },
  { name: "TallyPrime (Tally.ERP)", url: "tallyprime.html" },
  { name: "Uniform CPA Examination", url: "uniform.html" },
  { name: "International Financial Reporting Standards (IFRS)", url: "ifrs.html" },
  { name: "Xero", url: "xero.html" },
]

let accounting_and_bookkeeping = document.querySelector(".accounting_and_bookkeeping")
accounting_and_bookkeeping_content.forEach(element => {
  accounting_and_bookkeeping.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let compliance_content = [
  { name: "Anti-Money Laundering (AML)", url: "anti_money.html" },
  { name: "Criminology", url: "criminology.html" },
  { name: "Internal Controls", url: "internal_controls.html" },
  { name: "Fraud Analytics", url: "fraud_analytics.html" },
  { name: "Compliance Management", url: "compliance_management.html" },
  { name: "Trade and Commerce", url: "trade_and_commmerce.html" },
  { name: "Risk Management", url: "risk_management.html" },
  { name: "Internal Auditing", url: "internal_auditing.html" },
  { name: "Compliance (IT)", url: "compliance.html" },
]

let compliance = document.querySelector(".compliance")
compliance_content.forEach(element => {
  compliance.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let cryptocurrency_and_blockchain_content = [
  { name: "Cryptocurrency", url: "cryptocurrency.html" },
  { name: "Blockchain", url: "blockchain.html" },
  { name: "Bitcoin", url: "bitcoin.html" },
  { name: "Binance", url: "binance.html" },
  { name: "Algorithmic Trading", url: "algorithmic_trading.html" },
  { name: "Day Trading", url: "day_trading.html" },
  { name: "Online Arbitrage", url: "online_arbitrage.html" },
  { name: "NFT (Non-Fungible Tokens)", url: "nft.html" },
  { name: "Technical Analysis (finance)", url: "technical_analysis.html" },
]

let cryptocurrency_and_blockchain = document.querySelector(".cryptocurrency_and_blockchain")
cryptocurrency_and_blockchain_content.forEach(element => {
  cryptocurrency_and_blockchain.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let economics_content = [
  { name: "Macroeconimics", url: "macroeconomics.html" },
  { name: "Microeconomics", url: "microeconomics.html" },
  { name: "Stata", url: "stata.html" },
  { name: "Global Economics", url: "global_economics.html" },
  { name: "Finance Fundamental", url: "finance_fundamental.html" },
  { name: "Econometics", url: "econometrics.html" },
  { name: "Behavioral Economics", url: "behavioral_economics.html" },
  { name: "Statistics", url: "statistics.html" },
]

let economics = document.querySelector(".economics")
economics_content.forEach(element => {
  economics.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let finance_content = [
  { name: "Personal Finance", url: "personal_finance.html" },
  { name: "Finance Fundamentals", url: "finance_fundamentals.html" },
  { name: "Investing Banking", url: "investing_banking.html" },
  { name: "Banking", url: "banking.html" },
  { name: "Corporate Finance", url: "corporate_finance.html" },
  { name: "Chartered Finance Analyist (CFA)", url: "cfa.html" },
  { name: "Finance Analysis", url: "finance_analysis.html" },
  { name: "Financial Management", url: "financial_management.html" },
  { name: "ChatGPT", url: "chatgpt.html" },
]

let finance = document.querySelector(".finance")
finance_content.forEach(element => {
  finance.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let finance_cert_and_exam_prep_content = [
  { name: "Chartered Finance Analyist (CFA)", url: "cfa.html" },
  { name: "Certified Internal Auditor (CIA)", url: "cia.html" },
  { name: "Certified Management Accountant (CMA)", url: "cma.html" },
  { name: "ANBIMA Certification", url: "anbima.html" },
  { name: "GARP Financial Risk Manager (FRM) Certification", url: "frm.html" },
  { name: "Association of Chartered Certified Accountants (ACCA)", url: "acca.html" },
  { name: "Certified Financial Planner (CFP)", url: "cfp.html" },
  { name: "Finance Fundamentals", url: "finance_fundamentals.html" },
  { name: "Financial Markets", url: "financial_markets.html" },
]

let finance_cert_and_exam_prep = document.querySelector(".finance_cert_and_exam_prep")
finance_cert_and_exam_prep_content.forEach(element => {
  finance_cert_and_exam_prep.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let financial_modeling_and_analysis_content = [
  { name: "Financial Analysis", url: "financial_analysis.html" },
  { name: "Financial Modeling", url: "financial_modeling.html" },
  { name: "Microsoft Excel", url: "microsoft_excel.html" },
  { name: "Investment Banking", url: "investment_banking.html" },
  { name: "Accounting", url: "accounting.html" },
  { name: "Finance Fundamentals", url: "finance_fundamentals.html" },
  { name: "Company Valution", url: "company_valuation.html" },
  { name: "Python", url: "python.html" },
  { name: "Financial Management", url: "financial_management.html" },
]

let financial_modeling_and_analysis = document.querySelector(".financial_modeling_and_analysis")
financial_modeling_and_analysis_content.forEach(element => {
  financial_modeling_and_analysis.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let investing_and_trading_content = [
  { name: "Stock Trading", url: "stock_trading.html" },
  { name: "Investing", url: "investing.html" },
  { name: "Forex Trading", url: "forex_trading.html" },
  { name: "Technical Analysis (finance)", url: "technical_analysis.html" },
  { name: "Algorithmic Trading", url: "algorithmic_trading.html" },
  { name: "Options Trading", url: "options_trading.html" },
  { name: "Financial Markets", url: "financial_markets.html" },
  { name: "Day Trading", url: "day_trading.html" },
  { name: "Financial Trading", url: "finacial_trading.html" },
]

let investing_and_trading = document.querySelector(".investing_and_trading")
investing_and_trading_content.forEach(element => {
  investing_and_trading.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let money_management_tools_content = [
  { name: "QuickBooks", url: "quickbooks.html" },
  { name: "SAP FICO", url: "sap_fico.html" },
  { name: "Xero", url: "xero.html" },
  { name: "Microsoft Excel", url: "microsoft_excel.html" },
  { name: "Financial Modeling", url: "financial_modeling.html" },
  { name: "Excel Analytics", url: "excel_analytics.html" },
  { name: "Credit Repair", url: "credti_repair.html" },
  { name: "Personal Finance", url: "personal_finance.html" },
  { name: "Excel VBA", url: "excel_vba.html" },
]

let money_management_tools = document.querySelector(".money_management_tools")
money_management_tools_content.forEach(element => {
  money_management_tools.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let taxes_content = [
  { name: "Tax Preparation", url: "tax_preparation.html" },
  { name: "Goods and Services Tax (GST)", url: "gst.html" },
  { name: "Accounting", url: "accounting.html" },
  { name: "Value Added Tax (VAT)", url: "vat.html" },
  { name: "Transfer Pricing", url: "transfer_pricing.html" },
  { name: "Home Business", url: "home_business.html" },
  { name: "Financial Accounting", url: "financial_accounting.html" },
  { name: "Control Systems", url: "control_systems.html" },
  { name: "Entrepreneurship Fundamentals", url: "entrepreneurship_fundamentals.html" },
]


let taxes = document.querySelector(".taxes")
taxes_content.forEach(element => {
  taxes.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let other_financial_accounting_content = [
  { name: "Accounting", url: "accounting.html" },
  { name: "Certified Internal Auditor (CIA)", url: "cia.html" },
  { name: "Stock Trading", url: "stock_trading.html" },
  { name: "Personal Finance", url: "personal_finance.html" },
  { name: "Finance Fundamentals", url: "finance_fundamentals.html" },
  { name: "Payroll Accounting", url: "payroll_accounting.html" },
  { name: "Financial Planning", url: "financial_planning.html" },
  { name: "Insurance", url: "insurance.html" },
  { name: "Internal Auditing", url: "internal_auditing.html" },
]

let other_financial_accounting = document.querySelector(".other_financial_accounting")
other_financial_accounting_content.forEach(element => {
  other_financial_accounting.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let it_certifications_content = [
  { name: "AWS Certified Cloud Practicioner", url: "aws_practitioner.html" },
  { name: "AWS Certified Solutions Architect - Associate", url: "aws_associate.html" },
  { name: "CompTIA Security+", url: "comptia_security.html" },
  { name: "CompTIA A+", url: "comptia_a.html" },
  { name: "Amazon AWS", url: "amazon_aws.html" },
  { name: "Cisco Certified Network Associate (CCNA)", url: "cisco.html" },
  { name: "Information Security", url: "information_security.html" },
  { name: "CompTIA Network+", url: "comptia_network.html" },
  { name: "AWS Certified Developer - Associate", url: "aws_associate.html" },
]

let it_certifications = document.querySelector(".it_certifications")
it_certifications_content.forEach(element => {
  it_certifications.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let network_and_security_content = [
  { name: "Ethical Hacking", url: "ethical_hacking.html" },
  { name: "Cybersecurity", url: "cybersecurity.html" },
  { name: "Network Security", url: "network_security.html" },
  { name: "Penetration Testing", url: "penetration_testing.html" },
  { name: "Kubernetes", url: "kubernetes.html" },
  { name: "CompTIA Network+", url: "comptia_network.html" },
  { name: "IT Networking Fundamentals", url: "it_networking_fundamentals.html" },
  { name: "CompTIA Security+", url: "comptia_security.html" },
  { name: "Information Security", url: "information_security.html" },
]

let network_and_security = document.querySelector(".network_and_security")
network_and_security_content.forEach(element => {
  network_and_security.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let hardware_content = [
  { name: "PLC", url: "plc.html" },
  { name: "Arduino", url: "arduino.html" },
  { name: "Electronics", url: "electronics.html" },
  { name: "Microcontroller", url: "microcontroller.html" },
  { name: "Embedded Systems", url: "embedded_systems.html" },
  { name: "Embedded C", url: "embedded_c.html" },
  { name: "Raspberry Pi", url: "raspberry_pi.html" },
  { name: "SystemVerilog", url: "systemverilog.html" },
  { name: "HMI", url: "hmi.html" },
]

let hardware = document.querySelector(".hardware")
hardware_content.forEach(element => {
  hardware.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let operating_system_and_servers_content = [
  { name: "Linux", url: "linux.html" },
  { name: "Linux Administration", url: "linux_administration.html" },
  { name: "Windows Server", url: "windows_server.html" },
  { name: "Operating System", url: "operating_system.html" },
  { name: "Active Directory", url: "active_directory.html" },
  { name: "Shell Scripting", url: "Shell Scripting.html" },
  { name: "Powershell", url: "powershell.html" },
  { name: "Linux Command Line", url: "linux_command_line.html" },
  { name: "Proxmox VE", url: "proxmox_ve.html" },
]

let operating_system_and_servers = document.querySelector(".operating_system_and_servers")
operating_system_and_servers_content.forEach(element => {
  operating_system_and_servers.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let other_it_and_software_content = [
  { name: "DevOps", url: "devops.html" },
  { name: "ChatGPT", url: "chatgpt.html" },
  { name: "Python", url: "python.html" },
  { name: "Data Science", url: "data_science.html" },
  { name: "Generative AI (GenAI)", url: "generative_ai.html" },
  { name: "Microsoft Excel", url: "microsoft_excel.html" },
  { name: "Microsoft Azure", url: "microsoft_azure.html" },
  { name: "Terraform", url: "terraform.html" },
  { name: "Microservices", url: "microservices.html" },
]

let other_it_and_software = document.querySelector(".other_it_and_software")
other_it_and_software_content.forEach(element => {
  other_it_and_software.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let microsoft_content = [
  { name: "Microsoft Excel", url: "microsoft_excel.html" },
  { name: "Microsoft 365 (Office)", url: "microsoft_365_office.html" },
  { name: "Microsoft Power BI", url: "microsoft_power_bi.html" },
  { name: "Excel VBA", url: "excel_vba.html" },
  { name: "Powerpoint", url: "powerpoint.html" },
  { name: "Excel Formulas and Functions", url: "excel_formulas.html" },
  { name: "Pivot Tables", url: "pivot_tables.html" },
  { name: "Microsoft 365 Copilot", url: "microsoft_365_copilot.html" },
  { name: "Data Analysis", url: "data_analysis.html" },
]

let microsoft = document.querySelector(".microsoft")
microsoft_content.forEach(element => {
  microsoft.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let apple_content = [
  { name: "Mac Basics", url: "mac_basics.html" },
  { name: "iMovie", url: "imovie.html" },
  { name: "macOS", url: "macos.html" },
  { name: "Apple Keynote", url: "apple_keynote.html" },
  { name: "Numbers For Mac", url: "numbers_for_mac.html" },
  { name: "Apple Products Basics", url: "apple_products_basics.html" },
  { name: "Mac Pages", url: "mac_pages.html" },
  { name: "Microsoft 365 (Office)", url: "microsoft_365_office.html" },
  { name: "Microsoft Word", url: "microsoft_word.html" },
]

let apple = document.querySelector(".apple")
apple_content.forEach(element => {
  apple.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let google_content = [
  { name: "Google Sheets", url: "google_sheets.html" },
  { name: "Google Workspace (G Suite)", url: "google_workspace.html" },
  { name: "Google Looker Studio (Data Studio)", url: "google_looker_studio.html" },
  { name: "Google Appsheet", url: "google_appsheet.html" },
  { name: "Google Looker", url: "google_looker.html" },
  { name: "Google Apps Script", url: "google_apps_script.html" },
  { name: "Gmail Productivity", url: "gmail_productivity.html" },
  { name: "Google Drive ", url: "google_drive.html" },
  { name: "Microsoft Excel", url: "microsoft_excel.html" },

]

let google = document.querySelector(".google")
google_content.forEach(element => {
  google.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let sap_content = [
  { name: "SAP S/4HANA", url: "sap_s/hana.html" },
  { name: "SAP Materials Management (SAP MM)", url: "sap_mm.html" },
  { name: "SAP ABAP", url: "sap_abap.html" },
  { name: "SAP Sales and Distribution (SAP SD)", url: "sap_sd.html" },
  { name: "SAP FICO", url: "sap_fico.html" },
  { name: "SAP Business Technology Platform (SAP BTP)", url: "sap_btp.html" },
  { name: "SAP HCM", url: "sap_hcm.html" },
  { name: "SAP SuccessFactors", url: "sap_successfactors.html" },
]

let sap = document.querySelector(".sap")
sap_content.forEach(element => {
  sap.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let oracle_content = [
  { name: "Oracle Primavera", url: "oracle_primavera.html" },
  { name: "Oracle SQL", url: "oracle_sql.html" },
  { name: "Oracle Fusion HCM", url: "oracle_fusion.html" },
  { name: "PL/SQL", url: "pl/sql.html" },
  { name: "Oracle Database", url: "oracle_database.html" },
  { name: "Project Management", url: "project_management.html" },
  { name: "Database Administration", url: "database_administration.html" },
  { name: "Oracle E-Business Suite", url: "oracle_business_suite.html" },
  { name: "Oracle Fusion Cloud Financials", url: "oracle_fcf.html" },
]

let oracle = document.querySelector(".oracle")
oracle_content.forEach(element => {
  oracle.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let other_office_productivity_content = [
  { name: "ChatGPT", url: "chatgpt.html" },
  { name: "Notion Workspace", url: "notion_workspace.html" },
  { name: "Python", url: "python.html" },
  { name: "ServiceNow", url: "servicesnow.html" },
  { name: "Programming Fundamentals", url: "programming_fundamentals.html" },
  { name: "Typing", url: "typing.html" },
  { name: "Computer Skills", url: "computer_skills.html" },
  { name: "Generative AI (Gen AI)", url: "generative_ai.html" },
  { name: "Construction Estimation", url: "construction_estimation.html" },
]

let other_office_productivity = document.querySelector(".other_office_productivity")
other_office_productivity_content.forEach(element => {
  other_office_productivity.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

//-----------------------------------------Finance & Accounting end----------------------------------------------------------------


//------------------------------------------Personal Development-------------------------------------------------------------------

let personal_transformation_content = [
  { name: "Life Coach Training", url: "life_coach_training.html" },
  { name: "Neuro-Linguistic Programming (NLP)", url: "nlp.html" },
  { name: "Personal Development", url: "personal_development.html" },
  { name: "Sound Therapy", url: "sound_therapy.html" },
  { name: "Horsemanship", url: "horsemanship.html" },
  { name: "Coaching", url: "coaching.html" },
  { name: "Mindfulness", url: "mindfulness.html" },
  { name: "Emotional Intelligence", url: "emotional_intelligence.html" },
]

let personal_transformation = document.querySelector(".personal_transformation")
personal_transformation_content.forEach(element => {
  personal_transformation.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let personal_productivity_content = [
  { name: "Time Management", url: "time_management.html" },
  { name: "ChatGPT", url: "chatgpt.html" },
  { name: "Notion Workspace", url: "notion_workspace.html" },
  { name: "Writing", url: "writing.html" },
  { name: "Obsidian App", url: "obsidian_app.html" },
  { name: "Organizational Skills", url: "organizational_skills.html" },
  { name: "Speed Reading", url: "speed_reading.html" },
  { name: "Focus Mastery", url: "focus_mastery.html" },
]

let personal_productivity = document.querySelector(".personal_productivity")
personal_productivity_content.forEach(element => {
  personal_productivity.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let leadership_content = [
  { name: "Management Skills", url: "management_skills.html" },
  { name: "Manager Training", url: "manager_training.html" },
  { name: "Coaching", url: "coaching.html" },
  { name: "Conflict Management", url: "conflict_management.html" },
  { name: "Communication Skills", url: "communication_skills.html" },
  { name: "Realtionship Building", url: "relationship_building.html" },
  { name: "Employee Engagement", url: "employee_engagement.html" },
  { name: "Facilitation", url: "facilitation.html" },
]

let leadership = document.querySelector(".leadership")
leadership_content.forEach(element => {
  leadership.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let career_development_content = [
  { name: "Interviewing Skills", url: "interviewing_skills.html" },
  { name: "Business Communication", url: "business_communication.html" },
  { name: "IT/Technical Support", url: "it/technical_support.html" },
  { name: "Business Writing", url: "business_writing.html" },
  { name: "Job Search", url: "job_search.html" },
  { name: "Resume and CV Writing", url: "resume.html" },
  { name: "Car Repair", url: "car_repair.html" },
  { name: "Building Inspection", url: "building_inspection.html" },
]

let career_development = document.querySelector(".career_development")
career_development_content.forEach(element => {
  career_development.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let parenting_and_relationships_content = [
  { name: "Parenting", url: "parenting.html" },
  { name: "Relationship Building", url: "relationship_building.html" },
  { name: "Couples Counseling", url: "couples_counseling.html" },
  { name: "Child Psychology", url: "child_psychology.html" },
  { name: "Marriage", url: "marriage.html" },
  { name: "Generative AI", url: "generative_ai.html" },
  { name: "Dating", url: "dating.html" },
  { name: "Love", url: "love.html" },
  { name: "Autism", url: "autism.html" },
]

let parenting_and_relationships = document.querySelector(".parenting_and_relationships")
parenting_and_relationships_content.forEach(element => {
  parenting_and_relationships.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let happiness_content = [
  { name: "Life Coach Training", url: "life_coach_training.html" },
  { name: "Manifestation and Law of Attraction", url: "manifestation.html" },
  { name: "Cognitive Behavioral Therapy (CBT)", url: "cbt.html" },
  { name: "Positive Psychology", url: "positive_psychology.html" },
  { name: "Personal Success", url: "personal_success.html" },
  { name: "Psychology", url: "psychology.html" },
  { name: "Neuro-Linguistic Programming (NLP)", url: "nlp.html" },
  { name: "Decluttering", url: "decluttering.html" },
]

let happiness = document.querySelector(".happiness")
happiness_content.forEach(element => {
  happiness.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let esoteric_practices_content = [
  { name: "Reiki", url: "reiki.html" },
  { name: "Energy Healing", url: "energy_healing.html" },
  { name: "Tarot Reading", url: "tarot_reading.html" },
  { name: "Spiritual Healing", url: "spiritual_healing.html" },
  { name: "Hypnotherapy", url: "hypnotherapy.html" },
  { name: "Astrology", url: "astrology.html" },
  { name: "Psychic", url: "psychic.html" },
  { name: "Akashic Records", url: "akashic_records.html" },
  { name: "Spirituality", url: "spirituality.html" },
]

let esoteric_practices = document.querySelector(".esoteric_practices")
esoteric_practices_content.forEach(element => {
  esoteric_practices.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let religion_and_spirituality_content = [
  { name: "Spirituality", url: "spirituality.html" },
  { name: "Life Coach Training", url: "life_coach_training.html" },
  { name: "Tarot Reading", url: "tarot_reading.html" },
  { name: "Mindfulness", url: "mindfulness.html" },
  { name: "Spiritual Healing", url: "spiritual_healing.html" },
  { name: "Reiki", url: "reiki.html" },
  { name: "Energy Healing", url: "energy_healing.html" },
  { name: "The Bible", url: "the_bible.html" },
  { name: "Kabbalah", url: "kabbalah.html" },
]

let religion_and_spirituality = document.querySelector(".religion_and_spirituality")
religion_and_spirituality_content.forEach(element => {
  religion_and_spirituality.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})



let personal_brand_building_content = [
  { name: "Personal Branding", url: "personal_branding.html" },
  { name: "Meetings", url: "meetings.html" },
  { name: "LinkedIn", url: "linkedin.html" },
  { name: "Carrer Development", url: "carrer_development.html" },
  { name: "Influencer Marketing", url: "influencer_marketing.html" },
  { name: "Confidence", url: "confidence.html" },
  { name: "Amazon Kindle Direct Publishing (KDP)", url: "kdp.html" },
  { name: "Personal Networking", url: "personal_networking.html" },
  { name: "Presentation Skills", url: "presentation_skills.html" },
]


let personal_brand_building = document.querySelector(".personal_brand_building")
personal_brand_building_content.forEach(element => {
  personal_brand_building.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})



let creativity_content = [
  { name: "Creative Writing", url: "creative_writing.html" },
  { name: "Screenwriting and Scriptwriting", url: "screenwriting.html" },
  { name: "Art Therapy", url: "art_therapy.html" },
  { name: "Writing", url: "writing.html" },
  { name: "Writing a Book", url: "writing_a_book.html" },
  { name: "Storytelling", url: "storytelling.html" },
  { name: "Self-Publishing", url: "self_publishing.html" },
  { name: "Novel Writing", url: "novel_writing.html" },
  { name: "Fiction Writing", url: "fiction_writing.html" },
]

let creativity = document.querySelector(".creativity")
creativity_content.forEach(element => {
  creativity.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let influence_content = [
  { name: "Voice Training", url: "voice_training.html" },
  { name: "Communication Skills", url: "communication_skills.html" },
  { name: "Persuation", url: "persuation.html" },
  { name: "Public Speaking", url: "public_speaking.html" },
  { name: "Negotiation", url: "negotiation.html" },
  { name: "Body Language", url: "body_language.html" },
  { name: "Influence Skills", url: "influence_skills.html" },
  { name: "Confidence", url: "confidence.html" },
  { name: "Influencer Marketing", url: "influencer_marketing.html" },
]

let influence = document.querySelector(".influence")
influence_content.forEach(element => {
  influence.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let self_esteem_and_confidence_content = [
  { name: "Confidence", url: "confidence.html" },
  { name: "Self-Esteem", url: "self_esteem.html" },
  { name: "Communication Skills", url: "communication_skills.html" },
  { name: "Psychotherapy", url: "psychotherapy.html" },
  { name: "Personal Development", url: "personal_development.html" },
  { name: "Family Constellations Therapy", url: "family_constellations.html" },
  { name: "Dance", url: "dance.html" },
  { name: "Public Speaking", url: "public_speaking.html" },
  { name: "Social Skills", url: "social_skills.html" },
]


let self_esteem_and_confidence = document.querySelector(".self_esteem_and_confidence")
self_esteem_and_confidence_content.forEach(element => {
  self_esteem_and_confidence.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let stress_management_content = [
  { name: "Anxiety Management", url: "anxiety_management.html" },
  { name: "Emotional Intelligence", url: "" },
  { name: "Resilience", url: "" },
  { name: "Coaching", url: "" },
  { name: "Anger Management", url: "" },
  { name: "Sound Therapy", url: "" },
  { name: "Mindfulness", url: "" },
  { name: "Master Your Emotions", url: "" },
]

let stress_management = document.querySelector(".stress_management")
stress_management_content.forEach(element => {
  stress_management.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let memory_and_study_skills_content = [
  { name: "Memory", url: "" },
  { name: "Speed Reading", url: "" },
  { name: "Learning Strategies", url: "" },
  { name: "Study Skills", url: "" },
  { name: "Focus Mastery", url: "" },
  { name: "Mind Mapping", url: "" },
  { name: "Obsidian App", url: "" },
  { name: "Artificial Intelligence (AI)", url: "" },
  { name: "Critical Thinking", url: "" },
]

let memory_and_study_skills = document.querySelector(".memory_and_study_skills")
memory_and_study_skills_content.forEach(element => {
  memory_and_study_skills.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let motivation_content = [
  { name: "Neuroplasticity", url: "" },
  { name: "Neuro-Linguistic Programming (NLP)", url: "nlp.html" },
  { name: "Procrastination", url: "" },
  { name: "Coaching", url: "" },
  { name: "Lotto", url: "" },
  { name: "Personal Development", url: "" },
  { name: "Personal Success", url: "" },
  { name: "Goal Setting", url: "" },
]

let motivation = document.querySelector(".motivation")
motivation_content.forEach(element => {
  motivation.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let other_personal_development_content = [
  { name: "Project Management", url: "" },
  { name: "Freight Brokering", url: "" },
  { name: "Contract Law ", url: "" },
  { name: "Public Speaking", url: "" },
  { name: "Car Repair", url: "" },
  { name: "eSports", url: "" },
  { name: "Hypnotherapy", url: "" },
  { name: "Lucid Dreaming", url: "" },
  { name: "Sound Therapy", url: "" },
]

let other_personal_development = document.querySelector(".other_personal_development")
other_personal_development_content.forEach(element => {
  other_personal_development.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


//------------------------------------------Personal Development End-------------------------------------------------------------------

//--------------------------------------------Design-----------------------------------------------------------------------------------


let web_design_content = [
  { name: "Mobile App Design", url: "" },
  { name: "WordPress", url: "" },
  { name: "CSS", url: "" },
  { name: "Figma", url: "" },
  { name: "User Interface Design", url: "" },
  { name: "Elementor", url: "" },
  { name: "HTML", url: "" },
  { name: "Webflow", url: "" },
]


let web_design = document.querySelector(".web_design")
web_design_content.forEach(element => {
  web_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let graphic_design_and_illustration_content = [
  { name: "Graphic Design", url: "" },
  { name: "Adobe Photoshop", url: "" },
  { name: "Adobe Illustrator", url: "" },
  { name: "Canva", url: "" },
  { name: "Drawing", url: "" },
  { name: "Procreate Digital Illustration App", url: "" },
  { name: "Adobe Indesign", url: "" },
  { name: "Digital Painting", url: "" },
  { name: "Design Theory", url: "" },
]

let graphic_design_and_illustration = document.querySelector(".graphic_design_and_illustration")
graphic_design_and_illustration_content.forEach(element => {
  graphic_design_and_illustration.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let design_tools_content = [
  { name: "AutoCAD", url: "" },
  { name: "SOLIDWORKS", url: "" },
  { name: "Midjourney", url: "" },
  { name: "Adobe Photoshop", url: "" },
  { name: "Fignma", url: "" },
  { name: "Adobe After Effects", url: "" },
  { name: "Procreate Digital Illustration App", url: "" },
  { name: "Canva", url: "" },
  { name: "Adobe Premiere Pro", url: "" },
]

let design_tools = document.querySelector(".design_tools")
design_tools_content.forEach(element => {
  design_tools.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let user_experience_design_content = [
  { name: "User Experience (UX) Design", url: "" },
  { name: "Figma", url: "" },
  { name: "User Interface Design", url: "" },
  { name: "Adobe XD", url: "" },
  { name: "Product Design", url: "" },
  { name: "UX Writing (User Experience Writing)", url: "" },
  { name: "Design Thinking", url: "" },
  { name: "Web Accessibility", url: "" },
  { name: "Web Design", url: "" },
]


let user_experience_design = document.querySelector(".user_experience_design")
user_experience_design_content.forEach(element => {
  user_experience_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let game_design_content = [
  { name: "Pixel Art", url: "" },
  { name: "Unreal Engine", url: "" },
  { name: "Unity", url: "" },
  { name: "Blender", url: "" },
  { name: "3D Modeling", url: "" },
  { name: "Game Development Fundamentals", url: "" },
  { name: "Level Design", url: "" },
]

let game_design = document.querySelector(".game_design")
game_design_content.forEach(element => {
  game_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let three_d_and_animation_content = [
  { name: "Blender", url: "" },
  { name: "3D Modeling", url: "" },
  { name: "Adobe After Effects", url: "" },
  { name: "Motion Graphics", url: "" },
  { name: "3D Printing", url: "" },
  { name: "Autodesk Fusion 360", url: "" },
  { name: "Unreal Engine", url: "" },
  { name: "3D Animation", url: "" },
  { name: "zBrush", url: "" },
]


let three_d_and_animation = document.querySelector(".three_d_and_animation")
three_d_and_animation_content.forEach(element => {
  three_d_and_animation.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let fashion_design_content = [
  { name: "Fashion", url: "" },
  { name: "Pattern Making (fashion)", url: "" },
  { name: "Sewing", url: "" },
  { name: "3D Fashion Design", url: "" },
  { name: "Jewelry Design", url: "" },
  { name: "Textiles", url: "" },
  { name: "Adobe Illustrator", url: "" },
  { name: "Jewelry Making", url: "" },
]

let fashion_design = document.querySelector(".fashion_design")
fashion_design_content.forEach(element => {
  fashion_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let architectural_design_content = [
  { name: "Revit", url: "" },
  { name: "AutoCAD", url: "" },
  { name: "LEED", url: "" },
  { name: "SketchUp", url: "" },
  { name: "Building Information Modeling (BIM)", url: "" },
  { name: "ARCHICAD", url: "" },
  { name: "3D Modeling", url: "" },
  { name: "Blender", url: "" },
]

let architectural_design = document.querySelector(".architectural_design")
architectural_design_content.forEach(element => {
  architectural_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let interior_design_content = [
  { name: "SketchUp", url: "" },
  { name: "Color Theory", url: "" },
  { name: "HVAC", url: "" },
  { name: "Lighting Design", url: "" },
  { name: "Home Staging", url: "" },
  { name: "Electrical Engineering", url: "" },
  { name: "Revit", url: "" },
  { name: "Blender", url: "" },
]

let interior_design = document.querySelector(".interior_design")
interior_design_content.forEach(element => {
  interior_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let other_design_content = [
  { name: "Electronics", url: "" },
  { name: "PCB Design", url: "" },
  { name: "Character Design", url: "" },
  { name: "Drawing", url: "" },
  { name: "Geometric Dimensioning and Tolerancing (GD&T)", url: "" },
  { name: "CATIA", url: "" },
  { name: "AutoCAD", url: "" },
  { name: "Microservices", url: "" },
  { name: "Software Architectural", url: "" },
]

let other_design = document.querySelector(".other_design")
other_design_content.forEach(element => {
  other_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

//--------------------------------------------Design End-------------------------------------------------------------------------------


//-------------------------------------------Marketing------------------------------------------------------------------------------


let digital_marketing_content = [
  { name: "Social Media Marketing", url: "" },
  { name: "Marketing Strategy", url: "" },
  { name: "Internet Marketing", url: "" },
  { name: "ChatGPT", url: "" },
  { name: "Google Analytics", url: "" },
  { name: "Copywriting", url: "" },
  { name: "Startup", url: "" },
  { name: "Sales Funnel", url: "" },
]

let digital_marketing = document.querySelector(".digital_marketing")
digital_marketing_content.forEach(element => {
  digital_marketing.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let search_engine_optimization_content = [
  { name: "Search Engine Optimization (SEO)", url: "" },
  { name: "WordPress", url: "" },
  { name: "Keyword Research", url: "" },
  { name: "Google Business Profile (Google My Business)", url: "" },
  { name: "Local SEO", url: "" },
  { name: "SEO Audit", url: "" },
  { name: "Link Building", url: "" },
  { name: "ChatGPT", url: "" },
  { name: "SEMrush", url: "" },
]

let search_engine_optimization = document.querySelector(".search_engine_optimization")
search_engine_optimization_content.forEach(element => {
  search_engine_optimization.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let social_media_marketing_content = [
  { name: "Instagram Marketing", url: "" },
  { name: "Social Media Management", url: "" },
  { name: "Facebook Ads", url: "" },
  { name: "Facebook Marketing", url: "" },
  { name: "TikTok Marketing", url: "" },
  { name: "PPC Advertising", url: "" },
  { name: "YouTube Marketing", url: "" },
  { name: "Generative AI (GenAI)", url: "" },
]

let social_media_marketing = document.querySelector(".social_media_marketing")
social_media_marketing_content.forEach(element => {
  social_media_marketing.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let branding_content = [
  { name: "Business Branding", url: "" },
  { name: "YouTube Audience Growth", url: "" },
  { name: "YouTube Marketing", url: "" },
  { name: "Brand Management", url: "" },
  { name: "Personal Branding", url: "" },
  { name: "Marketing Strategy", url: "" },
  { name: "Career Development", url: "" },
  { name: "Product Management", url: "" },
  { name: "Reputation Management", url: "" },
]

let branding = document.querySelector(".branding")
branding_content.forEach(element => {
  branding.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let marketing_fundamentals_content = [
  { name: "Marketing Strategy", url: "" },
  { name: "Copywriting", url: "" },
  { name: "Marketing Psychology", url: "" },
  { name: "Digital Nomad", url: "" },
  { name: "ChatGPT", url: "" },
  { name: "Digital Marketing", url: "" },
  { name: "Marketing Management", url: "" },
  { name: "Event Planning", url: "" },
  { name: "Coaching and Consulting Business", url: "" },
]

let marketing_fundamentals = document.querySelector(".marketing_fundamentals")
marketing_fundamentals_content.forEach(element => {
  marketing_fundamentals.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let marketing_analytics_and_automation_content = [
  { name: "Google Analytics", url: "" },
  { name: "Marketing Analytics", url: "" },
  { name: "HubSpot", url: "" },
  { name: "Google Tag Manager", url: "" },
  { name: "Data Analysis", url: "" },
  { name: "Marketo", url: "" },
  { name: "Marketing Strategy", url: "" },
  { name: "Google Analytics Individual Qualification (IQ)", url: "" },
  { name: "Marketing Automation", url: "" },
]

let marketing_analytics_and_automation = document.querySelector(".marketing_analytics_and_automation")
marketing_analytics_and_automation_content.forEach(element => {
  marketing_analytics_and_automation.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let public_relations_content = [
  { name: "Communication Skills", url: "" },
  { name: "Media Training", url: "" },
  { name: "Public Speaking", url: "" },
  { name: "Canva", url: "" },
  { name: "Podcasting", url: "" },
  { name: "Business Communication", url: "" },
  { name: "Storytelling", url: "" },
  { name: "Event Planning", url: "" },
]

let public_relations = document.querySelector(".public_relations")
public_relations_content.forEach(element => {
  public_relations.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let paid_advertising_content = [
  { name: "Google Ads (Adwords)", url: "" },
  { name: "Facebook Ads", url: "" },
  { name: "PPC Advertising", url: "" },
  { name: "Google Ads Certification", url: "" },
  { name: "Advertising Strategy", url: "" },
  { name: "YouTube Marketing", url: "" },
  { name: "Retargeting", url: "" },
  { name: "Copywriting", url: "" },
  { name: "Programmatic Advertising", url: "" },
]


let paid_advertising = document.querySelector(".paid_advertising")
paid_advertising_content.forEach(element => {
  paid_advertising.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let video_and_mobile_marketing_content = [
  { name: "YouTUbe Marketing", url: "" },
  { name: "Youtube Audience Growth", url: "" },
  { name: "Video Creation", url: "" },
  { name: "PowerPoint", url: "" },
  { name: "Generative AI (Gen AI)", url: "" },
  { name: "Video Marketing", url: "" },
  { name: "Video Editing", url: "" },
  { name: "App Editing", url: "" },
  { name: "App Store Optimization", url: "" },
]

let video_and_mobile_marketing = document.querySelector(".video_and_mobile_marketing")
video_and_mobile_marketing_content.forEach(element => {
  video_and_mobile_marketing.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let content_marketing_content = [
  { name: "Content Writing", url: "" },
  { name: "Copywriting", url: "" },
  { name: "AI Content Generation", url: "" },
  { name: "Blogging", url: "" },
  { name: "Writing", url: "" },
  { name: "Content Creation", url: "" },
  { name: "ChatGPT", url: "" },
  { name: "Business Writing", url: "" },
]


let content_marketing = document.querySelector(".content_marketing")
content_marketing_content.forEach(element => {
  content_marketing.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let growth_hacking_content = [
  { name: "Digital Marketing", url: "" },
  { name: "Passive Income", url: "" },
  { name: "Facebook Ads", url: "" },
  { name: "Marketing Strategy", url: "" },
  { name: "App Marketing", url: "" },
  { name: "ChatGPT", url: "" },
  { name: "YouTube Audience Growth", url: "" },
  { name: "Search Engine Optimization (SEO)", url: "" },
]

let growth_hacking = document.querySelector(".growth_hacking")
growth_hacking_content.forEach(element => {
  growth_hacking.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let affiliate_marketing_content = [
  { name: "ClickBank", url: "" },
  { name: "Google Ads (Adwords)", url: "" },
  { name: "Influencer Marketing", url: "" },
  { name: "Amazon Affiliate Marketing", url: "" },
  { name: "TikTok Shop", url: "" },
  { name: "Search Engine Optimization (SEO)", url: "" },
  { name: "Facebook Marketing", url: "" },
  { name: "CPA Marketing", url: "" },
]


let affiliate_marketing = document.querySelector(".affiliate_marketing")
affiliate_marketing_content.forEach(element => {
  affiliate_marketing.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let product_marketing_content = [
  { name: "Amazon Kindle Direct Publishing (KDP)", url: "" },
  { name: "SaaS", url: "" },
  { name: "Self-Publishing", url: "" },
  { name: "Product Management", url: "" },
  { name: "Book Marketing", url: "" },
  { name: "Marketing Strategy", url: "" },
  { name: "Launch Funnel", url: "" },
  { name: "Selling on Amazon", url: "" },
]

let product_marketing = document.querySelector(".product_marketing")
product_marketing_content.forEach(element => {
  product_marketing.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let other_marketing_content = [
  { name: "Copywriting", url: "" },
  { name: "Conversion Rate Optimization (CRO)", url: "" },
  { name: "ChatGPT", url: "" },
  { name: "Digital Marketing", url: "" },
  { name: "Event Planning", url: "" },
  { name: "Marketing Strategy", url: "" },
  { name: "Google Tag Manager", url: "" },
  { name: "Marketing Psychology", url: "" },
  { name: "Sales Skills", url: "" },
]

let other_marketing = document.querySelector(".other_marketing")
other_marketing_content.forEach(element => {
  other_marketing.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

//-------------------------------------------Marketing End------------------------------------------------------------------------------


//------------------------------------------Lifestyle----------------------------------------------------------------------------------

let arts_and_crafts_content = [
  { name: "Drawing", url: "" },
  { name: "Watercolor Painting", url: "" },
  { name: "Painting", url: "" },
  { name: "Figure Drawing", url: "" },
  { name: "Arcylic Painting", url: "" },
  { name: "Sketching", url: "" },
  { name: "Candle Making", url: "" },
  { name: "Oil Painting", url: "" },
  { name: "Sewing", url: "" },
]

let arts_and_crafts = document.querySelector(".arts_and_crafts")
arts_and_crafts_content.forEach(element => {
  arts_and_crafts.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let beauty_and_makeup_content = [
  { name: "Beauty", url: "" },
  { name: "Makeup Artistry", url: "" },
  { name: "Skincare", url: "" },
  { name: "Nail Artistry", url: "" },
  { name: "Hair Styling", url: "" },
  { name: "Perfume", url: "" },
  { name: "Cosmetics", url: "" },
  { name: "Beauty Business", url: "" },
  { name: "Face Lift", url: "" },
]

let beauty_and_makeup = document.querySelector(".beauty_and_makeup")
beauty_and_makeup_content.forEach(element => {
  beauty_and_makeup.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let lifestyle_esoteric_practices_content = [
  { name: "Reiki", url: "reiki.html" },
  { name: "Energy Healing", url: "energy_healing.html" },
  { name: "Tarot Reading", url: "tarot_reading.html" },
  { name: "Spiritual Healing", url: "spiritual_healing.html" },
  { name: "Hypnotherapy", url: "hypnotherapy.html" },
  { name: "Astrology", url: "astrology.html" },
  { name: "Psychic", url: "psychic.html" },
  { name: "Akashic Records", url: "akashic_records.html" },
  { name: "Spirituality", url: "spirituality.html" },
]

let lifestyle_esoteric_practices = document.querySelector(".lifestyle_esoteric_practices")
lifestyle_esoteric_practices_content.forEach(element => {
  lifestyle_esoteric_practices.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let food_and_beverage_content = [
  {name:"Cooking"},
  {name:"Cocktails and Bartending"},
  {name:"Coffee"},
  {name:"Pastry"},
  {name:"Wine Appreciation and Oenology"},
  {name:"Baking"},
  {name:"Sourdough Bread Baking"},
  {name:"Bread Baking"},
  {name:"Cake Baking"},
]

let food_and_beverage = document.querySelector(".food_and_beverage")
food_and_beverage_content.forEach(element => {
  food_and_beverage.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let gaming_content = [
  {name:"Chess"},
  {name:"Poker"},
  {name:"eSports"},
  {name:"Fortnite"},
  {name:"Open Broadcaster"},
  {name:"Twitch"},
  {name:"Character Design"},
  {name:"Roulette"},
]

let gaming = document.querySelector(".gaming")
gaming_content.forEach(element => {
  gaming.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let home_improvement_and_gardening_content = [
  {name:"Electricity"},
  {name:"Gardening"},
  {name:"Electrical Wiring"},
  {name:"Home Repair"},
  {name:"Woodworking and Carpentry"},
  {name:"Organizational Skills"},
  {name:"Farming"},
  {name:"Mushroom Cultivation"},
  {name:"Beekeeping"},
]

let home_improvement_and_gardening = document.querySelector(".home_improvement_and_gardening")
home_improvement_and_gardening_content.forEach(element => {
  home_improvement_and_gardening.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let pet_care_and_training_content = [
  {name:"Dog Training"},
  {name:"Dog Care"},
  {name:"Horsemanship"},
  {name:"Dog Behaviour"},
  {name:"Pet Training"},
  {name:"Pet Care"},
  {name:"Animal Nutrition"},
  {name:"Veterinary Medicine"},
  {name:"Cat Behavior"},
]

let pet_care_and_training = document.querySelector(".pet_care_and_training")
pet_care_and_training_content.forEach(element => {
  pet_care_and_training.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let travel_content = [
  {name:"Travel Tips"},
  {name:"Portuguese Language"},
  {name:"Travel Writing"},
  {name:"Travel Business"},
  {name:"Sailing"},
  {name:"Airbnb Hosting"},
  {name:"Digital Nomad"},
  {name:"Land Navigation"},
  {name:"Immigration"},
]

let travel = document.querySelector(".travel")
travel_content.forEach(element => {
  travel.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let other_lifestyle_content = [
  {name:"Neuro-Linguistic Programming (NLP)"},
  {name:"Meditation"},
  {name:"EFT (Emotional Freedom Techniques)"},
  {name:"Cognitive Behavioral Therapy (CBT)"},
  {name:"Emotional Intelligence"},
  {name:"Mindfulness"},
  {name:"Life Coach Training"},
  {name:"Herbalism"},
  {name:"Affiliate Marketing"},
]

let other_lifestyle = document.querySelector(".other_lifestyle")
other_lifestyle_content.forEach(element => {
  other_lifestyle.innerHTML += `
  <li class="px-3 py-1">
    <a
      href="${element.url}"
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

//------------------------------------------Lifestyle End----------------------------------------------------------------------------------