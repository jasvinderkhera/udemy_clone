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
