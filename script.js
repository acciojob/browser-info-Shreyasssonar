//your JS code here. If required.
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const browserInfoDiv = document.getElementById("browser-info");

  const browserName = navigator.appName;
  const browserVersion = navigator.appVersion;

  browserInfoDiv.textContent = "You are using " + browserName + " version " + browserVersion;
});
