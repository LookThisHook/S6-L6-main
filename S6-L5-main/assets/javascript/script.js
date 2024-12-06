
function editContent(element) {
  const originalContent = element.textContent;

  const input = document.createElement("input");
  input.type = "text";
  input.value = originalContent;
  input.className = "form-control";

  element.replaceWith(input);

  input.focus();

  input.addEventListener("blur", function () {
    const newContent = input.value.trim() || originalContent;
    const h4 = document.createElement("h4");
    h4.textContent = newContent;
    h4.className = "user-name";
    h4.setAttribute("onclick", "editContent(this)");

    input.replaceWith(h4);
  });

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      input.blur();
    }
  });
}
