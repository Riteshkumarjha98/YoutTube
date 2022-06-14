// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}



const API="AIzaSyDuxIze7vzwA5SMcdtKl5JZp7iFn16xcaM";



const searchVideo=async () =>{
    try{

const q=document.getElementById("query").value;

const res = await fetch (` https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`
);

    const data=await res.json();
    console.log(data.items);
    append(data.items);
}
    catch(err){
        console.log("err:",err)
    }
};

const append =(videos) => {
    let show_video =document.getElementById("show_video");

    show_video.innerHTML=null;
    videos.forEach(({id:{videoId}, snippet:{title,thumbnails}})=>{
    let div=document.createElement('div');
    let iframe=document.createElement('img');
    iframe.src=thumbnails.high.url
    iframe.style.width="100%";
    iframe.style.aspectRatio = "4/3";
    // iframe.allow="fullscreen";

    let name=document.createElement('h4');
    name.innerText=title;

    div.append(iframe,name);

    let data = {
        title,
        videoId,
    };
    div.onclick=() =>{
    showVideo(data);
};

    show_video.append(div);

});
};
const showVideo=(x) =>{
    window.location.href="video.html";
    localStorage.setItem("video",JSON.stringify(x));
};