import getkey from "./getKey";
var state = {
  messages: [
    {
      _id: "user123",
      messages: [
        {
          from: "pradeep7",
          to: "user123",
          message: "hello",
          type: "message",
          time: "2020-04-30T17:21:34.701Z",
        },
        {
          from: "pradeep7",
          to: "user123",
          message: "sdfsdfsdf",
          type: "message",
          time: "2020-04-30T17:21:40.136Z",
        },
      ],
    },
    {
      _id: "user1234",
      messages: [
        {
          from: "user1234",
          to: "pradeep7",
          message: "hello\n",
          type: "message",
          time: "2020-04-15T07:19:44.622Z",
        },
        {
          from: "pradeep7",
          to: "user1234",
          message: "dsfsdfdsfsdf",
          type: "message",
          time: "2020-04-15T07:19:49.097Z",
        },
      ],
    },
  ],
};
describe("Testing Function", () => {
  test("get key", () => {
    expect(getkey(state, "user123")).toBe(0);
  });
});
