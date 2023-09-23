import { Size } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL, 
    {
      method: "GET",
      headers: {
        "secretKey": process.env.NEXT_PUBLIC_SECRETKEY || "",
      },
    }
    );

  return res.json();
};

export default getSizes;
