//class component
//function compnent

function Header(){
  return ( <header>Heading new</header>)
}
function Main(){
  return (<main>Nội dung</main>)
}
function Footer(){
  return (<footer>Footer</footer>)
}

type PersonType={
  name: string,
  age: number,
  gt: boolean
}

function ShowInfo(props: PersonType):JSX.Element{
  // const men: PersonType={
  //   name: "chinhpd5",
  //   age: 18,
  //   gt: true
  // }
  return (
    <div>
      <h1 className="heading">{props.name}</h1>
      <p>{props.age}</p>
      <p>{(props.gt ? "Nam": "Nữ")}</p>
    </div>
  )
}

function App() {
  const People:  PersonType[]=[
    {name:"chinhpd1", age:10, gt:false},
    {name:"chinhpd2", age:20, gt:true},
    {name:"chinhpd3", age:30, gt:false},
    {name:"chinhpd4", age:40, gt:true},
  ]

  return (
    <>
      <ShowInfo name="Chinhpd5" age={30} gt={true}/>
    </>
  )
}

export default App
