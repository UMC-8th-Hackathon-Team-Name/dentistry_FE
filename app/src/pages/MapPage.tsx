import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const MapPage = () => {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=td08p9p7t6&submodules=geocoder";
    script.async = true;
    script.onload = () => {
      const path = [
        new window.naver.maps.LatLng(37.359924641705476, 127.1148204803467),
        new window.naver.maps.LatLng(37.36343797188166, 127.11486339569092),
        new window.naver.maps.LatLng(37.368520071054576, 127.11473464965819),
        new window.naver.maps.LatLng(37.3685882848096, 127.1088123321533),
        new window.naver.maps.LatLng(37.37295383612657, 127.10876941680907),
        new window.naver.maps.LatLng(37.38001321351567, 127.11851119995116),
        new window.naver.maps.LatLng(37.378546827477855, 127.11984157562254),
        new window.naver.maps.LatLng(37.376637072444105, 127.12052822113036),
        new window.naver.maps.LatLng(37.37530703574853, 127.12190151214598),
        new window.naver.maps.LatLng(37.371657839593894, 127.11645126342773),
        new window.naver.maps.LatLng(37.36855417793982, 127.1207857131958),
      ];
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.3725, 127.1155),
        zoom: 15,
      };

      const map = new (window as any).naver.maps.Map("map", mapOptions);
      new (window as any).naver.maps.Polyline({
        map: map,
        path: path,
        strokeColor: "#FF0000",
        strokeWeight: 4,
        strokeOpacity: 0.8,
        strokeStyle: "solid",
      });
      const bounds = new (window as any).naver.maps.LatLngBounds();
      path.forEach((latlng) => bounds.extend(latlng));
      map.fitBounds(bounds);
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {" "}
      <div id="map" className="w-full h-full" />
      <div className="absolute flex justify-between top-8 left-8 z-10 w-[350px] h-[50px] bg-white rounded-[50px] shadow-md">
        <img
          src="/Vector.png"
          alt="로고"
          className="w-[17px] h-[17px] mt-[17px] ml-[16px]"
        />
        <span className="w-[117px] h-[20px] font-[400] text-[16px] text-[#4C4C4C]">
          {/*출발지*/}
        </span>
        <img
          src="/fromto.png"
          alt="로고"
          className="w-[10px] h-[20px] mt-[15px]"
        />
        <span className="w-[131px] h-[20px] font-[400] text-[16px] text-[#4C4C4C]">
          {/*목적지*/}
        </span>
      </div>
    </div>
  );
};

export default MapPage;
