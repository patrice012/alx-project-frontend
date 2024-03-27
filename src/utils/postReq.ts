const API_URL = process.env.NEXT_PUBLIC_API_URL;

const postReq = async (data: any, url: string) => {
  // headers
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("GET", "POST");
  //   headers.append("Authorization", `Bearer ${process.env.TOKENS}`);
  headers.append("Access-Control-Allow-Origin", `${API_URL}`);
  headers.append("Access-Control-Allow-Credentials", "true");

  // fetch
  const req = await fetch(`${API_URL}${url}`, {
    mode: "cors",
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
    credentials: "include",
  });

  const serverRes = await req.json();
  return serverRes;
};

export default postReq;
