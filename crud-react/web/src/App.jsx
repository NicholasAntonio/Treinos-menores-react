import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import axios from 'axios';
import Grid from "./components/Grid";

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);


  async function getUsers(){
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1: -1)))
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() =>{
    getUsers();
  }, [setUsers])

  return (
    <>
      <main className=" w-full max-w-[800px] mt-5 flex flex-col items-center gap-2">
        <h1 > Usuários</h1>
        <Form onEdit={onEdit}  setOnEdit={setOnEdit} getUsers={getUsers}/>
        <Grid users={users} setUsers={setUsers} setOndEdit={setOnEdit}/>
      </main>
      <ToastContainer
        autoclose={3000}
        position={toast.POSITION.TOP_RIGHT}
      ></ToastContainer>
    </>
  );
}

export default App;
