/*
    a. GET /subscribers/all
    b. any[]
    c. =>
*/
import axios from "axios";

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

async function getSubscribers(): Promise<any[]> {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data.map((response: any) => {
    return {
      id: response.id,
      name: response.name,
      email: response.email,
    };
  });
}

async function main() {
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
