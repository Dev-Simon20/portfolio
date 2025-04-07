import { Boxes, Package, ShoppingCart } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
 const tabs = [
  { name: "Sales", icon: ShoppingCart },
  { name: "Stock", icon: Boxes },
  { name: "Product Data", icon: Package },
];
interface Props{
    selectedIndex:number,
    setSelectedIndex:Dispatch<SetStateAction<number>>
}
export default function UnderlineTabs({selectedIndex,setSelectedIndex}:Props) {
 
  const tabsComponents = tabs.map((tab, i) => {
    return (
      <button
        type="button"
        key={`tab-${tab.name}`}
        onClick={() => setSelectedIndex(i)}
        className="py-2 px-3 border-none"
      >
        <p className={`flex gap-1 items-center ${selectedIndex===i?'text-[#2a6274]':'text-gray-600'} `}>
        {tab.name}<tab.icon className="size-5 font-light"/>
        </p>
 
        {selectedIndex === i && (
          <div style={{ position: "relative", transform: "translateY(3px)" }}>
            <MagicTabSelect
              id="underline"
              transition={{ type: "spring", bounce: 0.3 }}
            >
              <div
              className="w-full h-[0.15rem] bg-[#2a6274] absolute"
              />
            </MagicTabSelect>
          </div>
        )}
      </button>
    );
  });
 
  return <div className="flex gap-2  -ml-2">{tabsComponents}</div>;
}