

import Container from '@/components/ui/container';
import Billboard from '@/components/ui/billboard';
import ProductCard from '@/components/ui/product-card';
import NoResults from '@/components/ui/no-results';

import getProducts from "@/actions/get-products";
import getCategory from '@/actions/get-category';

import Filter from './components/filter';
import MobileFilters from './components/mobile-filters';
import getCustomField from '@/actions/get-colors';

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
    storeId: string;
  },
  searchParams: {
    customField: string;
  }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ 
  params, 
  searchParams}) => {
  const products = await getProducts({ 
    categoryId: params.categoryId,
    customField: searchParams.customField,
  }, params.storeId);
  const dynamicFields = await getCustomField(params.storeId);
  const category = await getCategory(params.categoryId, params.storeId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard 
          data={category.billboard}
        />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters dynamicFields={dynamicFields} />
            <div className="hidden lg:block">
              {dynamicFields && 
              dynamicFields.map((item) => (
                <Filter 
                  key={item.name}
                  data={item}             />
              ))
              
              }
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} storeId={params.storeId} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
