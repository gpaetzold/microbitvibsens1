input.onButtonPressed(Button.A, function () {
    if (led_on == 1) {
        led_on = 0
    } else {
        led_on = 1
    }
})
let led_on = 0
basic.showIcon(IconNames.Happy)
led_on = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        led_on = 1
    }
    if (led_on == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
