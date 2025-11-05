function displayCurrentDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("currentDateTime").textContent = dateTimeString;

    const lastModified = document.lastModified;
    document.getElementById(
        "lastModified"
    ).textContent = `Last Modification: ${lastModified}`;
}

// Call the function when the page loads
displayCurrentDateTime();

//  seconds
setInterval(displayCurrentDateTime, 1000);