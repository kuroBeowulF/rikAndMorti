import {
  RIKANDMORTI_FAIL,
  RIKANDMORTI_LOADING,
  RIKANDMORTI_SUCCESS,
  RikAndMortiDispatchType,
} from "../actions/rikAndMortiactionsTypes";

interface rikAndMortiReducerStateType {
  data: any;
  loading: boolean;
}

const initialState = {
  data: [],
  loading: false,
};

export const rikAndMortiReducer = (
  state: rikAndMortiReducerStateType = initialState,
  action: RikAndMortiDispatchType
): rikAndMortiReducerStateType => {
  switch (action.type) {
    case RIKANDMORTI_LOADING:
      return {
        ...state,
        loading: true,
      };
    case RIKANDMORTI_FAIL:
      return {
        ...state,
        loading: false,
      };
    case RIKANDMORTI_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
