document.getElementById('detector-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var age = parseInt(document.getElementById('age').value);
  var sex = document.getElementById('sex').value;
  var chestPain = parseInt(document.getElementById('chestPain').value);
  var systolicBP = parseInt(document.getElementById('systolicBP').value);
  var diastolicBP = parseInt(document.getElementById('diastolicBP').value);
  var cholesterol = parseInt(document.getElementById('cholesterol').value);
  var fastingBS = parseInt(document.getElementById('fastingBS').value);
  var restingECG = parseInt(document.getElementById('restingECG').value);
  var maxHR = parseInt(document.getElementById('maxHR').value);
  var exerciseAngina = parseInt(document.getElementById('exerciseAngina').value);
  var oldPeak = parseFloat(document.getElementById('oldPeak').value);
  var stSlope = parseInt(document.getElementById('stSlope').value);
  
  var risk = calculateRisk(age, sex, chestPain, systolicBP, diastolicBP, cholesterol, fastingBS, restingECG, maxHR, exerciseAngina, oldPeak, stSlope);
  
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = 'Risk of cardiovascular disease: ' + (risk ? 'High' : 'Low');
});

function calculateRisk(age, sex, chestPain, systolicBP, diastolicBP, cholesterol, fastingBS, restingECG, maxHR, exerciseAngina, oldPeak, stSlope) {
  var risk = 0;
  if (sex === 'male') {
    risk += age > 45 ? 1 : 0;
    risk += cholesterol > 200 ? 1 : 0;
    risk += systolicBP > 140 ? 1 : 0;
    risk += diastolicBP > 90 ? 1 : 0;
    risk += fastingBS > 100 ? 1 : 0;
    risk += chestPain > 2 ? 1 : 0;
    risk += maxHR < 100 ? 1 : 0;
    risk += oldPeak > 2 ? 1 : 0;
    risk += stSlope === 2 ? 1 : 0;
    risk += restingECG === 1 ? 1 : 0;
    risk += exerciseAngina === 1 ? 1 : 0;
  } else {
    risk += age > 55 ? 1 : 0;
    risk += cholesterol > 200 ? 1 : 0;
    risk += systolicBP > 140 ? 1 : 0;
    risk += diastolicBP > 90 ? 1 : 0;
    risk += fastingBS > 100 ? 1 : 0;
    risk += chestPain > 2 ? 1 : 0;
    risk += maxHR < 100 ? 1 : 0;
    risk += oldPeak > 2 ? 1 : 0;
    risk += stSlope === 2 ? 1 : 0;
    risk += restingECG === 1 ? 1 : 0;
    risk += exerciseAngina === 1 ? 1 : 0;
  }
  
  var threshold = 5;
  return risk > threshold;
}
