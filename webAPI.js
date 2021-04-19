// webAPIとは？　IT大学javascript入門#8
// 実際に叩いてみる
// https://jsonplaceholder.typicode.com/users

// こういったAPIを作るのがバックエンドの仕事
// 主にフロントエンドはバックエンドが作ったAPIを使ってUIを構築する
// APIをプログラム側（javascript）から叩いてやりとりを行う


// 非同期関数 async await こっちの方がよく使う　
// IEでは使えない　babelで古いブラウザでも使えるようになる
async function callAPI() {
    // 実際にAPIを叩く処理
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);
}
callAPI();


// 非同期関数　then
function callAPI() {
    // 実際にAPIを叩く処理
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function (users) {
        console.log(users);
    })
}
callAPI();

// 非同期関数　fetchを使わない 複雑であまり覚えなくていい　IE対応
function callAPI() {
    // 実際にAPIを叩く処理
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users');
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function () {
        console.log(xhr.response);
    };
}
callAPI();


