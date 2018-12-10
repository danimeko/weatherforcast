const add_to_fevorite = "ADDTOFEVORITE";

const initialState = {
    fevorite :[]
}

export default function fevoritesReducer(state = initialState ,action) {
    switch (action.type) {
        case add_to_fevorite:
            return {
                fevorite :[...state.fevorite ,action.payload]
            }
            
    
        default:
            return state;
    }
}