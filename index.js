let main = document.getElementById("main");
let hide_info = document.createElement("div");
let header = document.createElement("h1");
let p = document.createElement("p");
let button = document.createElement("button");

button.textContent = "Sign In";
p.textContent = "To keep Connected with us please login with your personal info";
header.textContent = "Welcome Back";
let hide_infoStyle = {
    "position": 'absolute',
    "height": "60vh",
    "width": "25vw",
    "background-color": '#c82128',
    'z-index': '1',
    "left": "25%",
    "border-radius": "10px 0 0 10px",
    "display": "flex",
    "justify-content": "space-evenly",
    "align-items": "center",
    "flex-direction": "column",
    "transition": "left 0.5s ease-in-out" // Add CSS transition
};

let buttonStyle = {
    "width": "220px",
    "outline": "none",
    "border-radius": "30px",
    "height": "60px",
    "border": 'white 2px solid',
    "color": "white",
    "background-color": "transparent",
    "cursor": "pointer",
    
};
let paragraphStyle = {
    "transition": "left 0.5s ease-in-out",
    "color" : "white",
    "font-style" : "italic",
    "width" : "70%",
}
let headerStyle = {
    "font-family" : "Arial, Helvetica, sans-serif",
    "color" : "white",
    "font-size" : "30px",
    "font-weight":"800",
    "transition": "left 0.5s ease-in-out",
}
Object.assign(button.style, buttonStyle);
Object.assign(hide_info.style, hide_infoStyle);
Object.assign(p.style , paragraphStyle);
Object.assign(header.style , headerStyle);
hide_info.append(header);
hide_info.append(p);
hide_info.append(button);
main.append(hide_info);

let location_1 = "left";

button.addEventListener("click", () => {
    if (location_1 == "left") {
        hide_info.style.left = "25%";
        hide_info.style.borderRadius = "10px 0 0 10px";
        location_1 = "right";
        p.textContent = "To keep Connected with us please login with your personal info";
        header.textContent = "Welcome Back";
        button.textContent = "Sign In";
    } else if (location_1 == "right") {
        location_1 = "left";
        hide_info.style.left = "50%";
        hide_info.style.borderRadius = "0 10px 10px 0";
        p.textContent = "Enter your personal details and start the journey with us!";
        header.textContent = "Hello, Friend!";
        button.textContent = "Sign Up";
    }
});
button.addEventListener("mouseover" , ()=>{
    button.style.color = "#c82128";
    button.style.backgroundColor = "white";
});
button.addEventListener("mouseout" , ()=>{
    button.style.color = "white";
    button.style.backgroundColor = "#c82128";


});