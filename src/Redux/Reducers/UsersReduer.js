
const initialState = {
    users: [] 
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case "REGISTER":
            return {
                ...state,
                users: [...state.users, { ...action.payload, isLogin: false }]
            }

        case "LOGIN":
            const authUser = state.users.find((user) =>
                user.email === action.values.email &&
                user.password === action.values.password
            )
            if (authUser) {

                let updatedAuthUser = { ...authUser, isLogin: true }

                return {
                    ...state,
                    users: [...state.users.filter((user) =>
                        user.email !== authUser.email &&
                        user.password !== authUser.password),
                        updatedAuthUser
                    ]
                }
            }
            
            else {
                alert("Please Enter Correct Email & Password")
            }

        case "LOGOUT":
            const logoutUser = state.users.find((user) => 
                 (user.email === action.email))
                
                if(logoutUser) {
                let updatedLogoutUser =  { ...logoutUser, isLogin: false }
                return {
                    ...state , 
                    users : [...state.users.filter((user)=>
                        user.email !== action.email ) ,
                        updatedLogoutUser
                    ]
                }
            }

            default:
            return state;

    }
}

export default usersReducer;