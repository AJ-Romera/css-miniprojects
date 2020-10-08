// Miniproject 1: Your Age in Days

function ageInDays() {
    alert('I´m going to tell you your age in days');
    var birthYear = prompt('What year where you born... good friend?');
    var currentYear = prompt('Tell me what year it´s right now please');
    var ReturnAgeInDays = (currentYear - birthYear) * 365;
    var h2 = document.createElement('h2');
    var textAnswer = document.createTextNode('You are '+ReturnAgeInDays+' days young :D');
    h2.setAttribute('id', 'ageInDays');
    h2.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h2);
}

function reset() {
    document.getElementById('ageInDays').remove();
}