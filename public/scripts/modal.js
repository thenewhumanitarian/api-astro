(function () {
    // Create modal elements
    var modal = document.createElement('div');
    modal.id = 'registration-wall';
    modal.className = 'modal';

    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    var form = document.createElement('form');
    form.id = 'registration-form';

    var title = document.createElement('h2');
    title.textContent = "We'd like to get to know you.";
    title.classList.add('modal-title');
    form.appendChild(title);

    var intro = document.createElement('p');
    intro.textContent = 'Please fill out this form to read this article. We value your privacy and will never share your information with anyone else.';
    intro.style.textAlign = 'center';
    intro.style.marginBottom = '20px';
    form.appendChild(intro);

    var fields = [
        { label: 'Name', type: 'text', id: 'name' },
        { label: 'Job Title', type: 'text', id: 'jobTitle' },
        { label: 'Organisation', type: 'text', id: 'organisation' },
        { label: 'Your Email', type: 'email', id: 'email' }
    ];

    fields.forEach(function (field) {
        var label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label + ':';

        var input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.id;

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
    });

    var interestsLabel = document.createElement('p');
    interestsLabel.textContent = 'Your Interests:';
    interestsLabel.classList.add('interests-label');
    form.appendChild(interestsLabel);

    // Create a grid div to hold all the checkboxContainer divs
    var grid = document.createElement('div');
    grid.classList.add('interest-grid');
    form.appendChild(grid);

    var interests = ['Aid and Policy', 'Conflict', 'Environment and Disasters', 'Investigations', 'Migration'];
    interests.forEach(function (interest) {
        var checkboxContainer = document.createElement('div');
        checkboxContainer.style.marginBottom = '10px';
        checkboxContainer.classList.add('checkbox-container');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = interest;
        checkbox.name = 'interests';
        checkbox.value = interest;

        var label = document.createElement('label');
        label.htmlFor = interest;
        label.textContent = interest;
        label.classList.add('checkbox-label');

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);
        grid.appendChild(checkboxContainer);
    });

    var submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    form.appendChild(submitButton);

    modalContent.appendChild(form);
    modal.appendChild(modalContent);

    // Append modal to body and blur the rest of the content
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden'; // disable body scroll
    var pageContent = document.createElement('div');
    pageContent.id = 'pageContent';
    while (document.body.firstChild !== modal) {
        pageContent.appendChild(document.body.firstChild);
    }
    document.body.insertBefore(pageContent, modal);
    pageContent.style.filter = 'blur(5px)'; // blur effect

    // CSS styles
    var styles = `
    h2 {
        margin-top: 0.25rem;
    }

    #registration-wall {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal {
        font-family: 'Roboto', sans-serif;
        display: block;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.4);
        backdrop-filter: blur(8px);
    }

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 90%;
        max-width: 640px;
    }

    .modal-title {
        color: #9f3e52;
        text-align: center;
        margin-bottom: 0.5rem;
    }

    #registration-form input {
        font-family: 'Roboto', sans-serif;
        font-size: 1.4rem;
    }

    .interest-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        column-gap: 1rem;
        row-gap: 0.5rem;
    }

    .checkbox-container {
        margin-bottom: 1rem;
        display: flex;
        column-gap: 1rem;
        justify-content: start;
        align-items: center;
    }

    .checkbox-label {
        margin: 0;
        font-size: 1.4rem;
    }

    .interests-label {
        margin: 1rem 0;
    }

    input[type=text], input[type=email], select {
        width: 100%;
        padding: 0.78rem;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
        margin-bottom: 0.75rem;
        font-size: 1rem;
    }

    input[type=text]:focus, input[type=email]:focus, input[type=checkbox]:focus {
        outline: none;
        border-color: #9f3e52;
        box-shadow: 0 0 0 2px rgba(159, 62, 82, 0.2);
    }

    input[type=submit] {
        width: 100%;
        font-weight: bold;
        font-size: 1rem;
        background-color: #9f3e52;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: #8d3749;
    }

    #pageContent {
        transition: filter 0.3s;
    }
    `;

    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Form submission logic
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Your form submission logic here
        // Example: Send data to server, then...
        closeModal();
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // re-enable scrolling
        pageContent.style.filter = 'none'; // remove blur
        while (pageContent.firstChild) {
            document.body.appendChild(pageContent.firstChild);
        }
        document.body.removeChild(pageContent);
    }
})();