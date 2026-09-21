const searchBtn =
  document.getElementById("searchBtn");

const searchPanel =
  document.getElementById("searchPanel");

const closeSearch =
  document.getElementById("closeSearch");

const menuBtn =
  document.getElementById("menuBtn");

const nav =
  document.getElementById("mainNav");


if(searchBtn){

  searchBtn.onclick = () => {

    searchPanel.style.display =
      "block";

    document
      .getElementById("searchInput")
      .focus();

  };

}


if(closeSearch){

  closeSearch.onclick = () => {

    searchPanel.style.display =
      "none";

  };

}


if(menuBtn){

  menuBtn.onclick = () => {

    nav.style.display =
      nav.style.display === "flex"
      ? "none"
      : "flex";

  };

}


document
.querySelectorAll(
  'a[href^="order.html?pack="]'
)
.forEach(a => {

  a.addEventListener(
    "click",
    () => {

      localStorage.setItem(
        "mensShadowsCart",
        "1"
      );

    }
  );

});


const count =
  document.getElementById(
    "cartCount"
  );


if(count){

  count.textContent =
    localStorage.getItem(
      "mensShadowsCart"
    ) || "0";

}


const form =
  document.getElementById(
    "newsletterForm"
  );


if(form){

  form.onsubmit = e => {

    e.preventDefault();

    document.getElementById(
      "newsletterMsg"
    ).textContent =
      "Thanks — you're subscribed.";

    form.reset();

  };

}
