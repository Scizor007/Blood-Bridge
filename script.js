document.addEventListener("DOMContentLoaded", function() {
    
    typeTitle();

    function toggleChat() {
        const chatContainer = document.getElementById('chatContainer');
        chatContainer.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';

        if (chatContainer.style.display === 'block') {
            const chatMessages = document.getElementById("chatMessages");
            chatMessages.innerHTML = '';

            const aiGreeting = document.createElement("div");
            aiGreeting.className = "assistant-animation";
            aiGreeting.textContent = "Tony: Hi! How can I assist you today?";
            chatMessages.appendChild(aiGreeting);
        }
    }

    function sendMessage(messageText) {
        const userQuery = messageText || document.getElementById("userQuery").value.trim();
        if (!userQuery) return;

        const chatMessages = document.getElementById("chatMessages");

        // Display user message
        const userMessage = document.createElement("div");
        userMessage.className = "user-message";
        userMessage.textContent = "You: " + userQuery;
        chatMessages.appendChild(userMessage);

        document.getElementById("userQuery").value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Predefined responses
        const responses = {
                "What is blood?": "Blood is a bodily fluid in humans and animals that delivers essential substances like oxygen and nutrients to cells and transports waste products away.",
                "What are blood types?": "Blood types are determined by the presence or absence of specific antigens on red blood cells and are classified as A, B, AB, or O, with each being Rh-positive or Rh-negative.",
                "What is the rarest blood type?": "AB-negative is the rarest blood type in the general population.",
                "Why is blood red?": "Blood is red due to hemoglobin, an iron-rich protein in red blood cells that binds with oxygen, giving blood its red color.",
                "How much blood does the average person have?": "An average adult has about 5-6 liters of blood, accounting for roughly 7-8% of body weight.",
                "What does blood pressure measure?": "Blood pressure measures the force of blood against the walls of arteries, indicating heart health.",
                "What is a blood transfusion?": "A blood transfusion involves transferring blood or blood products from a donor to a recipient to replace lost components.",
                "Who can receive blood from an O-negative donor?": "O-negative blood can be given to any recipient, making O-negative donors universal donors.",
                "What is the purpose of a blood test?": "Blood tests assess health conditions, monitor organ function, check for infections, and diagnose diseases.",
                "What happens if I receive the wrong blood type?": "Receiving the wrong blood type can cause a severe reaction where the immune system attacks the transfused blood, potentially fatal.",
                "Can children have a different blood type than their parents?": "Yes, children can inherit different blood types based on the combination of genes from each parent.",
                "How does blood clotting work?": "Platelets and proteins in blood work together to form a clot at the injury site to prevent excessive bleeding.",
                "What is hemophilia?": "Hemophilia is a genetic disorder that impairs blood clotting, increasing bleeding risk.",
                "What are the risks of blood transfusions?": "Risks include allergic reactions, infections, iron overload, and immune reactions.",
                "Can I donate blood if I have a tattoo?": "Yes, after a waiting period of 6-12 months, depending on the regulations in your region.",
                "What is anemia?": "Anemia is a condition where there is a deficiency in red blood cells or hemoglobin, leading to fatigue and weakness.",
                "Why do some people faint after giving blood?": "Temporary blood pressure drops or dehydration may cause fainting after blood donation.",
                "Is blood donation painful?": "The needle insertion may cause slight discomfort, but the process is usually painless for most people.",
                "How long does it take to donate blood?": "Whole blood donation typically takes about 10-15 minutes, but the entire process may take 45-60 minutes.",
                "How is blood stored?": "Blood is stored in refrigerated conditions, with components like platelets and plasma having specific storage needs.",
                "What is plasma?": "Plasma is the yellowish liquid part of blood that carries nutrients, hormones, and waste products.",
                "How often can I donate plasma?": "Plasma donations can be made every 28 days, up to 13 times per year.",
                "What is the lifespan of red blood cells?": "Red blood cells live for about 120 days in the bloodstream.",
                "What is Rh factor?": "Rh factor is a protein that may be present on red blood cells. If present, blood is Rh-positive; if absent, it's Rh-negative.",
                "Why is Rh-negative blood rare?": "Rh-negative blood is less common because the Rh-negative allele is recessive in inheritance patterns.",
                "What is blood pressure?": "Blood pressure is the force of blood pushing against artery walls, measured in systolic and diastolic values.",
                "Can I donate if I have diabetes?": "People with well-managed diabetes can donate, but it depends on their condition and treatment.",
                "What is the purpose of a blood bank?": "Blood banks collect, test, and store blood for transfusions in emergencies or medical treatments.",
                "How does donating blood affect iron levels?": "Donating blood lowers iron levels temporarily, which the body replaces over time.",
                "Can I exercise after donating blood?": "Light activity is fine, but heavy exercise should be avoided for 24 hours post-donation."
    
        };

        // Check for a predefined answer
        const response = responses[userQuery];
        setTimeout(() => {
            const aiMessage = document.createElement("div");
            aiMessage.className = "ai-message";
            aiMessage.textContent = response || "Tony: I'm here to help! Let me look up some information for you.";
            chatMessages.appendChild(aiMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }

    // Make toggleChat function accessible globally
    window.toggleChat = toggleChat;
    window.sendMessage = sendMessage;
});