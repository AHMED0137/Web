window.addEventListener("load", () => {
  const form = document.querySelector("#form");
  const input = document.querySelector("#m_input");
  const text = document.querySelector("#m_text");
  const main = document.querySelector("#comments");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task1 = input.value;
    const task2 = text.value;
    if (!task1 || !task2) {
      alert("Please Fill it Completely to Post");
      return;
    }
    const task_element = document.createElement("div");
    task_element.classList.add("commenet-box");
    // name
    const name = document.createElement("span");
    name.classList.add("name");
    // name.value = task1;
    name.innerHTML = task1;

    // comments
    const comments = document.createElement("p");
    comments.classList.add("comment");
    // comments.value = task2;
    comments.innerHTML = task2;
    main.appendChild(task_element);
    task_element.appendChild(name);
    task_element.appendChild(comments);
  });
});
