import { ReactNode } from "react";

type WindowsProps = {
    children?: ReactNode;
    title: string;
};

export default function Windows({ children, title }: WindowsProps) {
    return (
        <div className="border-3 , border-b-gray-300 w-fit rounded-xl m-1">
            <div className="border-b-2border-b-gray-200 rounded-t-lg flex items-center flex-row- xjustify-between p-1 bg-[#65010C] ">
                <h2 className="text-[#FEDFD4]">{title}</h2>
                <button className="">
                    <img src="circle-x.svg" alt="Close" />
                </button>
            </div>
            <div className="bg-[#1368AA] rounded-b-lg  text-[#FEDFD4]">
                {children}
            </div>
        </div>
    );
}