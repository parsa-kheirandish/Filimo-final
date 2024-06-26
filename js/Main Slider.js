const dataBase = "https://parsa-kheirandish.github.io/Filimo-API/db.json"
const mainSlides = document.querySelector(".allMainSlides");
const mainNextButton = document.querySelector(".mainNextButton");
const mainPrevButton = document.querySelector(".mainPrevButton");
// slider start----------------------->  
const fetchMediasSlider = async () => {
  let data = await fetch(`${dataBase}`);
  let res = await data.json();
  let slideCounter = 0;
  const slides = res.filter((val)=> val.srcSlider);
      slides.forEach((val, index)=> {
        mainSlides.innerHTML += `
        <div class="slide absolute flex translate-x-[${((index)*101)}%]">
            <img src="${val.srcSlider}" alt="${val.srcSlider}" style="object-fit:cover; height: 100%; width: 100%;">
            <div class="slideDetails flex flex-col gap-5 w-[25%] mr-[3%] h-fit absolute bottom-[15%]">
              <img src="${val.srcLandmark}" alt="">
              <div class = "flex flex-row gap-2">
                <span class="text-white font-IRANSans-m text-[14px]">${val.showDate}</span>
                <span class="text-white font-IRANSans-m text-[14px]">${val.showTime}</span>
              </div>
              <span class="text-white font-IRANSans-m text-[20px]">${val.lable}</span>
              <button class=" w-fit h-fit bg-white px-[20px] py-[10px] rounded-[5px] flex flex-row justify-center items-center gap-2 font-IRANSans-m text-[15px] text-nowrap text-bg-black">
              <i class="fa-solid fa-play"></i>
              تماشای رایگان</button>
            </div>
        </div>
        `  
  })
  mainPrevButton.addEventListener("click", function(){
    if (slideCounter != 0){
      slideCounter+=100
      mainSlides.style.transform= `translateX(${slideCounter}vw)`
      if ((slideCounter*(-1)) !== ((slides.length-1)*100)){
        mainNextButton.classList.remove("text-white")
        mainNextButton.style.color = "#FFFFFF"
        mainNextButton.style.opacity = "100%"
        }
        if(slideCounter==0){
          mainPrevButton.classList.remove("text-gray")
          mainPrevButton.classList.remove("opacity-50")
          mainPrevButton.style.color = "#323232"
          mainPrevButton.style.opacity = "50%"
        }
    }
  });
  mainNextButton.addEventListener("click", function(){
    if ((slideCounter*(-1)) < ((slides.length-1)*100)){
      slideCounter-=100
      mainSlides.style.transform= `translateX(${(slideCounter)}vw)`
      mainPrevButton.classList.remove("text-gray")
      mainPrevButton.classList.remove("opacity-50")
      mainPrevButton.style.color = "#FFFFFF"
      mainPrevButton.style.opacity = "100%"
      if ((slideCounter*(-1)) === ((slides.length-1)*100)){
        mainNextButton.classList.remove("text-white")
        mainNextButton.style.color = "#323232"
        mainNextButton.style.opacity = "50%"
        }
      }
  });
}
export default fetchMediasSlider;
// slider end------------------------>