input.onButtonPressed(Button.A, function () {
    if (hours < 23) {
        hours += 1
    } else {
        hours = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    time = "" + hours + (":" + minutes)
    basic.showString(time)
    kitronik_VIEW128x64.show("" + hours + (":" + minutes), 2, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
})
function ringAlarm () {
    if (hours == 6 && minutes == 10) {
        kitronik_VIEW128x64.show(wakeUpStr, 3, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
        for (let index = 0; index < 4; index++) {
            music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
        }
    }
}
let wakeUpStr = ""
let hours = 0
let minutes = 0
let time = ""
let ampm = false
time = ""
let adjust = 0
minutes = 0
hours = 0
wakeUpStr = "Good Morning!"
basic.forever(function () {
    kitronik_VIEW128x64.show("Hello world", 1, kitronik_VIEW128x64.ShowAlign.Centre)
    kitronik_VIEW128x64.show("" + hours + (":" + minutes), 2, kitronik_VIEW128x64.ShowAlign.Centre, kitronik_VIEW128x64.FontSelection.Big)
    basic.pause(60000)
    if (minutes < 59) {
        minutes += 1
    } else {
        minutes = 0
        if (hours < 23) {
            hours += 1
        } else {
            hours = 0
        }
    }
    ringAlarm()
})
