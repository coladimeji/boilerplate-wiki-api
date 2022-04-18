About The Project

Cold Pitch for Project – Boilerplate Wiki – API

Boilerplate Wiki- API is decentralized to protocol used to access fast, adaptable blockchain development code. the boilerplate wiki is a project that will help scrape, the latest and compatible code using the API. It will allow developers, students, and organizations access to usable and efficient code through API. This can be achieved using a global Distributed delivery Framework. This is a unified process, putting all development codes from every known cryptocurrency development in a wiki-like resource and pushing it to anyone that needs it through API.

Developers Bio
Chris Oladimeji is a Blockchain Architect/Developer, with over Fourteen years of experience in Software Quality Assurance Testing. Graduated from George Brown College Toronto in April 2022. His main interest is in developing structural and implementing optimal solutions that allow developers, students, and organizations easy and workable codes when developing/researching blockchain solutions.

Problem Statement
Most times, when developers are building applications, the resource codes steps available are out of date, incompatible versions, or outright unstable. This leads to delays in the delivery of projects that lead to an increase in project cost. 

Why is API?
API is an application programming interface. It is like a stateless middleman connecting two sides, just like a waiter that takes your order and brings you your food based on your order. It is a channel that application utilizes to communicate with each other, specific information is inserted at one end the API takes the information and respond back with results.

Why Boilerplate Wiki - API?
Boilerplate Wiki – API will provide a decentralized global delivery framework where all the latest codes will be available powered by API. The resource will be available to developers, students, and organizations building any form of blockchain. It will allow easy access to creating codes for development.

Benefits
•	Helping newcomers and developers an easy start with blockchain development.
•	Speed up time from implementation to roll-out.
•	Guide developers, students, and organizations by providing the latest version of processes  and code versions
•	Enable starter kits, steps, and emergency forms that allow users to set up projects faster and get to work quicker.

Project Requirements

The following user stories are implemented in the Boilerplate Wiki – API
Identify the resources the API will provide to clients
Create href list of workable API
 Compute href by name address and ID
Add NodeJS to push to API
Client (developers, students, organizations) log into portal Rapid API, request code downloads for a specific project
Client search endpoints to access usable links based on interest
Clients Test Endpoint before download

System Architecture

Use Case Diagram
![image](https://user-images.githubusercontent.com/32521595/163893364-1117122d-6adb-4c76-b289-61e2f797d176.png)
 

Sequence Diagram

 ![image](https://user-images.githubusercontent.com/32521595/163893408-9492a90e-ce88-4a8c-90af-7583a923ef65.png)






Boilerplate Wiki Heroku Mock-up
  
 ![image](https://user-images.githubusercontent.com/32521595/163893444-4daedd4f-cad1-4808-91bd-4d93ecce7fc0.png)

![image](https://user-images.githubusercontent.com/32521595/163893470-bf8f3cea-a222-42dd-b304-197d1ab74f2a.png)


Boilerplate Wiki Rapid API Mock-up
 
 
![image](https://user-images.githubusercontent.com/32521595/163893484-be269d68-d3f2-4dfb-a961-9f315c87b101.png)


![image](https://user-images.githubusercontent.com/32521595/163893512-ec6399b7-f56b-4a77-b6d7-60d1f3aa0a87.png)






Components and Steps to recreate the installation

Preparation webpage Scraping
•	Open Cryptocurrency development illustration page
•	Search for the name of the page
•	Search for the main keyword on the page
•	Write in a notepad
•	Open google chrome control panel
•	Navigate to more tools
•	Click on developer tools
•	Select  links that contain a> href
•	Copy the URL  and paste a in your note
Note continue to scrape as many URL has needed

Components

•	Open VS code
•	Create a folder called example’ Boilerplate wiki
•	Inside the newly created folder open the new Terminal
•	Inside the terminal  insert npm init
•	Create a new filer index.js
•	Install npm I cheerio
•	Install npm I expressjs
•	Install npm Axios
•	Go to package.json and change process to “start”: “nodemon index.js”
•	Install npm I nodemon

Code process
•	Open index.js
•	Configure localhost to 8000
•	Insert code 
•	Insert scraped URL
•	Test code process with npm run start


Process verification
•	Open URL 
•	Insert localhost  8000
•	Verify page URL posted

Lunch from Heroku to Rapid API step 1
•	Open Rapid API provider dashboard
•	Click on Add new API
•	Add Name and short description
•	Insert category
•	Click add API button


Post in Heroku
•	Log in to Heroku
•	Click on personal
•	Click the New button
•	Select create a new app from the drop menu
•	Insert App Name
•	Choose a region
•	Click create API button
•	Download and Install Heroku CLI: click on the Heroku CLI link 
•	Choose either mac or windows
•	 copy command and paste in Vs code terminal to install Heroku
•	On Vs code opens a new terminal and execute the followings:
•	Copy Heroku login
•	Press any key to open CLI on the browser page
•	Close browser after logging in
•	Run git init in vs code to initialize the project
•	Cd boilerplate wiki /
•	Heroku git: remote -a boilerplate wiki
•	Git add commit -am “ make it better”
•	Git push Heroku master
•	Navigate back to Heroku and check the built
•	New built should be live 


Lunch from Heroku to Rapid API step 2
•	Open Rapid API  once the Heroku API has been deployed
•	Copy the website created  example: https://boilerplatewiki.herokuapp.com/
•	Add base URL Paste the URL on the Rapid API website 
•	Add some endpoints: example: Get all instructions
•	Add description example: this endpoint will return all dev instructions for Solana, Algorand Ethereum
•	Save endpoint
•	Navigate to public and private pricing, complete pricing as you want
•	Make API public https://rapidapi.com/coladimeji/api/boiler-plate-wiki




