const buttons = document.querySelectorAll('[role="button"');
const descriptions = document.querySelectorAll('[role="description"]');

function handleButtonClick(event) {
    const id = event.target.id;

    //hide all descriptions
    descriptions.forEach((description) => {
        description.hidden = true;
    })

    //mark all tabs as unselected
    buttons.forEach((button) => {
        button.setAttribute('aria-selected', false);
    })

    //mark clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);

    //show the description related to the button
    const description = document.querySelector(`[aria-labelledby="${id}"]`);
    description.hidden = false;

}

buttons.forEach((button) => button.addEventListener('click', handleButtonClick));