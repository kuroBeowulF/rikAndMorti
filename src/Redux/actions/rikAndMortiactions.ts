import axios from "axios";
import { Dispatch } from "redux";
import {
  RIKANDMORTI_FAIL,
  RIKANDMORTI_LOADING,
  RIKANDMORTI_SUCCESS,
  RikAndMortiDispatchType,
} from "./rikAndMortiactionsTypes";

export const BASE_URL = "https://rickandmortyapi.com/api/";
export const getRikAndMortiData = (params: string) => {
  return async (dispatch: Dispatch<RikAndMortiDispatchType>) => {
    try {
      dispatch({
        type: RIKANDMORTI_LOADING,
      });
      const response = await axios.get(BASE_URL + params);
      dispatch({
        type: RIKANDMORTI_SUCCESS,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({
        type: RIKANDMORTI_FAIL,
      });
    }
  };
};
