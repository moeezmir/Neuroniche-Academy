 document.addEventListener("DOMContentLoaded", function() {
            const text = "Hello and welcome to NeuroNiche Academy! Here, we believe in the power of knowledge to transform lives. Unlock the secrets to a healthier mind and a happier life with NeuroNiche Academy! Our channel offers engaging lectures on psychology, cutting-edge information on mental health awareness, and practical guidance for improving your lifestyle. Discover how psychological principles can be applied to your everyday life, leading to greater understanding, improved relationships, and a more fulfilling existence. Subscribe and start building your best life today!";
            const words = text.split(" ");
            const container = document.getElementById("description");

            words.forEach(word => {
                const span = document.createElement("span");
                span.textContent = word + " ";
                container.appendChild(span);
            });
        });

        function shareWebsite() {
            const websiteURL = window.location.href;
            
            if (navigator.share) {
                navigator.share({
                    title: "NeuroNiche Academy",
                    text: "Check out this amazing platform!",
                    url: websiteURL
                }).catch((err) => console.error("Sharing failed:", err));
            } else {
                navigator.clipboard.writeText(websiteURL).then(() => {
                    alert("Website link copied! Share it manually.");
                }).catch((err) => console.error("Copy failed:", err));
            }
        }
        function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    document.getElementById("timeDisplay").innerHTML = `${formattedDate} | ${formattedTime}`;
}

setInterval(updateTime, 1000);
updateTime();
function searchWebsite() {
    let query = document.getElementById("searchQuery").value;
    if (query.trim() !== "") {
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
    } else {
        alert("Please enter a search term.");
    }
}
