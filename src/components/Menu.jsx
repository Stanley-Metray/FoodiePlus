import { Link } from 'react-router-dom';

const Menu = () => {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">FoodiePlus</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className=""></span> */}
                <i className="bi bi-three-dots"></i>
            </button>
            <div className="collapse navbar-collapse d-flex-lg justify-content-lg-end gap-2" id="navbarSupportedContent">
                <ul className="navbar-nav d-flex gap-2 mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/breakfast">Breakfast</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/lunch">Lunch</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/dinner">Dinner</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/snacks">Snacks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/vegetarian">Vegetarian</Link>
                    </li>
                </ul>
                <form role="search" id="searchForm" onClick={()=>{
                  alert("Opps! sorry we are working in this feature");  
                }}>
                    <i className="bi bi-search"></i>
                    <input placeholder="Search" aria-label="Search" />
                </form>
            </div>
        </div>
    </nav>
}

export default Menu;