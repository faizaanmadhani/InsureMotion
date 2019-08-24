// roadRage Value between 0.0-1.0
// Distraction between 0.0-1.0

/
function detRates(roadRage, distraction) {
  if (roadRage > 0.8 && distraction > 0.8) {
    return "Your Insurance Rates will likely see no decrease in value"
  } else if (roadRage > 0.6 && distraction > 0.6) {
    return "Your Insurance Rates will likely see little decrease in value (Expect a 0-1% decrease)"
  } else if (roadRage > 0.6 || distraction > 0.6) {
    return "Your Insurance Rates will likely see little decrease in value (Expect a 1-2% decrease)"
  } else if (roadRage < 0.3 && distraction < 0.3) {
    return "Your Insurance Rates will likely see a great decrease in value (Expect a 5-7% decrease or more)"
  } else(roadRage < 0.3 && distraction < 0.3) {
    return "Your Insurance Rates will likely see a moderate decrease in value (Expect a 4-5% decrease)"
  }

}

function angerScoring(angerVal) {

  // Based on anger values output a level of anger detected in addition to ways to reduce such anger

}
