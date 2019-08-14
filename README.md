# Make-A-Meal App
 This is the Official Reposatory for the Make-A-Meal App

 Make-A-Meal app was created to fill the need of a local nutritionist agency who was interested in giving their clients an easy way to create healthy meals. From thinking up ideas, to making shopping lists then cooking meals and compiling nutrition information, this one simple app has it all. It’s mobile friendly so you can have in the palm of your hand or on your counter top.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

1.	Create Directory and Clone Reposatory from GitHub
2.	Create React file structure in Directory
            a.	my-app/
            b.	  README.md
            c.	  node_modules/
            d.	  package.json
            e.	  public/
            f.	    index.html
            g.	    favicon.ico
            h.	  src/
            i.	    App.css
            j.	    App.js
            k.	    App.test.js
            l.	    index.css
            m.	    index.js
            n.	    logo.svg

For the project to build, these files must exist with exact filenames:
            •	public/index.html is the page template;
            •	src/index.js is the JavaScript entry point.
You can delete or rename the other files.
You may create subdirectories inside src. For faster rebuilds, only files inside src are processed.
You need to put any JS and CSS files inside src, otherwise you won’t see them.
Only files inside public can be used from public/index.html.
Read instructions below for using assets from JavaScript and HTML.
You can, however, create more top-level directories.
They will not be included in the production build so you can use them for things like documentation.



### Prerequisites

Once you have the Directory set up, navagate to main Directoy and Run:

    ON COMMANDLINE: “npm init” will create package.json file if is not already created
    ON COMMANDLINE: “npm install” will install dependencies from .json file and create node_modules/
`

### Installing

In the project directory, you can run:
npm start
Runs the app in the development mode.

Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.


npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

Your app is ready to be deployed!
See the section about deployment for more information.


## Running the tests

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

``

## Deployment Heroku steps 

           1. You must a have a json file with your app
           2. Create a git repository inside the directory that has your app files and push to GitHub (if you have already created a git in GitHub inside the app directory you can jump to step three -login to heroku)
               1. Type “git init” inside terminal
               2. Type “git add  .” inside terminal
               3. Type “git commit -m “heroku” inside terminal
               4. Type “git init” inside terminal
               5. Create a .gitignore file inside your apps directory
           3. Login to heroku
               1. Type “heroku login” inside terminjal
               2. Enter ur heroku login info (in terminal or pop up)
               3. Type “git remote -v” inside terminal
               4. Type “heroku create” inside terminal
               5. Type “git remote -v” inside terminal
               6. Type “git push heroku master” inside terminal
           4. Go to heroku webpage to find the domain of your app
               1. Click on your app
               2. Go to settings
               3. Go down to domains n certificates




## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

