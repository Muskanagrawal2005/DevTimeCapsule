DevTimeCapsule 🧠📦

DevTimeCapsule is an AI-powered Chrome extension that silently tracks your daily developer activity — websites visited, code copied, questions solved — and generates a smart AI-written learning journal with a single click. It's your personal developer diary, helping you reflect, stay accountable, and grow consistently.

* * *

FEATURES

*   Activity Tracking: Automatically monitors popular developer websites like LeetCode, GitHub, Stack Overflow, GeeksforGeeks, etc.
    
*   Time Spent Analysis: Measures how much time you spend on each tracked platform.
    
*   Code & Question Logging: Logs the coding questions you open and the code you copy or write.
    
*   AI-Generated Learning Journal: Summarizes your daily activity into a reflective entry using GPT-style summarization.
    
*   One-Click Report Generation: Just click the extension icon to view your auto-generated journal instantly.
    
*   Local-Only Privacy: All tracking happens locally. No data is uploaded or shared unless explicitly exported by you.
    

* * *

HOW TO INSTALL

Follow these steps to load the extension manually in Chrome:

1.  Download or clone this repository:  
    git clone [https://github.com/Muskanagrawal2005/DevTimeCapsule.git](https://github.com/Muskanagrawal2005/DevTimeCapsule.git)
    
2.  Open Google Chrome and go to:  
    chrome://extensions/
    
3.  Enable Developer Mode (top-right corner).
    
4.  Click on Load Unpacked and select the DevTimeCapsule folder.
    
5.  The extension should now appear in your toolbar!
    

* * *

HOW THE AI WORKS

The extension logs your activity throughout the day. When you click the icon:

*   It gathers logs of visited pages, time spent, and any copied code.
    
*   It detects patterns like topic focus (e.g., dynamic programming).
    
*   It generates a journal entry like:  
    "You spent 1.5 hours today solving recursion and backtracking problems on LeetCode. You also browsed async patterns on GitHub. Great progress!"
    

You can read it, reflect on your progress, or copy it to a journal platform.

* * *

TECH STACK

*   Manifest V3
    
*   JavaScript
    
*   HTML / CSS
    
*   Chrome Storage API
    
*   Content Scripts
    
*   GPT-based Summarization via OpenAI API (optional)
    

* * *

FOLDER STRUCTURE

DevTimeCapsule/

*   background.js → Manages background tracking
    
*   content.js → Injected into websites to monitor activity
    
*   popup/
    
    *   popup.html → Extension popup UI
        
    *   popup.js → Logic for summary generation
        
*   icons/
    
    *   icon.png → Extension icon
        
*   manifest.json → Chrome extension configuration
    
*   README.md → This file
    

* * *

PERMISSIONS USED

*   tabs – To know which website you're currently using
    
*   activeTab – To access the URL and tab details
    
*   storage – To store logs locally on your machine
    
*   scripting – To inject content scripts into web pages
    

* * *

ROADMAP / IMPROVEMENTS

*   Export journal to Notion or Markdown file
    
*   Weekly and monthly productivity summaries
    
*   Topic-based skill tracking (e.g., how much DSA vs. System Design)
    
*   AI feedback on coding progress
    
*   Dark mode for popup UI
    

* * *

EXAMPLE USE CASE

Let’s say today you:

*   Opened 3 LeetCode problems
    
*   Copied 2 code snippets from Stack Overflow
    
*   Visited GitHub repositories on async/await
    
*   Spent 2 hours total on developer websites
    

When you click the extension, your DevTimeCapsule entry might look like:

"Today, you practiced LeetCode problems focusing on binary trees and recursion. You also explored async handling patterns in JavaScript through GitHub and Stack Overflow. Keep up the consistent learning!"

* * *

ABOUT THE AUTHOR

Muskan Agrawal  
Full-Stack Web Developer | Builder of useful & impactful tools  
GitHub: [https://github.com/Muskanagrawal2005](https://github.com/Muskanagrawal2005)

* * *

LICENSE

This project is licensed under the MIT License.  
You are free to use, modify, and distribute this extension with attribution.

* * *


FEEDBACK & CONTRIBUTIONS

Found a bug or want to suggest a feature?  
Feel free to open an issue or create a pull request.

Let’s build better dev habits together! 🚀

* * *

