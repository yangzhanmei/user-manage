export default (state = {}, action) => {

    if (action.type === "ADDUSER") {
        return {data: action.data};
    }
    return state;
}