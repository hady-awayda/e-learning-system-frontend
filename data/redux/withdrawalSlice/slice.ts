import {
  WithdrawalProp,
  WithdrawalProps,
  WithdrawalsState,
} from "@/interfaces/withdrawals";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: WithdrawalsState = {
  withdrawals: [],
};

const withdrawalsSlice = createSlice({
  name: "withdrawals",
  initialState,
  reducers: {
    addWithdrawal: (state, action: PayloadAction<WithdrawalProps>) => {
      state.withdrawals.push(...action.payload);
    },
    updateWithdrawal: (state, action: PayloadAction<WithdrawalProp>) => {
      const index = state.withdrawals.findIndex(
        (withdrawal) => withdrawal.id === action.payload.id
      );
      if (index !== -1) {
        state.withdrawals[index] = action.payload;
      }
    },
    removeWithdrawal: (state, action: PayloadAction<string>) => {
      state.withdrawals = state.withdrawals.filter(
        (withdrawal) => withdrawal.id !== action.payload
      );
    },
    clearWithdrawals: (state) => {
      state.withdrawals = [];
    },
  },
});

export const {
  addWithdrawal,
  updateWithdrawal,
  removeWithdrawal,
  clearWithdrawals,
} = withdrawalsSlice.actions;

export default withdrawalsSlice.reducer;
