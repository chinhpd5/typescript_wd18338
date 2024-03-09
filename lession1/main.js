// biến var , let, const

// scope

// {
//     const i = {
//         name : 'chính',
//         age : 18
//     };
//     {
//         i = 'nam';
//         console.log(i);
//     }
// }

//hosting
// i = 1;
// const i; 


// console.log(i);



// template string
// var name = 'a';
// console.log(`xin chào :
//  ${name}`);

function logger(log = 'thông báo') {
    console.log(log);
}

let logger1 = function (log) {
    console.log(log);
}

let logger2 = (a, b) => a + b;

// - Class
// - Hàm với array (foreach, map, fliter, reduce, some, every,...)

// - Destructuring
let arr = [1, 2, 3, 4];

// let [a,,,d] = arr;

// console.log(d);


let obj = {
    name: 'long',
    age: 18,
    child: {
        name: 'long1',
        age: 4,
    }
}

let { name, age, child: { name: childName, age: childAge } } = obj;
// console.log(childName,childAge);


// - Rest Parameter: Phần còn lại
// let arr1 =[1,2,3,4];

// let [a,...rest] = arr1;

function sum(...rest) {
    console.log(rest);
}

// sum(1,2,3,4,5,6);

// - Spread : phân rã

let arr2 = [1, 2]
let arr3 = [3, 4]

// console.log([...arr2, ...arr3]);

let obj1 = {
    name: 'long',
    age: 18
}

let obj2 = {
    name: 'bắc',
    address: 'Hà Nội'
}


// console.log({...obj1,...obj2});

// - Sử lý bất đồng bộ
// + Callback


function getData(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(xhttp)
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

// getData('https://picsum.photos/200/300', (data) => {
//     document.getElementById('img_1').setAttribute('src', data.responseURL)
    
//     getData('https://picsum.photos/200/300', (data) => {
//         document.getElementById('img_2').setAttribute('src', data.responseURL)

//         getData('https://picsum.photos/200/300', (data) => {
//             document.getElementById('img_3').setAttribute('src', data.responseURL)

//         })
//     })

// })


// + Promise

let myPromise = new Promise((resolve, reject)=>{
    getData('https://picsum.photos/200/300',resolve);
})

let myPromise1 = new Promise((resolve, reject)=>{
    getData('https://picsum.photos/200/300',resolve);
})

let myPromise2= new Promise((resolve, reject)=>{
    getData('https://picsum.photos/200/300',resolve);
})

// myPromise
//     .then((data)=>{
//         // console.log(data);
//         document.getElementById('img_1').setAttribute('src', data.responseURL)
//         return myPromise1;
//     })
//     .then((data)=>{
//         document.getElementById('img_2').setAttribute('src', data.responseURL)
//         return myPromise2;
//     })
//     .then((data)=>{
//         document.getElementById('img_3').setAttribute('src', data.responseURL)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
//     .finally(()=>{
//         console.log('hoàn thành');
//     })



// + async/ await

async function getDataAsync(){
    try{
        let data = await myPromise;
        document.getElementById('img_1').setAttribute('src', data.responseURL)
    
        let data1 = await myPromise1;
        document.getElementById('img_2').setAttribute('src', data1.responseURL)
    
        let data2 = await myPromise2;
        document.getElementById('img_3').setAttribute('src', data2.responseURL)
    }
    catch(err){
        console.log('có lỗi');
    }
    


}

getDataAsync();