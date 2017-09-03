import { get } from './get';
import { post } from './post';

export function getData () {

    // '/api/1' 获取字符串
    let result1 = get('/api/1');

    result1.then(res => {
        return res.text();
    }).then(text => {
        console.log(text);
    });

    let result2 = get('/api/2');

    result2.then(res => {
        return res.json();
    }).then(json => {
        console.log(json);
    });

}

export function postData () {

    // '/api/post' 提交数据
    let result = post('/api/post', {
        a:100,
        b:200
    });

    result.then(res => {
        return res.join();
    }).then(json => {
        console.log(json);
    });
}
