const form = document.getElementById("autofill-form");

// Load saved values
chrome.storage.sync.get(null, (data) => {
  for (const key in data) {
    if (form.elements[key]) {
      form.elements[key].value = data[key];
    }
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = {};
  for (const element of form.elements) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  }

  chrome.storage.sync.set(formData, () => {
    alert("Auto-fill data saved!");
  });
});
