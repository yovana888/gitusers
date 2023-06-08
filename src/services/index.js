import { config } from "./config";

//esta funione consume el api de github y retona una lista de usuarios
export const searchUsers = async (username) => {
  try {
    const response = await fetch(
      `${config.baseUrl}/search/users?q=${username}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

//fucnion que trae el detalle de cada usuario

export const searchUser = async (username) => {
  try {
    const response = await fetch(`${config.baseUrl}/users/${username}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

//esat funcion traera los repositorios publicas del usuario

export const getRepos = async (username) => {
  try {
    const response = await fetch(
      `${config.baseUrl}/users/${username}/repos?sort=created`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getPrueba = async () => {
  try {
    const response = await fetch("https://jp-api-test.delfosti.site/api/user/customer/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: {
        CorreoElectronico: "wivefew502@ngopy.com",
        Contrasenia: "Test123456@",
        PermanecerConectado: true,
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error, "error");
  }
};
