# INST-377-Project-Deliverable

Title:
Atlanta Transit Tracker

Description: 
The Atlanta Transit Tracker is a user-friendly web application created to improve the experience of navigating public transportation in and around Atlanta City. By implementing real-time transit data from the MARTA Atlanta API and the NextBus API, this application will provide real-time route updates and all bus routes available in Atlanta and feature a trip Planner to help users transfer to more than one bus. This web application will help daily commuters, occasional riders, or tourists trying to navigate Atlanta City. 

Target Browsers:
The target browsers for our web application include both iOS and Android platforms. It will be accessible through all major mobile web browsers such as Safari (for iOS) and Google Chrome or Firefox (for Android). 

Developer Manual 
This manual is intended to explain to future developers how to install this web application, run it on a server, and run tests. 

System Requirments 

Before you begin, make sure you have the following installed on your machine:

- Node.js (version 16 or higher)
- npm (Node Package Manager)
-  A terminal 
- A GitHub account and access to the repository
- An iOS or Android device

Installation 

Cloning the Repository
1. Clone the project repository to your local machine:
   
   1.1 By opening your terminal and running this command
   
   git clone https://github.com/yourusername/atlantatransit.git
   
3. Install dependencies
   
   2.1 Navigate to the server with the command :

      cd server
   
     2.2 Install the npm package with the command :
  
       npm install
    
3. This will install the dependencies such as:
   
     3.1 express
  
     3.2 supabase

Running the Application 

After installation is complete, you can start the application

1. run
   
   npm start

Running Test 
Search and Display: 

To test a few features, try searching for a transit line. If everything is working correctly, it should display the correct line search. 
Also, test the map to see if you can minimize or maximize it. It should display an accurate interactive map. 



API Tests
1. GET /api/routes
Returns a list of all bus routes offered in Georgia.

3. GET /api/routes/:id/livestatus
Displays live tracking to determine real-time arrival and wait time updates.

4. POST /api/trip
Returns the fastest suggested bus route and transfer points. 

5. POST /api/favorites
Saves routes to a user's favorites folder.

6. GET /api/alerts/:routeId
Provides live alerts on delays

Known Bugs:
- Missing Data: Occasionally, bus routes do not show any statuses and instead show incomplete data. 
- Trip Accuracy: The trip planner feature sometimes does not return the best route, and its inaccuracy can cause unnecessary delays.

Roadmap for Future Development:
- Fix missing data
- Improve the trip planner's accuracy
- Implement user login
- Extend application beyond Georgia, providing live transit updates in every state in the United States 

