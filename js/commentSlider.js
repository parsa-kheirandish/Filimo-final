const dataBase = "https://parsa-kheirandish.github.io/Filimo-API/db.json"
let commentDisplayNumber = 3
const commentSlider = document.querySelector(".commentSlider");
const commentNextButton = document.querySelector(".commentNextButton")
const commentPrevButton = document.querySelector(".commentPrevButton")
  // comment slider start------------------------>
  const fetchMediasComment = async () => {
  let data = await fetch(`${dataBase}`);
  let res = await data.json();
  let commentCounter = 0;
  const comment = res.filter((val)=> val.commentSlider)
  comment.forEach((val, index)=>{
    commentSlider.innerHTML += `
      <div class="commentContainer w-[30vw] h-full border border-white/[0.3] p-[10px] rounded-[15px] bg-submenu ">
                    <div class="commentTitle  w-full h-[30%] flex flex-row justify-between items-center ">
                        <div class="user flex flex-roe gap-2 items-center">
                            <div class="avatar border border-white/[0.3] w-[50px] h-[50px]  flex items-center justify-center rounded-full">
                            <i class="fa-thin fa-user-tie-hair text-white/[0.3] text-[30px]"></i>
                        </div>
                        <span class="userName text-white font-IRANSans-m">${val.name}</span>
                        </div>
                        <div class="commentIcon">
                            <img src="./Pic/virgol.webp" alt="">
                        </div>
                    </div>
                    <div class="comment  w-full h-[70%] overflow-auto text-justify pl-[15px] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-white-300 scrollbar-track-orange-300  overflow-y-scroll">
                        <p class="font-IRANSans-m text-[14px] text-white">${val.body}</p>
                    </div>
                </div>
    `
  })
  commentNextButton.addEventListener("click", function(){
    if (commentCounter == 0){
      commentNextButton.classList.remove("text-gray")
      commentNextButton.classList.remove("opacity-50")
      commentNextButton.style.opacity = "30%"
    }else{
      commentCounter -= 30
      commentSlider.style.transform = `translateX(${commentCounter}vw)`
      commentPrevButton.style.opacity = "100%"
      if(commentCounter==0){
        commentNextButton.style.opacity = "30%"
      }
    }
  });
  commentPrevButton.addEventListener("click", function(){
    if ((commentCounter) < ((comment.length-(commentDisplayNumber))*30)){
      commentCounter +=30 
      commentSlider.style.transform = `translateX(${commentCounter}vw)`
      if (commentCounter != 0){
        commentNextButton.style.opacity = "100%"
      }
      if ((commentCounter) >= ((comment.length-(commentDisplayNumber))*30)){
        commentPrevButton.style.opacity = "30%"
        
      }
    }
  });
}
export default fetchMediasComment;
// // comment slider end-------------------------->
