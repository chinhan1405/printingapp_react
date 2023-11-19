import React, { useState } from 'react';
import './ConfigPrint.css'; // Đảm bảo bạn đã tạo file CSS để tùy chỉnh giao diện

const ConfigPrint = () => {
    const [selectedPrinter, setSelectedPrinter] = useState('');
    const [numberCopy, setNumberCopy] = useState('');
    const [selectedCustomPrint, setSelectedCustomPrint] = useState('');
    const [numberPage, setNumberPage] = useState('');
    const [selectedPrintSide, setSelectedPrintSide] = useState('');
    const [selectedCollated, setSelectedCollated] = useState('');
    const [selectedOrientation, setSelectedOrientation] = useState('');
    const [selectedSizePage, setSelectedSizePage] = useState('');
    const [selectedMarginPage, setSelectedMarginPage] = useState('');
    const [selectedSheetPage, setSelectedSheetPage] = useState('');

    const handlePrinterChange = (event) => {
        setSelectedPrinter(event.target.value);
    };

    const handleCustomPrintChange = (event) => {
        setSelectedCustomPrint(event.target.value);
    };

    const handlePrintSideChange = (event) => {
        setSelectedPrintSide(event.target.value);
    };

    const handleNumberPageChange = (event) => {
        setNumberPage(event.target.value);
    };

    const handleCollectedChange = (event) => {
        setSelectedCollated(event.target.value);
    };

    const handleOrientationChange = (event) => {
        setSelectedOrientation(event.target.value);
    };

    const handleSizePageChange = (event) => {
        setSelectedSizePage(event.target.value);
    };

    const handleMarginPageChange = (event) => {
        setSelectedMarginPage(event.target.value);
    };

    const handleSheetPageChange = (event) => {
        setSelectedSheetPage(event.target.value);
    };

    const handlePrintButtonClick = () => {
        console.log('Button Print clicked!');
    };

    const handleCopyChange = (event) => {
        setNumberCopy(event.target.value);
    };

    return (
        <div className='container d-flex flex-column py-4 py-xl-5'>
            <div className='row '>
                <div className='col-sm-6'>
                    <div className='row'>
                        <div className='col-3' id='print-button'>
                            <button onClick={handlePrintButtonClick} className="print-button">Print</button>
                        </div>
                        <div className='col-9' style={{paddingLeft: '2rem'}}>
                            <label htmlFor="numberCopy" style={{marginRight: '2rem'}}>Copy:</label>
                            <input
                                type="number"
                                id="numberCopy"
                                value={numberCopy}
                                onChange={handleCopyChange}
                                className="custom-input"
                                min="0"
                                step="1"
                                style={{ marginBottom: '1rem', }}
                            />
                        </div>
                        <div className='col-12' id='select-printer'>
                            <label htmlFor="printer" className="daudong">Printer:</label>
                            <div className="config-box">
                                <select id="printer" value={selectedPrinter} onChange={handlePrinterChange} className="custom-select">
                                    <option value="Fax">Fax</option>
                                    <option value="printtopdf">Print to PDF</option>
                                    <option value="onenote">Onenote</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <label htmlFor="printer" className="daudong" style={{marginTop: '1rem'}}>Settings:</label>
                            <div className="config-box">
                                <select id="paperSize" value={selectedCustomPrint} onChange={handleCustomPrintChange} className="custom-select">
                                    <option value="printallpages">Print all Pages</option>
                                    <option value="printselecton">Print selection</option>
                                    <option value="printcurrentpage">Print current page</option>
                                    <option value="customprint">Custom print</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-2'>
                            <label htmlFor="numberPage">Pages:</label>
                        </div>
                        <div className='col-10'>
                            <input
                                type="number"
                                id="numberPage"
                                value={numberPage}
                                onChange={handleNumberPageChange}
                                className="custom-input"
                                min="0"
                                step="1"
                                style={{ marginBottom: '1rem'}}
                            />
                        </div>
                        <div className='col-12'>
                            <div className="config-box">
                                <select id="orientation" value={selectedPrintSide} onChange={handlePrintSideChange} className="custom-select">
                                    <option value="printonesided">Print One Sided</option>
                                    <option value="manuallyprintonbothsides">Manually Print on Both Sides</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="config-box">
                                <select id="orientation" value={selectedOrientation} onChange={handleOrientationChange} className="custom-select">
                                    <option value="portraitorientation">Portrait Orientation</option>
                                    <option value="landscapeorientation">Landscape Orientation</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="config-box">
                                <select id="orientation" value={selectedSizePage} onChange={handleSizePageChange} className="custom-select">
                                    <option value="portraitorientation">Portrait Orientation</option>
                                    <option value="letter">Letter</option>
                                    <option value="tabloid">Tabloid</option>
                                    <option value="legal">Legal</option>
                                    <option value="executive">Executive</option>
                                    <option value="a3">A3</option>
                                    <option value="a4">A4</option>
                                    <option value="b4">B4(JIS)</option>
                                    <option value="b5">B5(JIS)</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="config-box">
                                <select id="orientation" value={selectedMarginPage} onChange={handleMarginPageChange} className="custom-select">
                                    <option value="normal">Norml Margin</option>
                                    <option value="narrow">Narrow Margin</option>
                                    <option value="moderate">Moderate Margin</option>
                                    <option value="wide">wide Margin</option>
                                    <option value="mirrored">Mirrored Margin</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="config-box">
                                <select id="orientation" value={selectedSheetPage} onChange={handleSheetPageChange} className="custom-select">
                                    <option value="1page">1 Page Per Sheet</option>
                                    <option value="2page">2 Page Per Sheet</option>
                                    <option value="4page">4 Page Per Sheet</option>
                                    <option value="6page">6 Page Per Sheet</option>
                                    <option value="8page">8 Page Per Sheet</option>
                                    <option value="16page">16 Page Per Sheet</option>
                                </select>
                            </div>
                        </div>
                    </div>           
                </div>
                <div className='col-sm-6' style={{textAlign: 'center'}}>
                    <img id='thumbnail-image' className='d-flex' src='https://random.imagecdn.app/100/160' alt='thumbnail' />
                </div>
            </div>
        </div>
    );
};

export default ConfigPrint;
