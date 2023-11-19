import './printTrack.css';
import TrackTab from './Tablist';
import CenteredTabs from './Tablist';

export default function PrintTrack() {
    return (
        <div style={{marginBottom: '10vh'}}>
            <TrackTab/>
            
        </div>
    )
}


function DocumentCard(params) {
    return (
        <div className="card" style={{marginBottom: '2rem', border: 0}}>
            <div className="card-body" style={{background: '#2d3638', borderRadius: '20px'}}>
                <div className="row align-items-center">
                    <div className="col-4">
                        <img className="card-image" src="img/tutor.jpg" alt="thumbnail"/>
                    </div>
                    <div className="col-8 align-items-center">
                        <div className = "d-flex flex-column">
                            <h4 className="card-title text-white">{params.name}</h4>
                            <p className="card-text text-white">Thời gian: {params.date}</p>
                            <p className="card-text text-white">Số trang: {params.pages}</p>
                            <div className="row">
                                <div className="col-5 col-xl-6 d-flex d-xl-flex justify-content-center justify-content-xl-center"><button className="btn btn-primary" type="button">In ngay</button></div>
                                <div className="col d-flex d-xl-flex justify-content-center justify-content-xl-center"><button className="btn btn-primary" type="button">Chọn tài liệu</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

var documents = [
    {
        "name" : "document1",
        "content" : "This is the content of document1",
        "date" : "2015-01-01 00:00:00",
        "pages" : 10
    },
    {
        "name" : "document2",
        "content" : "This is the content of document1",
        "date" : "2015-01-01 00:00:00",
        "pages" : 102
    },
    {
        "name" : "documen t3sfdsdkkkkkkkkkkkkkkkkkkkkkk",
        "content" : "This is the content of document1",
        "date" : "2015-01-01 00:00:00",
        "pages" : 10123
    },
    {
        "name" : "document2",
        "content" : "This is the content of document1",
        "date" : "2015-01-01 00:00:00",
        "pages" : 102
    },
    {
        "name" : "document3",
        "content" : "This is the content of document1",
        "date" : "2015-01-01 00:00:00",
        "pages" : 10123
    },
    {
        "name" : "document2",
        "content" : "This is the content of document1",
        "date" : "2015-01-01 00:00:00",
        "pages" : 102
    },
    {
        "name" : "document3",
        "content" : "This is the content of document1",
        "date" : "2015-01-01 00:00:00",
        "pages" : 10123
    },
    {
        "name" : "document2",
        "content" : "This is the content of document1",
        "date" : "2015-01-01 00:00:00",
        "pages" : 102
    },
    {
        "name" : "document3",
        "content" : "This is the content of document1",
        "date" : "2015-01-01 00:00:00",
        "pages" : 10123
    },
    {
        "name" : "document2",
        "content" : "This is the content of document1",
        "date" : "2015-01-01 00:00:00",
        "pages" : 102
    },
    {
        "name" : "document2",
        "content" : "This is the content of document1",
        "date" : "2015-01-01 00:00:00",
        "pages" : 102
    },
    {
        "name" : "document3",
        "content" : "This is the content of document1",
        "date" : "2015-01-01 00:00:00",
        "pages" : 10123
    },
    {
        "name" : "document3",
        "content" : "This is the content of document1",
        "date" : "2015-01-01 00:00:00",
        "pages" : 10123
    },
    {
        "name" : "document4",
        "content" : "This is the content of document1",
        "date" : "2015-01-01 00:00:00",
        "pages" : 10141
    }
]