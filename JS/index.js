// Sidebar
let width = $(".pages").outerWidth()
$("sidebar").css({ left: `${-width}px` })

$(".logo").click(function () {
    $(".pages").css({ opacity: 1})
    let width = $(".pages").outerWidth()
    let left = $("sidebar").css("left")
    if (left == "0px") {
        $("sidebar").animate({ left: `${-width}px` }, 2000)
    }
    else {
        $("sidebar").animate({ left: 0 }, 2000)
    }
})
//Details Section
$(".parent").children("p").slideUp(1)
$(".parent1").click(function () {
    $(".parent1").children("p").slideToggle(1000)
})
$(".parent2").click(function () {
    $(".parent2").children("p").slideToggle(1000)
})
$(".parent3").click(function () {
    $(".parent3").children("p").slideToggle(1000)
})
$(".parent4").click(function () {
    $(".parent4").children("p").slideToggle(1000)
})

//countDown Section
var targetDate = new Date("Jan 24 2030 17:26:41").getTime()
let countDownCounter = setInterval(() => {
    var dateNow = new Date().getTime()
    var dateDifference = targetDate - dateNow
    var daysRemain = Math.floor(dateDifference / (1000 * 60 * 60 * 24))
    var hoursRemain = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutesRemain = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60))
    var secondsRemain = Math.floor((dateDifference % (1000 * 60)) / (1000))
    document.getElementById("days").innerHTML = daysRemain
    document.getElementById("hours").innerHTML = hoursRemain
    document.getElementById("minutes").innerHTML = minutesRemain
    document.getElementById("seconds").innerHTML = secondsRemain
}, 1000);

// Contact Section
let number = document.getElementById("number")
$('#text').keyup(function () {
    var remainingLetters = 100 - $('#text').val().length
    if (remainingLetters < 0) {
        number.innerHTML = "You have exceeded the maximum number of characters allowed"
    }
    else {
        number.innerHTML = remainingLetters
    }
})



