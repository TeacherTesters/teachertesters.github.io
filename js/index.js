var filterBarStart = '<div class="pure-menu pure-menu-horizontal"> <a class="pure-menu-heading" href="">';
var filterBar = '</a> <ul class="pure-menu-list values"></ul></div>';

function Teacher(name, image, grade, subject, location, certifications, experience, age, gender){
    this.name = name;
    this.image = image;
    this.grade = grade;
    this.subject = subject;
    this.location = location;
    this.certifications = certifications;
    this.experience = experience;
    this.age = age;
    this.gender = gender;
}

var teachers = [];
teachers.push(new Teacher("Elena Olsen", "http://media-cache-ec0.pinimg.com/avatars/elenabo-88_140.jpg", 11, "English", "Kirkland, WA", [], 12, 40, "F"));

var grades = new Set();

for(var i = 0; i < teachers.length; i++){
    grades.add(teachers[i].grade);
}

var gradesArray = Array.from(grades);

var subjects = new Set();

for(var i = 0; i < teachers.length; i++){
    subjects.add(teachers[i].subject);
}

var subjectsArray = Array.from(subjects);

var locations = new Set();

for(var i = 0; i < teachers.length; i++){
    locations.add(teachers[i].location);
}

var locationsArray = Array.from(locations);

var certifications = new Set();

for(var i = 0; i < teachers.length; i++){
    certifications.add(teachers[i].certifications);
}

var certificationsArray = Array.from(certifications);

var experiences = new Set();

for(var i = 0; i < teachers.length; i++){
    experiences.add(teachers[i].experience);
}

var experiencesArray = Array.from(experiences);

var ages = new Set();

for(var i = 0; i < teachers.length; i++){
    ages.add(teachers[i].age);
}

var agesArray = Array.from(ages);

var gendersArray = Array.from(grades);

function gradeFilter(){
    var initialString = filterBarStart + "Grade" + filterBar;
    $(".header").append(initialString);
    for(var i = 0; i < gradesArray.length; i++){
        $(".values").append('<li class="pure-menu-item pure-menu-selected"><a onclick=filterByGrade(' + gradesArray[i] + ') class="pure-menu-link">' + gradesArray[i] + '</a></li>')
    }
}

function filterByGrade(grade){
    var pointer = 1;
    var done = false;
    for(var i = 0; i < teachers.length; i++){
        if(teachers[i].grade === grade){
            $(".teacher" + pointer + "img").attr("src", teachers[i].image);
            $('.teacher' + pointer + ' aside span a').html(teacher[i].name);
            pointer++;
        }
    }
}

function filter(){}