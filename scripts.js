// Toggle paragraph
const showParagraphButton = document.getElementById("showParagraphButton");
const hiddenParagraph = document.getElementById("hiddenParagraph");

// Form values
const messageForm = document.getElementById("messageForm");
const messageFormNameInput = document.getElementById("messageFormName");
const messageFormEmailInput = document.getElementById("messageFormEmail");
const messageFormMessageInput = document.getElementById("messageFormMessage");
const errorMessage = document.getElementById("errorMessage");
const messagesContainer = document.getElementById("messagesContainer");

showParagraphButton.addEventListener("click", ()=>
{
    if (hiddenParagraph.classList.contains("hidden"))
    {
        hiddenParagraph.classList.remove("hidden");
        showParagraphButton.textContent = "Hide paragraph";
    }

    else
    {
        hiddenParagraph.classList.add("hidden");
        showParagraphButton.textContent = "Show paragraph";
    }
})

messageFormNameInput.addEventListener("focus", ()=>
{
    messageFormNameInput.classList.remove("errorInput");
    messagesContainer.innerHTML = "";
})

messageFormEmailInput.addEventListener("focus", ()=>
{
    messageFormEmailInput.classList.remove("errorInput");
    messagesContainer.innerHTML = "";
})

messageFormMessageInput.addEventListener("focus", ()=>
{
    messageFormMessageInput.classList.remove("errorInput");
    messagesContainer.innerHTML = "";
})

messageForm.addEventListener("submit", (e)=>
{
    let validForm = true;

    e.preventDefault();

    validForm = validateFormNameInput();
    validForm = validateFormEmailnput();
    validForm = validateFormMessagelnput();

    if (validForm)
    {
        let newSuccessMessage = document.createElement("span");
        newSuccessMessage.textContent = 'The form was send!';
        newSuccessMessage.classList.add('successMessage');
        messagesContainer.appendChild(newSuccessMessage);
    }
})

function validateFormNameInput()
{
    if (!messageFormNameInput.value)
    {
        messageFormNameInput.classList.add("errorInput");

        addErrorMessage("The name should not be empty");

        return false;
    }

    return true;
}

function validateFormEmailnput()
{
    if (!messageFormEmailInput.value)
    {
        messageFormEmailInput.classList.add("errorInput");

        addErrorMessage("The email should not be empty");

        return false;
    }

    return true;
}

function validateFormMessagelnput()
{
    if (!messageFormMessageInput.value)
    {
        messageFormMessageInput.classList.add("errorInput");

        addErrorMessage("The message should not be empty");

        return false;
    }

    return true;
}

function addErrorMessage(message)
{
    let newErrorMessage = document.createElement("span");
    newErrorMessage.textContent = message;
    newErrorMessage.classList.add("errorMessage");
    messagesContainer.appendChild(newErrorMessage);
}