export default function HeroSection() {
    return (
        <section id="herosection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm John</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">FullStack</span>{""}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus quasi possimus autem! Labore adipisci accusantium aliquam quaerat ipsam eligendi fugiat repellat alias, eaque animi tenetur eos neque perferendis molestiae.
                        <br/> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <button className="btn btn-primary">Get in touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero section"/>
            </div>
        </section>
    );
}
