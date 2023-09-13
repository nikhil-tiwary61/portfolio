export default function Skills() {
  const technologies = [
    { title: "Front-end" },
    { title: "Back-end" },
    { title: "Miscellaneous" },
  ];
  return (
    <section>
      <div>Skills</div>
      {technologies.map((technology, index) => {
        return (
          <div key={index} className="tech-tile">
            <div>{technology.title}</div>
          </div>
        );
      })}
    </section>
  );
}
