function signup() {
    document.getElementById("home_login").style.display = "none";
    document.getElementById("home_signup").style.display = "block";
}
function profile() {
    document.getElementById("news_feed").style.display = "none";
    document.getElementById("courses").style.display = "none";
    document.getElementById("wall").style.display = "inline-block";
}
function courses() {
    document.getElementById("news_feed").style.display = "none";
    document.getElementById("wall").style.display = "none";
    document.getElementById("courses").style.display = "inline-block";
}
function home() {
    document.getElementById("news_feed").style.display = "inline-block";
    document.getElementById("wall").style.display = "none";
    document.getElementById("courses").style.display = "none";
}