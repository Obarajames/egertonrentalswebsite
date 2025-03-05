const sheetUri = "https://script.google.com/macros/s/AKfycbz-QKf4atBn-41vFobBOwLLuQGQ5qcJj8iJziweFY8imA2GN3-03NcP3d36CH1v_5-Q/exec";
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const data = {
    name: name,
    email: email,
    message: message,
  };
  console.log(data)

  try {
    const response = await fetch(sheetUri, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      form.reset();
    } else {
        form.reset();
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please check the console for details.");
  }
});