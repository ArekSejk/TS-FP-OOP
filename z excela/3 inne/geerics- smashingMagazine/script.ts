//ta funkcja:
function identity0(input) {
    return input
}
//z typowaniem wyglada tak:
function identityy<T>(input: T): T{
    return input;
}

//a w postaci strzalkowej
const identity = <T>(input: T): T => input;

console.log(identity<number>(556655))