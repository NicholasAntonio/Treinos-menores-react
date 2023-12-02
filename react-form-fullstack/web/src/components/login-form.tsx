import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();

  async function handleSubmit(values: any) {
  
    try {
    
      await new Promise((resolve) => setTimeout(resolve, 1000));

      
      if (values.email === 'usuario@example.com' && values.password === 'senha123') {
      
        navigate('/rota');
      } else {
        
        console.log('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao autenticar:', error);
    }
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Insira um email válido!")
      .required("Obrigatório"),
    password: Yup.string()
      .required("Obrigatório"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="bg-zinc-500 flex justify-center items-center h-screen">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="font-sans border border-solid border-gray-800 bg-slate-200 p-8 rounded-md">
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <Field
              type="text"
              id="email"
              name="email"
              className="w-full bg-transparent b focus:outline-none p-2 border-b border-gray-500"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Senha</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="w-full bg-transparent b focus:outline-none p-2 border-b border-gray-500"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 w-24 rounded-md hover:bg-blue-900 hover:scale-110 cursor-pointer transition ease-in-out delay-150 "
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
