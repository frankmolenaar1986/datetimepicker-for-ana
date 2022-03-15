document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date();

    flatpickr("#myDateTimePicker", { 
        // Documentation: https://flatpickr.js.org/
        // General settings
        allowInput:		true,
        theme: 			"material_green",      
        
        // Date settings
        minDate:        "today", 
        disable:        [
            function(date) {
                // return true to disable
                return (date.getDay() === 0 || date.getDay() === 6);
    
            }
        ],
        
        // Time Settings
        enableTime:     true,
        time_24hr:      true,
        minTime:        "9:00",
        maxTime:        "17:00"
                
    });
});