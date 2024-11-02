/*----------------------
        drop down menu
--------------------*/
{
  const main_drop_down = document.getElementById("main_drop_down");
  const first_sub_ul = document.querySelector(".first_sub_ul");
  main_drop_down.addEventListener("mousemove", (eo) => {
    first_sub_ul.style.display = "block";
  });
  main_drop_down.addEventListener("mouseout", (eo) => {
    first_sub_ul.style.display = "none";
  });
  const drop_down1 = document.querySelector(".drop_down1");
  const second_sub_ul = document.querySelector(".second_sub_ul");
  drop_down1.addEventListener("mousemove", (eo) => {
    second_sub_ul.style.display = "block";
  });
  drop_down1.addEventListener("mouseout", (eo) => {
    second_sub_ul.style.display = "none";
  });
}
/*-----------------
      acordion 
----------------------*/
{
  const acordion_li = document.querySelectorAll(".acordion_li");
  acordion_li.forEach((item) => {
    item.addEventListener("click", (eo) => {
      if (eo.target.className == "fas fa-angle-down") {
        eo.target.parentElement.parentElement
          .getElementsByClassName("acordion_p")[0]
          .classList.add("click");
        eo.target.style.display = "none";
        eo.target.parentElement.getElementsByClassName(
          "fa-angle-up"
        )[0].style.display = "block";
      }
      if (eo.target.className == "fas fa-angle-up") {
        eo.target.parentElement.parentElement
          .getElementsByClassName("acordion_p")[0]
          .classList.remove("click");
        eo.target.style.display = "none";
        eo.target.parentElement.getElementsByClassName(
          "fa-angle-down"
        )[0].style.display = "block";
      }
    });
  });
}

/*---------------------
        scrollY
-----------------------*/
{
  window.onscroll = () => {
    const active_home = document.getElementById("active_home");
    const active_about = document.getElementById("active_about");
    const active_services = document.getElementById("active_services");
    const active_port = document.getElementById("active_port");
    const active_team = document.getElementById("active_team");
    const active_contact = document.getElementById("active_contact");
    const top = document.getElementById("top");
    if (scrollY < 444) {
      active_home.classList.add("active");
    } else {
      active_home.classList.remove("active");
    }
    if (scrollY > 444 && scrollY < 2170) {
      active_about.classList.add("active");
    } else {
      active_about.classList.remove("active");
    }
    if (scrollY > 2170 && scrollY < 3050) {
      active_services.classList.add("active");
    } else {
      active_services.classList.remove("active");
    }
    if (scrollY > 3050 && scrollY < 4740) {
      active_port.classList.add("active");
    } else {
      active_port.classList.remove("active");
    }
    if (scrollY > 4740 && scrollY < 6420) {
      active_team.classList.add("active");
    } else {
      active_team.classList.remove("active");
    }
    if (scrollY > 6420) {
      active_contact.classList.add("active");
    } else {
      active_contact.classList.remove("active");
    }
    if (scrollY > 0) {
      top.style.display = "block";
    } else {
      top.style.display = "none";
    }
  };
}

/*-----------------
      portfolio images switch 
-------------------  */
{
  const port_ul = document.querySelector(".port_ul");
  const portfolio_imgs = document.querySelector(".portfolio_imgs");
  port_ul.addEventListener("click", (eo) => {
    if (
      eo.target.className == "app" ||
      eo.target.className == "card" ||
      eo.target.className == "web" ||
      eo.target.className == "all"
    ) {
      eo.preventDefault();
      eo.target.parentElement.parentElement
        .getElementsByClassName("active")[0]
        .classList.remove("active");
      eo.target.classList.add("active");
    }
    if (eo.target.className == "app active") {
      portfolio_imgs.classList.add("port_app");
    } else {
      portfolio_imgs.classList.remove("port_app");
    }
    if (eo.target.className == "card active") {
      portfolio_imgs.classList.add("port_card");
    } else {
      portfolio_imgs.classList.remove("port_card");
    }
    if (eo.target.className == "web active") {
      portfolio_imgs.classList.add("port_web");
    } else {
      portfolio_imgs.classList.remove("port_web");
    }
    if (eo.target.classList == "active all") {
      eo.preventDefault();
    }
  });
}
