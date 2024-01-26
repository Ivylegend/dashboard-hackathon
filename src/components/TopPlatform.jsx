const TopPlatform = ({darkMode}) => {
  return (
    <div className={`${darkMode && "dark-bg"} border-solid w-[100%] h-[100%] overflow-hidden border p-4 border-[#EDF2F7] bg-white rounded-xl flex flex-col gap-[20px]`}>

      {/* TOP PLATFORM */}
      <div className="flex justify-between items-center">
        <p className={`${darkMode && "text-white"} text-[#26282C] text-[18px] font-semibold`}>Top Platform</p>
        <p className="text-[#34CAA5] text-[18px] font-normal cursor-pointer">See All</p>
      </div>
      <div>
        <p className={`${darkMode && "text-[#283a81]"} text-[#22242C] font-medium text-[18px]`}>Book Bazaar</p>
        <input
          value={50}
          type="range"
          disabled
          className={"range-field bg-purple"}
        />
        <span className="flex justify-between items-center">
          <p className="text-[#525252] font-light text-[18px]">$2,500,000</p>
          <p className="text-[#525252] font-light text-[18px]">+15%</p>
        </span>
      </div>
      <div>
        <p className={`${darkMode && "text-[#283a81]"} text-[#22242C] font-medium text-[18px]`}>Artisan Aisle</p>
        <input
          value={40}
          type="range"
          disabled
          className={"range-field bg-blue"}
        />
        <span className="flex justify-between items-center">
          <p className="text-[#525252] font-light text-[18px]">$1,800,000</p>
          <p className="text-[#525252] font-light text-[18px]">+10%</p>
        </span>
      </div>
      <div>
        <p className={`${darkMode && "text-[#283a81]"} text-[#22242C] font-medium text-[18px]`}>Toy Troop</p>
        <input
          value={30}
          type="range"
          disabled
          className={"range-field bg-orange"}
        />
        <span className="flex justify-between items-center">
          <p className="text-[#525252] font-light text-[18px]">$1,200,000</p>
          <p className="text-[#525252] font-light text-[18px]">+8%</p>
        </span>
      </div>
      <div>
        <p className={`${darkMode && "text-[#283a81]"} text-[#22242C] font-medium text-[18px]`}>X Store</p>
        <input
          value={30}
          type="range"
          disabled
          className={"range-field bg-red"}
        />
        <span className="flex justify-between items-center">
          <p className="text-[#525252] font-light text-[18px]">$1,200,000</p>
          <p className="text-[#525252] font-light text-[18px]">+8%</p>
        </span>
      </div>
    </div>
  );
};

export default TopPlatform;
