export const initialState = {
  lang: 'pt'
}
export default function languageReducer (state, action) {
  switch (action.type) {
    case 'CURRENT_LANGUAGE':
      return {
        ...state,
        lang: action.payload
      }
    default:
      return state
  }
}
