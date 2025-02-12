import connection from "./connection.js";

export async function getAllModule() {
  const tasks = await connection.execute("SELECT * FROM tasks");
  return tasks[0];
}

export async function createTaskModule(task) {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();

  const createTask = await connection.execute(
    "INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)",
    [title, "pendente", dateUTC]
  );
  const insertId = createTask[0].insertId;
  return { insertId };
}

export async function deleteTaskModule(id) {
  const deleteTask = await connection.execute("DELETE FROM tasks WHERE id=?", [
    id,
  ]);
  return deleteTask;
}

export async function updateTaskModule(id, task) {
  const { title, status } = task;
  const updateTask = await connection.execute(
    "UPDATE tasks SET title = ?, status = ? WHERE id = ?",
    [title, status, id]
  );
  return updateTask;
}
