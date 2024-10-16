document.getElementById('resumeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect user inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Create a query string to pass data to the resume page
    const resumeData = `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&education=${encodeURIComponent(education)}&experience=${encodeURIComponent(experience)}&skills=${encodeURIComponent(skills)}`;

    // Redirect to resume page
    window.location.href = `resume.html?${resumeData}`;
});
