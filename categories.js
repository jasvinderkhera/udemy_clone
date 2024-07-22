
//---------------------------------------------Development------------------------------------------------------

let data_science_content = [
    { name: "Machine Learning", url: "machine_learning.html" },
    { name: "Python", url: "python.html" },
    { name: "Deep Learning", url: "deep_learning.html" },
    { name: "Artificial Intelligence (AI)", url: "artificial_intelligence.html" },
    { name: "Natural Language Processing (NLP)", url: "natural_language_processing.html" },
    { name: "LangChain", url: "langchain.html" },
    { name: "Data Analysis", url: "data_analysis.html" },
    { name: "R (Programming Language)", url: "r.html" },

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
    {name:"Google Flutter", url:"google_flutter.html"},
    {name:"iOS Development", url:"ios_development.html"},
    {name:"Android Development", url:"android_development.html"},
    {name:"React Native", url:"react_native.html"},
    {name:"Dart (programming language)", url:"dart.html"},
    {name:"Swift", url:"swift.html"},
    {name:"Kotlin", url:"kotlin.html"},
    {name:"Mobile App Development", url:"mobile_app_development.html"},
    {name:"SwiftUI", url:"swiftui.html"},
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
    {name:"Python",url:"python.html"},
    {name:"Java",url:"java.html"},
    {name:"C# (programming language)",url:"c#.html"},
    {name:"C++ (programming language)",url:"c++.html"},
    {name:"React JS",url:"react_js.html"},
    {name:"C (programming language)",url:"c.html"},
    {name:"Go (programming language)",url:"go.html"},
    {name:"Spring Framework",url:"spring_framework.html"},
    {name:"Javascript",url:"javascript.html"},
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
    {name:"Unreal Engine",url:"unreal_engine.html"},
    {name:"Unity",url:"unity.html"},
    {name:"Game Development Fundamental",url:"game_development_fundametal.html"},
    {name:"3D Game Development",url:"3d_game_development.html"},
    {name:"3D Game Development",url:"3d_game_development.html"},
    {name:"C# (programming language)",url:"c#.html"},
    {name:"Godot",url:"godot.html"},
    {name:"C++ (programming language)",url:"c++.html"},
    {name:"2D Game Development",url:"2d_game_development.html"},
    {name:"Unreal Engine Blueprints",url:"unreal_engine_blueprints.html"},
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
    {name:"SQL",url:"sql.html"},
    {name:"MySQL",url:"mysql.html"},
    {name:"Database Management System (DBMS)",url:"dbms.html"},
    {name:"SQL Server",url:"sql_server.html"},
    {name:"PostgreSQL",url:"postgresql.html"},
    {name:"Apache Kafka",url:"apache_kafka.html"},
    {name:"Oracle SQL",url:"oracle_sql.html"},
    {name:"Database Programming",url:"dbms_programming.html"},
    {name:"MongoDB",url:"mongodb.html"},
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
    {name:"Selenium WebDriver", url:"selenium_webdriver.html"},
    {name:"Microsoft Playwright ", url:"microsoft_playwright.html"},
    {name:"Automation Testing ", url:"automation_testing.html"},
    {name:"Java ", url:"java.html"},
    {name:"Postman", url:"postman.html"},
    {name:"ISTQB Certified Tester Foundation Level (CTFL)", url:"istbq.html"},
    {name:"Selenium Testing Framework", url:"selenium_testing_framework.html"},
    {name:"API Testing", url:"api_testing.html"},
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
    {name:"Data Structures", url:"data_structure.html"},
    {name:"Algorithms ", url:"algorithms.html"},
    {name:"Software Architecture ", url:"software_architecture.html"},
    {name:"Certified Kubernetes Application Developer (CKAD)", url:"ckad.html"},
    {name:"Coding Interview", url:"coding_interview.html"},
    {name:"Microservices ", url:"microservices.html"},
    {name:"Java Algorithms ", url:"java_algorithms.html"},
    {name:"Back End Web Development", url:"back_end_web_development.html"},
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
    {name:"Docker", url:"docker.html"},
    {name:"Git", url:"git.html"},
    {name:"Kubernetes", url:"kubernetes.html"},
    {name:"Prompt Engineering", url:"prompt_engineering.html"},
    {name:"JIRA", url:"jira.html"},
    {name:"GitHub", url:"github.html"},
    {name:"Confluence", url:"confluence.html"},
    {name:"CI/CD", url:"ci/cd.html"},
    {name:"Terraform", url:"terraform.html"},
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
    {name:"Generative AI (Gen AI)",url:"generative_ai.html"},
    {name:"WordPress",url:"wordpress.html"},
    {name:"Bubble Visual Programming",url:"wordpress.html"},
    {name:"Microsoft Power Apps",url:"microsoft_power_apps.html"},
    {name:"Microsoft Power Platform",url:"microsoft_power_platform.html"},
    {name:"Microsoft Power Automate",url:"microsoft_power_automate.html"},
    {name:"Microsoft 365 Copilot",url:"microsoft_365_copilot.html"},
    {name:"Web Design",url:"web_design.html"},
    {name:"App Development",url:"app_development.html"},
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
  {name:"Business Fundamentals",url:"business_fundamentals.html"},
  {name:"Entrepreneurship Fundamentals",url:"entrepreneurship_fundamentals.html"},
  {name:"Business Strategy ",url:"business_strategy.html"},
  {name:"Freelancing ",url:"freelancing.html"},
  {name:"Online Business ",url:"online_business.html"},
  {name:"ChatGPT",url:"chatgpt.html"},
  {name:"Startup",url:"startup.html"},
  {name:"Business Plan",url:"business_plan.html"},
  {name:"QuickBooks",url:"quickbooks.html"},
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
  {name:"Communication Skills",url:"communication_skills.html"},
  {name:"Presentation Skills",url:"presentation_skills.html"},
  {name:"Public Speaking",url:"public_speaking.html"},
  {name:"Writing ",url:"writing.html"},
  {name:"Fiction Writing ",url:"fiction_writing.html"},
  {name:"Business Communication ",url:"business_communication.html"},
  {name:"Business Writing ",url:"business_writing.html"},
  {name:"Assertiveness ",url:"assertiveness.html"},
  {name:"Email Writing & Etiquette ",url:"email_writing.html"},
]

let communication = document.querySelector(".communication")
communication_content.forEach(element=>{
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
  {name:"Product Management",url:"product_management.html"},
  {name:"Leadership",url:"leadership.html"},
  {name:"Management Skills",url:"management_skills.html"},
  {name:"ISO 9001",url:"iso9001.html"},
  {name:"Business Strategy",url:"business_strategy.html"},
  {name:"CIPS Level 4 Diploma in Procurement and Supply",url:"cips.html"},
  {name:"Quality Management",url:"quality_management.html"},
  {name:"Product Management",url:"prdouct_management.html"},
  {name:"Risk Management",url:"risk_management.html"},
]

let management = document.querySelector(".management")
management_content.forEach(element=>{
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
  {name:"Sales Skills",url:"sales_skills.html"},
  {name:"B2B Sales",url:"b2b_skills.html"},
  {name:"Customer Service",url:"customer_service.html"},
  {name:"LinkedIn",url:"linkedin.html"},
  {name:"Sales Management",url:"sales_management.html"},
  {name:"Business Development",url:"business_development.html"},
  {name:"Lead Generation",url:"lead_generation.html"},
  {name:"Cold Calling",url:"cold_calling.html"},
  {name:"Cold Email",url:"cold_email.html"},
]

let sales = document.querySelector(".sales")
sales_content.forEach(element=>{
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


let business_strategy_content= [
  {name:"IIBA Entry Certificate in Business Analytics (ECBA)", url:"iiba_entry.html"},
  {name:"Environmental Social and Governance (ESG)",url:"environmental_social.html"},
  {name:"Prompt Engineering",url:"prompt_engineering.html"},
  {name:"Management Consulting",url:"management_consulting.html"},
  {name:"The Open Group Certified: TOGAF Enterprise Architectural Foundation",url:"the_open.html"},
  {name:"Generative AI (GenAI)",url:"generative_ai.html"},
  {name:"Artificial Intelligence",url:"artificial_intelligence.html"},
  {name:"TOGAF",url:"togaf.html"},
]

let business_strategy = document.querySelector(".business_strategy")
business_strategy_content.forEach(element=>{
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
  {name:"Supply Chain",url:"supply_chain.html"},
  {name:"Logistics Management",url:"logistics_management.html"},
  {name:"Lean Six Sigma Green Belt Certification",url:"lean_six.html"},
  {name:"Lean Six Sigma Black Belt Certification",url:"lean_six_black.html"},
  {name:"Virtual Assistant Skills",url:"virtual_assistant.html"},
  {name:"Quality Management",url:"qualtiy_management.html"},
  {name:"Operations Management",url:"operations_management.html"},
  {name:"Lean",url:"lean.html"},
  {name:"Ceritfied Quality Engineer (CQE)",url:"certified_qualtiy.html"},
]
let operations = document.querySelector(".operations")
operations_content.forEach(element=>{
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
  {name:"PMI Project Management Professional (PMP)",url:"pmi_project.html"},
  {name:"PMI PMBOK",url:"pmi_pmbok.html"},
  {name:"PMI Certified Associate in Project Management (CAPM)",url:"pmi_certified.html"},
  {name:"Scrum",url:"scrum.html"},
  {name:"Agile",url:"agile.html"},
  {name:"Professional Scrum Master (PSM)",url:"professional_scrum.html"},
  {name:"PRINCE2",url:"prince2.html"},
  {name:"PMI Agile Certified Practitioner (PMI-ACP)",url:"pmi_agile.html"},
]

let project_management = document.querySelector(".project_management")
project_management_content.forEach(element=>{
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
  {name:"AI Ethics and Governance",url:"ai_ethics.html"},
  {name:"Law",url:"law.html"},
  {name:"GDPR",url:"gdpr.html"},
  {name:"Certified Information Privacy Professional (CIPP)",url:"certified_information.html"},
  {name:"Contract Management",url:"contract_management.html"},
  {name:"Contract Law",url:"contract_law.html"},
  {name:"Legal English",url:"legal_english.html"},
  {name:"Compliance Management",url:"compliance_management.html"},
]

let business_law = document.querySelector(".business_law")
business_law_content.forEach(element=>{
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
  {name:"Microsoft Power BI",url:"microsoft_power.html"},
  {name:"SQL",url:"sql.html"},
  {name:"Data Modeling",url:"data_modeling.html"},
  {name:"Data Analysis",url:"data_analysis.html"},
  {name:"Business Analysis",url:"business_analysis.html"},
  {name:"Tableau",url:"tableau.html"},
  {name:"Data Analysis Expression (DAX)",url:"data_analysis_expression.html"},
  {name:"Business Analytics",url:"business_analytics.html"},
  {name:"Business Intelligence (BI)",url:"business_intelligence.html"},
]

let business_analytics  = document.querySelector(".business_analytics")
business_analytics_content.forEach(element=>{
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
  {name:"Recruiting and Hiring",url:"recruiting_and_hiring.html"},
  {name:"HR Analytics",url:"hr_analytics.html"},
  {name:"Employment Law",url:"employment_law.html"},
  {name:"Corporate Learning and Development (L&D)",url:"corporate_learning.html"},
  {name:"Society for Human Resource Management Certified Professional (SHRM-CP)",url:"society.html"},
  {name:"Conflict Management",url:"conflict_management.html"},
  {name:"Emotional Intelligence",url:"emotional_intelligence.html"},
  {name:"Diversity and Inclusion",url:"diversity_and_inclusion.html"},
]

let human_resources = document.querySelector(".human_resources")
human_resources_content.forEach(element=>{
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
  {name:"Piping",url:"piping.html"},
  {name:"Oil and Gas Industry",url:"oil_and_gas_industry.html"},
  {name:"Control Engineering",url:"control_engineering.html"},
  {name:"Workplace Health and Safety",url:"workplace.html"},
  {name:"Chemical Engineering",url:"chemical_engineering.html"},
  {name:"Life Coach Training",url:"life.html"},
  {name:"Aviation",url:"avaiation.html"},
  {name:"Electrical Engineering",url:"electrical_engineering.html"},
  {name:"Aspen Plus",url:"aspen_plus.html"},
]

let industry = document.querySelector(".industry")
industry_content.forEach(element=>{
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
  {name:"Amazon FBA",url:"amazon_fba.html"},
  {name:"Dropshipping",url:"dropshipping.html"},
  {name:"Shopify Dropshipping",url:"shopify_dropshipping.html"},
  {name:"Shopify",url:"shopify.html"},
  {name:"Etsy",url:"etsy.html"},
  {name:"Amazon Kindle Direct Publishing (KDP)",url:"amazon_kindle.html"},
  {name:"Selling on Amazon",url:"selling_on_amazon.html"},
  {name:"Passive Income",url:"passive_income.html"},
]

let e_commerce = document.querySelector(".e_commerce")
e_commerce_content.forEach(element=>{
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
  {name:"Screen Writing and Script Writing",url:"screen.html"},
  {name:"Amazon Kindle Direct Publising (KDP)",url:"amazon_kindle.html"},
  {name:"Audiobook Creation",url:"audiobook_creation.html"},
  {name:"Search Engine Optimization (SEO)",url:"search_engine_optimization.html"},
  {name:"Content Creation",url:"content_creation.html"},
  {name:"Journalism",url:"journalism.html"},
  {name:"Generative AI (GenAI)",url:"generative_ai.html"},
  {name:"Scrivener",url:"scrivener.html"},
  {name:"Creative Writing",url:"creative_writing.html"},
]

let media = document.querySelector(".media")
media_content.forEach(element=>{
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
  {name:"Real Estate Investing",url:"real_estate_investing.html"},
  {name:"Airbnb Hosting",url:"airbnb_hosting.html"},
  {name:"Construction",url:"construction.html"},
  {name:"Mortgage",url:"mortgage.html"},
  {name:"Financial Modeling",url:"financial_modeling.html"},
  {name:"Real Estate Marketing",url:"real_estate_marketing.html"},
  {name:"Real Estate Flipping",url:"real_estate_flipping.html"},
  {name:"Property Management",url:"property_management.html"},
]

let real_estate = document.querySelector(".real_estate")
real_estate_content.forEach(element=>{
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
  {name:"QuickBooks",url:"quickbooks.html"},
  {name:"Data Entry Skills",url:"data_entry_skills.html"},
  {name:"Grant Writing",url:"grant_writing.html"},
  {name:"ChatGPT",url:"chatgpt.html"},
  {name:"Transcription",url:"transcription.html"},
  {name:"Rieki",url:"rieki.html"},
  {name:"Freelance Writing",url:"freelance_writing.html"},
  {name:"CIPS Level 4 Diploma in Procurement and Supply",url:"cips.html"},
  {name:"Electronics",url:"electronics.html"},
]

let other_business = document.querySelector(".other_business")
other_business_content.forEach(element=>{
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
  {name:"Accounting",url:"accounting.html"},
  {name:"Bookkeeping",url:"bookkeeping.html"},
  {name:"QuickBooks",url:"quickbooks.html"},
  {name:"Financial Accounting",url:"financial_accounting.html"},
  {name:"Financial Fundamental",url:"financial_fundamental.html"},
  {name:"TallyPrime (Tally.ERP)",url:"tallyprime.html"},
  {name:"Uniform CPA Examination",url:"uniform.html"},
  {name:"International Financial Reporting Standards (IFRS)",url:"ifrs.html"},
  {name:"Xero",url:"xero.html"},
]

let accounting_and_bookkeeping = document.querySelector(".accounting_and_bookkeeping")
accounting_and_bookkeeping_content.forEach(element=>{
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
  {name:"Anti-Money Laundering (AML)",url:"anti_money.html"},
  {name:"Criminology",url:"criminology.html"},
  {name:"Internal Controls",url:"internal_controls.html"},
  {name:"Fraud Analytics",url:"fraud_analytics.html"},
  {name:"Compliance Management",url:"compliance_management.html"},
  {name:"Trade and Commerce",url:"trade_and_commmerce.html"},
  {name:"Risk Management",url:"risk_management.html"},
  {name:"Internal Auditing",url:"internal_auditing.html"},
  {name:"Compliance (IT)",url:"compliance.html"},
]

let compliance = document.querySelector(".compliance")
compliance_content.forEach(element=>{
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
  {name:"Cryptocurrency",url:"cryptocurrency.html"},
  {name:"Blockchain",url:"blockchain.html"},
  {name:"Bitcoin",url:"bitcoin.html"},
  {name:"Binance",url:"binance.html"},
  {name:"Algorithmic Trading",url:"algorithmic_trading.html"},
  {name:"Day Trading",url:"day_trading.html"},
  {name:"Online Arbitrage",url:"online_arbitrage.html"},
  {name:"NFT (Non-Fungible Tokens)",url:"nft.html"},
  {name:"Technical Analysis (finance)",url:"technical_analysis.html"},
]

let cryptocurrency_and_blockchain = document.querySelector(".cryptocurrency_and_blockchain")
cryptocurrency_and_blockchain_content.forEach(element=>{
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

let economics_content =[
  {name:"Macroeconimics",url:"macroeconomics.html"},
  {name:"Microeconomics",url:"microeconomics.html"},
  {name:"Stata",url:"stata.html"},
  {name:"Global Economics",url:"global_economics.html"},
  {name:"Finance Fundamental",url:"finance_fundamental.html"},
  {name:"Econometics",url:"econometrics.html"},
  {name:"Behavioral Economics",url:"behavioral_economics.html"},
  {name:"Statistics",url:"statistics.html"},
]

let economics = document.querySelector(".economics")
economics_content.forEach(element=>{
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
  {name:"Personal Finance",url:"personal_finance.html"},
  {name:"Finance Fundamentals",url:"finance_fundamentals.html"},
  {name:"Investing Banking",url:"investing_banking.html"},
  {name:"Banking",url:"banking.html"},
  {name:"Corporate Finance",url:"corporate_finance.html"},
  {name:"Chartered Finance Analyist (CFA)",url:"cfa.html"},
  {name:"Finance Analysis",url:"finance_analysis.html"},
  {name:"Financial Management",url:"financial_management.html"},
  {name:"ChatGPT",url:"chatgpt.html"},
]

let finance = document.querySelector(".finance")
finance_content.forEach(element=>{
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
  {name:"Chartered Finance Analyist (CFA)",url:"cfa.html"},
  {name:"Certified Internal Auditor (CIA)",url:"cia.html"},
  {name:"Certified Management Accountant (CMA)",url:"cma.html"},
  {name:"ANBIMA Certification",url:"anbima.html"},
  {name:"GARP Financial Risk Manager (FRM) Certification",url:"frm.html"},
  {name:"Association of Chartered Certified Accountants (ACCA)",url:"acca.html"},
  {name:"Certified Financial Planner (CFP)",url:"cfp.html"},
  {name:"Finance Fundamentals",url:"finance_fundamentals.html"},
  {name:"Financial Markets",url:"financial_markets.html"},
]

let finance_cert_and_exam_prep = document.querySelector(".finance_cert_and_exam_prep")
finance_cert_and_exam_prep_content.forEach(element=>{
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
  {name:"Financial Analysis",url:"financial_analysis.html"},
  {name:"Financial Modeling",url:"financial_modeling.html"},
  {name:"Microsoft Excel",url:"microsoft_excel.html"},
  {name:"Investment Banking",url:"investment_banking.html"},
  {name:"Accounting",url:"accounting.html"},
  {name:"Finance Fundamentals",url:"finance_fundamentals.html"},
  {name:"Company Valution",url:"company_valuation.html"},
  {name:"Python",url:"python.html"},
  {name:"Financial Management",url:"financial_management.html"},
]

let financial_modeling_and_analysis = document.querySelector(".financial_modeling_and_analysis")
financial_modeling_and_analysis_content.forEach(element=>{
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
  {name:"Stock Trading",url:"stock_trading.html"},
  {name:"Investing",url:"investing.html"},
  {name:"Forex Trading",url:"forex_trading.html"},
  {name:"Technical Analysis (finance)",url:"technical_analysis.html"},
  {name:"Algorithmic Trading",url:"algorithmic_trading.html"},
  {name:"Options Trading",url:"options_trading.html"},
  {name:"Financial Markets",url:"financial_markets.html"},
  {name:"Day Trading",url:"day_trading.html"},
  {name:"Financial Trading",url:"finacial_trading.html"},
]

let investing_and_trading = document.querySelector(".investing_and_trading")
investing_and_trading_content.forEach(element=>{
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
  {name:"QuickBooks",url:"quickbooks.html"},
  {name:"SAP FICO",url:"sap_fico.html"},
  {name:"Xero",url:"xero.html"},
  {name:"Microsoft Excel",url:"microsoft_excel.html"},
  {name:"Financial Modeling",url:"financial_modeling.html"},
  {name:"Excel Analytics",url:"excel_analytics.html"},
  {name:"Credit Repair",url:"credti_repair.html"},
  {name:"Personal Finance",url:"personal_finance.html"},
  {name:"Excel VBA",url:"excel_vba.html"},
]

let money_management_tools = document.querySelector(".money_management_tools")
money_management_tools_content.forEach(element=>{
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
  {name:"Tax Preparation",url:"tax_preparation.html"},
  {name:"Goods and Services Tax (GST)",url:"gst.html"},
  {name:"Accounting",url:"accounting.html"},
  {name:"Value Added Tax (VAT)",url:"vat.html"},
  {name:"Transfer Pricing",url:"transfer_pricing.html"},
  {name:"Home Business",url:"home_business.html"},
  {name:"Financial Accounting",url:"financial_accounting.html"},
  {name:"Control Systems",url:"control_systems.html"},
  {name:"Entrepreneurship Fundamentals",url:"entrepreneurship_fundamentals.html"},
]


let taxes = document.querySelector(".taxes")
taxes_content.forEach(element=>{
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
  {name:"Accounting",url:"accounting.html"},
  {name:"Certified Internal Auditor (CIA)",url:"cia.html"},
  {name:"Stock Trading",url:"stock_trading.html"},
  {name:"Personal Finance",url:"personal_finance.html"},
  {name:"Finance Fundamentals",url:"finance_fundamentals.html"},
  {name:"Payroll Accounting",url:"payroll_accounting.html"},
  {name:"Financial Planning",url:"financial_planning.html"},
  {name:"Insurance",url:"insurance.html"},
  {name:"Internal Auditing",url:"internal_auditing.html"},
]

let other_financial_accounting = document.querySelector(".other_financial_accounting")
other_financial_accounting_content.forEach(element=>{
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
  {name:"AWS Certified Cloud Practicioner",url:"aws_practitioner.html"},
  {name:"AWS Certified Solutions Architect - Associate",url:"aws_associate.html"},
  {name:"CompTIA Security+",url:"comptia_security.html"},
  {name:"CompTIA A+",url:"comptia_a.html"},
  {name:"Amazon AWS",url:"amazon_aws.html"},
  {name:"Cisco Certified Network Associate (CCNA)",url:"cisco.html"},
  {name:"Information Security",url:"information_security.html"},
  {name:"CompTIA Network+",url:"comptia_network.html"},
  {name:"AWS Certified Developer - Associate",url:"aws_associate.html"},
]

let it_certifications = document.querySelector(".it_certifications")
it_certifications_content.forEach(element=>{
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
  {name:"Ethical Hacking",url:"ethical_hacking.html"},
  {name:"Cybersecurity",url:"cybersecurity.html"},
  {name:"Network Security",url:"network_security.html"},
  {name:"Penetration Testing",url:"penetration_testing.html"},
  {name:"Kubernetes",url:"kubernetes.html"},
  {name:"CompTIA Network+",url:"comptia_network.html"},
  {name:"IT Networking Fundamentals",url:"it_networking_fundamentals.html"},
  {name:"CompTIA Security+",url:"comptia_security.html"},
  {name:"Information Security",url:"information_security.html"},
]

let network_and_security = document.querySelector(".network_and_security")
network_and_security_content.forEach(element=>{
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
  {name:"PLC",url:"plc.html"},
  {name:"Arduino",url:"arduino.html"},
  {name:"Electronics",url:"electronics.html"},
  {name:"Microcontroller",url:"microcontroller.html"},
  {name:"Embedded Systems",url:"embedded_systems.html"},
  {name:"Embedded C",url:"embedded_c.html"},
  {name:"Raspberry Pi",url:"raspberry_pi.html"},
  {name:"SystemVerilog",url:"systemverilog.html"},
  {name:"HMI",url:"hmi.html"},
]

let hardware = document.querySelector(".hardware")
hardware_content.forEach(element=>{
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
  {name:"Linux",url:"linux.html"},
  {name:"Linux Administration",url:"linux_administration.html"},
  {name:"Windows Server",url:"windows_server.html"},
  {name:"Operating System",url:"operating_system.html"},
  {name:"Active Directory",url:"active_directory.html"},
  {name:"Shell Scripting",url:"Shell Scripting.html"},
  {name:"Powershell",url:"powershell.html"},
  {name:"Linux Command Line",url:"linux_command_line.html"},
  {name:"Proxmox VE",url:"proxmox_ve.html"},
]

let operating_system_and_servers = document.querySelector(".operating_system_and_servers")
operating_system_and_servers_content.forEach(element=>{
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
  {name:"DevOps",url:"devops.html"},
  {name:"ChatGPT",url:"chatgpt.html"},
  {name:"Python",url:"python.html"},
  {name:"Data Science",url:"data_science.html"},
  {name:"Generative AI (GenAI)",url:"generative_ai.html"},
  {name:"Microsoft Excel",url:"microsoft_excel.html"},
  {name:"Microsoft Azure",url:"microsoft_azure.html"},
  {name:"Terraform",url:"terraform.html"},
  {name:"Microservices",url:"microservices.html"},
]

let other_it_and_software = document.querySelector(".other_it_and_software")
other_it_and_software_content.forEach(element=>{
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


//-----------------------------------------Finance & Accounting end----------------------------------------------------------------