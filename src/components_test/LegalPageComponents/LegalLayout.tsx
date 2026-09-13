import type { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

const LegalLayout = ({ title, lastUpdated, children }: LegalLayoutProps) => {
  return (
    <div className="max-w-[750px] mx-auto p-8 md:p-16 flex flex-col gap-6">
      <div className="flex flex-col gap-2 border-b border-black/10 pb-6">
        <h1 className="text-4xl md:text-5xl font-light">{title}</h1>
        <p className="text-xs opacity-60">Last updated: {lastUpdated}</p>
      </div>
      <div className="flex flex-col gap-6 text-sm leading-relaxed [&_h2]:text-xl [&_h2]:font-medium [&_h2]:mt-4 [&_p]:opacity-90 [&_li]:opacity-90 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1">
        {children}
      </div>
    </div>
  );
};

export default LegalLayout;
