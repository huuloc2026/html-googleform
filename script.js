document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfxWZY838bCEA_JPzkYopbnKe-JKHHnZfJ2O1uZn-ehz8doxw/formResponse";

    const params = new URLSearchParams();
    console.log(params);
    params.append("entry.2005620554", name);
    params.append("entry.802662662", message);
    params.append("entry.1422570857", email);
    console.log(params);
    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: params,
    })
      .then(() => {
        alert("Gửi thành công!");
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        console.error("Lỗi gửi form:", error);
        alert("Gửi thất bại, vui lòng thử lại!");
      });
  });
