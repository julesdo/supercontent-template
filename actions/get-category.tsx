import { Category } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string, storeId:string): Promise<Category> => {
  const res = await fetch(`https://app.supercontent.dev/api/${storeId}/categories/${id}`,
  {
    method: "GET",
    headers: {
      "secretKey": process.env.NEXT_PUBLIC_SECRETKEY || "",
    },
  }
  );

  return res.json();
};

export default getCategory;
