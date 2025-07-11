document.getElementById("taskForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const desc = document.getElementById("description").value;

  const table = document.getElementById("taskList");

  const row = document.createElement("tr");

  const titleCell = document.createElement("td");
  titleCell.textContent = title;

  const descCell = document.createElement("td");
  descCell.textContent = desc;

  const deleteCell = document.createElement("td");
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.className = "deleteBtn";
  delBtn.onclick = function () {
    row.remove();
  };
  deleteCell.appendChild(delBtn);

  row.appendChild(titleCell);
  row.appendChild(descCell);
  row.appendChild(deleteCell);

  table.appendChild(row);

  // Clear form
  document.getElementById("taskForm").reset();
});
