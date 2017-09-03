import 'whatwg-fetch';
import 'es6-promise';

export function getData () {
    // '/api/1'  获取字符串
    var result1 = fetch('/api/1', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    result1.then(res => {
        return res.text();
    }).then(text => {
        console.log(text);
    });

    var result2 = fetch('/api/2', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });

    console.log(result2);

    // result2.then(res => {
    //     return res.json();
    // });
    result2.then(json => {
        console.dir(json);
    });
}

export function postData () {
    // 'api/post' 提交数据
    var result = fetch('/api/post', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-from-urlencoded'
        },
        body: "a=100&b=200"
    });

    result.then(res => {
        return res.json();
    }).then(json => {
        console.log(json);
    });
}