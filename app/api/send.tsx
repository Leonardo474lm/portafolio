
fetch("/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "arthur123piero123@gmail.com",
      subject: "subject",
      message: "hola",
    }),
  });
  