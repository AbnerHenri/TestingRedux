

function CountReducer(state = 0, action){
    switch (action.type) {
        case 'INCREMENT':
<<<<<<< HEAD
            return state + 1

        case "DECREMENT":
            return state - 1
=======
            
            break;

        case "DECREMENT":

            break;
>>>>>>> e470ab012b4c1275f4486a75968ddd5533df5764
    
        default:
            break;
    }
}

export default CountReducer;