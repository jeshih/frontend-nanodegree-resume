/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var bio = {
    "name": "Jeff",
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
    "name" : "Palantir Technologies",
    "startDate" : "July - 2015",
    "endDate" : "May - 2016",
    "position" : "Product Quality Engineer",
    "city" : "Palo Alto"
 };


 var formattedName = HTMLheaderName.replace("%data%", bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 var formattedSkills = HTMLskills.replace("%data%", bio.skills);
 var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

 $("#header").prepend(formattedSkills);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 $("#header").append(formattedMessage);

 $("#main").append(education.schools[0]["name"]);
 $("#main").append(workExperience.position);