import { Pen, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import axios from 'axios'

export default function Grid({ users, setUsers, setOndEdit }) {
  function handleEdit(item) {
    setOndEdit(item);
  }

  async function handleDelete(id) {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);
        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOndEdit(null);
  }

  return (
    <table className=" w-full bg-[#fff] p-[20px] shadow-sm shadow-[#ccc] rounded-[5px] max-w-[800px] m-auto my-5 break-all">
      <thead>
        <tr>
          <th className="text-start border-b-[1px] pb-[5px] ">Nome</th>
          <th className="text-start border-b-[1px] pb-[5px] ">Email</th>
          <th className={`text-start border-b-[1px] pb-[5px]`}>Telefone</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => (
          <tr key={index}>
            <td className="w-3/12 items-start pt-[15px]">{item.nome}</td>
            <td className="w-3/12 items-start pt-[15px]">{item.email}</td>
            <td className="w-1/5 items-start pt-[15px]">{item.phone}</td>
            <td className="w-2/12 pt-[15px]">{item.phone}</td>
            <td className="items-center w-5/100 pt-[15px]">
              <Pen
                onClick={() => {
                  handleEdit(item);
                }}
              />
            </td>
            <td className="items-center w-5/100 pt-[15px]">
              <Trash2
                onClick={() => {
                  handleDelete(item.id);
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
