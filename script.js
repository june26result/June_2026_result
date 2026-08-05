function checkResult() {

    let reg = document.getElementById("reg").value.trim();
    let roll = document.getElementById("roll").value.trim();

    // CHANGE THESE TO YOUR OWN VALUES
    const correctReg = "04232045937";
    const correctRoll = "370628";

    // User can enter EITHER registration OR roll number
    if (reg === correctReg || roll === correctRoll) {

        document.querySelector(".box").style.display = "none";
        document.getElementById("loading").style.display = "block";

        // Wait 2 seconds, then open result page
        setTimeout(function () {
            window.location.href = "result.html";
        }, 2000);

    } else {
        alert("Invalid Registration No. or Roll No.");
    }
}
