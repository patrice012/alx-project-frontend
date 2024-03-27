const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

const getReq = async (url: string) => {
  // headers
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("GET", "POST");
  //   headers.append("Authorization", `Bearer ${process.env.TOKENS}`);
  headers.append("Access-Control-Allow-Origin", `${API_URL}`);
  headers.append("Access-Control-Allow-Credentials", "true");

  // fetch
  const req = await fetch(`${API_URL}${url}`, {
    mode: "cors",
    method: "GET",
    headers: headers,
    credentials: "include",
  });

  const serverRes = await req.json();
  return serverRes;
};

export default getReq;
