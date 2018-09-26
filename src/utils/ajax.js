/**
 * Create By Guanghua on 2018/3/15.
 */

const xhr =  new XMLHttpRequest();

export function get(url,callback){

    function checkTimeout(){
        if(xhr.readyState !== 4){
            xhr.abort();//关闭请求
        }
    }
    setTimeout(checkTimeout,5*1000);//设置超时时间
    xhr.onreadystatechange = function(){

        if( xhr.readyState === 4 && xhr.status === 200 ){
            callback(xhr.responseText);
        }
    };

    xhr.open('GET',url,true);
    xhr.send();
}
// 调用
// get('http://localhost:8087/rxd/pre/user/login',function(data){
//     //console.log(data);
// });

export function post(url,params,callback){
    function checkTimeout(){
        if(xhr.readyState !== 4){
            xhr.abort();
        }
    }

    setTimeout(checkTimeout,5*1000);
    xhr.onreadystatechange = function(){
        if( xhr.readyState === 4 && xhr.status === 200 ){
            callback(xhr.responseText);
        }
    };

    xhr.open('POST',url,true);
    xhr.send(params);
};
//调用
// post('http://localhost:8087/rxd/pre/user/login',{username:'asd',password:'asd'},function(data){
//     console.log(data);
// })