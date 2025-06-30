const defaultData = {
  name: "John Doe",
  fullName: "John Doe",
  email: "john.doe@example.com",
  phone: "9876543210",
  address: "123 Elm Street, Springfield",
  college: "Example University",
  message: "I am eager to explore opportunities and grow.",
  linkedin: "https://linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
  projectTitle: "AutoForm AI",
  teamName: "Code Crusaders",
  projectLink: "https://github.com/johndoe/autoform-ai",
  skills: "JavaScript, Node.js, MongoDB",
  experience: "Interned at Example Corp for 6 months",
  portfolio: "https://johndoe.dev",
  shippingAddress: "456 Maple Avenue, Metropolis",
  pincode: "123456",
  city: "Metropolis",
  state: "ExampleState",
  landmark: "Near Central Park"
};

function smartMatch(label, data) {
  const lower = label.toLowerCase().trim();

  if (["name", "full name"].includes(lower)) return data.fullName || data.name;
  if (lower.includes("email")) return data.email;
  if (lower.includes("phone") || lower.includes("mobile")) return data.phone;
  if (lower.includes("address") && !lower.includes("shipping")) return data.address;

  // ✅ FIXED: Removed `!lower.includes("name")`
  if (lower.includes("college") || lower.includes("university")) return data.college;

  if (lower.includes("linkedin")) return data.linkedin;
  if (lower.includes("github")) return data.github;

  if (lower.includes("statement") || lower.includes("sop") || lower.includes("why") || lower.includes("objective"))
    return data.message;

  if (lower.includes("message")) return data.message;

  // Hackathon-specific
  if (lower.includes("project") && lower.includes("title")) return data.projectTitle;
  if (lower.includes("team")) return data.teamName;
  if (lower.includes("project") && lower.includes("link")) return data.projectLink;

  // Internship-specific
  if (lower.includes("skills")) return data.skills;
  if (lower.includes("experience")) return data.experience;
  if (lower.includes("portfolio")) return data.portfolio;

  // Shopping-specific
  if (lower.includes("shipping address")) return data.shippingAddress;
  if (lower.includes("pincode") || lower.includes("zip")) return data.pincode;
  if (lower.includes("city")) return data.city;
  if (lower.includes("state")) return data.state;
  if (lower.includes("landmark")) return data.landmark;

  return null;
}


function fillGoogleForms(data) {
  const questionContainers = document.querySelectorAll("div[role='listitem']");

  questionContainers.forEach((container) => {
    const labelElement = container.querySelector(".M7eMe");
    if (!labelElement) return;

    const label = labelElement.innerText;
    const value = smartMatch(label, data);
    if (!value) return;

    const input = container.querySelector("input[type='text'], textarea, div[role='textbox']");
    if (input) {
      input.focus();
      if (input.tagName === "DIV") {
        input.innerText = value;
        input.dispatchEvent(new InputEvent("input", { bubbles: true }));
      } else {
        input.value = value;
        input.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
  });
}

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

window.addEventListener("load", () => {
  chrome.storage.local.get(["selectedProfile"], (res) => {
    const profile = res.selectedProfile || "default";
    chrome.storage.local.get([profile], (result) => {
      const data = result[profile] || defaultData;

      setTimeout(() => {
        fillStandardForms(data);
        fillGoogleForms(data);
      }, 2000); // Delay for full page load
    });
  });
});
