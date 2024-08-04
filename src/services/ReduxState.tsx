import { createSlice, PayloadAction } from "@reduxjs/toolkit";"."
import { userData } from "../types/user.interface"


const initialState={
    currentUser: ({} as IUser) || null,
}


const ReduxState = createSlice({
    name: "shippex",
    initialState,
    reducers: {
        addUser: (state, { payload }: PayloadAction<userData>) => {
			state.currentUser = payload;
		},

    }
})

export const { addUser } = ReduxState.actions;

export default ReduxState.reducer
