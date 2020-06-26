/*
  a. Uma tem uma flecha e o async vai após o nome dela Na função nomeada o async
  vem antes do nome da função.

  b. =>
*/
import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

const getSubscribers = async (): Promise<any[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data.map((response: any) => {
    return {
      id: response.id,
      name: response.name,
      email: response.email,
    };
  });
};

const main = async () => {
  try {
    const subscribers = await getSubscribers();
    for (const subscriber of subscribers) {
      console.log(subscriber);
    }
  } catch (error) {
    console.log(error);
  }
};

main();
