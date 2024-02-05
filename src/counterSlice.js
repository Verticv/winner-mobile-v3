import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    betSlipData: [],
    cartFlag: false,
    myPageSelectedMainMenuId: -1, // to highlight MyPage selected (main) menu when pushing back button on sub menu
    myPageSelectedSubMenuId: -1, // to highlight MyPage selected (sub) menu when pushing back button on each my pages
  },
  reducers: {
    setBetSlipData: (_state, action) => {
      let prevCount = _state.value;
      _state.betSlipData = [..._state.betSlipData, { ...action.payload.data }];
      _state.value = _state.betSlipData.length;
      if (prevCount === 0 && _state.value === 1) {
        _state.cartFlag = true;
      }
    },
    deleteBetSlipData: (_state, action) => {
      _state.betSlipData = [];
      _state.value = _state.betSlipData.length;
    },
    deleteBetSlipDataById: (_state, action) => {
      _state.betSlipData = [..._state.betSlipData].filter((item) => {
        return item._id !== action.payload.data;
      });
      _state.value = _state.betSlipData.length;
    },
    setMyPageSelectedMainMenuId: (_state, action) => {
      _state.myPageSelectedMainMenuId = action.payload;
    },
    resetMyPageSelectedMainMenuId: (_state, _) => {
      _state.myPageSelectedMainMenuId = -1;
    },
    setMyPageSelectedSubMenuId: (_state, action) => {
      _state.myPageSelectedSubMenuId = action.payload;
    },
    resetMyPageSelectedSubMenuId: (_state, _) => {
      _state.myPageSelectedSubMenuId = -1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setBetSlipData,
  deleteBetSlipData,
  deleteBetSlipDataById,
  setMyPageSelectedMainMenuId,
  resetMyPageSelectedMainMenuId,
  setMyPageSelectedSubMenuId,
  resetMyPageSelectedSubMenuId,
} = counterSlice.actions;

export default counterSlice.reducer;
