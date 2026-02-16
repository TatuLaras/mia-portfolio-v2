interface Logo {
    img: string;
    title: string;
}

const prefix = '/images/projects/the daily logo challenge/';
const logos: Logo[] = [
    {
        title: 'Streaming Music Startup',
        img: prefix + 'streaming music startup.svg',
    },
    {
        title: 'Granola Company',
        img: prefix + 'granola company.svg',
    },
    {
        title: 'Geometric Logo',
        img: prefix + 'geometric logo.svg',
    },
    {
        title: 'Driverless Car Logo',
        img: prefix + 'driverless car logo.svg',
    },
    {
        title: 'Barbershop',
        img: prefix + 'barbershop.svg',
    },
    {
        title: 'Cloud Computing Logo',
        img: prefix + 'cloud computing company.svg',
    },
    {
        title: 'Fox Logo',
        img: prefix + 'fox logo.svg',
    },
    {
        title: 'Ski Mountain Logo',
        img: prefix + 'ski mountain logo.svg',
    },
    {
        title: 'Kangaroo',
        img: prefix + 'kangaroo.svg',
    },
    {
        title: 'National Park',
        img: prefix + 'national park.svg',
    },
    {
        title: 'Coffee Shop',
        img: prefix + 'coffee shop.svg',
    },
    {
        title: 'Paper Airplane',
        img: prefix + 'paper airplane.svg',
    },
];

export default function Project_Logo() {
    return (
        <div className="grid">
            {logos.map((logo, i) => (
                <article key={i}>
                    <img src={logo.img} alt={logo.title} />
                    <span>{logo.title}</span>
                </article>
            ))}
        </div>
    );
}
