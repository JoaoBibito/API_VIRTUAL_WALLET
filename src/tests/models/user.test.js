import userService from "../../services/user.service.ts";

describe("Deve testar o modelo User", async () => {
  const userMock = {
    name: "JohnDoe",
    username: "JohnD",
    email: "john@live.com",
    password: "123",
  };

  it("Deve cadastrar um suário", async () => {
    const userCreated = await userService.createUserService(userMock);
    console.log("Criou o user", userCreated);
    expect(userMock).toEqual(userCreated);
  });
});
