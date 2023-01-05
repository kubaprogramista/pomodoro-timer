import { useState } from "react";

const DarkMode = () => {
  const [classActive, setClassActive] = useState("");
  let root: any = document.querySelector(":root");

  function dark() {
    localStorage.setItem("theme", "dark");
    if (localStorage.getItem("theme") === "dark") {
      root.style.setProperty("--white", "rgb(100, 100, 100, 0.7)");
      root.style.setProperty("--greyLight-1", "rgb(40, 40, 40)");
      root.style.setProperty("--greyLight-2", "rgb(20, 20, 20, 0.8)");
      root.style.setProperty("--slider-color", "rgb(40 ,40 ,40)");
    }
  }

  function light() {
    localStorage.setItem("theme", "light");
    if (localStorage.getItem("theme") === "light") {
      root.style.setProperty("--white", "#fff");
      root.style.setProperty("--greyLight-1", "#e4ebf5");
      root.style.setProperty("--greyLight-2", "#c8d0e7");
      root.style.setProperty("--slider-color", "#c8d0e7");
    }
  }

  window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.querySelector(".dark-mode-section")?.classList.add("active");
      document.querySelector(".slider")?.classList.add("active");
      dark();
    } else {
      document.querySelector(".dark-mode-section")?.classList.remove("active");
      document.querySelector(".slider")?.classList.remove("active");
      light();
    }
  };

  return (
    <>
      <section
        className={"dark-mode-section" + classActive}
        onClick={() => {
          if (classActive !== " active") {
            setClassActive(" active");
            dark();
          } else if (classActive === " active") {
            setClassActive("");
            light();
          }
        }}
      >
        <div className={"slider" + classActive}></div>
      </section>
    </>
  );
};

export default DarkMode;
