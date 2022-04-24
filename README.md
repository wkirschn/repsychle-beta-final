 [![RePsychle Logo](https://repsychle-beta-final.herokuapp.com/assets/img/repsychle_logo%201%20shadow.png "RePsychle Logo")](https://repsychle-beta-final.herokuapp.com/assets/img/repsychle_logo%201%20shadow.png "RePsychle Logo")
 
#  RePsychle Beta 
###  Wyatt Kirschner - 200407722
 
# Hardware Requirements
	Since RePsychle is a website that is being hosted from Heroku and transitioning to a purchased domain for hosting, the requirements to utilize RePsychle requires a few items to properly implement. These include the following:
-	A server (local, dedicated, or shared) to host the framework
-	Bandwidth to support moderate speeds
-	A Computer that has access to an IDE with
o	Windows 10 is preferred with at least an Intel i5 or equivalent, 8 GB of RAM, a basic graphics card, monitor, and a input device for testing the website
Software Requirements
For users to use RePsychle, there are two device types to focus on:
Mobile Software
RePsychle was developed to take advantage of mobile devices than can run the Android or iOS Operating systems. These devices usually use a similar screen dimension, and this can be detected by Bootstrap. Tablets will have a different range of dimensions, yet RePsychle can adjust to the viewpoint of the user.
Touch Screen capabilities are supported as this functionality is built into the browser and has the same functionality that is expected on other websites that adapt to a mobile viewport.


Please note that proxy browsers are not supported. Examples of these are Opera Mini, Opera Mobile’s Turbo Mode, UC Browser Mini, Amazon Silk etc.
Please visit Browsers and devices · Bootstrap (getbootstrap.com) for more information on Bootstrap compatibility.
Desktop Software
	To deploy RePsychle in your environment, you will need the following:
-	An IDE (Not required, but recommended such as WebStorm)
-	Git
-	A GitHub Account (Not required, but recommended)
-	Node.JS 
-	A Server (Local for Testing, Dedicated for Deployment)
-	A Heroku Account
-	Bootstrap Studio (Optional)
-	Windows 10 
Computers that can support Windows 10 or above or can support a semi-recent version of macOS would be able to use the website. Like mobile devices, modern web browsers can execute HTML 5 and CSS3 with ease. Depending on the browser, the support for Bootstrap will be varied.
Please see the included table that layouts which browsers are supported in relation to the appropriate OS:
 
	Chrome	Firefox	Internet Explorer	Microsoft Edge	Opera	Safari
Mac	Supported	Supported	N/A	N/A	Supported	Supported
Windows	Supported	Supported	Supported, IE10+	Supported	Supported	Not Supported

Please note that Linux will be limited as there may be some compatibility issues with a Chromium-based browser, Firefox, and Internet Explorer 9. IE9 and less are not supported since there are issues. IE10 also has issues with CSS3 and HTML5.
Please visit Browsers and devices · Bootstrap (getbootstrap.com) for more information on Bootstrap compatibility.

## Installation Instructions
	There are two methods to clone or replicate the RePsychle Application after the beta. Please contact me at wyatt.kirschner@mygeorgian.ca for any additional questions to be addressed on this matter.
	These instructions are under the assumption that the current local environment that you are using is currently running Windows 10. For this document, WebStorm by JetBrains is the IDE of choice.

## Method 1: Local Installation
1.	Navigate to the GitHub Page located here: wkirschn/repsychle-beta-final (github.com)
2.	Navigate to the Master Branch of the RePsychle Application, click Code, and click Download as Zip
3.	Navigate to the location where the .zip file was downloaded
4.	Use a program to extract the .zip file and place it in a location that your IDE will be able to access
5.	In your IDE, in the top-left hand corner, click on File > Open
6.	Navigate to the root of the .zip folder that was extracted. The root folder should be called RePsychle_Production
7.	Once this is done loading, go towards the bottom of the screen and click on the Terminal Tab
8.	Import npm packages from package.json that the IDE requires
9.	Login / Create MongoDB account
10.	Create a cluster and a database to use
11.	Grab Connection String from MongoDB for the Database
12.	If asked, please fund any npm packages that may be missing or not accounted for in your environment
13.	Save the project to ensure the changes are set
14.	Type in npm start and you should be able to 
15.	Test the application locally
16.	Deploy to GitHub
17.	Connect Heroku to GitHub Project Branch
18.	Test on the Server
19.	Have Heroku manage Domain Routing 




## 5 FAQs
### What is RePsychle?

RePsychle is a website that was created to help you learn how to recycle better by searching in our RePsychle Database for the best way to recycle an object. We offer a range of features in our database by having users create an account, create an entry, and tag where their database applies regionally.

Our Newsletter also delivers tips to users on how to properly recycle and statistics of the database to help expand the services to build a community.
Is RePsychle free-to-use?
RePsychle is a free-to-use website that is committed to creating various tools that allow users to make better choices when it comes to recycling.

During this beta, there are no plans to implement a tiered system or a way to make a purchase.

We will provide proper communication once RePsychle is tailored and more stable than the state that it's currently in.
What are my rights to the data that I provide to RePsychle?
During the current beta, it's important to recognize that the foundations of this website may change based on the development of our services.

Any information that you share with RePsychle does not belong to the website.

This information includes the following:
 · Your Full Name
 · Your Email Address
 · Your Password
 · Any Data Entered into a Database Entry
 · Any Images Uploaded to a Database Entry


Please be aware that this is Not Legally Binding.

How do I get started?
You can create an Account by clicking on the Sign-Up button at the top of the website.

If you are currently signed in, you will not have this option since you already have an account.
How do I close my account?

Please email us at repsychle@wkirschn.ca

## Feature List
### 1.	Account Creation
By navigating the RePsychle website, you will be able to have the opportunity to create an account to use to navigate the database. By doing so, this allows the user to create an account that is unique to the user specifically that would allow them to perform CRUD functionality. Currently, accounts are created initially by taking input data from a registration page, parsed into Passport, validated, and stored in a Collection in MongoDB. The passwords are hashed using SHA-256 to ensure security. A salt is added in order to ensure that everything is secure. The security phrase is used as the key for generating the SHA-256 for every password and this is hidden from public view.
A created account only has access to an entry that is uploaded by the individual.


### 2.	Database Overall View Access
All users who are either logged in or are viewing as a guest will be able to view the RePsychle Database. The database is filtered down into the respective collections that each object is apart of. Users will be able to view, edit, and delete their entries into the database.
Based on the variables that were inputted by the user, it would appear along with the image that is uploaded.
 
When clicking on an object, the details of the object including the name, disposal method, description, image, ecoScore, and regional co-ordinates will be displayed based on the document’s ID.
In order to access this, this can be found in the Navigation Bar Header at the top of the website, the RePsychle Database Search in the Navigation Bar Header, or in the Footer of the website.
Individual views of an object can be accessed through the database portal or a hardlink.
### 3.	Database Object CRUD
While anyone will be able to view the entries of the database, only the specific user or an admin can have the opportunity to edit the document. They will be able to change everything except the _id that is originally representing the image. Currently, a user will not be able to edit the image that was uploaded with the object. Users can also add new entries into the database and this would be associated with their profile.
	In order to access this, they can either find their entries in the database itself.
### 4.	Newsletter Subscription
In order to set the website up for engagement with the user as the website is still in adding various features as the beta continues, there will be a third-party tool going to be used such as MailChimp to handle emailing users with various updates to individuals. Preferences and the content would be handled outside of the server and would not implement profile integration to allow for this for security reasons.
This can be accessed at the bottom of any page on the RePsychle website. Preferences for this newsletter is managed by MailChimp, including the CRUD for the account created with Mailchimp so users can unsubscribe when needed etc.

### 5.	Google Maps API Integration
One interesting feature that will be implemented is the ability for users to manually input a longitude or latitude coordinate using an input form. This would allow a user to state which part of the world that the object would be required to be disposed of in that manner. When a user chooses to use the Google Maps API, it hardcodes the GPS longitude and latitude coordinates to be stored into the database. This is then fetched when a user opens a database entry to see where the entry was added. This is optional.
This feature can be found when creating, reading, updating or deleting a RePsychle Database Object.
### 6.	Image Upload
RePsychle is able to handle images being uploaded by using Multer with MongoDB to ensure that when a user uploads an image, the file name is binded to a cryptographic function and then represented in the database as BSON. This can be fetched and read as a .jpg or a .png.

## Credits
	Bootstrap 5
	Bootstrap Studio
	Bootstrap Footer Template
	Multer / MongoDB
	COMP2068 for Database Entries Guidance
	Tutorial for Bootstrap Fundamentals (LinkedIn)

## Other Resources:

Uploading Files to MongoDB With GridFS (Node.js App) - YouTube
	NPM:	Mongoose, MongoDB, Node.JS, Bootstrap 5, Popper, Body-parser, Multer, Multer-gridfs-storage, Gridfs-stream, Method-override
	GoogleMaps API
