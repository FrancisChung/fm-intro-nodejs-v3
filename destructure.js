const data = {
    shooting: 99,
    dribbling: 50,
    jumping: 40
}

// The following is equivalent to
// const jumping = data.jumping
// const shooting = data.shooting
// in 1 line
const {shooting, jumping} = data

const nums = [1, ,2 ,3, 4]
const [first,_,_,last] = nums

// Another destructuring operator demo
const action = ({thing, otherthing, more, ...rest}) => {}