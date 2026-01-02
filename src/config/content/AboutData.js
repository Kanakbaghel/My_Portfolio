import { Emb, Emb2 } from "../../components/styles/About.styles";

export const aboutPara1 =
  "Hola, I'm Srishty. I’ve always been a technocrat since childhood. As a child, I was fascinated by tech and internet in general. Because of that influence, I became interested in exploring how internet and work (and how to break them). This passion led me to create my first startup TheCodeWorld. Currently, I'm in National Institute of Technology, Rourkela, where I am currently pursuing my B.Tech degree.";

export const aboutPara2 = {
  para:
    "I'm the current Lead of " +
    "Google Developers Group, OnCampus NITR. " +
    "Have Led workshops. Conducted offline and online sessions on JavaScript, Git, GitHub and open‐source contributions. And organized successful Hacktoberfest meetups.",
  communities: [
    "Google Developers Group, OnCampus NITR",
    "WTM Bhubaneshwar",
    "AWS User Group, Sangli-Kolhapur",
  ],
  events: [
    "Autumn Of Code",
    "HackNITR",
    "HacktoberFest Meetups",
    "CodeComp Contests",
  ],
};

export const AboutComponent = () => {
  const cont = {
    para: "Have Led workshops. Conducted offline and online sessions on JavaScript, Git, GitHub and open‐source contributions. And organized successful Hacktoberfest meetups. ",
    communities: [
      "Google Developers Group, OnCampus NITR",
      "AWS User Group, Sangli-Kolhapur",

      "GDG, Pune",
      "WTM Bhubaneshwar",
      "OpenCode NITR",
    ],
    events: [
      "Autumn Of Code ",
      "HackNITR 5.0 ",
      "HacktoberFest Meetups ",
      "CodeComp ",
    ],
  };
  return (
    <div>
      <p>
        I'm the current Lead of
        <Emb> Google Developers Group, OnCampus NITR. </Emb>
        {cont.para}
        Organised events:{" "}
        <Emb2>
          {cont.events.map((e, index) => (
            <span key={index}>
              {e}
              {index < cont.events.length - 1 ? ", " : ""}
            </span>
          ))}
        </Emb2>
      </p>
      <p>
        I'm a <Emb>Postman Student Expert</Emb>. Lead organiser of{" "}
        <Emb>{cont.communities[1]}</Emb>; I'm also a part of{" "}
        <Emb>
          {cont.communities.slice(-3).map((c) => {
            return c + ". ";
          })}
        </Emb>{" "}
        communities.
      </p>
    </div>
  );
};

export const aboutPara3 = {
  stack: [
    "Python",
    "JavaScript",
    "Bash",
    "Docker",
    "Kubernetes",
    "AWS",

    "MERN stack",
    "REST and GraphQL",
  ],
  fields: ["DevOps and Cloud", "Deep Learning with Python"],
};