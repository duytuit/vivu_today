import React, { FC } from "react";
import Avatar from "@/shared/Avatar";
import { PostDataType } from "@/data/types";
import Link from "next/link";
import avatar9 from "@/images/avatars/Image-9.png";
import moment from "moment"
// {
//   "id": 10,
//   "firstName": "Mimi",
//   "lastName": "Fones",
//   "displayName": "Fones Mimi",
//   "email": "mfones9@canalblog.com",
//   "gender": "Agender",
//   "avatar": "https://uifaces.co/our-content/donated/vIqzOHXj.jpg",
//   "count": 111,
//   "href": "/author",
//   "desc": "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
//   "jobName": "Author Job",
//   "bgImage": "https://images.pexels.com/photos/5966631/pexels-photo-5966631.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
// }

export interface PostCardMetaProps {
  className?: string;
   meta: Pick<PostDataType, "date" | "author">;
  //  meta:any;
  hiddenAvatar?: boolean;
  size?: "large" | "normal";
}

const PostCardMeta: FC<any> = ({
  className = "leading-none",
  meta,
  hiddenAvatar = false,
  size = "normal",
}) => {
  const { name, id, updateTime, summary,status,slug } = meta;
  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center fledx-wrap text-neutral-800 dark:text-neutral-200 ${
        size === "normal" ? "text-sm" : "text-base"
      } ${className}`}
      data-nc-id="PostCardMeta"
    >
      <Link
        href={`/author`}
        className="flex-shrink-0 relative flex items-center space-x-2"
      >
        {!hiddenAvatar && (
          <Avatar
            radius="rounded-full"
            sizeClass={
              size === "normal" ? "h-7 w-7 text-sm" : "h-10 w-10 text-xl"
            }
            imgUrl={avatar9}
            userName={'Fones Mimi'}
          />
        )}
        <span className="block text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
          {'Fones Mimi'}
        </span>
      </Link>
      <>
        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          ·
        </span>
        <span className="text-neutral-500 dark:text-neutral-400 font-normal line-clamp-1">
          {moment(updateTime).format("YYYY-MM-DD HH:mm:ss")}
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
