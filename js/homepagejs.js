//nav bar login dropdown start ----

let open = false;

function toggleOpen(){
    open = !open;
    if(open) {
        dropdown.style.transform = "translateY(" + 70 + "px)";
        dropdown.style.opacity = '1';
        dropdown.style.zIndex = '1';
        // console.log("open");
    } else {
        dropdown.style.transform = "translateY(" + 10 + "px)";
        dropdown.style.opacity = '0';
        dropdown.style.zIndex = '-1';
        // console.log("close");
    }
}

// function toggleClose(){
//     var dropdown = document.getElementById("Submenudropdown");
//
//     if(!open) {
//         dropdown.style.transform = "translateY(" + 10 + "px)";
//         dropdown.style.opacity = '0';
//         dropdown.style.zIndex = '-1';
//         console.log("close");
//     }
// }

//nav bar login dropdown end ----

//locker content revealing ani start ----

function toggleReveal(){
    linelefttopEle.style.opacity = "1";
    lineleftbotEle.style.opacity = "1";
    linerighttopEle.style.opacity = "1";
    linerightmidEle.style.opacity = "1";
    linerightbotEle.style.opacity = "1";
    lockerimgEle.style.transform = "scale(1.2)";
    section3BG.style.backgroundColor = "aliceblue";
    lockertitleEle.style.color = "black";
    lockertitleEle.style.transform = "translateY(-1vw)";

    // console.log("toggle is revealing");
}

function toggleUnreveal(){
    linelefttopEle.style.opacity = "0";
    lineleftbotEle.style.opacity = "0";
    linerighttopEle.style.opacity = "0";
    linerightmidEle.style.opacity = "0";
    linerightbotEle.style.opacity = "0";
    lockerimgEle.style.transform = "scale(1)";
    section3BG.style.backgroundColor = "cadetblue";
    lockertitleEle.style.color = "white";
    lockertitleEle.style.transform = "translateY(0px)";

    // console.log("toggle is unrevealed");
}

//locker content revealing ani end ----

//nav bar dropdown on scrolling start ----

//if window is below nav
let belowNav = false;

window.onscroll = function(){
    //presistant nav start ---
    //REMOVE
    if(navEle.getBoundingClientRect().bottom >= 0 && !belowNav){
        navEle.classList.remove("navsetinplace");
        navSep.style.display = 'none';
        // console.log("window is above nav");
        belowNav = true;
    }

    //ADD
    if(navEle.getBoundingClientRect().bottom < 0 && belowNav){
        navEle.classList.add("navsetinplace");
        navSep.style.display = 'block';
        // console.log("window is below nav");
        belowNav = false;
    }
    //presistant nav end ---

    //water flowing on second section start ---
    if(waterEle.getBoundingClientRect().bottom >= 0){
        waterEle.classList.add("animationflow");
    }
    if(waterEle.getBoundingClientRect().bottom < 0){
        waterEle.classList.remove("animationflow");
    }

    if(sec2Cont.getBoundingClientRect().bottom >= 0){
        sec2Cont.classList.add("growbigger");
    }
    if(sec2Cont.getBoundingClientRect().bottom < 0){
        sec2Cont.classList.remove("growbigger");
    }
    //water flowing on second section end ---
}

//nav bar dropdown on scrolling end ----
