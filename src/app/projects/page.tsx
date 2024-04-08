"use client";
import Footer from "../_components/footer";
import NavBar from "../_components/navbar";

export default function Projects() {
  return (
    <>
      <main className="grid border-spacing-2 gap-4 md:grid-cols-4">
        <NavBar />
        <h1>Projects</h1>
        <Footer />
      </main>
    </>
  );
}
