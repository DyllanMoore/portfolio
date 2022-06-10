import headshot from '../resources/headshot.jpg'

export function About() {
    return (
        <div className="AboutContainer">
            <h2 className="Heading" id="About">
                About
            </h2>
            <img src={headshot} alt="headshot" />
            <p>
                I am an aspiring software developer with 6 months experience using JavaScript.
                Currently, I am in the process of solidifying my knowledge of React.
                I have created a variety of projects that span from simple HTML/CSS mock-ups to more in-depth JavaScript projects.
                I am highly self-motivated, task-oriented, and thrive in collaborative environments.
            </p>
        </div>
    )
}