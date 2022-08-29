function sendAJAX(url){
    return new Promise((resolve,reject)=>{
        const x=new XMLHttpRequest();
        x.open('GET',url);
        x.send();
        x.onreadystatechange=function (){
            if(x.readyState===4){
                if(x.status>=200&&x.status<300){
                    resolve(x.response);
                }
                else{
                    reject(x.status);
                }
            }
        }
    })
}
async function returnAjax(url){
    let result=await sendAJAX(url);
    console.log(result)
}
returnAjax();