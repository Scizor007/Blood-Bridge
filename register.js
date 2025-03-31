document.addEventListener("DOMContentLoaded", function () {
    const registerButton = document.getElementById("registerButton");

    registerButton.addEventListener("click", function () {
        // Redirect to the new page
        window.location.href = "donor-eli.html"; // Change to the correct level 1 page

        // Optionally, if you want to show "Level 1" before redirecting, you can use a timeout:
        
        const level1Element = document.createElement("div");
        level1Element.id = "levelText";
        level1Element.style.position = "fixed";
        level1Element.style.top = "50%";
        level1Element.style.left = "50%";
        level1Element.style.transform = "translate(-50%, -50%)";
        level1Element.style.color = "red";
        level1Element.style.fontSize = "48px";
        level1Element.style.fontFamily = "'Press Start 2P', cursive";
        level1Element.style.zIndex = "1000";
        document.body.appendChild(level1Element);

        let index = 0;
        const text = "Level 1";
        
        function type() {
            if (index < text.length) {
                level1Element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 200); // Typing speed
            } else {
                setTimeout(() => {
                    window.location.href = "level1.html"; // Redirect after typing is complete
                }, 1000); // Redirect after a delay
            }
        }

        type(); // Start typing effect
        
    });
});