document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("add-member-form");
    const memberList = document.getElementById("member-list");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("name").value;
        const emailInput = document.getElementById("email").value;

        if (nameInput.trim() !== "" && emailInput.trim() !== "") {
            addMember(nameInput, emailInput);
            form.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });

    function addMember(name, email) {
        const listItem = document.createElement("li");
        listItem.textContent = `${name} - ${email}`;
        memberList.appendChild(listItem);
    }
});
