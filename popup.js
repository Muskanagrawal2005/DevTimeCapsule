
document.getElementById("generate").addEventListener("click", async () => {
    document.getElementById("output").innerText = " Generating summary...";

    chrome.storage.local.get("activityLog", async (result) => {
        const logs = result.activityLog || [];
        const today = new Date();
        const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();

        const todayLogs = logs.filter((log) => {
            const logTime = new Date(log.timestamp).getTime();
            return logTime >= todayStart;
        });


        if (todayLogs.length === 0) {
            document.getElementById("output").innerText = "No activity tracked today.";
            return;
        }

        const prompt = `
You are an intelligent assistant that analyzes a developer's browser activity to assess productivity.

Below is a log of today's activity, including URLs visited, timestamps, page titles, and time spent:

${todayLogs
                .map(
                    (l) =>
                        `- [${l.timestamp}] ${l.title || l.url} (${l.type}, ${Math.round(
                            l.duration / 1000
                        )} seconds)`
                )
                .join("\n")}

 Please analyze and summarize the following:

1. Total time spent (in **hours, minutes, and seconds**) on each **coding platform** (e.g., LeetCode, CodeChef, Codeforces, etc.), and mention the **titles of the questions** solved.
2. List of **documentation/tutorial sites** visited (e.g., MDN, React Docs, GeeksforGeeks), with time spent on each.
3. Analyze **activity diversity**: Was time spent on problem-solving, documentation reading, debugging, research, etc.?
4. Time spent on **social media and entertainment platforms** (like WhatsApp, Instagram, Twitter, YouTube, YouTube Music), and what type of activities were done there.
5. Final **Productivity Verdict**: Was the developer focused, consistent, and productive? Score between **1 to 10**, along with a brief comment.

 Return the summary in **Markdown format**, structured as:

- **Section 1**: Time per Coding Platform  
- **Section 2**: Docs/Tutorials Accessed  
- **Section 3**: Activity Diversity  
- **Section 4**: Social Media & Entertainment Usage  
- **Section 5**: Final Productivity Verdict  
`;


        try {
            chrome.storage.local.get("geminiKey", async ({ geminiKey }) => {
                if (!geminiKey) {
                    document.getElementById("output").innerText = "⚠️ No API key found. Please set it in settings.";
                    return;
                }

                const response = await fetch(
                    `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
                    }
                );

                const data = await response.json();
                const summary =
                    data?.candidates?.[0]?.content?.parts?.[0]?.text || " Could not generate summary.";

                document.getElementById("output").innerHTML = marked.parse(summary);
            });

        } catch (err) {
            console.error("Gemini error:", err);
            document.getElementById("output").innerText =
                " Failed to reach Gemini API.";
        }
    });
});
