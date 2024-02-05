//your JS code here. If required.
function submitForm() {
    // Get form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Format the form information with spaces
    const formattedInfo = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail ID: ${email}\nPhone Number: ${phoneNumber}`;

    // Display alert with formatted information
    alert(formattedInfo);
}
