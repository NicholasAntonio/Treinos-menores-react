import { useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Form({ onEdit, setOnEdit, getUsers }) {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.phone.value = onEdit.phone;
      user.data_nasc.value = onEdit.data_nasc;
    }
  }, [onEdit]);

  async function handleSubmit(e) {
    e.preventDefault();

    const user = ref.current;
    if (
      !user.nome.value ||
      !user.email.value ||
      !user.phone.value ||
      !user.data_nasc.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          phone: user.phone.value,
          data_nasc: user.data_nasc.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.phone.value,
          data_nascimento: user.data_nasc.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.phone.value = "";
    user.email.value = "";
    user.data_nasc.value = "";

    setOnEdit(null);
    getUsers();
  }

  return (
    <form
      className=" flex items-end gap-2 flex-wrap bg-[#fff] p-4 shadow-sm shadow-[#ccc] rounded-[5px]"
      ref={ref}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="nome">Nome</label>
        <input
          className="w-[120px] p-2 border-solid border-[1px] border-[#bbb] rounded-[5px] h-10"
          type="text"
          name="nome"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          className="w-[120px] pr-2 border-solid border-[1px] border-[#bbb] rounded-[5px] h-10"
          type="email"
          name="email"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone">Telefone</label>
        <input
          className="w-[120px] pr-2 border-solid border-[1px] border-[#bbb] rounded-[5px] h-10"
          type="number"
          name="phone"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="data_nasc">Data de Nascimento</label>
        <input
          className="w-[120px] px-0 py-4 border-solid border-[1px] border-[#bbb] rounded-[5px] h-10"
          type="date"
          name="data_nasc"
        />
      </div>
      <button
        className="p-2 cursor-pointer rounded-[5px] border-none bg-[#2c73d2] text-white h-[42px]"
        type="submit"
      >
        Salvar
      </button>
    </form>
  );
}
