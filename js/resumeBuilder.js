/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var bio = {
    "name": "Jeff Shih",
    "age": 24,
    "email": "jeffwshih@gmail.com",
    "role": "Web developer",
    "welcomeMessage": "Hello. Welcome. Greetings",
    "skills": ["JavaScript", "Java", "Bash", "Testing"]
 };

 var education = {
    "schools": [
        {
            "name": "University of Pennsylvania",
            "city" : "Philadelphia",
            "degree" : "BSE",
            "major": "Computer Engineering"
        },
        {
            "name": "University of Pennsylvania",
            "city" : "Philadelphia",
            "degree" : "MSE",
            "major": "Computer Science"
        }
    ]
 };

 var workExperience = {
    "jobs" : [
        {
            "name" : "Palantir Technologies",
            "dates" : "July 2015 to May 2016",
            "position" : "Product Quality Engineer",
            "city" : "Palo Alto",
            "description" : "tested stuff"
        },
        {
            "name" : "The New York Times",
            "dates" : "June 2014 to August 2014",
            "position" : "UX + Product Research Intern",
            "city" : "New York",
            "description" : "researched stuff"
        }
    ]
 };

var projects = {
    "projs" : [
        {
            "name" : "NYT Darkroom",
            "date" : "July 2014",
            "desc" : "Photo-based display of top New York Times articles",
        },
        {
            "name" : "Composer Tests",
            "date" : "April 2016",
            "desc" : "ETE tests using NightwatchJS"
        }
    ]
};

projects.display = function() {
    for (item in projects.projs){
        $("#projects").append(HTMLprojectStart);
        console.log(projects.projs[item].name);
        var projTitle = HTMLprojectTitle.replace("%data%", projects.projs[item].name);
        var projDates = HTMLprojectDates.replace("%data%", projects.projs[item].date);
        var projDesc = HTMLprojectDescription.replace("%data%", projects.projs[item].desc);

        $(".project-entry:last").append(projTitle);
        $(".project-entry:last").append(projDates);
        $(".project-entry:last").append(projDesc);
    }
};



var displayWork = function(){
    for (var job in workExperience.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedJobEmployer = HTMLworkEmployer.replace("%data%", workExperience.jobs[job].name);
        var formattedJobTitle = HTMLworkTitle.replace("%data%", workExperience.jobs[job].position);
        var concatJob = formattedJobEmployer + formattedJobTitle;
        $(".work-entry:last").append(concatJob);

        var jobStart = HTMLworkDates.replace("%data%", workExperience.jobs[job].dates);
        $(".work-entry:last").append(jobStart);

        var formatDescription = HTMLworkDescription.replace("%data%", workExperience.jobs[job].description);
        $(".work-entry:last").append(formatDescription);
    }
};

 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

 $("#header").prepend(formattedSkills);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 $("#header").append(formattedMessage);

 $("#main").append(education.schools[0]["name"]);
 $("#main").append(workExperience.position);
 // $("#main").append(internationalizeButton);

 if (bio.hasOwnProperty("skills")){
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills){
        var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#skills").append(formattedSkills); 
    }
 };


// $("#mapDiv").append(googleMap);

displayWork();
projects.display();

function inName(name) {
    var nameArr = name.split(" ");
    nameArr[0] = nameArr[0].slice(0,1).toUpperCase() + nameArr[0].slice(1).toLowerCase();
    nameArr[1] = nameArr[1].toUpperCase();

    return nameArr.join(" ");
}