import { Post } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getPosts = async (storeId:string): Promise<Post[]> => {
  const res = await fetch(`https://app.supercontent.dev/api/${storeId}/posts`, 
  {
    method: "GET",
    headers: {
      "secretKey": process.env.NEXT_PUBLIC_SECRETKEY || "",
    },
  }
  );

  return res.json();
};

export default getPosts;

