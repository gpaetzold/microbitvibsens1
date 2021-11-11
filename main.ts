input.onButtonPressed(Button.A, function () {
    shake = 1
})
let shake = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        shake = 1
        while (shake) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    }
})
