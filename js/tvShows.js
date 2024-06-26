const dataBase = "https://parsa-kheirandish.github.io/Filimo-API/db.json"
const iraniTVShowList = document.querySelector(".iranianTVshowProducts");
const foreignTVShowList = document.querySelector(".ForeignTVshowProducts");
let portraiteColumn = 8;
let iraniTVShowRow = 1;
let foreignTVShowRow = 1;
  //  TV Show list generate------------->
  const fetchMediasTVShows = async () => {
  let data = await fetch(`${dataBase}`);
  let res = await data.json();
  let TVShow = res.filter((val) => val.tvShow);
  let iraniCount = 0;
  TVShow.forEach((val, index) => {
    if (val.irani) {
      iraniCount++;
      if (iraniCount <= (portraiteColumn*iraniTVShowRow)){
        iraniTVShowList.innerHTML += `
      <div class="iraniTVShowProduct h-[80vw] sm:h-[33vw] lg:h-[17vw] cursor-pointer overflow-hidden rounded-[10px]">
          <div class="iraniTVShowImage h-[75vw] sm:h-[30vw] lg:h-[15vw] flex justify-center group relative ">
          <!-- -------------اطلاعات عکس-------------->    
          <img class="h-full" src="${val.srcPortraite}" alt="${val.nameFA}">
              <div class="detailContainer absolute top-0 bg-bg-gray opacity-0 group-hover:opacity-80 w-full h-full transition-all duration-300 flex items-end p-2">
                  <div class="detail h-fit flex flex-col gap-y-2">
                      <div class="imdb  h-[30px] flex flex-row items-center gap-x-2">
                          <svg class="h-full w-full" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"  height="24" ><defs><g id="ui-icon-imdb" viewBox="0 0 24 24"><g class="b"><rect y="6.83" width="2.18" height="9.99"></rect><path class="c" d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"></path><path class="c" d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"></path><path class="c" d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"></path></g></g></defs><use xlink:href="#ui-icon-imdb" fill="#FFFFFF"></use></svg>
          <!-- -------------رتبه---------------------------------------------------------->
                          <div class="rate text-white font-IRANSans-m text-[14px]"><span>${val.rate}</span>/10</div>
                      </div>
          <!-- -------------ژانر-------------------------------------------------------->
                      <div class="gener font-IRANSans-m text-white text-[11px]"><span>${val.gener}</span></div>
                      <div class="rest flex flex-row items-center gap-1">
          <!-- -------------سال ساخت------------------------------------------------------->
                          <div class="year text-[14px] font-IRANSans-m text-white"><span>${val.year}</span></div>
                          <span class="text-[14px] text-white font-IRANSans-m">-</span>
          <!-- -------------کشور سازنده---------------------------------------->
                          <div class="text-[14px] text-white font-IRANSans-m">${val.country}</div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- -------------نام فیلم-------------------------------->
          <div class="awesomeName text-white flex justify-start text-[12px] mt-[12px] pr-[5px]"><p class="truncate">${val.nameFA}</p></div>
      </div>
      `
      }
    }
  });
  // foregin TV Show list generate------------->
  let foreignCount = 0;
  TVShow.forEach((val, index) => {
    if (val.foreign) {
      foreignCount++;
      if (foreignCount <= (portraiteColumn*foreignTVShowRow)){        
        foreignTVShowList.innerHTML += `
        <div class="foreignTVShowProduct h-[80vw] sm:h-[33vw] lg:h-[17vw] cursor-pointer overflow-hidden rounded-[10px]">
          <div class="foreignTVImage h-[75vw] sm:h-[30vw] lg:h-[15vw] flex justify-center group relative ">
          <!-- -------------اطلاعات عکس-------------->    
          <img class="h-full" src="${val.srcPortraite}" alt="${val.nameFA}">
              <div class="detailContainer absolute top-0 bg-bg-gray opacity-0 group-hover:opacity-80 w-full h-full transition-all duration-300 flex items-end p-2">
                  <div class="detail h-fit flex flex-col gap-y-2">
                      <div class="imdb  h-[30px] flex flex-row items-center gap-x-2">
                          <svg class="h-full w-full" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"  height="24" ><defs><g id="ui-icon-imdb" viewBox="0 0 24 24"><g class="b"><rect y="6.83" width="2.18" height="9.99"></rect><path class="c" d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"></path><path class="c" d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"></path><path class="c" d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"></path></g></g></defs><use xlink:href="#ui-icon-imdb" fill="#FFFFFF"></use></svg>
          <!-- -------------رتبه---------------------------------------------------------->
                          <div class="rate text-white font-IRANSans-m text-[14px]"><span>${val.rate}</span>/10</div>
                      </div>
          <!-- -------------ژانر-------------------------------------------------------->
                      <div class="gener font-IRANSans-m text-white text-[11px]"><span>${val.gener}</span></div>
                      <div class="rest flex flex-row items-center gap-1">
          <!-- -------------سال ساخت------------------------------------------------------->
                          <div class="year text-[14px] font-IRANSans-m text-white"><span>${val.year}</span></div>
                          <span class="text-[14px] text-white font-IRANSans-m">-</span>
          <!-- -------------کشور سازنده---------------------------------------->
                          <div class="text-[14px] text-white font-IRANSans-m">${val.country}</div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- -------------نام فیلم-------------------------------->
          <div class="awesomeName text-white flex lg:justify-start lg:text-[12px] lg:mt-[12px] lg:pr-[5px]"><p class="truncate">${val.nameFA}</p></div>
      </div>
      `
      }
    }
  });
  }
  export default fetchMediasTVShows;