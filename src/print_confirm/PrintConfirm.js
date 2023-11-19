import React from "react";
import './PrintConfirm.css';

class PrintConfirm extends React.Component {
    handleClickPrint = () => {
        console.log('Hit print');
    }

    render() {
        return (
            <div className="container" style={{maxWidth: '90%', marginBottom: '10vh'}}>
                <div className="row">
                    <button onClick={() => this.handleClickPrint()} className="btn btn-info m-4" type="button">IN NGAY</button>
                </div>
                <strong className="title">Tài liệu đã chọn: </strong>
                <div className='row mt-3'>
                    {
                        documents.map((document) => {
                            return (
                                <div className="col-xl-4 col-md-6 col-sm-12">
                                    <DocumentCard name={document.name} date={document.date} pages={document.pages} />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="row py-4">
                    <div className="col-6">
                        <strong className="title">Máy in:</strong>
                        Cơ sở X, tòa Y, tầng Z
                    </div>
                    <div className="col-6">
                        <strong className="title">Tổng số trang: </strong>
                        NN
                    </div>
                </div>
                <strong className="title">Cài đặt in</strong>
                <div className="row m-4 justify-content-center">
                    <div className="scrollbox">
                        {
                            (new Array(10*1024)).join("ab ")
                        }
                    </div>
                </div>
            </div >
        );
    }
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
                            <h4 className="card-title text-white mb-4">{params.name}</h4>
                            <p className="card-text text-white">Thời gian: {params.date}</p>
                            <p className="card-text text-white">Số trang: {params.pages}</p>
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
    }
]

export default PrintConfirm;
