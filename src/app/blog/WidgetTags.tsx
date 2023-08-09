import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";
import WidgetHeading1 from "./WidgetHeading1";
import Tag from "@/shared/Tag";
import { DEMO_TAGS } from "@/data/taxonomies";

export interface WidgetTagsProps {
  className?: string;
  // tags?: TaxonomyType[];
  TagGroupTag?: any;
}

const WidgetTags: FC<WidgetTagsProps> = ({
  className = "bg-neutral-100 dark:bg-neutral-800",
  TagGroupTag,
}) => {
  return (
    <div className={`nc-WidgetTags rounded-3xl overflow-hidden ${className}`}>
      <WidgetHeading1
        title="🏷 Discover more tags"
        viewAll={{ label: "View all", href: "/#" }}
      />
      <div className="flex flex-wrap p-4 xl:p-5">
        {TagGroupTag?.data.rows.length>0&&TagGroupTag.data.rows.map((tag:any) => (
          <Tag className="mr-2 mb-2" key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default WidgetTags;
