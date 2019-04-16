

export interface IUserState {
    fname: string,
    lname: string
}

const InitialUserState: IUserState = {
    fname: 'khizer',
    lname: 'rehan'
}

export const userReducer = (state: IUserState = InitialUserState, action: any) => {
    switch (action.type) {
        case '1': 

        case '2':
        
        default:
            return state;
    }
};