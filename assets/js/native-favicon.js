document.getElementById("baseicon1").remove()
document.getElementById("baseicon2").remove()
const link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
    const browserColorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    if (browserColorScheme == "dark") {
        console.log("dark")
        link.href = '/assets/favicon/favicon_dark.png';
    } else {
        console.log("light")
        link.href = '/assets/favicon/favicon_light.png';
}