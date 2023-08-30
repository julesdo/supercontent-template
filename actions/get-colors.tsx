export interface DynamicField {
  name: string;
  type: string;
  value: string;
}

interface Product {
  id: string;
  storeId: string;
  categoryId: string;
  name: string;
  description: string;
  price: string;
  isFeatured: boolean;
  isArchived: boolean;
  dynamicFields: {
    createMany: {
      data: DynamicField[];
    };
  };
  createdAt: string;
  updatedAt: string;
  images: {
    id: string;
    productId: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  }[];
  category: {
    id: string;
    storeId: string;
    billboardId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
}

const getCustomField = async (storeId:string): Promise<DynamicField[]> => {
  const res = await fetch(`https://app.supercontent.dev/api/${storeId}/products`);
  const products: Product[] = await res.json();

  // Assuming you want to extract the dynamicFields.data from the first product.
  if (products.length > 0) {
    return products[0].dynamicFields.createMany.data;
  }

  return [];
};

export default getCustomField;
