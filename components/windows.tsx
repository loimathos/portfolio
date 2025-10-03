import { ReactNode, useState } from "react";

type WindowsProps = {
    children?: ReactNode;
    title: string;
};

export default function Windows({ children, title }: WindowsProps) {
    const [status, setStatus] = useState(true);
    const [isClosed, setIsClosed] = useState(false);

    const handleClose = () => {
        setStatus(false);
        setTimeout(() => setIsClosed(true), 500); // 1s = animation duration
    };

    if (status && !isClosed) {
        return (
            <div className="opening">
                <div className="border-3 , border-b-gray-300 w-fit rounded-xl m-1">
                    <div className="border-b-2border-b-gray-200 rounded-t-lg flex items-center flex-row- xjustify-between p-1 bg-[#65010C] ">
                        <h2 className="text-[#FEDFD4]">{title}</h2>
                        <button onClick={handleClose}>
                            <img src="circle-x.svg" alt="Close"/>
                        </button>
                    </div>
                    <div className="bg-[#1368AA] rounded-b-lg  text-[#FEDFD4]">
                        {children}
                    </div>
                </div>
            </div>
        );
    } else if (!status && !isClosed) {
        // Play closing animation
        return (
            <div className="closing">
                <div className="border-3 , border-b-gray-300 w-fit rounded-xl m-1">
                    <div className="border-b-2border-b-gray-200 rounded-t-lg flex items-center flex-row- xjustify-between p-1 bg-[#65010C] ">
                        <h2 className="text-[#FEDFD4]">{title}</h2>
                    </div>
                    <div className="bg-[#1368AA] rounded-b-lg  text-[#FEDFD4]">
                        {children}
                    </div>
                </div>
            </div>
        );
    } else {
        // After animation, show alternate content
        return (
            <div className="B Bouton">
                <button onClick={() => { setStatus(true); setIsClosed(false); }}>
                    active moi
                </button>
                <div>Autre chose affichée après fermeture</div>
            </div>
        );
    }
}