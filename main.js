function calculateBMI() {
    const age = parseInt(document.getElementById("inputAge").value);
    const weight = parseFloat(document.getElementById("inputWeight").value);
    const height = parseFloat(document.getElementById("inputHeight").value) / 100; // Convert cm to meters
    const gender = document.querySelector('input[name="inputGender"]:checked');
  
    if (isNaN(age) || age <= 0) {
      alert("Please enter a valid age.");
      return;
    }
    if (isNaN(weight) || weight <= 0) {
      alert("Please enter a valid weight.");
      return;
    }
    if (isNaN(height) || height <= 0) {
      alert("Please enter a valid height.");
      return;
    }
    if (!gender) {
      alert("Please select a gender.");
      return;
    }
  
    const bmi = weight / (height * height);
    console.log(`BMI Calculation: Weight = ${weight}, Height = ${height}, BMI = ${bmi}`); 
  
    const resultField = document.getElementById("result");
    resultField.value = bmi.toFixed(2); 
    highlightBMICategory(bmi);
  }
  
  function highlightBMICategory(bmi) {
    const categories = document.querySelectorAll(".bmi-category");
    categories.forEach((category) => {
        category.style.opacity = "0.5"; 
    });
  
    if (bmi < 18.5) {
        categories[0].style.opacity = "1"; 
    } else if (bmi >= 18.5 && bmi < 25) {
        categories[1].style.opacity = "1"; 
    } else if (bmi >= 25 && bmi < 30) {
        categories[2].style.opacity = "1";
    } else {
        categories[3].style.opacity = "1"; 
    }
  }
  
  function clearFields() {
    document.getElementById("inputAge").value = "";
    document.getElementById("inputWeight").value = "";
    document.getElementById("inputHeight").value = "";
    document.getElementById("result").value = "";
  
    const genderRadio = document.querySelector('input[name="inputGender"]:checked');
    if (genderRadio) {
      genderRadio.checked = false;
    }
  
    const categories = document.querySelectorAll(".bmi-category");
    categories.forEach((category) => {
        category.style.opacity = "1";
    });
  }