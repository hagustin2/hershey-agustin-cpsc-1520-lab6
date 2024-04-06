/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/


// =====TASK 1=====

let contactStore;

// 1.Create a function named “getContacts”.
async function getContacts() {

  // 2. Inside the getContacts function use the fetch api to load the contacts.json file.
  const res = await fetch('public/data/contacts.json');
  const contacts = await res.json();
  contactStore = [...contacts];

  // 4. Call your render function and pass the contacts data to the render function you will create in the next Task.
  renderContacts(contactStore);
}
//3. Call the getContacts function to load the json data.
getContacts();



// =====TASK 2=====

// 1. Create a function named "renderContacts".
function renderContacts(contacts) {

  // Select the element in the index.html document with the id of "contacts"
  const contactsContainer = document.getElementById('contacts');

  // Set the innerHTML of the div element to an empty string .
  contactsContainer.innerHTML = '';

  // Render the contact data using the display templating technique.
  // Loop through each one of the contacts
  contacts.forEach(contact => {
    
    // seed the template with the name and email properties.
      const template = `
        <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${contact.name}</h5>
        </div>
      <small>${contact.email}</small>
      </div>
      `;
      contactsContainer.insertAdjacentHTML('beforeend', template);
  });
}
