const defaultData = {
  name: "Naina Thippani",
  email: "naina@example.com",
  phone: "9876543210",
  address: "Hyderabad, Telangana",
  college: "XYZ Institute of Technology",
  message: "I am passionate about learning and innovation.",
  linkedin: "https://linkedin.com/in/naina",
  github: "https://github.com/naina"
};

function smartMatch(label, data) {
  const lower = label.toLowerCase();
  if (lower.includes("name")) return data.name;
  if (lower.includes("email")) return data.email;
  if (lower.includes("phone") || lower.includes("mobile")) return data.phone;
  if (lower.includes("address")) return data.address;
  if (lower.includes("college") || lower.includes("university")) return data.college;
  if (lower.includes("linkedin")) return data.linkedin;
  if (lower.includes("github")) return data.github;
  if (lower.includes("statement") || lower.includes("sop") || lower.includes("why"))
    return data.message;
  if (lower.includes("message")) return data.message;
  return null;
}

// For Google Forms
function fillGoogleForms(data) {
  const questionContainers = document.querySelectorAll("div[role='listitem']");

  questionContainers.forEach((container) => {
    const labelElement = container.querySelector(".M7eMe"); // class for form question
    if (!labelElement) return;

    const label = labelElement.innerText;
    const value = smartMatch(label, data);
    if (!value) return;

    const input = container.querySelector("input[type='text'], textarea, div[role='textbox']");
    if (input) {
      input.focus();
      if (input.tagName === "DIV") {
        // For div[role='textbox']
        input.innerText = value;
        input.dispatchEvent(new InputEvent("input", { bubbles: true }));
      } else {
        input.value = value;
        input.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
  });
}

// For normal forms
function fillStandardForms(data) {
  const inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], textarea");

  inputs.forEach((input) => {
    const label = document.querySelector(`label[for='${input.id}']`)?.innerText ||
      input.name || input.placeholder || "";
    const value = smartMatch(label, data);

    if (value && !input.value) {
      input.value = value;
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }
  });
}

// Run both
window.addEventListener("load", () => {
  chrome.storage.sync.get(defaultData, (data) => {
    // Delay to wait for Google Forms to fully render
    setTimeout(() => {
      fillStandardForms(data);
      fillGoogleForms(data);
    }, 2000);
  });
});
