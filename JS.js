
    const signupForm = document.getElementById("signupForm");
  
    if (signupForm) {
      signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        // Use browser validation
        if (!signupForm.checkValidity()) {
          return;
        }
  
        // Get values
        const firstName = document.getElementById("FirstName").value.trim();
        const lastName = document.getElementById("LastName").value.trim();
        const email = document.getElementById("Email").value.trim();
        const password = document.getElementById("psw").value.trim();
        const reason = document.getElementById("comments").value.trim();
        const sex = document.querySelector('input[name="sex"]:checked').value;
  
        // Save to localStorage
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("sex", sex);
        localStorage.setItem("reason", reason);
        
        signupForm.style.display ="none";
       document.getElementById("profileInfo").style.display = "block";

       document.getElementById("profileFirstName").textContent = firstName;
       document.getElementById("profileLastName").textContent = lastName;
       document.getElementById("profileEmail").textContent = email;
       document.getElementById("profileSex").textContent = sex;
       document.getElementById("profileReason").textContent = reason;
        
       
      });
    }
  
   