export function Contact(props) {
    return (
        <div className="ContactContainer" id="Contact">
            <h2 className="Heading">
                Connect With Me:
            </h2>
            <a href={props.gitHub} target="_blank">
                <img class="Logo" src="https://pngimg.com/uploads/github/github_PNG83.png" alt="GitHub Logo" />
            </a>
            <a href={props.Linkdin} target="_blank">
                <img class="Logo" src="https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png" alt="Linkdin Logo" />
            </a>
        </div>
    )
}