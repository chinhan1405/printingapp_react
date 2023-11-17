import './Home.css'

export default function Home() {
    return (
        <div className="container d-flex flex-column align-items-center py-4 py-xl-5"  style={{maxWidth: '90%', marginBottom: '10vh'}}>
            <div className="row w-100">
                <div className="col-12 mb-4">
                    <div className="card" style={{background: 'var(--gray-dark)'}}><img className="card-img w-100 d-block" src="img/hcmut.jpg" style={{opacity: 0.51}} alt='HCMUT SSPS'/>
                        <div className="card-img-overlay text-center d-flex flex-column justify-content-end align-items-center p-4">
                            <h4 className="font-weight-bold text-light home-text">Dịch vụ in thông minh cho sinh viên HCMUT</h4><a className="btn btn-primary home-text" type="button" href='/documents'>Bắt đầu in</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mb-4">
                    <a href='/'>
                        <HomeCard name="Giới thiệu ứng dụng" img="printer.jpg" />
                    </a>
                </div>
                <div className="col-12 col-md-6 mb-4">
                    <a href='/'>
                        <HomeCard name="Hướng dẫn sử dụng" img='tutor.jpg' />
                    </a>   
                </div>
            </div>
        </div>
    )
}

function HomeCard(params) {
    return (
        <div className="card"><img className="card-img w-100 d-block" src={"img/" + params.img} style={{width: 'auto', aspectRatio: 3/2}} alt={params.name}/>
            <div className="card-img-overlay text-center d-flex flex-column justify-content-end align-items-center p-4">
                <h4 className="font-weight-bold text-dark">{params.name}</h4>
            </div>
        </div>
    )
}