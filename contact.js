// फॉर्म सबमिट होने पर अलर्ट दिखाने के लिए छोटा सा JS कोड
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // पेज रीलोड होने से रोकेगा
    alert("धन्यवाद मुस्कान! आपका मैसेज रिकॉर्ड कर लिया गया है। (यह बेसिक JS का सही उपयोग है)");
    this.reset(); // फॉर्म खाली कर देगा
});
