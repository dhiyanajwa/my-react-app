import "./AppJax.css";
import profilePic from "./pic.png";

const languages = ["English", "Chinese", "Malay"];

const education = [
  {
    school: "UNIVERSITI MALAYSIA SARAWAK (UNIMAS)",
    period: "Oct 2023 - Present",
    program: "Bachelor’s Degree in Computer Science (Multimedia Computing) with Honours",
  },
  {
    school: "KOLEJ MATRIKULASI SARAWAK (KMSw)",
    period: "Jul 2022 - May 2023",
    program: "Physical Science",
  },
];

const projects = [
  {
    title: "UI/UX",
    label: "Figma Project",
    href: "https://www.figma.com/proto/lXI3vsciZScVgItzcEt05M/Project-SHOPEE_JLL-UIUX?node-id=519-1119&starting-point-node-id=519%3A1119&t=Ryqd8oyDYmvegHX5-1",
  },
  {
    title: "Object Oriented Software Development",
    label: "Download source code here",
    href: "https://drive.google.com/drive/folders/1uQ2-mwOZT9wKVl2SS1Fw7LJMiMpke3dU?usp=sharing",
  },
  {
    title: "Web Application Development",
    label: "Click here to see magic",
    href: "https://my-portfolio-eta-red-47.vercel.app/",
  },
];

export default function PartnerResume() {
  return (
    <div className="app">
      <header className="header">
        <img src={profilePic} alt="Jason profile" className="profile-img" />

        <div className="headerInfo">
          <h1 className="name">JASON ONG LEE CHANG</h1>
          <p className="muted">011-1085 0911</p>
          <p className="muted">jaxonong04@gmail.com</p>
          <p className="muted">Sarawak, Malaysia</p>
        </div>
      </header>

      <main className="container">
        <section className="section">
          <h2 className="sectionTitle">Language Spoken</h2>
          <div className="grid">
            {languages.map((lang) => (
              <div key={lang} className="card">
                <h3>{lang}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="sectionTitle">Education</h2>
          <h3 className="subTitle">Tertiary</h3>

          <div className="stack">
            {education.map((e) => (
              <div key={e.school} className="card cardWide">
                <p className="eduLine">
                  <span className="dot">●</span>
                  <span className="eduText">
                    <strong>{e.school}</strong> <span className="muted">{e.period}</span>
                    <br />
                    {e.program}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="sectionTitle">Projects</h2>

          <div className="grid">
            {projects.map((p) => (
              <div key={p.title} className="card">
                <h3>{p.title}</h3>
                <a className="link" href={p.href} target="_blank" rel="noopener noreferrer">
                  {p.label}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Jason Ong Lee Chang. All Rights Reserved.</p>
      </footer>
    </div>
  );
}