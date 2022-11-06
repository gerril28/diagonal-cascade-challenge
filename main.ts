input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.toggle(x, y - 0)
            basic.pause(100)
            led.toggle(x, 1 - y)
            basic.pause(100)
            led.toggle(y, 2 - x)
            basic.pause(100)
            led.toggle(y, 3 - y)
            basic.pause(100)
            led.toggle(y, 4 - y)
            basic.pause(100)
            led.toggle(y, 5 - y)
            basic.pause(100)
            led.toggle(y, 6 - y)
            basic.pause(100)
            led.toggle(y, 7 - y)
            basic.pause(100)
            led.toggle(y, 8 - y)
        }
    }
})
