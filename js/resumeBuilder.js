
// First section -- Bio Section --
var bio ={
    "name" : HTMLheaderName.replace("%data%","Latifa Fawaz AlMasaad"),
    "role" : HTMLheaderRole.replace("%data%","Web Developer"),
    "contacts" : {
        "mobile" : HTMLmobile.replace("%data%","+966582222222"),
        "email" : HTMLemail.replace("%data%","l.almasaad@gmail.com"),
        "twitter" : HTMLtwitter.replace("%data%","@Latifaf_"),
        "gitHub" : HTMLgithub.replace("%data%","LatifaF"),
        "location": HTMLlocation.replace("%data%","Riyadh - Saudi Arabia")
    },
    "img" : HTMLbioPic.replace("%data%","images/Fofo.jpg"),
    "welcomMessage" : HTMLwelcomeMsg.replace("%data%","Welcome to my resume"),
    "skills" : [
        HTMLskills.replace("%data%","asp.net"),
        HTMLskills.replace("%data%","Html"),
        HTMLskills.replace("%data%","css"),
        HTMLskills.replace("%data%","js"),
        HTMLskills.replace("%data%","c#"),
        HTMLskills.replace("%data%","java"),
        HTMLskills.replace("%data%","SQL server")
    ]
    };

bio.display = function()
{
    $("#header").prepend(bio.role);
    $("#header").prepend(bio.name);

    contactInfoAppending("#topContacts");
    $("#header").append(bio.img);
    $("#header").append(bio.welcomMessage);
    $("#header").append(HTMLskillsStart);
    for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
        $("#header").append(bio.skills[indexCount]);
    };
}
// function for appanding the contact information for deffirent selector ..
// to siplyfiy the code and number of code line
function contactInfoAppending (selectorName)
{
    for (var key in bio.contacts) {
    if ((bio.contacts).hasOwnProperty(key))
        $(selectorName).append((bio.contacts)[key]);
    }
}
// Second Section -- Work Section --
var work = {
    "jobs": [
    {
        "employer" : HTMLworkEmployer.replace("%data%","SAPTCO"),
        "title" : HTMLworkTitle.replace("%data%","Developer"),
        "dates" : HTMLworkDates.replace("%data%","2014 - now"),
        "location" : HTMLworkLocation.replace("%data%","Riyadh- Saudi Arabia"),
        "description" : HTMLworkDescription.replace("%data%","working using asp.net, be part the team who develope the intrnal portal of that serve the employees")
    }
    ],

    "internship": [
    {

        "employer" : HTMLworkEmployer.replace("%data%","King Fahad Midical City"),
        "title" : HTMLworkTitle.replace("%data%","Developer - internship"),
        "dates" : HTMLworkDates.replace("%data%","may 2012 - julay 2012"),
        "location" : HTMLworkLocation.replace("%data%","Riyadh- Saudi Arabia"),
        "description" : HTMLworkDescription.replace("%data%","working in sql serve to implement a;; the data needed for small project for Saudi Cancer Socaity")
    }
    ]
};

work.display = function(){
    $("#workExperience").append(HTMLworkStart);
    var formattedHtml =""; // needed variable becuse of the title and employer have <a> tag slices bettwen them
    (work.jobs).forEach(function(item){
        for (var key in item) {
            if (item.hasOwnProperty(key))
                formattedHtml += item[key];// $(".work-entry").append(item[key]);
        }
    });
    (work.internship).forEach(function(item){
        for (var key in item) {
            if (item.hasOwnProperty(key))
                formattedHtml+=item[key];
        }
    });
    $(".work-entry").append(formattedHtml);
}

// Thired Section -- Project Information --
var projects = {
    "project": [
    {
        "title": HTMLprojectTitle.replace("%data%","SmartSpeaker Project"),
        "dates": HTMLprojectDates.replace("%data%","2012"),
        "description": HTMLprojectDescription.replace("%data%","An iPad application develope using xcode and objective c to create application that help people with speaking disapilty in the arabs contiry, it is work by converting text to speash and using some alghorithem to be a smart application to smplyfiy the way of typing and predicte the words based on the time and location of the user, it is intellagent to work and grow it is own data based on the user."),
        "images": [
        HTMLprojectImage.replace("%data%","images/smartspeaker.jpg")]
    },
    {
        "title": HTMLprojectTitle.replace("%data%","Saptco intrnal portal"),
        "dates": HTMLprojectDates.replace("%data%","2015"),
        "description": HTMLprojectDescription.replace("%data%","developing mant serveses for the saptco employee, to convert all the paper work in to the portal."),
        "images": [
        HTMLprojectImage.replace("%data%","images/saptcop.jpg")]
    },
    ]
};

projects.display = function(){
    $("#projects").append(HTMLprojectStart);

    (projects.project).forEach(function(item){
        for (var key in item) {
            if (item.hasOwnProperty(key))
                $(".project-entry").append(item[key]);
        }
    });
}

// Fourth Section -- Education information --
var education = {
    "schools": [
    {
        "name": HTMLschoolName.replace("%data%","king saud university"),
        "degree": HTMLschoolDegree.replace("%data%","BA"),
        "dates": HTMLschoolDates.replace("%data%","2013"),
        "location": HTMLschoolLocation.replace("%data%","ar Riyadh - Saudi Arabia"),
        "majors": HTMLschoolMajor.replace("%data%","IT"),
        "url": HTMLonlineURL.replace("%data%","www.ksu.edu")
    }],
    "onlineCourses": [
    {
        "title": HTMLonlineTitle.replace("%data%","front end web development"),
        "school": HTMLonlineSchool.replace("%data%","Udacity"),
        "dates": HTMLonlineDates.replace("%data%","feb2017 - may2017"),
        "url": HTMLonlineURL.replace("%data%","www.Udacity.com")
    }
    ]
};

education.display = function(){
    $("#education").append(HTMLschoolStart);
    var formattedSchoolHtml="";
    (education.schools).forEach(function(item){
        for (var key in item) {
            if (item.hasOwnProperty(key))
                formattedSchoolHtml += item[key];
        }
    });
    $(".education-entry").append(formattedSchoolHtml);

    var formattedOLCHtml = HTMLonlineClasses;
    (education.onlineCourses).forEach(function(item){
        for (var key in item) {
            if (item.hasOwnProperty(key))
                formattedOLCHtml += item[key];
        }
    });
    $(".education-entry").append(formattedOLCHtml);
}



// call all function to show it in the page ..
bio.display();
work.display();
projects.display();
education.display();
contactInfoAppending("#footerContacts");
