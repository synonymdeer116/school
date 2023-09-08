let inFrame

try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}

// Cloaking Code
if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank")
    if (!popup || popup.closed) {
        alert("Allow popups and redirects to hide this from showing up in your history.")
    } else {
        const doc = popup.document
        const iframe = doc.createElement("iframe")
        const style = iframe.style
        const link = doc.createElement("link")

        const name = localStorage.getItem("name") || "Home | Schoology";
        const icon = localStorage.getItem("icon") || "https://lh6.googleusercontent.com/I7dP_MfzS765iMzf0654fcU9PdffEqQ2-dxKll6aqbtNsuUkPGe_yF3qRLG0lMi3B7fZTuTeNxDxzQbRQFOrgjGlnSaMeEbhA0jzxQhhXhjsl0plNk1IRLXPb20LOBiIBElj-mmu";
        
        doc.title = name;
        link.rel = "icon";
        link.href = icon;
        
        iframe.src = location.href 
        style.position = "fixed"
        style.top = style.bottom = style.left = style.right = 0
        style.border = style.outline = "none"
        style.width = style.height = "100%"

        doc.head.appendChild(link);
        doc.body.appendChild(iframe)
        location.replace("https://classroom.google.com")
    }
}
