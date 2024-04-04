$(document).ready(function() {
    // Function to simulate loading progress
    function simulateLoading(progress) {
      $('#loading-bar').css('width', progress + '%');
    }
  
    // Simulate loading progress from 0% to 100% in increments
    let progress = 0;
    const interval = setInterval(function() {
      simulateLoading(progress);
      progress += 10;
      if (progress > 100) {
        clearInterval(interval);
        // Hide loading bar when loading is complete
        $('#loading-bar-container').hide();
      }
    }, 500); // Adjust the interval duration as needed
  });