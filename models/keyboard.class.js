/**
 * Represents the state of keyboard keys in the game.
 */
class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    E = false;
    R = false;
    F = false;
    A = false;
    SHIFT = false;
    S = false;
}

/**
 * Sets the `A` key state in the `keyboard` object to `true`.
 */
function touchAttackTrue() {
    keyboard.A = true;
}

/**
 * Sets the `A` key state in the `keyboard` object to `false`.
 */
function touchAttackFalse() {
    keyboard.A = false;
}

/**
 * Sets the `S` key state in the `keyboard` object to `true`.
 */
function touchPowershotTrue() {
    keyboard.S = true;
}

/**
 * Sets the `S` key state in the `keyboard` object to `false`.
 */
function touchPowershotFalse() {
    keyboard.S = false;
}

/**
 * Sets the `LEFT` key state in the `keyboard` object to `true`.
 */
function touchLeftTrue() {
    keyboard.LEFT = true;
}

/**
 * Sets the `LEFT` key state in the `keyboard` object to `false`.
 */
function touchLeftFalse() {
    keyboard.LEFT = false;
}

/**
 * Sets the `UP` key state in the `keyboard` object to `true`.
 */
function touchUpTrue() {
    keyboard.UP = true;
}

/**
 * Sets the `UP` key state in the `keyboard` object to `false`.
 */
function touchUpFalse() {
    keyboard.UP = false;
}

/**
 * Sets the `RIGHT` key state in the `keyboard` object to `true`.
 */
function touchRightTrue() {
    keyboard.RIGHT = true;
}

/**
 * Sets the `RIGHT` key state in the `keyboard` object to `false`.
 */
function touchRightFalse() {
    keyboard.RIGHT = false;
}

/**
 * Sets the `SHIFT` key state in the `keyboard` object to `true`.
 */
function touchRunTrue() {
    keyboard.SHIFT = true;
}

/**
 * Sets the `SHIFT` key state in the `keyboard` object to `false`.
 */
function touchRunFalse() {
    keyboard.SHIFT = false;
}