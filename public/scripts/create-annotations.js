// Define a counter to generate unique IDs
let annotationCounter = 1;

// Add a click event listener to the modal close button
const modalClose = document.querySelector('.modal-close');
modalClose.addEventListener('click', function () {
    const modalAnnotation = document.querySelector('.modal-annotation');
    modalAnnotation.classList.remove('active');
});

// Add a click event listener to the modal annotation to close it when clicked
const modalAnnotation = document.querySelector('.modal-annotation');
modalAnnotation.addEventListener('click', function () {
    // Check if the modal annotation has the 'active' class
    if (modalAnnotation.classList.contains('active')) {
        // Remove the 'active' class to hide the modal annotation
        modalAnnotation.classList.remove('active');
    }
});

// Define the function to create annotations
function createAnnotations() {
    const divElements = document.querySelectorAll('.field-name-body');
    const spanElements = document.querySelectorAll('.tooltip');

    spanElements.forEach(function (spanElement) {
        // Get the tooltip content from the span
        const tooltipContent = spanElement.getAttribute('data-tooltip');
        // Get the position of the div relative to the viewport
        const divRect = divElements[0].getBoundingClientRect(); // Assuming there's only one div with class .field-name-body
        // Get the position of the span relative to the viewport
        const spanRect = spanElement.getBoundingClientRect();
        // Calculate the vertical position of the span relative to the div
        const positionFromTop = spanRect.top - divRect.top;
        // Create a unique ID for each annotation
        const annotationID = `annotation-${annotationCounter}`;
        annotationCounter++;
        // Create a new element with the unique ID
        const newElement = document.createElement('div');
        newElement.id = annotationID;
        newElement.textContent = tooltipContent;
        // Set the CSS styles for the new element
        newElement.classList.add('side-annotation');
        newElement.style.top = `${positionFromTop}px`; // Use the calculated position + 100px
        newElement.style.opacity = '0'; // Initially set opacity to 0 (invisible)
        // Append the new element to the parent div
        divElements[0].appendChild(newElement); // Assuming there's only one div with class .field-name-body
        // Add a click event listener to the span to control visibility
        spanElement.addEventListener('mouseenter', function () {
            // Fade out all annotations
            const allAnnotations = document.querySelectorAll('.side-annotation');
            allAnnotations.forEach(function (annotation) {
                annotation.style.opacity = '0';
            });
            // Fade in the clicked annotation
            const clickedAnnotation = document.getElementById(annotationID);
            clickedAnnotation.style.opacity = '1';
        });

        spanElement.addEventListener("click", function () {
            // Toggle the 'active' class for the modal annotation (for mobile)
            const modalAnnotation = document.querySelector('.modal-annotation');
            modalAnnotation.classList.add('active');
            // Update the content of the modal annotation
            const modalAnnotationContent = document.getElementById('modal-annotation-content');
            modalAnnotationContent.textContent = tooltipContent; we
        })
    });
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', createAnnotations);

// Re-run the function on window resize
window.addEventListener('resize', createAnnotations);