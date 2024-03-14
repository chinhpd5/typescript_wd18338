//class component
//function compnent

import ShowInfo from "./components/ShowInfo"
import PersonType from "./interfaces/PersonType"


function App() {
  const People: PersonType[]=[
    {name:"chinhpd1", age:10, gt:false},
    {name:"chinhpd2", age:20, gt:true},
    {name:"chinhpd3", age:30, gt:false},
    {name:"chinhpd4", age:40, gt:true},
  ]
  //render thông tin của mảng sử dụng function ShowInfo
  return (
    <>
      {
        People.map((person,index) => {
          return (<ShowInfo key={index} name={person.name} age={person.age} gt={person.gt}/>)
        })
      } 
    </>
  )
}

export default App
