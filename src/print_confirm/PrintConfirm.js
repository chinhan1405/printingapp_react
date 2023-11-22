import React, { useState, useEffect } from 'react';
import configs from '../configs/api_config';
import { useNavigate, useLocation } from 'react-router-dom';
import './PrintConfirm.css';
const moment = require('moment');
export function PrintConfirm() {
    const handleClickPrint = () => {
        console.log('Hit print');
    }
    const location = useLocation();
    const [documents, setDocuments] = useState([]);
    const [printconfigs, setConfigs] = useState(null);
    const [total_pages, setTotalPages] = useState(0)
    useEffect(() => {
        fetch(configs.baseAPI + configs.getSelectedDocAPI)
            .then(response => response.json())
            .then(data => {
                setDocuments(data.data);
                let total = 0;
                data.data.forEach(element => {
                    total += element.pages;
                })
                setTotalPages(total);
            })
            .catch(error => console.error('Error fetching documents:', error));
        console.log(configs.baseAPI + configs.getPrtConfigByIDAPI + location.state);
        fetch(configs.baseAPI + configs.getPrtConfigByIDAPI + location.state)
            .then(response => response.json())
            .then(data => {
                setConfigs(data.data);
                console.log(printconfigs);
            })
            .catch(error => console.error('Error fetching configs:', error));
    }, []);
    return (
        <div className="container" style={{maxWidth: '90%', marginBottom: '10vh'}}>
            <div className="row">
                <button onClick={handleClickPrint} className="btn btn-info m-4" type="button">IN NGAY</button>
            </div>
            <strong className="title">Tài liệu đã chọn: </strong>
            <div className='row mt-3'>
                {
                    documents.map((document) => {
                        return (
                            <div key={document._id} className="col-xl-4 col-md-6 col-sm-12">
                                <DocumentCard
                                    name={document.name}
                                    date={moment(document.date).format('DD/MM/YYYY')}
                                    pages={document.pages}
                                />
                            </div>
                        )
                    })
                }
            </div>

            <div className="row py-4">
                <div className="col-6">
                    <strong className="title">Máy in:</strong>
                    {printconfigs ? printconfigs.printer: ""}
                </div>
                <div className="col-6">
                    <strong className="title">Tổng số trang: </strong>
                    {total_pages}
                </div>
            </div>
            <strong className="title">Cài đặt in</strong>
            <div className="row m-4 justify-content-center">
                <div className="scrollbox">
                    {printconfigs && (
                        <div>
                            <p>Số bản sao: {printconfigs.copies}</p>
                            <p>Chọn trang in: {printconfigs.custom_print}</p>
                            <p>Số mặt in: {printconfigs.print_side}</p>
                            <p>Hướng giấy: {printconfigs.orientation}</p>
                            <p>Khổ giấy: {printconfigs.page_size}</p>
                            <p>Margin: {printconfigs.page_margin}</p>
                            <p>Số trang mỗi mặt: {printconfigs.pages_sheet}</p>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}

function DocumentCard({name, date, pages}) {
    return (
        <div className="card" style={{marginBottom: '2rem', border: 0}}>
            <div className="card-body" style={{background: '#2d3638', borderRadius: '20px'}}>
                <div className="row align-items-center">
                    <div className="col-4">
                        <img className="card-image" src="img/tutor.jpg" alt="thumbnail"/>
                    </div>
                    <div className="col-8 align-items-center">
                        <div className = "d-flex flex-column">
                            <h4 className="card-title text-white mb-4">{name}</h4>
                            <p className="card-text text-white">Thời gian: {date}</p>
                            <p className="card-text text-white">Số trang: {pages}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrintConfirm;
