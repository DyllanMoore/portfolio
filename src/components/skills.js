export function Skills() {
    return (
        <div className="SkillsContainer Container">
            <h2 className="Heading" id="Skills">
                Skills
            </h2>
            <table className="LanguageTable">
                <thead>
                    <tr>
                        <th className="Language">Languages</th>
                        <th className="Language">Experience</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>HTML</td>
                        <td>
                            6 Months
                        </td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>
                            6 Months
                        </td>
                    </tr>
                    <tr>
                        <td>JavaScript</td>
                        <td>
                            6 Months
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="LibraryTable">
                <thead>
                    <tr>
                        <th className="Library">Libraries &#38; Frameworks</th>
                        <th className="Library">Experience</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>BootStrap</td>
                        <td>
                            4 Months
                        </td>
                    </tr>
                    <tr>
                        <td>React</td>
                        <td>
                            1 Month
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}