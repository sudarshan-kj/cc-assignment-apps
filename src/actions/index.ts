export const actions = {
  setAnswer(id: number, value: string, type: string) {
    return {
      type: "SET_ANSWER",
      payload: {
        id,
        data: {
          type,
          value,
        },
      },
    };
  },
};
