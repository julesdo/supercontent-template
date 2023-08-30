import getBillboard from "@/actions/get-billboard";
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async ({params} :{params : { storeId : string}}) => {
  const products = await getProducts({ isFeatured: true }, params.storeId);
  const billboards = await getBillboards(params.storeId);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboards[0]}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList storeId={params.storeId} title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;
