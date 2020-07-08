# General-Store-API
This is a simple registration and login API in which one can add items with their title,description and price. These items are stored in cloud database somewhere. One can easily access from anywhere in the globe. This is although simple but attractive,contains a lot of features and easy to use.


# Workflow/Approach
1. Initially I have created all my get methods so that one can easliy switch to any one of them.
2. After that I have made post methods to add functionality to my pages.
3. Then I added mongodb database to it so that items which are added can be store in it.
4. I have used ejs files to add header and footer to all my pages and render them as per request.
5. I used git to handle my updates and add gitignore files for node modules.
6. Then I collected all these things and push it to my github repo.
7. After that I have updated my readme file.


# Packages Installed
1. body-parser:  I have used it to make post request to my server.
2. express: It is used to create my server so that anyone can see on web.
3. ejs: This is used for templating and sending ejs files to my server.
4. mongoose: I have used it to connect with my database so that items added by user can be saved on it.


# CSS Styling
I have used many bootstrap classes and also used custom styling.I have made navbar,header and footer which is applied to all my pages.I have added them in public/css folder.


# Deploy app with Heroku
I have used Heroku servers to deploy my app for free so that anyone can use my API globally.For this I have added Procfile in my folder.
Here is the link of my API: https://damp-sands-52668.herokuapp.com


# Database Used
I have used NoSQL database i.e mongodb. Initially I have set up it as local host:27010 but later on, I have created a new mongodb atlas cloud database.
This database stores item which can be saved on our database. I have used mongoose using Nodejs to connect with mongodb server.
My database name is productsDB which is hosted online.




