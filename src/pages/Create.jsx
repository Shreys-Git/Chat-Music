import React, { useState } from "react";
import { FormField } from "../components";

const Create = () => {
  // Form field object
  const [form, setForm] = useState({
    prompt: "",
    image: "",
    lyrics: "",
  });

  const [generatingMusic, setGeneratingMusic] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingMusic(true);
        const response = await fetch(
          "http://localhost:8000/create/dalleimage",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: form.prompt,
            }),
          }
        );

        const data = await response.json();
        setForm({
          ...form,
          image: `data:image/jpeg;base64,${data.image}`,
          lyrics: data.lyrics,
        });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingMusic(false);
      }
    } else {
      alert("Please provide proper prompt");
    }
  };

  const handleSubmit = () => {};

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <FormField
            type="text"
            name="prompt"
            placeholder="Song about cats..."
            value={form.prompt}
            handleChange={handleChange}
          />

          <div>
            {form.image && <img src={form.image} alt={form.prompt} />}

            {/* {generatingMusic && (
              <div>
                <Loader />
              </div>
            )} */}
          </div>
          <div>{form.lyrics}</div>
        </div>

        <div>
          <button type="button" onClick={generateImage}>
            {generatingMusic ? "Generating..." : "Generate"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Create;
