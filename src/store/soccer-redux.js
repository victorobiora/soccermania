import { createSlice, configureStore } from "@reduxjs/toolkit";

const questionsInitialState = {
  questions: [],
  level: 0,
  passed: null,
};

const levelsInitialState = {
  levelNo: [],
};

const qSlice = createSlice({
  name: "q",
  initialState: questionsInitialState,
  reducers: {
    addQuestions(state, action) {
      console.log("i am here");
      state.questions = action.payload;
    },
    clearQuestions(state, action) {
      state.questions = [];
    },
    setPassed: (state, action) => {
      state.passed = action.payload;
    },
    updateNextQuestion(state, action) {
      state.questions.shift();
    },
  },
});

const levelSlice = createSlice({
  name: "levels",
  initialState: levelsInitialState,
  reducers: {
    updateInitialLevels: (state, action) => {
      const fixedLevels = [];

      for (let index = 1; index <= action.payload; index++) {
        fixedLevels.push({
          level: index,
          passed: null,
          passing: false,
        });
      }
      console.log(fixedLevels);
      state.levelNo = fixedLevels;
    },
    addPassingStage: (state, action) => {
      console.log(state.levelNo);
      const findIndex = state.levelNo.findIndex((el) => el.passing === true);
      if (findIndex === -1) {
        state.levelNo[0].passing = true;
        state.levelNo[0].passed = action.payload.status;
      } else {
        state.levelNo[findIndex].passing = false
        state.levelNo[findIndex + 1].passing = true;
        state.levelNo[findIndex + 1].passed = action.payload.status;
      }
      console.log(findIndex);
    },
    removePassingStage(state, action) {},
  },
});

export const qActions = qSlice.actions;
export const levelActions = levelSlice.actions;

//dynamically getting the amount of questions so we can set the amount of levels
//this helps in case I wish to add more questions to the game
export function levelThunk() {
  console.log("i ran");
  return (dispatch, getState) => {
    const levelsAmount = getState().q.questions.length;
    dispatch(levelActions.updateInitialLevels(levelsAmount));
  };
}

const store = configureStore({
  reducer: {
    q: qSlice.reducer,
    levels: levelSlice.reducer,
  },
});

export default store;
