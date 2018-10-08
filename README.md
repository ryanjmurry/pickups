# p i c k u p s

#### _A web application bringing users together through organized recreational, table-top, and video game meetups, 10.08.18_

#### By _Ryan Murry_

## Description
Pickups is a web application in which users are able to sign up and begin viewing and creating pickup games of their own. Users can search and view a list of pickup games and register to attend if the game is not yet full. Still in its early stages, pickups will eventuall contain the ability to follow other users, communicate via the game chat, and view the location of games using the Google Maps API.

## Installing
Complete the steps below to get the application running on your personal machine.

Clone the repo from github
`git clone https://github.com/ryanjmurry/pickups#updating-to-new-releases` 

This program is dependent that you already have node installed on your machine and node package manager. Afterwards run the install command.
`npm install`

#### API Key Installation

**Firebase**
Go to https://console.firebase.google.com/ to sign up and create your database for your project. Select add Firebase to your web app to view api credentials.

**src/config/firebaseConfig.js**

Once in the root directory of the app, navigate to the config folder `cd src/app/config`

In the config folder, create a file named firebaseConfig.js `touch firebaseConfig.js`

Paste the api credentials from firebase into this file following the pattern below:

```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_AUTH_DOMAIN_HERE",
  databaseURL: "YOUR_DATABASE_URL_HERE",
  projectId: "YOUR_PROJECT_ID_HERE",
  storageBucket: "YOUR_STORAGE_BUCKET_HERES",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE"
}

export default firebaseConfig;
```

run `npm start` from the project's root directory to run the application

## Support and Contact Details
Any issues or questions please feel free to [email me](mailto:ryanjmurry@gmail.com)

**Contribution Requirements**
1. Clone the repo
2. Make a new branch
3. Commit and push your changes
4. Create a PR

## Technologies Used
* React
* Redux
* Firebase / Firestore
* Redux Form
* Redux Thunk
* Semantic UI React
* React Router
* React Background Slideshow
* Moment

### License
This software is license under the MIT license.

Copyright (c) 2018 **Ryan Murry**
