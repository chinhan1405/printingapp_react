import './Navbar.css';

export default function Navbar() {
    return (
        <nav id='navbar' className="navbar navbar-light navbar-expand-md py-3 sticky-top">
            <div className="container"><a className="navbar-brand d-flex align-items-center" href="/"><img src="img/logo.png" width="40rem" height="40rem"/><strong style={{paddingLeft: '1rem'}}>SSPS</strong></a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item navbar-item"><a className="nav-link active" href="/">Dịch vụ</a></li>
                        <li className="nav-item navbar-item"><a className="nav-link" href="#">Giá cả</a></li>
                        <li className="nav-item navbar-item"><a className="nav-link" href="#">Hỗ trợ</a></li>
                        <li className="nav-item navbar-item"><a className="nav-link" href="/documents">In tài liệu</a></li>
                        <li className="nav-item navbar-item"><a className="nav-link" href="#">Lịch sử in</a></li>
                    </ul><a className="btn btn-primary" role="button" href="#">Đăng nhập</a>
                </div>
            </div>
        </nav>
    );
}
