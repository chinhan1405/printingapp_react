import './Documents.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import configs from '../configs/api_config';

const moment = require('moment');
export default function Documents() {
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        fetch(configs.baseAPI + configs.getAllDocAPI)
            .then(response => response.json())
            .then(data => { setDocuments(data.data)})
            .catch(error => console.error('Error fetching documents:', error));
        fetch(configs.baseAPI + configs.getSelectedDocAPI)
            .then(response => response.json())
            .then(data => {
                if (data.data.length === 0)
                    setSelected(false);
                else setSelected(true);
            })
            .catch(error => console.error('Error fetching documents:', error));
    }, [documents]);
    const handleSelect = (index) => {
        const updatedDocuments = [...documents];
        if (updatedDocuments[index].status === "ready") {
            updatedDocuments[index].status = "selected"
        }
        else updatedDocuments[index].status = "ready"
        fetch(configs.baseAPI + configs.updateDocByIDAPI + updatedDocuments[index]._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedDocuments[index]),
        })
            .then(response => response.json())
            .then(data => {
                // Cập nhật trạng thái đã chọn trong state
                console.log(data);
                setDocuments(updatedDocuments);
            })
            .catch(error => console.error('Error updating document:', error));
        console.log(updatedDocuments);
    };

    const handlePrintSelected = () => {
        const selectedDocuments = documents.filter(document => (document.status === "selected"));
        if (selectedDocuments.length > 0) {
            // Redirect to "/home" if at least one document is selected
            navigate('/configprint/');
        } else {
            // Show an alert if no document is selected
            alert('Vui lòng chọn ít nhất một tài liệu.');
        }
    };
    const handleQuickPrint = (index) => {
        const updatedDocuments = [...documents];
        updatedDocuments[index].status = "selected"
        for (let i = 0; i < updatedDocuments.length; i++) {
            if (i !== index) {
                updatedDocuments[i].status = "ready";
            }
            fetch(configs.baseAPI + configs.updateDocByIDAPI + updatedDocuments[i]._id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedDocuments[i]),
            })
                .then(response => response.json())
                .then(data => {
                })
                .catch(error => console.error('Error updating document:', error));
        }
        navigate('/configprint/');
    };
    const handleBackHome = () => {
        navigate('/')
    }
    return (
        <div style={{marginBottom: '10vh'}}>
            <div className="container" style={{marginTop: '2rem'}}>
                <div className="row">
                    <div className="col-md-4 d-flex d-md-flex justify-content-center align-self-center justify-content-md-center func-button"><button className="btn btn-info" type="button" onClick={handleBackHome}>Trang chủ</button></div>
                    <div className="col-md-4 d-flex d-md-flex justify-content-center justify-content-md-center func-button"><button className="btn btn-info" type="button" onClick={handlePrintSelected} disabled={!selected}>In tài liệu đã chọn</button></div>
                    <div className="col-md-4 d-flex d-lg-flex justify-content-center justify-content-lg-center func-button"><button className="btn btn-info" type="button" style={{marginLeft: '0px'}}>+&nbsp; Tải lên tài liệu mới</button></div>
                </div>
            </div>
            <div className='container' style={{maxWidth: '90%'}}>
                <div className='row'>
                    {
                        documents.map((document, index) => {
                            return <div key={index} className="col-xl-4 col-md-6 col-sm-12">
                                    <DocumentCard
                                    name={document.name}
                                    date={moment(document.date).format('DD/MM/YYYY')}
                                    pages={document.pages}
                                    selected={document.status === "selected"}
                                    onSelect={() => handleSelect(index)}
                                    onPrint={() => handleQuickPrint(index)}
                                    />
                                </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}


function DocumentCard({ name, date, pages, selected, onSelect, onPrint }) {

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
                            <div className="row">
                                <div className="col-5 col-xl-6 d-flex d-xl-flex justify-content-center justify-content-xl-center"><button className="btn btn-primary" type="button" onClick={onPrint}>In ngay</button></div>
                                <div className="col d-flex d-xl-flex justify-content-center justify-content-xl-center">
                                    <button
                                        className={`btn btn-primary ${selected ? 'btn-success' : ''}`}
                                        type="button" onClick={onSelect}>
                                        {
                                            selected ? 'Đã chọn' : 'Chọn tài liệu'
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}