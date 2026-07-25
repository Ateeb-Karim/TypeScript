import axios, { Axios, type AxiosResponse } from "axios";

interface Req {
  name: string;
  id: number;
  title: string;
  completed: boolean;
}

const webReq = async (request: Req) => {
  try {
    const url = "https://example.com";
    const response: AxiosResponse<Req> = await axios
      .get(url)
      .then((response) => response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) console.log(error);
  }
};
