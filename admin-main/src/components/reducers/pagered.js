const initialState = {
    pageList: [],
    pageAdd: []
}
function PAGE_Reducer(state = initialState, action) {
    console.log("-=-=-=Reducer=-=-=", action)
    switch (action.type) {
        case 'LIST_PAGE':
            return {
                ...state,
                pageList: action.payload.data
            };
        case 'ADD_PAGE':
            return {
                ...state,
                pageAdd: action.payload
            };
            case 'DELETE_PAGE':
                    return{
                        ...state,
                        pageDelete:action.payload
                        
                    };
        default: return state;
    }
}
export default PAGE_Reducer;