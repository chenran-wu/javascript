function is_good_enough(guess, x) {
    return Math.abs(guess * guess - x) / x < 0.001
}

function improve(guess, x) {
    return (guess + x / guess) / 2
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
        ? guess
        : sqrt_iter(improve(guess, x), x)
}

function sqrt(x) {
    return sqrt_iter(1, x)
}

console.log(sqrt(9))
