input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.toggle(y, 0 - y)
            basic.pause(100)
            led.toggle(y, 1 - y)
            basic.pause(100)
            led.toggle(y, 2 - y)
            basic.pause(100)
            led.toggle(y, 3 - y)
        }
    }
})
