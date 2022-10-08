# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

The Star Wars Battler- React Front-end

The goal of the SW Battler App is simple:
1)A user creates a "Commander" name and logs in with it.
2) The user creates a Fleet by designating a name.
3) The user is immediately brought to the "Ships" page wherein they can choose which fleet (they can have multiple fleets) they'd like to add which ship to. 
4) After they have exhausted their budget of 1.5 million "credits" the can review the fleet details back on their 'Fleets' page.
5) When a user is happy with their fleet, it's time to Battle. Head to the Battle page.
6) On the battle page a user selects the fleet they want to use from their own list of fleets, chooses any fleet from any other user to battle against. And then picks a planet. The planet will augment their combat power based on the 'local envrionment'.
7) A win or loss is presented with a banner and GIF and the wins/losses and percentages are incrememnted for that fleet and the commander as a whole.

We utlizie React to make keeping components organized and simple. The endpoints for our fetch requests are designed to connect with a Ruby Sinatra built back-end. Found at "https://github.com/JoeSpizz/phase-3-sinatra-react-project".

This application, including styling, was built almost entirely from scratch with very few credits for pre-written code. The Font 'Star Jedi' was created by Boba Fonts to mimic the Star Wars title font. 
The Ship raw information was pulled from https://swapi.dev/ The Star Wars API. This information was sadly bereft of images, and combat statistics. Images were mostly found from https://starwars.fandom.com/wiki/Main_Page with combat data being made up by me, and then tweaked to match up with costs so no ship would be over-powered.