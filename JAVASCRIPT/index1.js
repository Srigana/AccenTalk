console.log("this is index.js");
let upload = document.getElementById('upload');
let inputBox = document.getElementById('inputBox');
upload.addEventListener('change',()=>{
    let fr=new FileReader();
    fr.readAsText(upload.files[0]);
    fr.onload=function(){
        inputBox.innerHTML = fr.result;
    };
});
