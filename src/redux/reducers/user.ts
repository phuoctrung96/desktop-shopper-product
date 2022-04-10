const initialState = {
  userInfo: {},
};

export default function user(state = initialState, action: any) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
}
