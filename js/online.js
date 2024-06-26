const dataBase = "https://parsa-kheirandish.github.io/Filimo-API/db.json"
const onlineList = document.querySelector(".onlineProducts");
let landscapeColumn = 5;    
let onlineRow = 1;
  // online list generate------------->
  const fetchMediasOnline = async () => {
  let data = await fetch(`${dataBase}`);
  let res = await data.json();
  const filteredOnline = res.filter((val) => val.online);
  filteredOnline.forEach((val, index) => {
    if (index < (landscapeColumn*onlineRow)){
      onlineList.innerHTML += `
      <div class="onlineProduct cursor-pointer overflow-hidden rounded-[8px]">
          <div class="onlineImage  flex justify-center group relative ">
          <!-- -------------اطلاعات عکس-------------->    
          <img class="h-full" src="${val.srcLandscape}" alt="${val.nameFA}">
              <div class="detailContainer absolute top-0 bg-bg-gray opacity-0 group-hover:opacity-80 w-full h-full transition-all duration-300 flex items-end p-2">
                  <div class="detail h-fit flex flex-col gap-y-2">
                  <div class="awesomeName text-white"><p class="truncate">${val.nameFA}</p></div>      
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
          
      </div>
      `
    }
  });
  }
  export default fetchMediasOnline;