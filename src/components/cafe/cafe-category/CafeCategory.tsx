import { Button } from "@/components/ui/button";
import { dataCafeCategory } from "@/constants/Mockdata.constants";

const CafeCategory = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full mx-auto gap-6">
        {dataCafeCategory.map((item, index) => (
          <Button
            key={index}
            className="w-full text-xl bg-slate-950 rounded-full border-2 border-slate-800 hover:shadow-[0_-40px_40px_rgba(67,_91,_161,_0.8)_inset] p-5"
          >
            {item.cafeCategoryName}
          </Button>
        ))}
      </div>
    );
}

export default CafeCategory;