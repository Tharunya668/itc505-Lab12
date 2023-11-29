function generateMadLib() {
    // Get values from input fields
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const verb = document.getElementById('verb').value;
    const pluralNoun = document.getElementById('pluralNoun').value;
    const color = document.getElementById('color').value;
    const adverb = document.getElementById('adverb').value;
    const bodyPart = document.getElementById('bodyPart').value;
    const emotion = document.getElementById('emotion').value;
    const animal = document.getElementById('animal').value;
    const food = document.getElementById('food').value;

    // Generate Mad Lib
    const madLib = `The ${adjective} ${noun} ${verb} over the ${color} ${pluralNoun}. They were ${adverb} ${emotion} when they saw a ${animal} with a ${bodyPart} eating ${food}.`;

    // Display the result
