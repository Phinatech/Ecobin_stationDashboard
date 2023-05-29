import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import {
  agentData,
  registercarrying,
  stationData,
  userData,
} from "../../types";

const initialState = {
  userDetails: {} as any | null,
  directorDetails: {} as agentData | null,

  registerCarrier: {} as registercarrying | null,

  stationdetail: {} as stationData | null,

  directorInfo: {} as agentData | null,

  requestNumber: "" as string | null,
};

const ReduxState = createSlice({
  name: "ecoBin",
  initialState,
  reducers: {
    userLogin: (state, { payload }: PayloadAction<userData>) => {
      state.userDetails = payload;
    },
    directorLogin: (state, { payload }: PayloadAction<agentData>) => {
      state.directorDetails = payload;
    },

    registerCarrier: (state, { payload }: PayloadAction<registercarrying>) => {
      state.registerCarrier = payload;
    },
    stationLogin: (state, { payload }: PayloadAction<stationData>) => {
      state.stationdetail = payload;
    },
    createStations: (state, { payload }: PayloadAction<agentData>) => {
      state.directorInfo = payload;
    },

    logout: (state) => {
      state.userDetails = null;
    },
    upDateRequest(state, { payload }) {
      state.requestNumber = payload;
    },
  },
});

export const {
  logout,
  upDateRequest,
  stationLogin,
  registerCarrier,
  userLogin,
} = ReduxState.actions;
export default ReduxState.reducer;
