// Router
import { useNavigate } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "../../../store/store";
import { signIn, getCurrentUser } from "../../../slices/authSlice";

// Formik
import { ErrorMessage, Form, Formik } from "formik";

// Yup
import * as Yup from "yup";

// Etc
import ctcLogo from "../../../assets/ctclogo.png";
import Typography from "../../atoms/Typography/Typography";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

// Styles

const SignInSchema = Yup.object().shape({
   email: Yup.string().email("Invalid email").required("Required"),
   password: Yup.string().required("Required"),
});

interface Props {}

const SignInForm: React.FC<Props> = () => {
   let navigate = useNavigate();
   const dispatch: AppDispatch = useAppDispatch();
   const error = useSelector((state: RootState) => state.auth.error);

   async function handleSubmit(
      email: string,
      password: string,
      setSubmitting: (isSubmitting: boolean) => void
   ) {
      const result = await dispatch(signIn({ email, password }));
      if (signIn.fulfilled.match(result)) {
         const resultUser = await dispatch(getCurrentUser());
         if (getCurrentUser.fulfilled.match(resultUser)) {
            navigate("/");
         }
      }
      setSubmitting(false);
   }

   return (
      <Formik
         initialValues={{ email: "", password: "" }}
         validationSchema={SignInSchema}
         onSubmit={(values, { setSubmitting }) => {
            const { email, password } = values;
            handleSubmit(email, password, setSubmitting);
         }}
      >
         {({ errors, touched, values, handleChange, setFieldValue, isSubmitting }) => (
            <Form>
               <img src={ctcLogo} width="100" alt="CTC Logo" />
               <Typography
                  bold
                  type="paragraph2"
                  variation="mobile"
               >
                     Bienvenido nuevamente...
               </Typography>
               <Input
                  placeholder="email"
                  name="email"
                  value={values?.email}
                  onChange={(
                     e: React.ChangeEvent<HTMLInputElement>
                  ) => {
                     handleChange(e);
                  }}
                  error={errors.email}
               />
               <ErrorMessage
                  name="email"
                  render={() => (
                     <Typography
                        bold
                        type="paragraph2"
                        variation="mobile"
                     >
                        Este campo es requerido
                     </Typography>
                  )}
               />
               <Input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={values?.password}
                  onChange={(
                     e: React.ChangeEvent<HTMLInputElement>
                  ) => {
                     handleChange(e);
                  }}
                  error={errors.password}
               />
               <ErrorMessage
                  name="password"
                  render={() => (
                     <Typography
                        bold
                        type="paragraph2"
                        variation="mobile"
                     >
                        Este campo es requerido
                     </Typography>
                  )}
               />
               {error && (
                  <Typography
                     bold
                     type="paragraph2"
                     variation="mobile"
                  >
                     {error.msg}
                  </Typography>
               )}
               <Button
                  type="submit" 
                  model="filled"
                  disabled={isSubmitting}
               >
                  {isSubmitting ? "Cargando..." : "Ingresar"}
               </Button>
            </Form>
         )}
      </Formik>
   );
};

export default SignInForm;
