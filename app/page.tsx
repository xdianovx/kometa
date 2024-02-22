"use client";

import {
  Features,
  Hero,
  Portfolio,
  Showreel,
  Stages,
} from "../components/screens";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // const res = await fetch("/api/projects", {
      //   method: "POST",
      //   body: formData,
      // });

      const res = await axios.post("/api/projects", formData);

      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Hero />
      <Features />
      <Showreel />
      <Portfolio />
      <Stages />

      <section>
        <div className="container">
          <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter the title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}
