import type { CSSProperties } from 'react';

const prefix = '/images/projects/library management app bookra/';

export default function Project_Bookra() {
    return (
        <>
            <div className="split conform">
                <div>
                    <h2>About the project</h2>
                    <p>
                        This project was part of a UX & UI course at school.
                        Preparation for the project included competitor
                        benchmarking, research, a user persona, a core task flow
                        and wireframes. The final product was a mockup and a
                        prototype.
                    </p>
                    <p>
                        I decided to design a library management app where you
                        could organize your readings, discover new books by
                        getting personalized recommendations based on books you
                        like, as well as by exploring genres, moods and themes.
                        You could also write reviews, share them and view other
                        user’s reviews. A social aspect was also included, as
                        you could connect with other users, create and join
                        group chats for book discussions.
                    </p>
                    <p>
                        Visually I wanted the the app to feel calm and to fit
                        with the typical reading setting through having a dark
                        and cozy theme.
                    </p>
                </div>
                <div
                    className="accompanying-image"
                    style={
                        {
                            '--url': `url('${prefix}iphone screen mockup crop.jpg')`,
                        } as CSSProperties
                    }
                ></div>
            </div>
            <img
                src={`${prefix}bookra compilation 1.jpg`}
                alt="bookra compilation 1"
                className="full-width"
            />
            <img
                src={`${prefix}bookra compilation 2.jpg`}
                alt="bookra compilation 2"
                className="full-width"
            />
            <img
                src={`${prefix}bookra compilation 3.jpg`}
                alt="bookra compilation 3"
                className="full-width"
            />
        </>
    );
}
