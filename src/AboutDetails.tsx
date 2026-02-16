import './styles/AboutDetails.css';
import Table from './Table';

export default function AboutDetails() {
    return (
        <div id="about-details">
            <h3>What I do</h3>
            <div className="skills">
                <div className="top-left">
                    <h4>Graphic Design</h4>
                    <ul>
                        <li>Branding & Visual Identity</li>
                        <li>Print & Editorial Design</li>
                        <li>Product Design</li>
                        <li>Illustration</li>
                    </ul>
                </div>
                <div className="top-right">
                    <h4>Visual Design</h4>
                    <ul>
                        <li>Web Design</li>
                        <li>UX & UI Design</li>
                    </ul>
                </div>
                <div className="bottom">
                    <h4>Software</h4>
                    <p>
                        Adobe Illustrator, Adobe InDesign, Adobe Photoshop,
                        Adobe After Effects, Figma, Canva
                    </p>
                </div>
            </div>
            <h3>Experiences</h3>
            <Table
                items={[
                    {
                        left: '2022 - Porvoo Museum',
                        right: 'Graphic Design Intern',
                    },
                    {
                        left: '2021 - Porvoo Museum',
                        right: 'Graphic Design Intern',
                    },
                    {
                        left: '2020 - Sipoon Kunta; Cultural Services',
                        right: 'Graphic Design Intern',
                    },
                ]}
            />
            <h3>Qualifications</h3>
            <Table
                items={[
                    {
                        left: '2023-Ongoing - Online Media',
                        right: 'Arcada University of Applied Sciences',
                    },
                    {
                        left: '2022 - Vocational Qualification in Media and Visual Expression',
                        right: 'Vocational Institute Prakticum',
                    },
                ]}
            />
        </div>
    );
}
