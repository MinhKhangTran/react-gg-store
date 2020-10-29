import React from "react";
// strapi function
import loginUser from "../strapi/loginUser";
import registerUser from "../strapi/registerUser";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/user";
import { Alert } from "../components/Alert";
import { motion } from "framer-motion";
const containerVariantes = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: "0",
    transition: { duration: 0.7, type: "spring", stiffness: 50 }
  },
  exit: { opacity: 0, x: "-100vw" }
};

export const Login = () => {
  const { setAlert, userLogin, alert } = useUserContext();
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("default");
  const [isMember, setIsMember] = React.useState(true);
  let isEmpty = !email || !password || !username || alert;

  const toggleMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (isMember) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ email, password, username });
    }

    if (response) {
      console.log("success");
      console.log(response);

      const {
        jwt: token,
        user: { username }
      } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
      history.push("/products");
    } else {
      setAlert(true);
    }
  };

  React.useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(false);
    }, 2500);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);
  return (
    <motion.section
      className="text-center"
      variants={containerVariantes}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {alert && <Alert />}
      <h1 className="text-blue-600 mt-8 font-mono text-2xl underline">
        {isMember ? "Login" : "Registierung"}
      </h1>
      <article className="grid place-items-center" style={{ height: "75vh" }}>
        <form className="my-4 bg-blue-100 w-11/12 md:w-1/2 mx-auto rounded-md shadow-lg p-4">
          {/* email */}
          <div className="flex flex-col items-start">
            <label htmlFor="email" type="text">
              Email:
            </label>
            <input
              className="bg-blue-100 block border-b-2 w-full border-blue-400"
              type="email"
              placeholder="E-mail"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          {/* email end */}
          {/* password */}
          <div className="flex flex-col items-start mt-4">
            <label htmlFor="password" type="text">
              Password:
            </label>
            <input
              className="bg-blue-100 block border-b-2 w-full border-blue-400"
              type="password"
              placeholder="Passwort"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {/* username end */}
          {/* username */}
          {!isMember && (
            <div className="flex flex-col items-start mt-4">
              <label htmlFor="username" type="text">
                Username:
              </label>
              <input
                className="bg-blue-100 block border-b-2 w-full border-blue-400"
                type="username"
                placeholder="Username"
                name="username"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
          )}

          {/* password end */}
          {/* {isEmpty && (
            <p className="mt-4 text-red-500">Bitte alle Felder ausfüllen</p>
          )} */}
          {!isEmpty && (
            <button
              className="bg-blue-500 rounded mt-2 px-2 text-blue-100"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
          {/* register link */}
          <p className="mt-4 text-blue-500">
            {isMember
              ? "Hier klicken um sich zu registieren"
              : "Hier klicken um sich einzuloggen"}
            <button type="button" className="ml-4" onClick={toggleMember}>
              Klick mich
            </button>
          </p>
        </form>
      </article>
    </motion.section>
  );
};
