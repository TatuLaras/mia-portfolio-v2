import Button from './Button';
import Divider from './Divider';
import './styles/About.css';

export default function About() {
    return (
        <div id="about">
            <Divider />
            <div className="bg"></div>
            <div className="gradient"></div>
            <div className="content">
                <span>About</span>
                <h2>
                    Helping brands unlock their <i>visual identity</i>
                </h2>
                <p>
                    I’m a graphic designer who specializes in creating inviting
                    designs with the target audience in mind. My focus is within
                    print materials, editorial, branding, visual identity and
                    packaging. Currently, I’m expanding my portfolio into more
                    logo designs and branding.
                </p>
                <p>
                    I strive to foster a culture of honesty and constant
                    learning, so that the true potential of the clients wishes
                    gets explored and they can unlock their visual identity.
                </p>
                <Button>Get my resume</Button>
            </div>
        </div>
    );
}
