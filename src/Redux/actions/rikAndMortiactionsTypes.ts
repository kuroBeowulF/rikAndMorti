export const RIKANDMORTI_LOADING = "RIKANDMORTI_LOADING";
export const RIKANDMORTI_FAIL = "RIKANDMORTI_FAIL";
export const RIKANDMORTI_SUCCESS = "RIKANDMORTI_SUCCESS";

type RikAndMortiDataType = any;

export interface RikAndMortiLoading {
  type: typeof RIKANDMORTI_LOADING;
}
export interface RikAndMortiFail {
  type: typeof RIKANDMORTI_FAIL;
}
export interface RikAndMortiSuccess {
  type: typeof RIKANDMORTI_SUCCESS;
  payload: RikAndMortiDataType;
}

export type RikAndMortiDispatchType =
  | RikAndMortiLoading
  | RikAndMortiFail
  | RikAndMortiSuccess;
