export function Contact(props) {
    const contactList = {
        gitHub: "https://github.com/DyllanMoore",
        linkdin: "https://www.linkedin.com/in/dyllan-ellisor-9880a0229/"
    }

    return (
        <div className="ContactContainer Container" id="Contact">
            <h2 className="Heading">
                Connect With Me:
            </h2>
            <a href={contactList.gitHub} target="_blank">
                <img class="Logo" src="https://pngimg.com/uploads/github/github_PNG83.png" alt="GitHub Logo" />
            </a>
            <a href={contactList.Linkdin} target="_blank">
                <img class="Logo" src="https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png" alt="Linkdin Logo" />
            </a>
        </div>
    )
}