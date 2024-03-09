// tsc index.ts --watch
let myName = 'chinhpd5';
let myAge = 20;
let myCheck = true;
// npm i -g typescript
//tsc -v
//mở powershell Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
function sum(a, b = 10) {
    return a + b;
}
// console.log(sum(3));
function showInfo(name, age) {
    return `xin chào ${name}, tuổi: ${age}`;
    //code 
}
let myLove = ["Hồng", "Nam", "Bắc", "Huyền"];
// myLove.push(10);
// myLove[0] = 10;
let myNumber = [1, 3, -2, 3.5];
let arr = ["Nam", 20, "Bắc", true];
//union
let myUnion = "thành công";
let myUnion2 = 10;
myUnion2 = "chinhpd5";
let person = {
    id: 10,
    name: "chinhpd10",
    gt: true
};
let obj2 = {
    id: 10,
    name: "chinhpd10",
    gt: true,
    description: "mô tả"
};
const showInfo2 = (data) => {
    console.log(`Họ và tên: ${data.name}, 
    giới tính ${(data.gt ? 'Nam' : 'Nữ')}`);
};
const people = [
    { id: 1, name: "chinhpd5", gt: false },
    { id: 2, name: "chinhpd2", gt: true },
    { id: 3, name: "chinhpd3", gt: false },
    { id: 4, name: "chinhpd4", gt: true }
];
function showInfo3(data) {
    return data.map((item) => {
        return `Họ và tên: ${item.name},giới tính ${(item.gt ? 'Nam' : 'Nữ')}\n`;
    }).join('');
}
function addPerson(data) {
    if (data)
        people.push(data);
}
// addPerson(person);
const editData = (id, data) => {
    // b1 tìm vị trí
    const index = people.findIndex((person) => {
        return person.id == id;
    });
    if (index >= 0) {
        people[index] = data;
    }
    else {
        console.log("Không tìm thấy người");
    }
    // console.log(index);
};
// editData(10,person);
//xóa 
const deleteData = (id) => {
    const index = people.findIndex((person) => {
        return person.id == id;
    });
    if (index >= 0) {
        people.splice(index, 1);
    }
    else {
        console.log("Không tìm thấy người");
    }
};
deleteData(3);
console.log(showInfo3(people));
// npm i -g typescript
//tsc -v
//mở powershell Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
