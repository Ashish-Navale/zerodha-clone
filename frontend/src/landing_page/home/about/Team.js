import React from 'react';
function Team() {
    return (
        <div className="container">
            <div className="row p-3 mt-5  border-top">
                <h1 className="text-center">People</h1>
            </div>

            <div className="row p-3   text-muted" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
                <div className="col-6 p-3 text-center">
                    <img src="media/images/photo1.jpg" style={{ borderRadius: "100%", width: "40%" }} />
                    <h4 className="mt-3">Ashish Navale</h4>
                    <h6>Web Developer</h6>
                </div>
                <div className="col-6 p-3">

                    <p>
                        Ashish Navale is a passionate final-year engineering student and aspiring web developer. He started his development journey during his college years, building projects that strengthened his skills in front-end and back-end technologies.
                    </p>

                    <p>
                        He has worked on multiple real-world projects and internships, focusing on clean UI design, responsive layouts, and practical problem-solving. Ashish enjoys exploring new tools and frameworks to keep improving as a developer.
                    </p>

                    <p>
                        Coding, learning new technologies, and building creative projects are what keep him motivated every day.
                    </p>

                    <p>
                        Connect on
                        <a href="" style={{textDecoration:"none"}}>Portfolio</a> /
                        <a href="" style={{textDecoration:"none"}}>GitHub</a> /
                        <a href="" style={{textDecoration:"none"}}>LinkedIn</a>
                    </p>

                </div>
            </div>
        </div>
    );
}
export default Team;