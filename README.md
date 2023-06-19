# NODE.JS CRUD API'S

## The provided code sets up an Express.js server with MongoDB integration and defines various API endpoints for handling user data. Here's a description of the APIs based on the code provided:
## Getting Started

Download the code from repository and follow below given instructions.

### Installing
Before we run the solution, go to the local respository or downloaded folder (using cd command) and install node_modules by running:
```
npm install
```

### Running
Before running the script, make sure to add **MONGODB_URI** value in .env file.
```
npm start
```

### 1. `GET /user/random`:
   - Description: Generates random user data.
   - Response: Returns a JSON object containing randomly generated user data, including `first_name`, `last_name`, `email`, and `gender`.

### 2. `GET /user`:
   - Description: Retrieves all user data from the MongoDB collection.
   - Response: Returns a JSON array containing all user data available in the MongoDB collection.

### 3. `GET /user/:id`:
   - Description: Retrieves user data based on the provided user ID.
   - Request Parameter: `id` is the unique identifier of the user.
   - Response: Returns a JSON object containing the user data associated with the provided ID.

### 4. `PUT /user/:id`:
   - Description: Updates user data based on the provided user ID.
   - Request Parameter: `id` is the unique identifier of the user.
   - Request Body: Contains the updated user data fields (`first_name`, `last_name`, `email`, `gender`).
   - Response: Sends a "Your Data Updated" message if the update is successful.

### 5. `DELETE /user/:id`:
   - Description: Deletes user data based on the provided user ID.
   - Request Parameter: `id` is the unique identifier of the user.
   - Response: Sends a "Data Deleted" message if the deletion is successful.

## Built With

* [NodeJs](https://nodejs.org/en/)
* [ExpressJs](https://expressjs.com)
* [MongoDB](https://www.mongodb.com/)
* [Heroku](http://heroku.com/)

## Author
* **Ameer Ali Jamali**
