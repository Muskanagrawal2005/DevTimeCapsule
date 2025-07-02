let activeTab = null;
let startTime = null;
let isChromeFocused = true;

// 🧠 Track tab switches
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  if (!isChromeFocused) return;
  const tab = await chrome.tabs.get(activeInfo.tabId);
  if (tab.url) handleTabChange(tab);
});

// 🧠 Track when a tab reloads
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!isChromeFocused) return;
  if (tab.active && changeInfo.status === "complete") {
    handleTabChange(tab);
  }
});


// ✅ Track Chrome window focus/unfocus
chrome.windows.onFocusChanged.addListener(async (windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    // User left Chrome
    isChromeFocused = false;
    stopTracking();
  } else {
    // User came back to Chrome
    isChromeFocused = true;
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.url) handleTabChange(tab);
  }
});

function stopTracking() {
  if (startTime && activeTab) {
    const duration = Date.now() - startTime;
    logVisit(activeTab.url, activeTab.title, duration);
    startTime = null;
  }
}

function handleTabChange(tab) {
  stopTracking(); // Stop previous tab's timer
  activeTab = tab;
  startTime = Date.now();
}

function logVisit(url, title, duration) {
  const domain = new URL(url).hostname;
  const visitLog = {
    url,
    title,
    duration,
    timestamp: new Date().toISOString(),
    type: (url.includes("leetcode.com/problems") ||
           url.includes("codechef.com") ||
           url.includes("codeforces.com") ||
           url.includes("geeksforgeeks.org")) ? "question" : "doc"
  };

  chrome.storage.local.get(["activityLog"], (result) => {
    const logs = result.activityLog || [];
    logs.push(visitLog);
    chrome.storage.local.set({ activityLog: logs });
  });
}
