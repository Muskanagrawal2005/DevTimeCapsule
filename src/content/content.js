if (
  window.location.hostname.includes("leetcode.com") &&
  window.location.pathname.includes("problems")
) {
  const questionTitle = document.querySelector("h1")?.innerText || "Unknown Question";
  chrome.runtime.sendMessage({
    type: "QUESTION_TITLE",
    title: questionTitle,
    url: window.location.href,
    timestamp: new Date().toISOString()
  });
}

else if (
  window.location.hostname.includes("codechef.com") &&
  window.location.pathname.includes("problems")
) {
  const questionTitle = document.querySelector(".notranslate")?.innerText || "Unknown Question";
  chrome.runtime.sendMessage({
    type: "QUESTION_TITLE",
    title: questionTitle,
    url: window.location.href,
    timestamp: new Date().toISOString()
  });
}

else if (
  window.location.hostname.includes("codeforces.com") &&
  window.location.pathname.includes("problem")
) {
  const questionTitle = document.querySelector("problem-statement .title")?.innerText || "Unknown Question";
  chrome.runtime.sendMessage({
    type: "QUESTION_TITLE",
    title: questionTitle,
    url: window.location.href,
    timestamp: new Date().toISOString()
  });
}

else if (
  window.location.hostname.includes("geeksforgeeks.org") &&
 ( window.location.pathname.includes("problem")|| window.location.pathname.includes("problems"))
) {
  const questionTitle = document.querySelector("g-m-0")?.innerText || "Unknown Question";
  chrome.runtime.sendMessage({
    type: "QUESTION_TITLE",
    title: questionTitle,
    url: window.location.href,
    timestamp: new Date().toISOString()
  });
}

