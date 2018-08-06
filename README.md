# SPCA-EVENT-PORTAL

An online portal for the New Zealand SPCA and it's volunteers to aid with event organising and volunteer rostering/contacting.

## Install
To get started, follow the below:
```
git clone https://github.com/bronburgundy/SPCA-Portal.git
cd SPCA-Portal
yarn
yarn dev
```

## MVP

The two main users are: 
  a. Area Coordinator
  b. SPCA Fundraising Coordinator

MVP consists of the following pages:

1. Home/login => `/`
2. Events (contains ViewEvents, AddEvent) => `/events`
3. Event (contains EditEvent) => `/events/xxx_event`
4. Event Volunteers (contains ViewVolunteers, AddVolunteer, EditVolunteer) `events/xxx_event/volunteers`
5. Roster => `events/xxx_event/roster`
6. Contacts => `/contacts`

Ideal domain name: www.spcavolunteer.nz

### User stories:

1. As an Area Coordinator, I need to be able to see a list of current volunteers for my designated area

2. As an AC I need to be able to filter the volunteer list by: day, time, location, w/ friend, w/ pet, contacted, confirmed so I can see the status of all my volunteers

3. As an AC I need to be able to send automatic emails to individual volunteers confirming their day, time and location

4. As an AC I need to be able to mark off volunteers as contacted or confirmed

5. As an AC I need to be able to send updates to SPCA head office to show them where I am at with confirming volunteers 

6. As an AC I need to be able to automatically populate a roster template for each day over all locations

7. As an AC I need to be able to print the completed roster onto an A4 sheet as well as view it legibly on my phone

.......

8. As the SPCA coordinator I need to be able to upload new volunteers and alert ACs when I have done this

9. As the SPCA coordinator I need to be able to check on the progress of all the ACs in confirming their final roster



## PROCESS:

* File set up
* Data Model the data I will be receiving from the SPCA
* Seeds and Migrations
* Routes
* Functions in db.js
* Test server
* Wireframes for the different screens
* React components
* Test browser
* CSS


