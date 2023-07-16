const Footer = () => {

    const l1 = require("../images/reactlogo.png");
    const l2 = require("../images/chatgptlogo.png");

    return <footer>
        <div className="text-center">
            <h1 className="text-white">FoodiePlus</h1>
            <p className="text-white">developed by Stanley Metray</p>
        </div>
        <div className="technologies">
            <figure className="d-flex flex-column align-items-center gap-3">
                <figcaption className="fw-bold text-dark">Created With</figcaption>
                <img src={l1} alt="..." />
                <figcaption className="fw-bold text-dark">Data Source</figcaption>
                <img src={l2} alt="..." />
            </figure>
        </div>
        <p className="text-warning">stanleymetray@gmail.com</p>
    </footer>
}

export default Footer;