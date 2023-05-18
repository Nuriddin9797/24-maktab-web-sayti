let main2 = document.getElementsByClassName("main2")[0]
let main1 = document.getElementsByClassName("main1")[0]
let kirish = document.getElementsByClassName("kirish")[0]


main2.onclick = function(){
    main1.style.display = "flex"
    
}
kirish.onclick = function(){
    src = "../images/qvz.jpg"
    
}

// title.onclick = function() {
//     text.classList.toggle("hidden")
//     title2.classList.add("show")
//     title.style.display = "none"
// }

// title2.onclick = function() {
//     text.classList.toggle("hidden")
//     title2.classList.remove("show")
//     title.style.display = "block"
// }