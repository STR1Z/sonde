let SONDE_API_URL = "sondeapi";

window.addEventListener("load", () => {
  for (let i of document.querySelectorAll("[sonde]")) {
    let name = i.getAttribute("sonde");
    sonde(name).then((res) => {
      let updateText = (current) => {
        for (let j of current.childNodes)
          if (j instanceof Text) j.data = j.data.replace(/\{\{([\w\.]+)\}\}/g, (_, c) => new Function(name, `return ${c}`).bind(this, res)());
          else if (!j.getAttribute("sonde")) updateText(j);
      };
      updateText(i);
    });
  }
});

async function sonde(name, ...args) {
  const response = await fetch(SONDE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, args }),
  });
  return response.json();
}
