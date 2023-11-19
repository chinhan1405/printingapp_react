import './Footer.css';

export default function Footer() {
    return (
        <footer style={{background: 'var(--light)'}} className='fixed-bottom'>
            <div className="container text-center py-4">
                <ul className="list-inline">
                    <li className="list-inline-item"><a className="text-dark footer" href="/">Ứng dụng di động</a></li>
                    <li className="list-inline-item"><a className="text-dark footer" href="/">Dịch vụ</a></li>
                    <li className="list-inline-item"><a className="text-dark footer" href="/">Hỗ trợ</a></li>
                    <li className="list-inline-item"><a className="text-dark footer" href="/">Nguồn lực</a></li>
                </ul>
                <p className="text-muted mb-0">Copyright © HCMUT</p>
            </div>
        </footer>
    )
}