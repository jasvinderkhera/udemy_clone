
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
  {name:"CIPS Level 4 Diploma in Procurement and Supply",url:"cips_level.html"},
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