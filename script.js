document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;

    const resumeContent = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <section>
            <h3>Summary</h3>
            <p>${summary}</p>
        </section>
        <section>
            <h3>Education</h3>
            <p>${education}</p>
        </section>
        <section>
            <h3>Experience</h3>
            <p>${experience}</p>
        </section>
    `;

    document.getElementById('generated-resume').innerHTML = resumeContent;
});
