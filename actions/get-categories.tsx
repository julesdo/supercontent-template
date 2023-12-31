import { Category } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (storeId:string): Promise<Category[]> => {
  const res = await fetch(`https://app.supercontent.dev/api/${storeId}/categories`, 
  {
    method: "GET",
    headers: {
      "secretKey": process.env.NEXT_PUBLIC_SECRETKEY || "",
    },
  }
  );

  return res.json();
};

export default getCategories;

