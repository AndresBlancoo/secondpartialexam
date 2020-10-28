let randomNumber = 0
let BMI = 0
let TotalBodyMasses = 0
let OverweightCount = 0
let ObesityCount = 0
let AverageBodyMasses = 0
let y = 0
input.onPinPressed(TouchPin.P0, function () {
    while (true) {
        basic.showNumber(5)
        basic.showNumber(4)
        basic.showNumber(3)
        basic.showNumber(2)
        basic.showNumber(1)
        basic.showNumber(0)
        randomNumber = randint(-10, 10)
        if (randomNumber > 0) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
        } else if (randomNumber < 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        } else {
            basic.showNumber(0)
        }
        basic.showString("Your number is")
        basic.showNumber(randomNumber)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 30; index++) {
        BMI = randint(0.1, 40.5)
        basic.showNumber(BMI)
        TotalBodyMasses += BMI
        if (BMI < 18.5) {
            basic.showString("Underweight")
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            basic.showString("Normal Weight")
        } else if (BMI >= 25 && BMI <= 29.9) {
            basic.showString("Overweight")
            OverweightCount += 1
        } else {
            basic.showString("Obesity")
            ObesityCount += 1
        }
    }
    AverageBodyMasses = TotalBodyMasses / 30
    basic.showNumber(AverageBodyMasses)
    basic.showNumber(OverweightCount)
    basic.showNumber(ObesityCount)
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        y = randint(0, 4)
        for (let y = 0; y <= 4; y++) {
            led.plot(0, y)
            basic.pause(200)
            basic.clearScreen()
            basic.pause(200)
        }
        music.playMelody("- - D E F - - - ", 120)
    }
})
