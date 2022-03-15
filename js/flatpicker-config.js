document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#myDateTimePicker", { 
        dateFormat:		"n/j/Y H:i", 
        enableTime:		true, 
        allowInput:		true,
        theme: 			"material_green"
    });
});