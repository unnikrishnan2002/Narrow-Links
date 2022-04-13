# Narrow-Links

## ✒️ Summary

1. Fork this repository on GitHub.

2. Clone the forked repository in your computer.

    `$ git clone https://github.com/<your-username>/Narrow-Links.git`
    
    `$ cd Narrow-Links`

### Installation and Usage 

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
