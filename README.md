KingdomTracker is a web-based app for tracking your Kingdom in Pathfinder 2nd Edition's Kingmaker module. 
It's purpose is currently to act as a digital character sheet with intentions of adding the ability to process a full kingdom turn over time. 

REQUIREMENTS:
Windows 10 or 11 (should operate on Mac, but untested)
Node.js V20.14 or newer
mysql configurator ( https://dev.mysql.com/downloads/mysql/ )
mysql workbench ( https://dev.mysql.com/downloads/workbench/ )

TO GET STARTED:

Clone the KingdomTracker repo to your local machine.

Using command prompt (or your preferred console app) navigate to the Kingdomtracker/Kingdomtracker directoy.

Type the following commands to install dependencies:

  "npm install"
  "npm install axios"
  "npm install styled-components"

You should now be able to launch the site by typing the command "npm run dev" and the key "o" when prompted.*

*note this does not provide you the functionality to use the app yet, you must first prepare the backend and your database.

Using a second command prompt navigate to the KingdomTracker/backend diretory.

Type the following commands to install dependencies:

  "npm install"
  "npm install bcryptjs"
  "npm install body-parser"
  "npm install cookie"
  "npm install cors"
  "npm isntall dotenv"
  "npm install express"
  "npm install jsonwebtoken"
  "npm install mysql2"
  "npm install passport"
  "npm install passport-jwt"
  "npm install passport-local"

  You should now be able to run the backend file by typing "node server.js" although it will fail as there is currently no database to connect to.

To prepare your database follow the mySQL configurator steps to prepare your server. Make note of your "user" and "password" as these will be needed to query the database.
Once you are hosting a server you can connect to it with the mySQL workbench to create the database. 

You can find the necessary starter files here: https://www.dropbox.com/scl/fo/l0lmun1sotloj0oeujih7/AJjdZz2NVuFtoEN5C8B8BRA?rlkey=57f5zl9go40oddep52vbd4l8z&st=2r2aktkq&dl=0
Download the folder and open the "generateDB" file in mySQL workbench. This will create the tables, views, procedures, and triggers for the database.
Then you will have to use the csv files to pre-populate some of the tables. I plan on working these into the generation script but haven't done so yet, please be patient with me.
Once you have all of the tables set up, you are officially prepared to run the app. Happy gaming!





