let firstscreen = document.getElementById("firstscreen")
let secondscreen = document.getElementById("secondscreen");
let thirdscreen = document.getElementById("thirdscreen")
let fourthscreen = document.getElementById("forthscreen")
let dialScreen = document.getElementById("dialScreen")
let fifthscreen = document.getElementById("fifthscreen")
let glo = document.getElementById("glo")
let call = document.getElementById("call")
let hole = document.getElementById("hole")
let space = document.getElementById("space")
let three = document.getElementsByClassName("three")
let wrong = document.getElementById("wrong")
let dialing = document.getElementById("dialing")
let shownumber = document.getElementById("shownumber")
let phonebody = document.getElementById("phonebody")
let icons = document.getElementById("icons")
let calling = document.getElementById("calling")
let aircall = document.getElementById("aircall")
let pictures = document.getElementById("gen")
let fifthscreen2 = document.getElementById("fifthscreen2")
let sixthscreen = document.getElementById("sixthscreen")

secondscreen.style.display = "none"
thirdscreen.style.display = "none"
fourthscreen.style.display = "none"
dialScreen.style.display = "none"
aircall.style.display = "none"
fifthscreen.style.display = "none"
sixthscreen.style.display = "none"
wrong.innerHTML = ""
firstscreen.addEventListener("click", () => {
    firstscreen.style.display = "none"
    secondscreen.style.display = "block"
})
let i = 0;
// let span = [...Array(6)].forEach((el, i)=>{
//     hole.innerHTML += `
//         <span class='first' id="first${i}"></span>
//     `
// })

for (let index = 0; index < [...Array(6)].length; index++) {
    hole.innerHTML += `
        <span class='first' id="first${index}"></span>
    `
}
function clearPass() {
    i = 0
    console.log(i);
    document.querySelectorAll(".first").forEach((el) => {
        el.style.backgroundColor = "transparent"
    })
    // document.getElementById(`first${i}`).style.backgroundColor = "transparent";
    // let updated =  userPass.slice(0, userPass.length-1);
    userPass = ""
}
// function clear(){

// }
let userPass = ""
let userinp = ""
function show(val) {
    let passsword = "123456"
    document.getElementById(`first${i}`).style.backgroundColor = "white"
    i++
    userPass += val
    if (userPass == passsword) {
        secondscreen.style.display = "none"
        thirdscreen.style.display = "block"
        glo.style.color = "white"
        icons.style.color = "white"
        glo.style.zIndex = "800"
        wrong.style.justifyContent = "center"
    }
    else {
        if (userPass.length == 6) {
            wrong.innerHTML = "Wrong Password"
        }
    }
}
call.addEventListener("click", () => {
    thirdscreen.style.display = "none"
    fourthscreen.style.display = "block"
    // fourthscreen.style.backgroundColor = "white"
    // fourthscreen.style.height = "550px"
    // fourthscreen.style.position = "relative"
    // fourthscreen.style.top = "-32px"
    glo.style.color = "black"
    // glo.style.position = "absolute"
    glo.style.zIndex = "800"
    // phonebody.classList.remove('.removeBG')
    phonebody.style.backgroundImage = "none"
    phonebody.style.backgroundColor = "white"
    icons.style.zIndex = "800"
    icons.style.color = "black"
    console.log(glo)
})
for (prop of three) {
    prop.addEventListener("click", (e) => {
        space.innerHTML += e.target.innerText
        userinp += e.target.innerHTML
    })

}


dialing.addEventListener("click", () => {
    // space.innerHTML = space.value
    dialScreen.style.display = "block"
    fourthscreen.style.display = "none"
    phonebody.style.backgroundImage = "url(pic.jfif)"
    // dialScreen.style.top = "-40px"
    glo.style.color = "white"
    icons.style.color = "white"
    // dialScreen.style.position = "relative"
    // dialScreen.style.backgroundColor = "rgba(54, 52, 52, 0.589)"
    // dialScreen.style.backgroundBlendMode = "multiply"
    // dialScreen.style.height = "550px"
    console.log(space.innerHTML);
    shownumber.innerHTML = ` <p id="num">${space.innerHTML}</p>
                                <p>calling</p>`
    if (userinp.includes("*" && "#")) {
        // console.log(space.innerHTML.startsWith("*"), "Start with");
        // console.log(space.innerHTML.endsWith("#"), "End with");
        // dialScreen.style.display = "none"
        aircall.style.display = "block"

    } else {
        console.log("YOU ARE WRONG");
        dialScreen.style.display = "block"

    }
})

gen.addEventListener("click", () => {
    thirdscreen.style.display = "none"
    fifthscreen.style.display = "block"
})
const numimages = 80
let currentindex;
let imgarr = []
 
sixthscreen.addEventListener("click", ()=>{
    dialScreen.style.display = "none"
    fourthscreen.style.display = "none"
    thirdscreen.style.display = "none"
    fifthscreen.style.display = "none"
    firstscreen.style.display = "none"
    secondscreen.style.display = "none"
})
function shownext() {
    fifthscreen2.style.display = "none"
    sixthscreen.style.display = "block"
    console.log(imgarr[currentindex]);
    sixthscreen.innerHTML = `<div class="img-sixth">
                                <button class="img-btn" onclick="imgback(${currentindex})">
                                    <span class="material-symbols-outlined">arrow_back_ios_new</span>
                                </button>
                                <img class="sixth" src='${imgarr[currentindex]}'/>
                                <button class="img-btn" onclick="imgback()">
                                    <span class="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>` 
}

for (let index = 1; index <= numimages; index++) {
    let image = document.getElementById(`image${index}`)
    imgarr.push(image.src)
    image.addEventListener("click", () => {
        console.log(index);
        currentindex = index
        console.log(currentindex);
        shownext()
    })

}
document.getElementById("fifthscreen2").addEventListener("click", (event) => {
    console.log(event);
    if (!event.target.id.startsWith("image")) {
        shownext()
    }
})
function imgback(currentindex){
    console.log(currentindex);
    console.log(imgarr[currentindex-1]);
    sixthscreen.style.backgroundColor = "red"
    sixthscreen.style.height ="500px"
    sixthscreen.innerHTML = `<div class="img-sixth">
                                <button class="img-btn" onclick="imgback()">
                                    <span class="material-symbols-outlined">arrow_back_ios_new</span>
                                </button>
                                <img class="sixth" src='${imgarr[currentindex-1]}'/>
                                <button class="img-btn" onclick="imgback()">
                                    <span class="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>` 
}
function imgnext(){
    imgarr[currentindex] + 1
}