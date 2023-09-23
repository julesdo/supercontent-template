import { Post } from "@/types";

const getPost = async (id: string, storeId:string): Promise<Post> => {
  const res = await fetch(`https://app.supercontent.dev/api/${storeId}/posts/${id}`, 
  {
    method: "GET",
    headers: {
      "secretKey": process.env.NEXT_PUBLIC_SECRETKEY || "",
    },
  }
  );

  return res.json();
};

export default getPost;
