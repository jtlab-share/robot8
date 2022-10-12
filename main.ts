wakabaCar.setBlackness(500)
wakabaCar.setRotateDirection(Tristate.both, Rotate.forward)
wakabaCar.stopMotor(Tristate.both)
wakabaCar.runCar()
basic.forever(function () {
    wakabaCar.showStatus()
    wakabaCar.setMotorPower(Tristate.both, 50)
    if (wakabaCar.isBlack(Tristate.both)) {
        wakabaCar.stopMotor(Tristate.both)
    } else {
        if (wakabaCar.isBlack(Tristate.right)) {
            wakabaCar.stopMotor(Tristate.right)
        }
        if (wakabaCar.isBlack(Tristate.left)) {
            wakabaCar.stopMotor(Tristate.left)
        }
    }
    wakabaCar.runCar()
})
