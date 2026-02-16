const prefix = '/images/projects/trip-hop album cover/';

export default function Project_TripHop() {
    return (
        <>
            <div className="conform pad-bottom">
                <div className="split">
                    <div>
                        <h2>About the project</h2>
                        <p>
                            The purpose of the project was to make something
                            that combines my interests of music and physical
                            media. The goal was to design a product that
                            reflects the Trip Hop-genre’s style. The project
                            includes the design of an album cover, CD print and
                            mockups.
                        </p>
                        <h2>Design process</h2>
                        <p>
                            The purpose of the project was to make something
                            that combines my interests of music and physical
                            media. The goal was to design a product that
                            reflects the Trip Hop-genre’s style. The project
                            includes the design of an album cover, CD print and
                            mockups.
                        </p>
                    </div>
                    <div>
                        <p>
                            Cityscapes, obscured faces and abstract motifs can
                            often be spotted. I then edited the image to
                            introduce stark contrasts, which helped emphasize
                            the mood and simplify the color palette.
                        </p>
                        <p>
                            Next, I experimented with the layout by duplicating
                            the image and shifting the focus to different areas
                            of it. To create a stronger sense of cohesion, I
                            aligned many of the image's lines across the
                            composition. I also added an additional grid—not
                            only as a decorative element but also to highlight
                            and play off the existing grid structure within the
                            image.
                        </p>
                        <p>
                            The overall design feels somewhat disorienting,
                            which is intentional and echoed in the text layout.
                            In this case, form takes precedence over function to
                            reinforce the thematic concept.
                        </p>
                    </div>
                </div>
            </div>
            <img
                src={`${prefix}CD Case and Disk Mockup.jpg`}
                alt="CD Case and Disk Mockup"
                className="full-width"
            />
            <img
                src={`${prefix}CD Case Mockup.jpg`}
                alt="CD Case Mockup"
                className="full-width"
            />
            <img
                src={`${prefix}Vinyl Mockup.jpg`}
                alt="Vinyl Mockup"
                className="full-width"
            />
            <div className="split full-width pad">
                <img src={`${prefix}Album Cover.jpg`} alt="Album Cover" />
                <img src={`${prefix}CD Print.png`} alt="CD Print" />
            </div>
        </>
    );
}
