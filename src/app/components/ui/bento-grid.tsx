import Link from "next/link";
import { cn } from "../../../../utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-[100rem] mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  url,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
  icon?: React.ReactNode;
  url: string;
}) => {
  return (
    <Link
      href={url}
      className={cn(
        "row-span-1 font-Barlow rounded-xl group/bento hover:shadow-2xl transition duration-200 shadow-input dark:shadow-none p-4 bg-white dark:border-white/[0.2]  border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 ">
        {" "}
        <Link className="w-full" href={url}>
          <img
            src={header}
            className="w-full h-full rounded-2xl hover:scale-105 transition-all duration-300 ease-linear object-cover"
            alt=""
          />
        </Link>
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-Barlow font-bold text-neutral-600 dark:text-black mb-2 mt-2">
          {title}
        </div>
        <div className="  text-neutral-600 font-Barlow  dark:text-black">
          {description}
        </div>
      </div>
    </Link>
  );
};
