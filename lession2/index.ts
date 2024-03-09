// tsc index.ts --watch
let myName: string = 'chinhpd5';
let myAge: number = 20;
let myCheck: boolean = true;


// npm i -g typescript

//tsc -v

//mở powershell Set-ExecutionPolicy -ExecutionPolicy RemoteSigned



function sum(a: number, b: number=10){
    return a+b;
}

// console.log(sum(3));

function showInfo(name: string, age: number):string{
    return `xin chào ${name}, tuổi: ${age}`;
   //code 
}


let myLove: string[] = ["Hồng", "Nam","Bắc","Huyền"];

// myLove.push(10);
// myLove[0] = 10;

let myNumber: number[] = [1,3,-2,3.5]

let arr: (string|number|boolean)[] = ["Nam",20,"Bắc",true];

//union

let myUnion: "thành công" | "thất bại" = "thành công";
let myUnion2: number|string = 10;
myUnion2 = "chinhpd5";
// console.log(showInfo(myName,myAge));

type myType={
    id: number, 
    name: string, 
    gt: boolean
}

let person:myType={
    id: 10,
    name: "chinhpd10",
    gt: true
}

interface IMyType {
    id: number, 
    name: string, 
    gt: boolean
}

interface IMyType2 extends IMyType {
    description?: string
}

let obj2: IMyType2={
    id: 10,
    name: "chinhpd10",
    gt: true,
    description: "mô tả"
}


const showInfo2 = (data: myType):void=>{
    console.log(`Họ và tên: ${data.name}, 
    giới tính ${ (data.gt ? 'Nam': 'Nữ') }`);
}

const people: myType[] = [
    { id: 1,name: "chinhpd5",gt: false },
    { id: 2,name: "chinhpd2",gt: true },
    { id: 3,name: "chinhpd3",gt: false },
    { id: 4,name: "chinhpd4",gt: true }
]

function showInfo3 (data: myType[]):string{
    return data.map((item:myType)=>{
        return `Họ và tên: ${item.name},giới tính ${ (item.gt ? 'Nam': 'Nữ') }\n`
    }).join('');
}

function addPerson(data: myType):void{
    if(data)
        people.push(data)
}

// addPerson(person);


const editData = (id:number, data: myType):void =>{
    // b1 tìm vị trí
    const index = people.findIndex((person:myType)=>{
        return person.id == id
    })
    
    if(index>=0){
        people[index] =data;
    }else{
        console.log("Không tìm thấy người");
        
    }
    // console.log(index);
    
}

// editData(10,person);

//xóa 
const deleteData = (id:number):any =>{
    const index = people.findIndex((person:myType)=>{
        return person.id == id
    })
    
    if(index>=0){
        people.splice(index,1);

    }else{
        console.log("Không tìm thấy người");
        
    }
}
deleteData(3)

console.log(showInfo3(people));
 




// npm i -g typescript

//tsc -v

//mở powershell Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

