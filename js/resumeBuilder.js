

// First section -- Bio Section --
var bio ={
    "name" : "Latifa Fawaz AlMasaad",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "+966582222222",
        "email" : "l.almasaad@gmail.com",
        "twitter" : "@Latifaf_",
        "github" : "LatifaF",
        "location": "Riyadh - Saudi Arabia",
    },
    "biopic" : "images/Fofo.jpg",
    "welcomeMessage" : "Welcome to my resume",
    "skills" : ["asp.net", "html", "css", "js", "c#", "java", "SQL"]
};

bio.display = function()
{
    var formattedname = HTMLheaderName.replace("%data%",bio.name);
    var formattedrole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedConcontact = {
        "mobile" : HTMLmobile.replace("%data%",bio.contacts.mobile),
        "email" : HTMLemail.replace("%data%",bio.contacts.email),
        "twitter" : HTMLtwitter.replace("%data%",bio.contacts.twitter),
        "github" : HTMLgithub.replace("%data%",bio.contacts.github),
        "location": HTMLlocation.replace("%data%",bio.contacts.location),
    };
    $("#header").prepend(formattedname + formattedrole);

    var htmlContact="";
    for (var key in formattedConcontact)
        if (formattedConcontact.hasOwnProperty(key))
            htmlContact+=formattedConcontact[key];

    $("#topContacts").append(htmlContact);
    $("#footerContacts").append(htmlContact);
    var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWecolMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    var formattedSkills = HTMLskillsStart;
    for (var indexCount = 0; indexCount < bio.skills.length; indexCount++)
        formattedSkills += HTMLskills.replace("%data%",bio.skills[indexCount]);

    $("#header").append(formattedBioPic + formattedWecolMessage + formattedSkills);
};

// Second Section -- Work Section --
var work = {
    "jobs": [
    {
        "employer" : "SAPTCO",
        "title" : "Developer",
        "dates" : "2014 - now",
        "location" : "Riyadh- Saudi Arabia",
        "description" : "working using asp.net, be part the team who develope the intrnal portal of that serve the employees"
    },
    {

        "employer" : "King Fahad Midical City",
        "title" : "Developer - internship",
        "dates" : "may 2012 - julay 2012",
        "location" : "Riyadh- Saudi Arabia",
        "description" : "working in sql serve to implement a;; the data needed for small project for Saudi Cancer Socaity"
    }
    ]
};

work.display = function(){
    $("#workExperience").append(HTMLworkStart);
    var formattedJobs =""; // needed variable becuse of the title and employer have <a> tag slices bettwen them
    (work.jobs).forEach(function(item){
        formattedJobs += HTMLworkEmployer.replace("%data%",item.employer);
        formattedJobs += HTMLworkTitle.replace("%data%",item.title);
        formattedJobs += HTMLworkDates.replace("%data%",item.dates);
        formattedJobs += HTMLworkLocation.replace("%data%",item.location);
        formattedJobs += HTMLworkDescription.replace("%data%",item.description);
    });

    $(".work-entry").append(formattedJobs);
};

// Thired Section -- Project Information --
var projects = {
    "projects": [
    {
        "title": "SmartSpeaker Project",
        "dates": "2012",
        "description": "An iPad application develope using xcode and objective c to create application that help people with speaking disapilty in the arabs contiry, it is work by converting text to speash and using some alghorithem to be a smart application to smplyfiy the way of typing and predicte the words based on the time and location of the user, it is intellagent to work and grow it is own data based on the user.",
        "images": ["images/smartspeaker.jpg"]
    },
    {
        "title": "Saptco intrnal portal",
        "dates": "2015",
        "description": "developing mant serveses for the saptco employee, to convert all the paper work in to the portal.",
        "images": ["images/saptcop.jpg"]
    },
    ]
};

projects.display = function(){
    $("#projects").append(HTMLprojectStart);
    var formattedProjects = "";
    (projects.projects).forEach(function(item){
        formattedProjects += HTMLprojectTitle.replace("%data%",item.title);
        formattedProjects += HTMLprojectDates.replace("%data%",item.dates);
        formattedProjects += HTMLprojectDescription.replace("%data%",item.description);
        for(var key in item)
        if(key === "images")
            for (var count=0; count < item[key].length ; count++) {
                formattedProjects += HTMLprojectImage.replace("%data%",(item[key])[count]);
            }
    });
    $(".project-entry").append(formattedProjects);
};

// Fourth Section -- Education information --
var education = {
    "schools": [
    {
        "name": "king saud university",
        "degree": "BA",
        "dates": "2013",
        "location": "ar Riyadh - Saudi Arabia",
        "majors": ["IT"],
        "url": "www.ksu.edu"
    }],
    "onlineCourses": [
    {
        "title": "front end web development",
        "school": "Udacity",
        "dates": "feb2017 - may2017",
        "url": "www.Udacity.com"
    }
    ]
};

education.display = function(){
    $("#education").append(HTMLschoolStart);
    var formattedSchoolHtml="";
    (education.schools).forEach(function(item){
        formattedSchoolHtml += HTMLschoolName.replace("%data%",item.name);
        formattedSchoolHtml += HTMLschoolDegree.replace("%data%",item.degree);
        formattedSchoolHtml += HTMLschoolDates.replace("%data%",item.dates);
        formattedSchoolHtml += HTMLschoolLocation.replace("%data%",item.location);
        formattedSchoolHtml += HTMLschoolMajor.replace("%data%",item.majors);
        formattedSchoolHtml += HTMLonlineURL.replace("%data%",item.url);
    });
    $(".education-entry").append(formattedSchoolHtml);

    var formattedOLCHtml = HTMLonlineClasses;
    (education.onlineCourses).forEach(function(item){
        formattedOLCHtml += HTMLonlineTitle.replace("%data%",item.title);
        formattedOLCHtml += HTMLonlineSchool.replace("%data%",item.school);
        formattedOLCHtml += HTMLonlineDates.replace("%data%",item.dates);
        formattedOLCHtml += HTMLonlineURL.replace("%data%",item.url);
    });
    $(".education-entry").append(formattedOLCHtml);
};

// map section



// call all function to show it in the page ..
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
initializeMap();
