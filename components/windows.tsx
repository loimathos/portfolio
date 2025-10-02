import { ReactNode } from "react";

type WindowsProps = {
    children?: ReactNode;
};

export default function Windows({ children }: WindowsProps) {
            return (
                <div className="border-3 , border-b-gray-300 w-fit rounded-lg">
                   <div className="border-b-2 border-b-gray-200 flex items-center flex-row-reverse p-1 ">
                        <button className="bg-gray-50">
                            <img src="circle-x.svg"></img>
                        </button>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            );
}