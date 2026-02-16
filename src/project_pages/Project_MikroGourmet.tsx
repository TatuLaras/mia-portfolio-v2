import Figure from '../Figure';

export default function Project_MikroGourmet() {
    return (
        <>
            <div className="split">
                <div>
                    <h2>About the project</h2>
                    <p>
                        As part of a broadcast production course at school, I
                        was part of the graphics team. The project started with
                        the conceptualization of the show, during which I
                        created the logo for it. During the preparation of the
                        show, I animated inserts for the rules of the gameshow.
                        During the live broadcast’s first two episodes I was
                        part of the studios cleaning crew and in the third
                        episode I was the graphical operator.
                    </p>
                    <p>
                        Mikro Gourmet is a show where four teams compete against
                        each other in order to make the best dish using a
                        microwave. The show had its three episodes livestreamed
                        on ArcadaUAS’s YouTube channel from the first to the
                        third of December 2025.
                    </p>
                </div>
                <div>
                    <h2>Logo design process</h2>
                    <p>
                        The goal for the logo was to represent the themes of the
                        show, which were retro and fun. By giving the logo a
                        sticker look it got a retro look. Together with the
                        graphics team leader, we chose fonts and warm toned
                        colors that matched the retro kitchen theme. The stars
                        behind the microwave gives the logo some movement, which
                        fits with the hectic spirit of the show.
                    </p>
                </div>
            </div>
            <Figure
                title="Mirko Gourmet's primary logo"
                img="/images/projects/mikro gourmet/mikrogourmet_logo.svg"
                imgPadding="0"
                style={{ gap: '1em' }}
            />
            <Figure
                title="Mikro Gourmet's horizontal logo"
                img="/images/projects/mikro gourmet/mikrogourmet_logo_horisontal.svg"
            />
            <Figure
                title="Mikro Gourmet's small logo"
                img="/images/projects/mikro gourmet/mikrogourmet_logo_mini.svg"
                imgPadding="5em"
            />
        </>
    );
}
