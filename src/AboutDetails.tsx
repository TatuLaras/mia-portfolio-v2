import './styles/AboutDetails.css';
import Table from './Table';

export default function AboutDetails() {
    return (
        <div id="about-details">
            <h3>What I do</h3>
            <p>stuff</p>
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
