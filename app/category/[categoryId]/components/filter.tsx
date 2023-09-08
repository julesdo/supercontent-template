'use client'

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DynamicField } from "@/actions/get-colors";

interface FilterProps {
  data: DynamicField;
}

const Filter: React.FC<FilterProps> = ({ data }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(data.value);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [data.value]: id
    };

    if (current[data.value] === id) {
      query[data.value] = null;
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });

    router.replace(url); // Utilisez router.replace au lieu de router.push
  }

  return ( 
    <div className="mb-8">
      <h3 className="text-lg font-semibold">
        {data.name}
      </h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
          <div key={data.name} className="flex items-center">
            <Button
              className={cn(
                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                selectedValue === data.value && 'bg-black text-white'
              )}
              onClick={() => onClick(data.value)}
            >
              {data.value}
            </Button>
          </div>
      </div>
    </div>
  );
};

export default Filter;
