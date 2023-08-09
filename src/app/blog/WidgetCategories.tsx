import CardCategory1 from "@/components/CardCategory1";
import { DEMO_CATEGORIES } from "@/data/taxonomies";
import { TaxonomyType } from "@/data/types";
import React, { FC } from "react";
import WidgetHeading1 from "./WidgetHeading1";

export interface WidgetCategoriesProps {
  className?: string;
  countPostGroupCategory?:any;
  category?:any;
}

const WidgetCategories: FC<WidgetCategoriesProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  countPostGroupCategory,
  category,
}) => {

  return (
    <div
      className={`nc-WidgetCategories rounded-3xl overflow-hidden ${className}`}
    >
      <WidgetHeading1
        title="✨ Trending topic"
        viewAll={{ label: "View all", href: "/#" }}
      />
      <div className="flow-root">
        <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
          {countPostGroupCategory?.data.rows.length>0&&countPostGroupCategory.data.rows.map((item:any) => (
            <CardCategory1
              className="p-4 xl:p-5 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              key={item.category_id}
              taxonomy={item}
              size="normal"
              category={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WidgetCategories;
