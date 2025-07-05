import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchDetailModal from "../main/SearchDetailModal";

const MapPage = () => {
  const [searchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(true);
  const start = searchParams.get("start");
  const end = searchParams.get("end");
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=td08p9p7t6&submodules=geocoder";
    script.async = true;
    script.onload = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.3725, 127.1155),
        zoom: 15,
      };

      const map = new (window as any).naver.maps.Map("map", mapOptions);
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="relative w-full h-full overflow-y-hidden ">
      {" "}
      <div id="map" className="w-full h-[900px] " />
      <div className="absolute flex justify-between top-8 left-8 z-10 w-[350px] h-[50px] bg-white rounded-[50px] shadow-md">
        <img
          src="/Vector.png"
          alt="로고"
          className="w-[17px] h-[17px] mt-[17px] ml-[16px]"
        />
        <span className="w-[117px] h-[20px] font-[400] text-[16px] text-[#4C4C4C]">
          {start}
        </span>
        <img
          src="/fromto.png"
          alt="로고"
          className="w-[10px] h-[20px] mt-[15px]"
        />
        <span className="w-[131px] h-[20px] font-[400] text-[16px] text-[#4C4C4C]">
          {end}
        </span>
      </div>
      {showModal && (
        <div className="absolute bottom-0 left-0 w-full z-20">
          <SearchDetailModal
            onClose={() => setShowModal(false)}
            showDetailButton={false}
          />
        </div>
      )}
    </div>
  );
};

export default MapPage;
