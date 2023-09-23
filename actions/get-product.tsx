import { Product } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string, storeId:string): Promise<Product> => {
  const res = await fetch(`https://app.supercontent.dev/api/${storeId}/products/${id}`, 
  {
    method: "GET",
    headers: {
      "secretKey": process.env.NEXT_PUBLIC_SECRETKEY || "",
    },
  }
  );

  return res.json();
};

export default getProduct;
