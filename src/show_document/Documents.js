import './Documents.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import configs from '../configs/api_config';
const moment = require('moment');
export default function Documents() {
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();
    const [selected, setSelected] = useState(false);
    const [upload, setUpload] = useState(false);
    const [uploading, setUploading] = useState(false);

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
        fetch(configs.baseAPI + configs.updateDocByIdAPI + updatedDocuments[index]._id, {
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

    const handleDeleteDocument = () => {

    }

    const handleQuickPrint = (index) => {
        const updatedDocuments = [...documents];
        updatedDocuments[index].status = "selected"
        for (let i = 0; i < updatedDocuments.length; i++) {
            if (i !== index) {
                updatedDocuments[i].status = "ready";
            }
            fetch(configs.baseAPI + configs.updateDocByIdAPI + updatedDocuments[i]._id, {
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
    const handleDownload = (index) => {
        const fileId = documents[index].fileId;
        const linkDownload = configs.baseAPI + configs.downloadDocAPI + fileId;
        const newTab = window.open(linkDownload, '_blank');
        newTab.focus();
    };
    const handleUpload = () => {
        const fileUpload = document.getElementById('fileUpload');
        const file = fileUpload.files[0];
        if (file) {
            setUploading(true);
            try {
                console.log(file);
                let formData = new FormData();
                formData.append('file', file);
                fetch(configs.baseAPI + configs.createDocAPI, {
                    method: "POST",
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        setUploading(false);
                        window.location.reload();
                    })
                    .catch(error => {
                        console.error('Error uploading file: ', error);
                        setUploading(false);
                    });
            } catch (error) {
                console.error('Error during file read:', error);
                setUploading(false);
            }
        }
    };

    const togglePopup = () => {
        setUpload(!upload);
    };

    return (
        <div style={{marginBottom: '10vh'}}>
            <div className="container" style={{marginTop: '2rem'}}>
                <div className="row">
                    <div className="col-md-3 d-flex d-md-flex justify-content-center align-self-center justify-content-md-center func-button"><button className="btn btn-info" type="button" onClick={handleBackHome}>Trang chủ</button></div>
                    <div className="col-md-3 d-flex d-md-flex justify-content-center justify-content-md-center func-button"><button className="btn btn-info" type="button" onClick={handleDeleteDocument} disabled={!selected}>Xóa tài liệu đã chọn</button></div>
                    <div className="col-md-3 d-flex d-md-flex justify-content-center justify-content-md-center func-button"><button className="btn btn-info" type="button" onClick={handlePrintSelected} disabled={!selected}>In tài liệu đã chọn</button></div>
                    <div className="col-md-3 d-flex d-lg-flex justify-content-center justify-content-lg-center func-button">
                        <button className="btn btn-info" type="button" onClick={togglePopup} style={{ marginLeft: '0px' }} disabled={upload}>
                            +&nbsp; Tải lên tài liệu mới
                        </button>
                    </div>
                </div>
            </div>
            {upload && (
                <div className="centered-content-div">
                    <div className="popup">
                        <input type="file" name="file" id="fileUpload" accept=".pdf, .docx" />
                        <button className="btn btn-info" type="button" onClick={handleUpload} disabled={uploading}>
                            {uploading ? 'Đang tải lên...' : 'Tải lên'}
                        </button>
                        <button className="btn btn-secondary" type="button" onClick={togglePopup}>
                            Đóng
                        </button>
                    </div>
                </div>
            )}
            <div className='container' style={{maxWidth: '90%'}}>
                <div className='row'>
                    {
                        documents.map((document, index) => {
                            return <div key={index} className="col-xl-4 col-md-6 col-sm-12">
                                    <DocumentCard
                                    name={decodeURIComponent(escape(document.name))}
                                    format={document.format}
                                    date={moment(document.created_at).format('DD/MM/YYYY')}
                                    pages={document.pages}
                                    onDownload={() => handleDownload(index)}
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


function DocumentCard({ name, format, date, pages, selected, onSelect, onPrint, onDownload }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="card" style={{marginBottom: '2rem', border: 0}}>
            <div className="card-body" style={{background: '#2d3638', borderRadius: '20px'}}>
                <div className="row align-items-center">
                    <div className="col-4">
                        <img className="card-image" src={(format === "pdf")? "img/pdf.png": "img/docx.png"} alt="thumbnail"/>
                    </div>
                    <div className="col-8 align-items-center">
                        <div className = "d-flex flex-column">
                            <h4 className="card-title text-white mb-4"
                                onClick={onDownload}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={{ position: 'relative', cursor: 'pointer' }}
                            >
                                {name}
                                {isHovered && (
                                    <span
                                        style={{
                                            position: 'absolute',
                                            bottom: '-20px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            fontSize: '12px',
                                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                            color: 'white',
                                            padding: '4px',
                                            borderRadius: '4px',
                                        }}
                                    >
                                        Download
                                    </span>
                                )}
                            </h4>
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
