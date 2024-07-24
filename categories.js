
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
                          
                          class="dropdown-item pad pad_2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});


let mobile_development_content = [
  { name: "Google Flutter" },
  { name: "iOS Development" },
  { name: "Android Development" },
  { name: "React Native" },
  { name: "Dart (programming language)" },
  { name: "Swift" },
  { name: "Kotlin" },
  { name: "Mobile App Development" },
  { name: "SwiftUI" }
]

let mobile_development = document.querySelector(".mobile_development")
mobile_development_content.forEach(element => {
  mobile_development.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          
                          class="dropdown-item pad pad_2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});


let programming_language_content = [
  { name: "Python" },
  { name: "Java" },
  { name: "C# (programming language)" },
  { name: "C++ (programming language)" },
  { name: "React JS" },
  { name: "C (programming language)" },
  { name: "Go (programming language)" },
  { name: "Spring Framework" },
  { name: "Javascript" }
]


let programming_language = document.querySelector(".programming_language")
programming_language_content.forEach(element => {
  programming_language.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          
                          class="dropdown-item pad pad_2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});

let game_development_content = [
  { name: "Unreal Engine" },
  { name: "Unity" },
  { name: "Game Development Fundamental" },
  { name: "3D Game Development" },
  { name: "3D Game Development" },
  { name: "C# (programming language)" },
  { name: "Godot" },
  { name: "C++ (programming language)" },
  { name: "2D Game Development" },
  { name: "Unreal Engine Blueprints" }
]


let game_development = document.querySelector(".game_development")
game_development_content.forEach(element => {
  game_development.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          
                          class="dropdown-item pad pad_2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});


let database_design_development_content = [
  { name: "SQL" },
  { name: "MySQL" },
  { name: "Database Management System (DBMS)" },
  { name: "SQL Server" },
  { name: "PostgreSQL" },
  { name: "Apache Kafka" },
  { name: "Oracle SQL" },
  { name: "Database Programming" },
  { name: "MongoDB" }
]


let database_design_development = document.querySelector(".database_design_development")
database_design_development_content.forEach(element => {
  database_design_development.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          
                          class="dropdown-item pad pad_2 pe-2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});


let software_testing_content = [
  { name: "Selenium WebDriver" },
  { name: "Microsoft Playwright " },
  { name: "Automation Testing " },
  { name: "Java " },
  { name: "Postman" },
  { name: "ISTQB Certified Tester Foundation Level (CTFL)" },
  { name: "Selenium Testing Framework" },
  { name: "API Testing" }
]


let software_testing = document.querySelector(".software_testing")
software_testing_content.forEach(element => {
  software_testing.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          
                          class="dropdown-item pad pad_2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});

let software_engineering_content = [
  { name: "Data Structures" },
  { name: "Algorithms " },
  { name: "Software Architecture " },
  { name: "Certified Kubernetes Application Developer (CKAD)" },
  { name: "Coding Interview" },
  { name: "Microservices " },
  { name: "Java Algorithms " },
  { name: "Back End Web Development" }
]


let software_engineering = document.querySelector(".software_engineering")
software_engineering_content.forEach(element => {
  software_engineering.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          
                          class="dropdown-item pad pad_2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});


let software_development_tools_content = [
  { name: "Docker" },
  { name: "Git" },
  { name: "Kubernetes" },
  { name: "Prompt Engineering" },
  { name: "JIRA" },
  { name: "GitHub" },
  { name: "Confluence" },
  { name: "CI/CD" },
  { name: "Terraform" }
]


let software_development_tools = document.querySelector(".software_development_tools")
software_development_tools_content.forEach(element => {
  software_development_tools.innerHTML += `
                      <li class="px-3 py-1">
                        <a
                          
                          class="dropdown-item pad pad_2"
                          >${element.name}</a
                        >
                      </li>
    
    `
});

let no_code_development_content = [
  { name: "Generative AI (Gen AI)" },
  { name: "WordPress" },
  { name: "Bubble Visual Programming" },
  { name: "Microsoft Power Apps" },
  { name: "Microsoft Power Platform" },
  { name: "Microsoft Power Automate" },
  { name: "Microsoft 365 Copilot" },
  { name: "Web Design" },
  { name: "App Development" }
]


let no_code_development = document.querySelector(".no_code_development")
no_code_development_content.forEach(element => {
  no_code_development.innerHTML += `
                    <li class="px-3 py-1">
                      <a
                        
                        class="dropdown-item pad pad_2"
                        >${element.name}</a
                      >
                    </li>
  
  `
});

// --------------------------------------------Development end-----------------------------------------------------------



//---------------------------------------------Business---------------------------------------------------------------


let entrepreneurship_content = [
  { name: "Business Fundamentals" },
  { name: "Entrepreneurship Fundamentals" },
  { name: "Business Strategy " },
  { name: "Freelancing " },
  { name: "Online Business " },
  { name: "ChatGPT" },
  { name: "Startup" },
  { name: "Business Plan" },
  { name: "QuickBooks" }
]


let entrepreneurship = document.querySelector(".entrepreneurship")
entrepreneurship_content.forEach(element => {
  entrepreneurship.innerHTML += `
                    <li class="px-3 py-1">
                      <a
                        
                        class="dropdown-item pad pad_2"
                        >${element.name}</a
                      >
                    </li>
  
  `
});


let communication_content = [
  { name: "Communication Skills" },
  { name: "Presentation Skills" },
  { name: "Public Speaking" },
  { name: "Writing " },
  { name: "Fiction Writing " },
  { name: "Business Communication " },
  { name: "Business Writing " },
  { name: "Assertiveness " },
  { name: "Email Writing & Etiquette " }
]


let communication = document.querySelector(".communication")
communication_content.forEach(element => {
  communication.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let management_content = [
  { name: "Product Management" },
  { name: "Leadership" },
  { name: "Management Skills" },
  { name: "ISO 9001" },
  { name: "Business Strategy" },
  { name: "CIPS Level 4 Diploma in Procurement and Supply" },
  { name: "Quality Management" },
  { name: "Product Management" },
  { name: "Risk Management" }
]


let management = document.querySelector(".management")
management_content.forEach(element => {
  management.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let sales_content = [
  { name: "Sales Skills" },
  { name: "B2B Sales" },
  { name: "Customer Service" },
  { name: "LinkedIn" },
  { name: "Sales Management" },
  { name: "Business Development" },
  { name: "Lead Generation" },
  { name: "Cold Calling" },
  { name: "Cold Email" }
]


let sales = document.querySelector(".sales")
sales_content.forEach(element => {
  sales.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let business_strategy_content = [
  { name: "IIBA Entry Certificate in Business Analytics (ECBA)" },
  { name: "Environmental Social and Governance (ESG)" },
  { name: "Prompt Engineering" },
  { name: "Management Consulting" },
  { name: "The Open Group Certified: TOGAF Enterprise Architectural Foundation" },
  { name: "Generative AI (GenAI)" },
  { name: "Artificial Intelligence" },
  { name: "TOGAF" }
]


let business_strategy = document.querySelector(".business_strategy")
business_strategy_content.forEach(element => {
  business_strategy.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let operations_content = [
  { name: "Supply Chain" },
  { name: "Logistics Management" },
  { name: "Lean Six Sigma Green Belt Certification" },
  { name: "Lean Six Sigma Black Belt Certification" },
  { name: "Virtual Assistant Skills" },
  { name: "Quality Management" },
  { name: "Operations Management" },
  { name: "Lean" },
  { name: "Ceritfied Quality Engineer (CQE)" }
]

let operations = document.querySelector(".operations")
operations_content.forEach(element => {
  operations.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let project_management_content = [
  { name: "PMI Project Management Professional (PMP)" },
  { name: "PMI PMBOK" },
  { name: "PMI Certified Associate in Project Management (CAPM)" },
  { name: "Scrum" },
  { name: "Agile" },
  { name: "Professional Scrum Master (PSM)" },
  { name: "PRINCE2" },
  { name: "PMI Agile Certified Practitioner (PMI-ACP)" }
]


let project_management = document.querySelector(".project_management")
project_management_content.forEach(element => {
  project_management.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let business_law_content = [
  { name: "AI Ethics and Governance" },
  { name: "Law" },
  { name: "GDPR" },
  { name: "Certified Information Privacy Professional (CIPP)" },
  { name: "Contract Management" },
  { name: "Contract Law" },
  { name: "Legal English" },
  { name: "Compliance Management" }
]


let business_law = document.querySelector(".business_law")
business_law_content.forEach(element => {
  business_law.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let business_analytics_content = [
  { name: "Microsoft Power BI" },
  { name: "SQL" },
  { name: "Data Modeling" },
  { name: "Data Analysis" },
  { name: "Business Analysis" },
  { name: "Tableau" },
  { name: "Data Analysis Expression (DAX)" },
  { name: "Business Analytics" },
  { name: "Business Intelligence (BI)" }
]


let business_analytics = document.querySelector(".business_analytics")
business_analytics_content.forEach(element => {
  business_analytics.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let human_resources_content = [
  { name: "Recruiting and Hiring" },
  { name: "HR Analytics" },
  { name: "Employment Law" },
  { name: "Corporate Learning and Development (L&D)" },
  { name: "Society for Human Resource Management Certified Professional (SHRM-CP)" },
  { name: "Conflict Management" },
  { name: "Emotional Intelligence" },
  { name: "Diversity and Inclusion" }
]


let human_resources = document.querySelector(".human_resources")
human_resources_content.forEach(element => {
  human_resources.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let industry_content = [
  { name: "Piping" },
  { name: "Oil and Gas Industry" },
  { name: "Control Engineering" },
  { name: "Workplace Health and Safety" },
  { name: "Chemical Engineering" },
  { name: "Life Coach Training" },
  { name: "Aviation" },
  { name: "Electrical Engineering" },
  { name: "Aspen Plus" }
]


let industry = document.querySelector(".industry")
industry_content.forEach(element => {
  industry.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let e_commerce_content = [
  { name: "Amazon FBA" },
  { name: "Dropshipping" },
  { name: "Shopify Dropshipping" },
  { name: "Shopify" },
  { name: "Etsy" },
  { name: "Amazon Kindle Direct Publishing (KDP)" },
  { name: "Selling on Amazon" },
  { name: "Passive Income" }
]


let e_commerce = document.querySelector(".e_commerce")
e_commerce_content.forEach(element => {
  e_commerce.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let media_content = [
  { name: "Screen Writing and Script Writing" },
  { name: "Amazon Kindle Direct Publishing (KDP)" },
  { name: "Audiobook Creation" },
  { name: "Search Engine Optimization (SEO)" },
  { name: "Content Creation" },
  { name: "Journalism" },
  { name: "Generative AI (GenAI)" },
  { name: "Scrivener" },
  { name: "Creative Writing" }
]


let media = document.querySelector(".media")
media_content.forEach(element => {
  media.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let real_estate_content = [
  { name: "Real Estate Investing" },
  { name: "Airbnb Hosting" },
  { name: "Construction" },
  { name: "Mortgage" },
  { name: "Financial Modeling" },
  { name: "Real Estate Marketing" },
  { name: "Real Estate Flipping" },
  { name: "Property Management" }
]


let real_estate = document.querySelector(".real_estate")
real_estate_content.forEach(element => {
  real_estate.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let other_business_content = [
  { name: "QuickBooks" },
  { name: "Data Entry Skills" },
  { name: "Grant Writing" },
  { name: "ChatGPT" },
  { name: "Transcription" },
  { name: "Rieki" },
  { name: "Freelance Writing" },
  { name: "CIPS Level 4 Diploma in Procurement and Supply" },
  { name: "Electronics" }
]


let other_business = document.querySelector(".other_business")
other_business_content.forEach(element => {
  other_business.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


//------------------------------------------------------Business End-------------------------------------------------------------

//-----------------------------------------Finance & Accounting----------------------------------------------------------------

let accounting_and_bookkeeping_content = [
  { name: "Accounting" },
  { name: "Bookkeeping" },
  { name: "QuickBooks" },
  { name: "Financial Accounting" },
  { name: "Financial Fundamental" },
  { name: "TallyPrime (Tally.ERP)" },
  { name: "Uniform CPA Examination" },
  { name: "International Financial Reporting Standards (IFRS)" },
  { name: "Xero" }
]


let accounting_and_bookkeeping = document.querySelector(".accounting_and_bookkeeping")
accounting_and_bookkeeping_content.forEach(element => {
  accounting_and_bookkeeping.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let compliance_content = [
  { name: "Anti-Money Laundering (AML)" },
  { name: "Criminology" },
  { name: "Internal Controls" },
  { name: "Fraud Analytics" },
  { name: "Compliance Management" },
  { name: "Trade and Commerce" },
  { name: "Risk Management" },
  { name: "Internal Auditing" },
  { name: "Compliance (IT)" }
]


let compliance = document.querySelector(".compliance")
compliance_content.forEach(element => {
  compliance.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let cryptocurrency_and_blockchain_content = [
  { name: "Cryptocurrency" },
  { name: "Blockchain" },
  { name: "Bitcoin" },
  { name: "Binance" },
  { name: "Algorithmic Trading" },
  { name: "Day Trading" },
  { name: "Online Arbitrage" },
  { name: "NFT (Non-Fungible Tokens)" },
  { name: "Technical Analysis (finance)" }
]


let cryptocurrency_and_blockchain = document.querySelector(".cryptocurrency_and_blockchain")
cryptocurrency_and_blockchain_content.forEach(element => {
  cryptocurrency_and_blockchain.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let economics_content = [
  { name: "Macroeconomics" },
  { name: "Microeconomics" },
  { name: "Stata" },
  { name: "Global Economics" },
  { name: "Finance Fundamental" },
  { name: "Econometrics" },
  { name: "Behavioral Economics" },
  { name: "Statistics" }
]


let economics = document.querySelector(".economics")
economics_content.forEach(element => {
  economics.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let finance_content = [
  { name: "Personal Finance" },
  { name: "Finance Fundamentals" },
  { name: "Investing Banking" },
  { name: "Banking" },
  { name: "Corporate Finance" },
  { name: "Chartered Finance Analyist (CFA)" },
  { name: "Finance Analysis" },
  { name: "Financial Management" },
  { name: "ChatGPT" }
]


let finance = document.querySelector(".finance")
finance_content.forEach(element => {
  finance.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let finance_cert_and_exam_prep_content = [
  { name: "Chartered Finance Analyist (CFA)" },
  { name: "Certified Internal Auditor (CIA)" },
  { name: "Certified Management Accountant (CMA)" },
  { name: "ANBIMA Certification" },
  { name: "GARP Financial Risk Manager (FRM) Certification" },
  { name: "Association of Chartered Certified Accountants (ACCA)" },
  { name: "Certified Financial Planner (CFP)" },
  { name: "Finance Fundamentals" },
  { name: "Financial Markets" }
]


let finance_cert_and_exam_prep = document.querySelector(".finance_cert_and_exam_prep")
finance_cert_and_exam_prep_content.forEach(element => {
  finance_cert_and_exam_prep.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let financial_modeling_and_analysis_content = [
  { name: "Financial Analysis" },
  { name: "Financial Modeling" },
  { name: "Microsoft Excel" },
  { name: "Investment Banking" },
  { name: "Accounting" },
  { name: "Finance Fundamentals" },
  { name: "Company Valution" },
  { name: "Python" },
  { name: "Financial Management" }
]


let financial_modeling_and_analysis = document.querySelector(".financial_modeling_and_analysis")
financial_modeling_and_analysis_content.forEach(element => {
  financial_modeling_and_analysis.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let investing_and_trading_content = [
  { name: "Stock Trading" },
  { name: "Investing" },
  { name: "Forex Trading" },
  { name: "Technical Analysis (finance)" },
  { name: "Algorithmic Trading" },
  { name: "Options Trading" },
  { name: "Financial Markets" },
  { name: "Day Trading" },
  { name: "Financial Trading" }
]


let investing_and_trading = document.querySelector(".investing_and_trading")
investing_and_trading_content.forEach(element => {
  investing_and_trading.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let money_management_tools_content = [
  { name: "QuickBooks" },
  { name: "SAP FICO" },
  { name: "Xero" },
  { name: "Microsoft Excel" },
  { name: "Financial Modeling" },
  { name: "Excel Analytics" },
  { name: "Credit Repair" },
  { name: "Personal Finance" },
  { name: "Excel VBA" }
]


let money_management_tools = document.querySelector(".money_management_tools")
money_management_tools_content.forEach(element => {
  money_management_tools.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let taxes_content = [
  { name: "Tax Preparation" },
  { name: "Goods and Services Tax (GST)" },
  { name: "Accounting" },
  { name: "Value Added Tax (VAT)" },
  { name: "Transfer Pricing" },
  { name: "Home Business" },
  { name: "Financial Accounting" },
  { name: "Control Systems" },
  { name: "Entrepreneurship Fundamentals" }
]



let taxes = document.querySelector(".taxes")
taxes_content.forEach(element => {
  taxes.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let other_financial_accounting_content = [
  { name: "Accounting" },
  { name: "Certified Internal Auditor (CIA)" },
  { name: "Stock Trading" },
  { name: "Personal Finance" },
  { name: "Finance Fundamentals" },
  { name: "Payroll Accounting" },
  { name: "Financial Planning" },
  { name: "Insurance" },
  { name: "Internal Auditing" }
]


let other_financial_accounting = document.querySelector(".other_financial_accounting")
other_financial_accounting_content.forEach(element => {
  other_financial_accounting.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let it_certifications_content = [
  { name: "AWS Certified Cloud Practitioner" },
  { name: "AWS Certified Solutions Architect - Associate" },
  { name: "CompTIA Security+" },
  { name: "CompTIA A+" },
  { name: "Amazon AWS" },
  { name: "Cisco Certified Network Associate (CCNA)" },
  { name: "Information Security" },
  { name: "CompTIA Network+" },
  { name: "AWS Certified Developer - Associate" }
]


let it_certifications = document.querySelector(".it_certifications")
it_certifications_content.forEach(element => {
  it_certifications.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let network_and_security_content = [
  { name: "Ethical Hacking" },
  { name: "Cybersecurity" },
  { name: "Network Security" },
  { name: "Penetration Testing" },
  { name: "Kubernetes" },
  { name: "CompTIA Network+" },
  { name: "IT Networking Fundamentals" },
  { name: "CompTIA Security+" },
  { name: "Information Security" }
]


let network_and_security = document.querySelector(".network_and_security")
network_and_security_content.forEach(element => {
  network_and_security.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let hardware_content = [
  { name: "PLC" },
  { name: "Arduino" },
  { name: "Electronics" },
  { name: "Microcontroller" },
  { name: "Embedded Systems" },
  { name: "Embedded C" },
  { name: "Raspberry Pi" },
  { name: "SystemVerilog" },
  { name: "HMI" }
]


let hardware = document.querySelector(".hardware")
hardware_content.forEach(element => {
  hardware.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let operating_system_and_servers_content = [
  { name: "Linux" },
  { name: "Linux Administration" },
  { name: "Windows Server" },
  { name: "Operating System" },
  { name: "Active Directory" },
  { name: "Shell Scripting" },
  { name: "Powershell" },
  { name: "Linux Command Line" },
  { name: "Proxmox VE" }
]


let operating_system_and_servers = document.querySelector(".operating_system_and_servers")
operating_system_and_servers_content.forEach(element => {
  operating_system_and_servers.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let other_it_and_software_content = [
  { name: "DevOps" },
  { name: "ChatGPT" },
  { name: "Python" },
  { name: "Data Science" },
  { name: "Generative AI (GenAI)" },
  { name: "Microsoft Excel" },
  { name: "Microsoft Azure" },
  { name: "Terraform" },
  { name: "Microservices" }
]


let other_it_and_software = document.querySelector(".other_it_and_software")
other_it_and_software_content.forEach(element => {
  other_it_and_software.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let microsoft_content = [
  { name: "Microsoft Excel" },
  { name: "Microsoft 365 (Office)" },
  { name: "Microsoft Power BI" },
  { name: "Excel VBA" },
  { name: "Powerpoint" },
  { name: "Excel Formulas and Functions" },
  { name: "Pivot Tables" },
  { name: "Microsoft 365 Copilot" },
  { name: "Data Analysis" }
]


let microsoft = document.querySelector(".microsoft")
microsoft_content.forEach(element => {
  microsoft.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let apple_content = [
  { name: "Mac Basics" },
  { name: "iMovie" },
  { name: "macOS" },
  { name: "Apple Keynote" },
  { name: "Numbers For Mac" },
  { name: "Apple Products Basics" },
  { name: "Mac Pages" },
  { name: "Microsoft 365 (Office)" },
  { name: "Microsoft Word" }
]


let apple = document.querySelector(".apple")
apple_content.forEach(element => {
  apple.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let google_content = [
  { name: "Google Sheets" },
  { name: "Google Workspace (G Suite)" },
  { name: "Google Looker Studio (Data Studio)" },
  { name: "Google Appsheet" },
  { name: "Google Looker" },
  { name: "Google Apps Script" },
  { name: "Gmail Productivity" },
  { name: "Google Drive" },
  { name: "Microsoft Excel" }
]


let google = document.querySelector(".google")
google_content.forEach(element => {
  google.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let sap_content = [
  { name: "SAP S/4HANA" },
  { name: "SAP Materials Management (SAP MM)" },
  { name: "SAP ABAP" },
  { name: "SAP Sales and Distribution (SAP SD)" },
  { name: "SAP FICO" },
  { name: "SAP Business Technology Platform (SAP BTP)" },
  { name: "SAP HCM" },
  { name: "SAP SuccessFactors" }
]


let sap = document.querySelector(".sap")
sap_content.forEach(element => {
  sap.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let oracle_content = [
  { name: "Oracle Primavera" },
  { name: "Oracle SQL" },
  { name: "Oracle Fusion HCM" },
  { name: "PL/SQL" },
  { name: "Oracle Database" },
  { name: "Project Management" },
  { name: "Database Administration" },
  { name: "Oracle E-Business Suite" },
  { name: "Oracle Fusion Cloud Financials" }
]


let oracle = document.querySelector(".oracle")
oracle_content.forEach(element => {
  oracle.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let other_office_productivity_content = [
  { name: "ChatGPT" },
  { name: "Notion Workspace" },
  { name: "Python" },
  { name: "ServiceNow" },
  { name: "Programming Fundamentals" },
  { name: "Typing" },
  { name: "Computer Skills" },
  { name: "Generative AI (Gen AI)" },
  { name: "Construction Estimation" }
]


let other_office_productivity = document.querySelector(".other_office_productivity")
other_office_productivity_content.forEach(element => {
  other_office_productivity.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

//-----------------------------------------Finance & Accounting end----------------------------------------------------------------


//------------------------------------------Personal Development-------------------------------------------------------------------

let personal_transformation_content = [
  { name: "Life Coach Training" },
  { name: "Neuro-Linguistic Programming (NLP)" },
  { name: "Personal Development" },
  { name: "Sound Therapy" },
  { name: "Horsemanship" },
  { name: "Coaching" },
  { name: "Mindfulness" },
  { name: "Emotional Intelligence" }
]


let personal_transformation = document.querySelector(".personal_transformation")
personal_transformation_content.forEach(element => {
  personal_transformation.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let personal_productivity_content = [
  { name: "Time Management" },
  { name: "ChatGPT" },
  { name: "Notion Workspace" },
  { name: "Writing" },
  { name: "Obsidian App" },
  { name: "Organizational Skills" },
  { name: "Speed Reading" },
  { name: "Focus Mastery" }
]


let personal_productivity = document.querySelector(".personal_productivity")
personal_productivity_content.forEach(element => {
  personal_productivity.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let leadership_content = [
  { name: "Management Skills" },
  { name: "Manager Training" },
  { name: "Coaching" },
  { name: "Conflict Management" },
  { name: "Communication Skills" },
  { name: "Realtionship Building" },
  { name: "Employee Engagement" },
  { name: "Facilitation" }
]


let leadership = document.querySelector(".leadership")
leadership_content.forEach(element => {
  leadership.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let career_development_content = [
  { name: "Interviewing Skills" },
  { name: "Business Communication" },
  { name: "IT/Technical Support" },
  { name: "Business Writing" },
  { name: "Job Search" },
  { name: "Resume and CV Writing" },
  { name: "Car Repair" },
  { name: "Building Inspection" }
]


let career_development = document.querySelector(".career_development")
career_development_content.forEach(element => {
  career_development.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let parenting_and_relationships_content = [
  { name: "Parenting" },
  { name: "Relationship Building" },
  { name: "Couples Counseling" },
  { name: "Child Psychology" },
  { name: "Marriage" },
  { name: "Generative AI" },
  { name: "Dating" },
  { name: "Love" },
  { name: "Autism" }
]


let parenting_and_relationships = document.querySelector(".parenting_and_relationships")
parenting_and_relationships_content.forEach(element => {
  parenting_and_relationships.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let happiness_content = [
  { name: "Life Coach Training" },
  { name: "Manifestation and Law of Attraction" },
  { name: "Cognitive Behavioral Therapy (CBT)" },
  { name: "Positive Psychology" },
  { name: "Personal Success" },
  { name: "Psychology" },
  { name: "Neuro-Linguistic Programming (NLP)" },
  { name: "Decluttering" }
]


let happiness = document.querySelector(".happiness")
happiness_content.forEach(element => {
  happiness.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let esoteric_practices_content = [
  { name: "Reiki" },
  { name: "Energy Healing" },
  { name: "Tarot Reading" },
  { name: "Spiritual Healing" },
  { name: "Hypnotherapy" },
  { name: "Astrology" },
  { name: "Psychic" },
  { name: "Akashic Records" },
  { name: "Spirituality" }
]


let esoteric_practices = document.querySelector(".esoteric_practices")
esoteric_practices_content.forEach(element => {
  esoteric_practices.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let religion_and_spirituality_content = [
  { name: "Spirituality" },
  { name: "Life Coach Training" },
  { name: "Tarot Reading" },
  { name: "Mindfulness" },
  { name: "Spiritual Healing" },
  { name: "Reiki" },
  { name: "Energy Healing" },
  { name: "The Bible" },
  { name: "Kabbalah" }
]


let religion_and_spirituality = document.querySelector(".religion_and_spirituality")
religion_and_spirituality_content.forEach(element => {
  religion_and_spirituality.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})



let personal_brand_building_content = [
  { name: "Personal Branding" },
  { name: "Meetings" },
  { name: "LinkedIn" },
  { name: "Carrer Development" },
  { name: "Influencer Marketing" },
  { name: "Confidence" },
  { name: "Amazon Kindle Direct Publishing (KDP)" },
  { name: "Personal Networking" },
  { name: "Presentation Skills" },
]


let personal_brand_building = document.querySelector(".personal_brand_building")
personal_brand_building_content.forEach(element => {
  personal_brand_building.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})



let creativity_content = [
  { name: "Creative Writing" },
  { name: "Screenwriting and Scriptwriting" },
  { name: "Art Therapy" },
  { name: "Writing" },
  { name: "Writing a Book" },
  { name: "Storytelling" },
  { name: "Self-Publishing" },
  { name: "Novel Writing" },
  { name: "Fiction Writing" },
]

let creativity = document.querySelector(".creativity")
creativity_content.forEach(element => {
  creativity.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let influence_content = [
  { name: "Voice Training" },
  { name: "Communication Skills" },
  { name: "Persuation" },
  { name: "Public Speaking" },
  { name: "Negotiation" },
  { name: "Body Language" },
  { name: "Influence Skills" },
  { name: "Confidence" },
  { name: "Influencer Marketing" },
]

let influence = document.querySelector(".influence")
influence_content.forEach(element => {
  influence.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let self_esteem_and_confidence_content = [
  { name: "Confidence" },
  { name: "Self-Esteem" },
  { name: "Communication Skills" },
  { name: "Psychotherapy" },
  { name: "Personal Development" },
  { name: "Family Constellations Therapy" },
  { name: "Dance" },
  { name: "Public Speaking" },
  { name: "Social Skills" },
]


let self_esteem_and_confidence = document.querySelector(".self_esteem_and_confidence")
self_esteem_and_confidence_content.forEach(element => {
  self_esteem_and_confidence.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let stress_management_content = [
  { name: "Anxiety Management" },
  { name: "Emotional Intelligence" },
  { name: "Resilience" },
  { name: "Coaching" },
  { name: "Anger Management" },
  { name: "Sound Therapy" },
  { name: "Mindfulness" },
  { name: "Master Your Emotions" },
]

let stress_management = document.querySelector(".stress_management")
stress_management_content.forEach(element => {
  stress_management.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let memory_and_study_skills_content = [
  { name: "Memory" },
  { name: "Speed Reading" },
  { name: "Learning Strategies" },
  { name: "Study Skills" },
  { name: "Focus Mastery" },
  { name: "Mind Mapping" },
  { name: "Obsidian App" },
  { name: "Artificial Intelligence (AI)" },
  { name: "Critical Thinking" },
]

let memory_and_study_skills = document.querySelector(".memory_and_study_skills")
memory_and_study_skills_content.forEach(element => {
  memory_and_study_skills.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let motivation_content = [
  { name: "Neuroplasticity" },
  { name: "Neuro-Linguistic Programming (NLP)" },
  { name: "Procrastination" },
  { name: "Coaching" },
  { name: "Lotto" },
  { name: "Personal Development" },
  { name: "Personal Success" },
  { name: "Goal Setting" },
]

let motivation = document.querySelector(".motivation")
motivation_content.forEach(element => {
  motivation.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let other_personal_development_content = [
  { name: "Project Management" },
  { name: "Freight Brokering" },
  { name: "Contract Law " },
  { name: "Public Speaking" },
  { name: "Car Repair" },
  { name: "eSports" },
  { name: "Hypnotherapy" },
  { name: "Lucid Dreaming" },
  { name: "Sound Therapy" },
]

let other_personal_development = document.querySelector(".other_personal_development")
other_personal_development_content.forEach(element => {
  other_personal_development.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


//------------------------------------------Personal Development End-------------------------------------------------------------------

//--------------------------------------------Design-----------------------------------------------------------------------------------


let web_design_content = [
  { name: "Mobile App Design" },
  { name: "WordPress" },
  { name: "CSS" },
  { name: "Figma" },
  { name: "User Interface Design" },
  { name: "Elementor" },
  { name: "HTML" },
  { name: "Webflow" },
]


let web_design = document.querySelector(".web_design")
web_design_content.forEach(element => {
  web_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let graphic_design_and_illustration_content = [
  { name: "Graphic Design" },
  { name: "Adobe Photoshop" },
  { name: "Adobe Illustrator" },
  { name: "Canva" },
  { name: "Drawing" },
  { name: "Procreate Digital Illustration App" },
  { name: "Adobe Indesign" },
  { name: "Digital Painting" },
  { name: "Design Theory" },
]

let graphic_design_and_illustration = document.querySelector(".graphic_design_and_illustration")
graphic_design_and_illustration_content.forEach(element => {
  graphic_design_and_illustration.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let design_tools_content = [
  { name: "AutoCAD" },
  { name: "SOLIDWORKS" },
  { name: "Midjourney" },
  { name: "Adobe Photoshop" },
  { name: "Fignma" },
  { name: "Adobe After Effects" },
  { name: "Procreate Digital Illustration App" },
  { name: "Canva" },
  { name: "Adobe Premiere Pro" },
]

let design_tools = document.querySelector(".design_tools")
design_tools_content.forEach(element => {
  design_tools.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let user_experience_design_content = [
  { name: "User Experience (UX) Design" },
  { name: "Figma" },
  { name: "User Interface Design" },
  { name: "Adobe XD" },
  { name: "Product Design" },
  { name: "UX Writing (User Experience Writing)" },
  { name: "Design Thinking" },
  { name: "Web Accessibility" },
  { name: "Web Design" },
]


let user_experience_design = document.querySelector(".user_experience_design")
user_experience_design_content.forEach(element => {
  user_experience_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let game_design_content = [
  { name: "Pixel Art" },
  { name: "Unreal Engine" },
  { name: "Unity" },
  { name: "Blender" },
  { name: "3D Modeling" },
  { name: "Game Development Fundamentals" },
  { name: "Level Design" },
]

let game_design = document.querySelector(".game_design")
game_design_content.forEach(element => {
  game_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let three_d_and_animation_content = [
  { name: "Blender" },
  { name: "3D Modeling" },
  { name: "Adobe After Effects" },
  { name: "Motion Graphics" },
  { name: "3D Printing" },
  { name: "Autodesk Fusion 360" },
  { name: "Unreal Engine" },
  { name: "3D Animation" },
  { name: "zBrush" },
]


let three_d_and_animation = document.querySelector(".three_d_and_animation")
three_d_and_animation_content.forEach(element => {
  three_d_and_animation.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let fashion_design_content = [
  { name: "Fashion" },
  { name: "Pattern Making (fashion)" },
  { name: "Sewing" },
  { name: "3D Fashion Design" },
  { name: "Jewelry Design" },
  { name: "Textiles" },
  { name: "Adobe Illustrator" },
  { name: "Jewelry Making" },
]

let fashion_design = document.querySelector(".fashion_design")
fashion_design_content.forEach(element => {
  fashion_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let architectural_design_content = [
  { name: "Revit" },
  { name: "AutoCAD" },
  { name: "LEED" },
  { name: "SketchUp" },
  { name: "Building Information Modeling (BIM)" },
  { name: "ARCHICAD" },
  { name: "3D Modeling" },
  { name: "Blender" },
]

let architectural_design = document.querySelector(".architectural_design")
architectural_design_content.forEach(element => {
  architectural_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let interior_design_content = [
  { name: "SketchUp" },
  { name: "Color Theory" },
  { name: "HVAC" },
  { name: "Lighting Design" },
  { name: "Home Staging" },
  { name: "Electrical Engineering" },
  { name: "Revit" },
  { name: "Blender" },
]

let interior_design = document.querySelector(".interior_design")
interior_design_content.forEach(element => {
  interior_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let other_design_content = [
  { name: "Electronics" },
  { name: "PCB Design" },
  { name: "Character Design" },
  { name: "Drawing" },
  { name: "Geometric Dimensioning and Tolerancing (GD&T)" },
  { name: "CATIA" },
  { name: "AutoCAD" },
  { name: "Microservices" },
  { name: "Software Architectural" },
]

let other_design = document.querySelector(".other_design")
other_design_content.forEach(element => {
  other_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

//--------------------------------------------Design End-------------------------------------------------------------------------------


//-------------------------------------------Marketing------------------------------------------------------------------------------


let digital_marketing_content = [
  { name: "Social Media Marketing" },
  { name: "Marketing Strategy" },
  { name: "Internet Marketing" },
  { name: "ChatGPT" },
  { name: "Google Analytics" },
  { name: "Copywriting" },
  { name: "Startup" },
  { name: "Sales Funnel" },
]

let digital_marketing = document.querySelector(".digital_marketing")
digital_marketing_content.forEach(element => {
  digital_marketing.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let search_engine_optimization_content = [
  { name: "Search Engine Optimization (SEO)" },
  { name: "WordPress" },
  { name: "Keyword Research" },
  { name: "Google Business Profile (Google My Business)" },
  { name: "Local SEO" },
  { name: "SEO Audit" },
  { name: "Link Building" },
  { name: "ChatGPT" },
  { name: "SEMrush" },
]

let search_engine_optimization = document.querySelector(".search_engine_optimization")
search_engine_optimization_content.forEach(element => {
  search_engine_optimization.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let social_media_marketing_content = [
  { name: "Instagram Marketing" },
  { name: "Social Media Management" },
  { name: "Facebook Ads" },
  { name: "Facebook Marketing" },
  { name: "TikTok Marketing" },
  { name: "PPC Advertising" },
  { name: "YouTube Marketing" },
  { name: "Generative AI (GenAI)" },
]

let social_media_marketing = document.querySelector(".social_media_marketing")
social_media_marketing_content.forEach(element => {
  social_media_marketing.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let branding_content = [
  { name: "Business Branding" },
  { name: "YouTube Audience Growth" },
  { name: "YouTube Marketing" },
  { name: "Brand Management" },
  { name: "Personal Branding" },
  { name: "Marketing Strategy" },
  { name: "Career Development" },
  { name: "Product Management" },
  { name: "Reputation Management" },
]

let branding = document.querySelector(".branding")
branding_content.forEach(element => {
  branding.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let marketing_fundamentals_content = [
  { name: "Marketing Strategy" },
  { name: "Copywriting" },
  { name: "Marketing Psychology" },
  { name: "Digital Nomad" },
  { name: "ChatGPT" },
  { name: "Digital Marketing" },
  { name: "Marketing Management" },
  { name: "Event Planning" },
  { name: "Coaching and Consulting Business" },
]

let marketing_fundamentals = document.querySelector(".marketing_fundamentals")
marketing_fundamentals_content.forEach(element => {
  marketing_fundamentals.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let marketing_analytics_and_automation_content = [
  { name: "Google Analytics" },
  { name: "Marketing Analytics" },
  { name: "HubSpot" },
  { name: "Google Tag Manager" },
  { name: "Data Analysis" },
  { name: "Marketo" },
  { name: "Marketing Strategy" },
  { name: "Google Analytics Individual Qualification (IQ)" },
  { name: "Marketing Automation" },
]

let marketing_analytics_and_automation = document.querySelector(".marketing_analytics_and_automation")
marketing_analytics_and_automation_content.forEach(element => {
  marketing_analytics_and_automation.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let public_relations_content = [
  { name: "Communication Skills" },
  { name: "Media Training" },
  { name: "Public Speaking" },
  { name: "Canva" },
  { name: "Podcasting" },
  { name: "Business Communication" },
  { name: "Storytelling" },
  { name: "Event Planning" },
]

let public_relations = document.querySelector(".public_relations")
public_relations_content.forEach(element => {
  public_relations.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let paid_advertising_content = [
  { name: "Google Ads (Adwords)" },
  { name: "Facebook Ads" },
  { name: "PPC Advertising" },
  { name: "Google Ads Certification" },
  { name: "Advertising Strategy" },
  { name: "YouTube Marketing" },
  { name: "Retargeting" },
  { name: "Copywriting" },
  { name: "Programmatic Advertising" },
]


let paid_advertising = document.querySelector(".paid_advertising")
paid_advertising_content.forEach(element => {
  paid_advertising.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let video_and_mobile_marketing_content = [
  { name: "YouTUbe Marketing" },
  { name: "Youtube Audience Growth" },
  { name: "Video Creation" },
  { name: "PowerPoint" },
  { name: "Generative AI (Gen AI)" },
  { name: "Video Marketing" },
  { name: "Video Editing" },
  { name: "App Editing" },
  { name: "App Store Optimization" },
]

let video_and_mobile_marketing = document.querySelector(".video_and_mobile_marketing")
video_and_mobile_marketing_content.forEach(element => {
  video_and_mobile_marketing.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let content_marketing_content = [
  { name: "Content Writing" },
  { name: "Copywriting" },
  { name: "AI Content Generation" },
  { name: "Blogging" },
  { name: "Writing" },
  { name: "Content Creation" },
  { name: "ChatGPT" },
  { name: "Business Writing" },
]


let content_marketing = document.querySelector(".content_marketing")
content_marketing_content.forEach(element => {
  content_marketing.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let growth_hacking_content = [
  { name: "Digital Marketing" },
  { name: "Passive Income" },
  { name: "Facebook Ads" },
  { name: "Marketing Strategy" },
  { name: "App Marketing" },
  { name: "ChatGPT" },
  { name: "YouTube Audience Growth" },
  { name: "Search Engine Optimization (SEO)" },
]

let growth_hacking = document.querySelector(".growth_hacking")
growth_hacking_content.forEach(element => {
  growth_hacking.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let affiliate_marketing_content = [
  { name: "ClickBank" },
  { name: "Google Ads (Adwords)" },
  { name: "Influencer Marketing" },
  { name: "Amazon Affiliate Marketing" },
  { name: "TikTok Shop" },
  { name: "Search Engine Optimization (SEO)" },
  { name: "Facebook Marketing" },
  { name: "CPA Marketing" },
]


let affiliate_marketing = document.querySelector(".affiliate_marketing")
affiliate_marketing_content.forEach(element => {
  affiliate_marketing.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let product_marketing_content = [
  { name: "Amazon Kindle Direct Publishing (KDP)" },
  { name: "SaaS" },
  { name: "Self-Publishing" },
  { name: "Product Management" },
  { name: "Book Marketing" },
  { name: "Marketing Strategy" },
  { name: "Launch Funnel" },
  { name: "Selling on Amazon" },
]

let product_marketing = document.querySelector(".product_marketing")
product_marketing_content.forEach(element => {
  product_marketing.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let other_marketing_content = [
  { name: "Copywriting" },
  { name: "Conversion Rate Optimization (CRO)" },
  { name: "ChatGPT" },
  { name: "Digital Marketing" },
  { name: "Event Planning" },
  { name: "Marketing Strategy" },
  { name: "Google Tag Manager" },
  { name: "Marketing Psychology" },
  { name: "Sales Skills" },
]

let other_marketing = document.querySelector(".other_marketing")
other_marketing_content.forEach(element => {
  other_marketing.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

//-------------------------------------------Marketing End------------------------------------------------------------------------------


//------------------------------------------Lifestyle----------------------------------------------------------------------------------

let arts_and_crafts_content = [
  { name: "Drawing" },
  { name: "Watercolor Painting" },
  { name: "Painting" },
  { name: "Figure Drawing" },
  { name: "Arcylic Painting" },
  { name: "Sketching" },
  { name: "Candle Making" },
  { name: "Oil Painting" },
  { name: "Sewing" },
]

let arts_and_crafts = document.querySelector(".arts_and_crafts")
arts_and_crafts_content.forEach(element => {
  arts_and_crafts.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let beauty_and_makeup_content = [
  { name: "Beauty" },
  { name: "Makeup Artistry" },
  { name: "Skincare" },
  { name: "Nail Artistry" },
  { name: "Hair Styling" },
  { name: "Perfume" },
  { name: "Cosmetics" },
  { name: "Beauty Business" },
  { name: "Face Lift" },
]

let beauty_and_makeup = document.querySelector(".beauty_and_makeup")
beauty_and_makeup_content.forEach(element => {
  beauty_and_makeup.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let lifestyle_esoteric_practices_content = [
  { name: "Reiki" },
  { name: "Energy Healing" },
  { name: "Tarot Reading" },
  { name: "Spiritual Healing" },
  { name: "Hypnotherapy" },
  { name: "Astrology" },
  { name: "Psychic" },
  { name: "Akashic Records" },
  { name: "Spirituality" },
]

let lifestyle_esoteric_practices = document.querySelector(".lifestyle_esoteric_practices")
lifestyle_esoteric_practices_content.forEach(element => {
  lifestyle_esoteric_practices.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let food_and_beverage_content = [
  { name: "Cooking" },
  { name: "Cocktails and Bartending" },
  { name: "Coffee" },
  { name: "Pastry" },
  { name: "Wine Appreciation and Oenology" },
  { name: "Baking" },
  { name: "Sourdough Bread Baking" },
  { name: "Bread Baking" },
  { name: "Cake Baking" },
]

let food_and_beverage = document.querySelector(".food_and_beverage")
food_and_beverage_content.forEach(element => {
  food_and_beverage.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let gaming_content = [
  { name: "Chess" },
  { name: "Poker" },
  { name: "eSports" },
  { name: "Fortnite" },
  { name: "Open Broadcaster" },
  { name: "Twitch" },
  { name: "Character Design" },
  { name: "Roulette" },
]

let gaming = document.querySelector(".gaming")
gaming_content.forEach(element => {
  gaming.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let home_improvement_and_gardening_content = [
  { name: "Electricity" },
  { name: "Gardening" },
  { name: "Electrical Wiring" },
  { name: "Home Repair" },
  { name: "Woodworking and Carpentry" },
  { name: "Organizational Skills" },
  { name: "Farming" },
  { name: "Mushroom Cultivation" },
  { name: "Beekeeping" },
]

let home_improvement_and_gardening = document.querySelector(".home_improvement_and_gardening")
home_improvement_and_gardening_content.forEach(element => {
  home_improvement_and_gardening.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let pet_care_and_training_content = [
  { name: "Dog Training" },
  { name: "Dog Care" },
  { name: "Horsemanship" },
  { name: "Dog Behaviour" },
  { name: "Pet Training" },
  { name: "Pet Care" },
  { name: "Animal Nutrition" },
  { name: "Veterinary Medicine" },
  { name: "Cat Behavior" },
]

let pet_care_and_training = document.querySelector(".pet_care_and_training")
pet_care_and_training_content.forEach(element => {
  pet_care_and_training.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let travel_content = [
  { name: "Travel Tips" },
  { name: "Portuguese Language" },
  { name: "Travel Writing" },
  { name: "Travel Business" },
  { name: "Sailing" },
  { name: "Airbnb Hosting" },
  { name: "Digital Nomad" },
  { name: "Land Navigation" },
  { name: "Immigration" },
]

let travel = document.querySelector(".travel")
travel_content.forEach(element => {
  travel.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let other_lifestyle_content = [
  { name: "Neuro-Linguistic Programming (NLP)" },
  { name: "Meditation" },
  { name: "EFT (Emotional Freedom Techniques)" },
  { name: "Cognitive Behavioral Therapy (CBT)" },
  { name: "Emotional Intelligence" },
  { name: "Mindfulness" },
  { name: "Life Coach Training" },
  { name: "Herbalism" },
  { name: "Affiliate Marketing" },
]

let other_lifestyle = document.querySelector(".other_lifestyle")
other_lifestyle_content.forEach(element => {
  other_lifestyle.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

//------------------------------------------Lifestyle End----------------------------------------------------------------------------------


//------------------------------------------Photography and Video----------------------------------------------------------------------------------


let digital_photography_content = [
  { name: "iPhone Photography" },
  { name: "Photography" },
  { name: "Digital Camera Functionality" },
  { name: "Mobile Photography" },
  { name: "Adobe Ligntroom" },
  { name: "Affinity Photo" },
  { name: "GIMP" },
  { name: "Adobe Photoshop" },
]

let digital_photography = document.querySelector(".digital_photography")
digital_photography_content.forEach(element => {
  digital_photography.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})


let photography_content = [
  { name: "Photography Composition" },
  { name: "Product Photography" },
  { name: "Digital Photography" },
  { name: "Mobile Photography" },
  { name: "Food Photography" },
  { name: "Night Photography" },
  { name: "iPhone Photography" },
  { name: "Landscape Photography" },
]

let photography = document.querySelector(".photography")
photography_content.forEach(element => {
  photography.innerHTML += `
  <li class="px-3 py-1">
    <a
      
      class="dropdown-item pad pad_2"
      >${element.name}</a
    >
  </li>

`
})

let portrait_photography_content = [
  { name: "Posing" },
  { name: "Photography Lighting" },
  { name: "Photography" },
  { name: "Photoshop Retouching" },
  { name: "Family Portrait Photography" },
  { name: "Adobe Photoshop" },
  { name: "Photography Business" },
  { name: "Digital Camera Functionality" },
]

let portrait_photography = document.querySelector(".portrait_photography")
portrait_photography_content.forEach(element => {
  portrait_photography.innerHTML += `
  <li class="px-3 py-1">
    <a
      class="dropdown-item pad pad_2"
      >${element.name}</a>
  </li>

`
})

let photography_tools_content = [
  { name: "Adobe Lightroom" },
  { name: "Adobe Photoshop" },
  { name: "Image Editing" },
  { name: "Digital Camera Functionality" },
  { name: "Affinity Photo" },
  { name: "Photoshop Retouching" },
  { name: "Photography" },
  { name: "Drone and Aerial Photography" },
  { name: "Darktable" },
]

let photography_tools = document.querySelector(".photography_tools")
photography_tools_content.forEach(element => {
  photography_tools.innerHTML += `
  <li class="px-3 py-1">
    <a
      class="dropdown-item pad pad_2"
      >${element.name}</a>
  </li>

`
})


let commercial_photography_content = [
  {name:"Real Estate Photography"},
  {name:"Photography Business"},
  {name:"Architecture Photography"},
  {name:"Wedding Photography"},
  {name:"Photoshop Retouching"},
  {name:"Product Photography"},
  {name:"Food Photography"},
  {name:"Photography"},
  {name:"Drone and Aerial Photography"},
]

let commercial_photography = document.querySelector(".commercial_photography")
commercial_photography_content.forEach(element => {
  commercial_photography.innerHTML += `
  <li class="px-3 py-1">
    <a
      class="dropdown-item pad pad_2"
      >${element.name}</a>
  </li>

`
})


let video_design_content = [
  {name:"Video Editing"},
  {name:"Adobe Premiere Pro"},
  {name:"Video Production"},
  {name:"DaVinci Resolve"},
  {name:"Adobe After Effects"},
  {name:"CapCut"},
  {name:"Filmmaking"},
  {name:"Color Grading"},
  {name:"Social Media Marketing"},
]


let video_design = document.querySelector(".video_design")
video_design_content.forEach(element => {
  video_design.innerHTML += `
  <li class="px-3 py-1">
    <a
      class="dropdown-item pad pad_2"
      >${element.name}</a>
  </li>

`
})

let other_photography_and_video_content = [
  {name:"Generative AI (GenAI)"},
  {name:"YouTube Audience Growth"},
  {name:"Photography"},
  {name:"Video Editing"},
  {name:"Video Creation"},
  {name:"Drone and Aerial Photography"},
  {name:"VFX Visual Effects"},
  {name:"Filmmaking"},
  {name:"GoPro"},
]

let other_photography_and_video = document.querySelector(".other_photography_and_video")
other_photography_and_video_content.forEach(element => {
  other_photography_and_video.innerHTML += `
  <li class="px-3 py-1">
    <a
      class="dropdown-item pad pad_2"
      >${element.name}</a>
  </li>

`
})


//------------------------------------------Photography and Video End----------------------------------------------------------------------------------