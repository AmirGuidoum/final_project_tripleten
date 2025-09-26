import "./About.css";

export function About() {
  return (
    <div className="about">
      <img
        className="about__image"
        src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png"
        alt="picture of developer "
      />
      <div className="about__container">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph">
          Hi,my name is Amir iam web developer i do frontend and backend using
          react , javascript , html , css <br />
          for design i use figma and i use git as command-line interface to
          upload and clone project plus modern technologies like
          node.js,Api,responsive layout.
          <br /> <br />
          I’m a web developer at TripleTen, a 100% online school. I build
          responsive websites, user-friendly platforms for virtual classes and
          student success.
        </p>
      </div>
    </div>
  );
}
export default About;
