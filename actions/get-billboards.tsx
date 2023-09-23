import { Billboard } from "@/types";


const getBillboards = async (storeId : string): Promise<Billboard[]> => {
  const res = await fetch(`https://app.supercontent.dev/api/${storeId}/billboards`, 
  {
    method: "GET",
    headers: {
      "secretKey": process.env.NEXT_PUBLIC_SECRETKEY || "",
    },
  }
  );

  return res.json();
};

export default getBillboards;
