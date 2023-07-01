import Image from "next/image";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import * as yup from "yup";
import Logo from "../public/assets/images/logo2.png";
import Banner from "../public/assets/images/login-img.png";
import { Spin } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorDisplay from "@/components/ErrorMessage";
import ResponseAlert from "@/components/ResponseAlert";
import { loginSchema } from "@/validations/auth";
import testTool from "@/lib/tools";
import GoogleSvg from "../public/assets/icons/google.svg";

import style from "@/styles/Login.module.scss";
import firebaseAuthProvider from "@/lib/googleAuth";
import fetchJson from "@/lib/fetchJson";

type FormData = yup.InferType<typeof loginSchema>;

// interface IForminput {
//   email: string;
//   password: string;
// }

interface IResponseMessage {
  message: string;
  type: "success" | "error" | undefined;
}

const Login = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reponseMessage, setResponseMessage] = useState<IResponseMessage>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  console.log("error", errors);
  //   const {
  //     register,
  //     handleSubmit,

  //     formState: { errors },
  //   } = useForm({
  //     resolver: yupResolver(regSchema),
  //   });

  const onSubmit = async (data: FormData) => {
    console.log("dataa", data);
    //   const payload = {
    //     email: data.email,
    //     password: data.password,
    //   };
    //   setLoading(true);
    //   console.log("payload", payload);
    //   const [result, error] = await resolver(loginUser(payload));
    //   setLoading(false);
    //   if (result) {
    //     globalStorage.store("access_token", result.data.access_token);
    //     if (result.data.tenant_id) {
    //       globalStorage.store("tenantId", result.data.tenant_id);
    //       setResponseMessage({
    //         message: "Logged in successfully.",
    //         type: "success",
    //       });
    //       setTimeout(() => {
    //         navigate("/Dashboard", { state: "/Dashboard" });
    //       }, [1000]);
    //     } else {
    //       navigate("/details");
    //     }
    //   }
    //   if (error) {
    //     setResponseMessage({
    //       message: errorMessage(error),
    //       type: "error",
    //     });
    //   }
  };

  const onClose = () => {
    setResponseMessage(undefined);
  };

  const loginWithGoogleHandler = () => {
    firebaseAuthProvider
      .loginWithGoogle()
      .then(async (res) => {
        const googleResponse = await res.user.getIdTokenResult();
        const response = await fetchJson<{
          email_verified: string;
          access_token: string;
          tenant_id: string;
        }>("https://deliverypage.africa/api/auth/google_signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token_id: googleResponse.token }),
        });
        testTool.setCookie("access_token", response.access_token);
        testTool.setCookie("tenantId", response.tenant_id);

        router.push("/Dashboard");

        // await signupWithGoogle({ token_id: res.user.accessToken }).then(
        //   (response) => {
        //     globalStorage.store("email_verified", response.data.email_verified);
        //     globalStorage.store("access_token", response.data.access_token);
        //     globalStorage.store("tenantId", response.data.tenant_id);
        //     const tenantId = globalStorage.getStore("tenantId");
        //     console.log("response=>", response);
        //     if (response.data && response.data.tenant_id) {
        //       if (tenantId) {
        //         router.push("/Dashboard");
        //       } else {
        //         console.warn("Unable to set token");
        //       }
        //     } else {
        //       // navigate("/details");
        //     }
        //   }
        // );
      })
      .catch((err) => {
        throw err;
      })
      .catch((err) => {
        console.log("error =>", err, err.message);
        // setResponseMessage({
        //   message: errorMessage(err),
        //   type: "error",
        // });
      });
  };

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch("/dashboard");
  }, [router]);
  return (
    <section className={style.container}>
      <div className={style.leftAside}>
        <div className={style.leftContent}>
          <div className={style.logoBox}>
            <Image src={Logo} alt="logo" />
          </div>
          <div className={style.titleContainer}>
            <span className={style.signinTitleLeft}>
              Don’t have an account?
            </span>{" "}
            <span
              className={style.signinTitleRight}
              onClick={() => router.push("/Signup")}
            >
              Create Now
            </span>
          </div>
          <div className={style.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={style.formWrap}>
                <label htmlFor="emailAddress">Email address</label>
                <input
                  type="email"
                  className={style.formInput}
                  id="emailAddress"
                  placeholder="e.g example@gmail.com"
                  {...register("email")}
                />
                <ErrorDisplay message={errors.email?.message} />
              </div>
              <div className={style.formWrap}>
                <label htmlFor="password">Password</label>
                <div className={style.passwordBox}>
                  <input
                    type={visible ? "text" : "password"}
                    className={style.formInput}
                    id="password"
                    placeholder="enter password"
                    {...register("password")}
                  />
                  {visible ? (
                    <span
                      className={style.eyeIconBox}
                      onClick={() => setVisible(false)}
                    >
                      <AiOutlineEye size={20} color="#757577" />
                    </span>
                  ) : (
                    <span
                      className={style.eyeIconBox}
                      onClick={() => setVisible(true)}
                    >
                      <AiOutlineEyeInvisible size={20} color="#757577" />
                    </span>
                  )}
                </div>
                <ErrorDisplay message={errors.password?.message} />
              </div>
              <div
                onClick={() => router.push("/Reset-password")}
                className={style.forgetPassWrapper}
              >
                Forgot Password?
              </div>
              <div className={style.actionFooter}>
                <button type="submit" className={style.actionFooterBtn}>
                  {loading ? <Spin size={"large"} /> : "Login"}
                </button>
              </div>
              {reponseMessage && (
                <div style={{ marginTop: "1rem" }}>
                  <ResponseAlert
                    message={reponseMessage?.message}
                    onClose={onClose}
                    type={reponseMessage?.type}
                  />
                </div>
              )}
            </form>

            <div className={style.optionNext}>OR</div>
            <div className={style.actionFooter}>
              <button
                className={style.actionFooterBtn_outline}
                onClick={loginWithGoogleHandler}
              >
                <span className={style.googleIcon}>
                  <GoogleSvg />
                </span>
                <span className={style.googleText}>Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.rightAside}>
        <div className={style.imgWrapper}>
          <Image
            // src="/assets/images/login-img.png"
            src={Banner}
            alt="delivery banner"
            priority
            // width={100}
            // height={100}
            className={style.loginBanner}
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
