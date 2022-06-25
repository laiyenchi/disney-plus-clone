import React, { useEffect } from "react";
import styled from "styled-components";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLogin,
  setUserLogout,
} from "../features/user/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// //Passing className to style component. https://styled-components.com/docs/basics#styling-any-component
// function Login({ className }) {
//   return <button className={className}>LOGIN</button>;
// }

function Header() {
  // get state
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  // remember to put the component which uses useNavigate hook inside of <Router>
  // or the error occur: useNavigate() may be used only in the context of a <Router> component
  const navigate = useNavigate();
  //Create an instance of the Google provider object
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const handleLogin = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );

      navigate("/");
    });
  };
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(setUserLogout());
        navigate("/Login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {userName == undefined ? (
        <LoginDiv>
          <Login onClick={handleLogin}>LOGIN</Login>
        </LoginDiv>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" />
              <span>SEARCG</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg onClick={logout} src={userPhoto} />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: black;
  display: flex;
  align-items: center;
  padding: 0 30px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0 15px;

  a {
    display: flex;
    align-items: center;
    margin: 0 15px;

    img {
      width: 25px;
    }

    span {
      font-size: 14px;
      letter-spacing: 1.5px;
      margin-left: 2.5px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        left: 0;
        right: 0;
        bottom: -6px;
        position: absolute;
        opacity: 0;
        transform-origin: left; //without this, it expands from center
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; //animate
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const Login = styled.button`
  color: white;
  background-color: black;
  border: solid white 1px;
  padding: 15px 20px;
  letter-spacing: 4px;
  border-radius: 5px;
  font-weight: 600;
  transition-duration: 250ms;
  cursor: pointer;
  :hover {
    color: black;
    background-color: white;
  }
`;

const LoginDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: center;
`;
