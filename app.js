// import functions and grab DOM elements

const nameField = document.getElementById('name-field');
const verbField = document.getElementById('verb-field');
const pronounField = document.getElementById('pronoun-field');
const locaField = document.getElementById('loca-field');
const nounField = document.getElementById('noun-field');
const pronounField2 = document.getElementById('pronoun2-field');
const pronounField3= document.getElementById('pronoun3-field');
const pronounField4 = document.getElementById('pronoun4-field');
const nounField2 = document.getElementById('noun2-field');
const pronounField5 = document.getElementById('pronoun5-field');
const verbField2 = document.getElementById('verb2-field');
const pronounField6 = document.getElementById('pronoun6-field');
const nounField3 = document.getElementById('noun3-field');

const revealStory = document.getElementById('reveal-button');

const name = document.getElementById('name');
const verb = document.getElementById('verb');
const pronoun = document.getElementById('pronoun');
const loca = document.getElementById('loca');
const noun = document.getElementById('noun');
const pronoun2 = document.getElementById('pronoun2');
const pronoun3 = document.getElementById('pronoun3');
const pronoun4 = document.getElementById('pronoun4');
const noun2 = document.getElementById('noun2');
const pronoun5 = document.getElementById('pronoun5');
const verb2 = document.getElementById('verb2');
const pronoun6 = document.getElementById('pronoun6');
const noun3 = document.getElementById('noun3');



// initialize global state

// set event listeners 

revealStory.addEventListener('click', () => {
    let newName = nameField.value;
    name.textContent = newName;
    
    let newVerb = verbField.value;
    verb.textContent = newVerb;
    
    let newPronoun = pronounField.value;
    pronoun.textContent = newPronoun;

    let newLoca = locaField.value;
    loca.textContent = newLoca;

    let newNoun = nounField.value;
    noun.textContent = newNoun;

    let newPronoun2 = pronounField2.value;
    pronoun2.textContent = newPronoun2;

    let newPronoun3 = pronounField3.value;
    pronoun3.textContent = newPronoun3;

    let newPronoun4 = pronounField4.value;
    pronoun4.textContent = newPronoun4;

    let newNoun2 = nounField2.value;
    noun2.textContent = newNoun2;

    let newPronoun5 = pronounField5.value;
    pronoun5.textContent = newPronoun5;

    let newVerb2 = verbField2.value;
    verb2.textContent = newVerb2;

    let newPronoun6 = pronounField6.value;
    pronoun6.textContent = newPronoun6;

    let newNoun3 = nounField3.value;
    noun3.textContent = newNoun3;

  });


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
