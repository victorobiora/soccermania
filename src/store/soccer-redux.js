import { createSlice, configureStore } from "@reduxjs/toolkit";

const questionsInitialState = {
    questions: {},
    level: 0,
    passed: null
}

const qSlice = createSlice({
    name: 'q',
    initialState: questionsInitialState,
    reducers:{
        addQuestions(state, action){
            console.log('i am here')
            state.questions = action.payload
        },
        setPassed: (state, action) =>{
            state.passed = action.payload;
        }
    }
})

export const qActions = qSlice.actions;

const store = configureStore({
    reducer: {
        'q' : qSlice.reducer
    }
})

export default store;
