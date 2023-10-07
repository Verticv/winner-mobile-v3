import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
		betSlipData: [],
		cartFlag: false
	},
	reducers: {
		setBetSlipData: (_state, action) => {
			let prevCount = _state.value;
			_state.betSlipData = [
				..._state.betSlipData,
				{ ...action.payload.data },
			];
			_state.value = _state.betSlipData.length;
			if (prevCount === 0 && _state.value === 1) {
				_state.cartFlag = true
			}
		},
		deleteBetSlipData: (_state, action) => {
			_state.betSlipData =[]
			_state.value = _state.betSlipData.length;
		},
		deleteBetSlipDataById: (_state, action) => {
			_state.betSlipData = [..._state.betSlipData].filter(
				(item) => {
					return item._id !== action.payload.data;
				}
			);
			_state.value = _state.betSlipData.length;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setBetSlipData, deleteBetSlipData, deleteBetSlipDataById } =
	counterSlice.actions;

export default counterSlice.reducer;
