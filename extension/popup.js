const form = document.getElementById("autofill-form");
const profileSelect = document.getElementById("profileSelect");
const hackathonExtra = document.getElementById("hackathonExtra");
const internshipExtra = document.getElementById("internshipExtra");
const shoppingExtra = document.getElementById("shoppingExtra");
const teamMembersContainer = document.getElementById("teamMembers");
const addMemberBtn = document.getElementById("addMember");

// Show/hide extra fields
function toggleSections(profile) {
  hackathonExtra.style.display = profile === "hackathon" ? "block" : "none";
  internshipExtra.style.display = profile === "internship" ? "block" : "none";
  shoppingExtra.style.display = profile === "shopping" ? "block" : "none";
}

profileSelect.addEventListener("change", () => {
  const selected = profileSelect.value;
  toggleSections(selected);
  chrome.storage.local.set({ selectedProfile: selected });
  loadProfileData(selected);
});

// Add a team member
addMemberBtn.addEventListener("click", () => {
  const memberDiv = document.createElement("div");
  memberDiv.className = "team-member";
  memberDiv.innerHTML = `
    <input placeholder="Member Name" class="member-name" />
    <input placeholder="Member Gmail" class="member-gmail" />
    <input placeholder="GitHub" class="member-github" />
    <input placeholder="LinkedIn" class="member-linkedin" />
    <hr />
  `;
  teamMembersContainer.appendChild(memberDiv);
});

// Load saved values
function loadProfileData(profile) {
  chrome.storage.local.get([profile], (res) => {
    const data = res[profile] || {};
    for (const element of form.elements) {
      if (element.name && data[element.name]) {
        element.value = data[element.name];
      }
    }

    // Load team members if present
    teamMembersContainer.innerHTML = "";
    if (Array.isArray(data.teamMembers)) {
      data.teamMembers.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.className = "team-member";
        memberDiv.innerHTML = `
          <input placeholder="Member Name" class="member-name" value="${member.name || ''}" />
          <input placeholder="Member Gmail" class="member-gmail" value="${member.gmail || ''}" />
          <input placeholder="GitHub" class="member-github" value="${member.github || ''}" />
          <input placeholder="LinkedIn" class="member-linkedin" value="${member.linkedin || ''}" />
          <hr />
        `;
        teamMembersContainer.appendChild(memberDiv);
      });
    }
  });
}

// Save data
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const profile = profileSelect.value;
  const formData = {};

  for (const element of form.elements) {
    if (element.name) {
      formData[element.name] = element.value;
    }
  }

  // Capture team members if hackathon
  if (profile === "hackathon") {
    const members = [];
    const memberDivs = document.querySelectorAll(".team-member");
    memberDivs.forEach(div => {
      members.push({
        name: div.querySelector(".member-name")?.value || "",
        gmail: div.querySelector(".member-gmail")?.value || "",
        github: div.querySelector(".member-github")?.value || "",
        linkedin: div.querySelector(".member-linkedin")?.value || ""
      });
    });
    formData.teamMembers = members;
  }

  chrome.storage.local.set({ [profile]: formData, selectedProfile: profile }, () => {
    alert("Data saved for profile: " + profile);
  });
});

// Load initial profile
chrome.storage.local.get("selectedProfile", (res) => {
  const selected = res.selectedProfile || "default";
  profileSelect.value = selected;
  toggleSections(selected);
  loadProfileData(selected);
});
