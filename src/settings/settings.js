document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("geminiKey", (result) => {
    if (result.geminiKey) {
      document.getElementById("apikey").value = result.geminiKey;
    }
  });
});

document.getElementById("saveKey").addEventListener("click", () => {
  const key = document.getElementById("apikey").value.trim();
  if (!key) {
    document.getElementById("status").innerText = "❌ Key cannot be empty.";
    return;
  }

  chrome.storage.local.set({ geminiKey: key }, () => {
    document.getElementById("status").innerText = "✅ Key saved successfully!";
  });
});
