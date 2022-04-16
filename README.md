# 🔗Narrow-Links

This project is an attempt to make a URL Shortener Service(Narrow-Links) - it creates a short, unique URL that will redirect to the specific website of the user's choice.
It is secure and has HTTP protocol and data encryption.
So if a person wants to shares a link or include a link in their profile there are circumstances where it is too long and it takes up the whole space and a lot of characters and which is a problem when there are limited characters to be typed. so our project solves the problem. we make those long URLs short and have a copy button to copy the short URL immediately.

It also has a QR Code Generator - which generates a QR code of the link pasted by the user and by scanning this URL it redirects to the Website link that the user pasted.

One more fature which is recently included is an easy one click button to send the link to whovever you want in the form of an SMS. **Twilio's SMS Api** is used to serve this purpose , you just have to enter the number and hit send , and the shortened link will reach to that number via SMS.


#### Checkout on Devfolio : https://devfolio.co/projects/narrowlinks-291f

#### Website Link : https://narrow-links.vercel.app/

## 🧰 Technologies Used 

- **React.js** 
- **Node.js** 
- **Express.js**
- **MongoDB Atlas**
- **Bootstrap**

## 🛠️ API's and Other Services

- **Twilio SMS API**
- **QR Code API**
- **Auth0 Login**
- **FontAwesome Icons**

## 🚀 How to contribute ?

1. Fork this repository on GitHub.

2. Clone the forked repository in your computer.

    `$ git clone https://github.com/<your-username>/Narrow-Links.git`
    
    `$ cd Narrow-Links`

## Installation and Usage 

4. Go the folder where you want to contribute:

    `$ cd client` OR `cd server`

5. Install the dependencies and run the development server using:

     `$ npm install`

  ## For running `server` open your terminal and 
  
  -> Configure your environment variables 
  
   - Create a file named `.env` then enter the following data inside it 
     
     ```
     TWILIO_ACC_SID = "Get your twilio account SID from your console"
     TWILIO_AUTHTOKEN = "Get your twilio Auth-Token from your console"
     TWILIO_NUMBER = "Get your twilio Number from your console"

     MONGODBURI = "Add your Mongodb Connection string here"
     ```
    
   Save your data env file and run the following commands in your terminal
   
   `$ cd server`
    
   `$ npm run serve`
  
  ## After running server , to run the client , open your terminal and 
  
   `$ cd client`
    
   `$ npm run start`

## We can start making changes now! 🥳

6. Create a new branch for the issue you are working on
    
    `$ git checkout -b <branch-name>`

7. Make your changes. Then, stage and commit them using:

    `$ git add .`
    
    `$ git commit -m "This is a commit message"`
    
7. Push your changes to your forked repository.

    `$ git push origin <branch-name>`
