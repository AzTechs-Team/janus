export const getNotes = async () => {
  try {
    const res = await fetch("http://localhost:8082/api/Note", {
      credentials: "include",
    });
    const info = await res.json();
    return info;
  } catch (error) {
    return {};
  }
};

export const postNotes = async (note) => {
  try {
    const res = await fetch("http://localhost:8082/api/Note", {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
      body: JSON.stringify({
        description: note.description,
        title: note.title,
        _id: note._id,
      }),
    });
    const info = await res.json();
    return info;
  } catch (error) {
    console.log(error);
  }
};

export const delNote = async (note) => {
  try {
    const res = await fetch("http://localhost:8082/api/Note", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
      body: JSON.stringify({
        _id: note._id,
      }),
    });
    const info = await res.json();
    return info;
  } catch (error) {
    console.log(error);
  }
};

export const createNote = async (note) => {
  try {
    const res = await fetch("http://localhost:8082/api/Note", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
      body: JSON.stringify({
        description: note.description,
        title: note.title,
      }),
    });
    const info = await res.json();
    return info;
  } catch (error) {
    console.log(error);
  }
};
