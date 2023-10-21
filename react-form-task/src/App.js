import Header from "./components/Header";
import "./styles/main.scss";
import Form from "./components/Form";

function App() {

  const data = [
    {
      id: 1,
      title: "Text",
      placeholder: "Your name",
      type: "text",
      htmltFor:"name",
      inputid:"name"
    },
    {
      id: 2,
      title: "Email",
      placeholder: "Your name",
      type: "e-mail",
      htmltFor:"e-mail",
      inputid:"e-mail"
    },
    {
      id: 3,
      title: "Phone Number",
      placeholder: "your phonenumber",
      type: "number",
      htmltFor:"number",
      inputid:"number"
    },
    {
      id: 4,
      title: "Url",
      placeholder: "www.google.com",
      type: "text",
      htmltFor:"text",
      inputid:"text"
    },
    {
      id: 5,
      title: "Password",
      placeholder: "Your password",
      type: "password",
      htmltFor:"password",
      inputid:"password"
    },
    {
      id: 6,
      title: "Search",
      placeholder: "Search all things",
      type: "text",
      htmltFor:"text",
      inputid:"text"
    },
    {
      id: 7,
      title: "Disabled field",
      placeholder: "Your name",
      type: "text",
      htmltFor:"text",
      inputid:"text"
    },
  ]
// console.log(inputsData)
  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* {
          data.map((item)=>{
            return(
              <h1 key={item.id}>{item.id} {item.placholder} {item.placholder} {item.type}</h1>

            )
          })
        } */}
        <Form data={data} />
      </div>
    </div>
  );
}

export default App;
