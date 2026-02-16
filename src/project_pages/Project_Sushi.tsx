const prefix = '/images/projects/sushi club/';

export default function Project_Bookra() {
    return (
        <>
            <div className="split pad-bottom">
                <div>
                    <h2>About the project</h2>
                    <p>
                        As part of a branding and visual identity course at
                        school, I was assigned to design a brand manual. The
                        process included benchmarking, making of user personas,
                        user journeys, brand positioning and stylescapes to
                        assist me towards the final project. The final project
                        being a brand manual containing the brand voice, logo,
                        typography use, brand colors, pattern and product
                        designs.
                    </p>
                    <p>
                        Client debrief: Sushi Club is a small startup for a
                        sushi delivery restaurant in America with plans of
                        opening a physical location shortly after launch. Their
                        main draw is their focus on offering authentic and
                        high-quality sushi while delivering a premium yet
                        accessible sushi experience. 
                    </p>
                    <p>
                        Menu consists of Maki, Sashimi and Nigiri, plus sides
                        like edamame, prepared with a minimalistic approach
                        which highlights the premium ingredient.
                    </p>
                </div>
                <div>
                    <p>
                        Target audience consists of people who appreciate
                        quality and simplicity. They want to experience the
                        taste of authentic Japanese cuisine, prepared skillfully
                        with fresh ingredients, resulting in clean flavors. Age
                        range is 25 to 45, consisting of younger professionals
                        and more established individuals who don’t mind paying
                        for the authenticity and freshness. New and seasoned
                        sushi enjoyers alike. They’re also used to using
                        delivery services. 
                    </p>
                    <p>
                        What they needed: Logo; Menus printed and online;
                        Branding for chopstick wrappers, delivery kit items like
                        boxes, bags and napkins.
                    </p>
                    <p>
                        Visual wishes for the brand were for it to feel warm and
                        inviting but also fresh, without feeling overly formal
                        or exclusive.
                    </p>
                </div>
            </div>

            <a href="/Sushi_Club_Brand_Manual.pdf">
                <h2>View the brand manual</h2>
                <img
                    src={`${prefix}sushiclub_brand_manual_cover.svg`}
                    alt="Sushi Club brand manual cover"
                    className="full-width"
                />
            </a>
        </>
    );
}
