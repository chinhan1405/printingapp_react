import React, { useState, useEffect } from 'react';
import './ConfigPrint.css';
import { useNavigate } from 'react-router-dom';
import configs from '../configs/api_config';

const ConfigPrint = () => {
    const [selectedPrinter, setSelectedPrinter] = useState("Nothing");
    const [numberCopy, setNumberCopy] = useState("Nothing");
    const [selectedCustomPrint, setSelectedCustomPrint] = useState("Nothing");
    const [firstNumberPage, setFirstNumberPage] = useState(0);
    const [secondNumberPage, setSecondNumberPage] = useState(0);
    const [selectedPrintSide, setSelectedPrintSide] = useState("Nothing");
    const [selectedCollated, setSelectedCollated] = useState("Nothing");
    const [selectedOrientation, setSelectedOrientation] = useState("Nothing");
    const [selectedSizePage, setSelectedSizePage] = useState("Nothing");
    const [selectedMarginPage, setSelectedMarginPage] = useState("Nothing");
    const [selectedSheetPage, setSelectedSheetPage] = useState("Nothing");
    const [checkConfigs, selectedCheckConfigs] = useState(false);
    const navigate = useNavigate();

    const checkConfig = () => {
        selectedCheckConfigs((selectedPrinter !== "Nothing") && (numberCopy !== "Nothing") &&
            (selectedCustomPrint !== "Nothing") && (selectedPrintSide !== "Nothing") &&
            (selectedOrientation !== "Nothing") && (selectedSizePage !== "Nothing") &&
            (selectedMarginPage !== "Nothing") && (selectedSheetPage !== "Nothing"));
    };
    const handlePrinterChange = (event) => {
        setSelectedPrinter(event.target.value);
        checkConfig();
    };

    const handleCustomPrintChange = (event) => {
        setSelectedCustomPrint(event.target.value);
        checkConfig();
    };

    const handlePrintSideChange = (event) => {
        setSelectedPrintSide(event.target.value);
        checkConfig();
    };

    const handleFirstNumberPageChange = (event) => {
        setFirstNumberPage(event.target.value);
        checkConfig();
    };
    const handleSecondNumberPageChange = (event) => {
        setSecondNumberPage(event.target.value);
        checkConfig();
    };

    const handleCollectedChange = (event) => {
        setSelectedCollated(event.target.value);
        checkConfig();
    };

    const handleOrientationChange = (event) => {
        setSelectedOrientation(event.target.value);
        checkConfig();
    };

    const handleSizePageChange = (event) => {
        setSelectedSizePage(event.target.value);
        checkConfig();
    };

    const handleMarginPageChange = (event) => {
        setSelectedMarginPage(event.target.value);
        checkConfig();
    };

    const handleSheetPageChange = (event) => {
        setSelectedSheetPage(event.target.value);
        checkConfig();
    };

    const handlePrintButtonClick = () => {
        const printconfigs = {
            copies: numberCopy,
            printer: selectedPrinter,
            custom_print: selectedCustomPrint,
            pages: [firstNumberPage, secondNumberPage],
            print_side: selectedPrintSide,
            orientation: selectedOrientation,
            page_size: selectedSizePage,
            page_margin: selectedMarginPage,
            pages_sheet: selectedSheetPage,
        }
        navigate('/printconfirm/', { state: printconfigs});
    };

    const handleCopyChange = (event) => {
        setNumberCopy(event.target.value);
    };
    useEffect(() => {
        if (document.getElementById('secondNumberPage')) {
            document.getElementById('secondNumberPage').min = firstNumberPage;
            setSecondNumberPage(firstNumberPage);
        }
            
    }, [firstNumberPage]);
    return (
        <div className='container d-flex flex-column py-4 py-xl-5'>
            <div className='row '>
                <div className='col-sm-6'>
                    <div className='row'>
                        <div className='col-3' id='print-button'>
                            <button onClick={handlePrintButtonClick} className="print-button" disabled={!checkConfigs}>Print</button>
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
                                    <option value="Nohing" hidden>{" "}</option>
                                    <option value="Fax">Fax</option>
                                    <option value="Print to PDF">Print to PDF</option>
                                    <option value="Onenote">Onenote</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <label htmlFor="customprint" className="daudong" style={{marginTop: '1rem'}}>Settings:</label>
                            <div className="config-box">
                                <select id="customprint" value={selectedCustomPrint} onChange={handleCustomPrintChange} className="custom-select">
                                    <option value="Nohing" hidden>{" "}</option>
                                    <option value="Print all Pages">Print all Pages</option>
                                    <option value="Print selection">Print selection</option>
                                    <option value="Print current page">Print current page</option>
                                    <option value="Custom print">Custom print</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-2'>
                            <label htmlFor="numberPage">Pages:</label>
                        </div>
                        {/*<div className='col-10'>*/}
                        {/*    <input*/}
                        {/*        type="number"*/}
                        {/*        id="numberPage"*/}
                        {/*        value={numberPage}*/}
                        {/*        onChange={handleNumberPageChange}*/}
                        {/*        className="custom-input"*/}
                        {/*        min="0"*/}
                        {/*        step="1"*/}
                        {/*        style={{ marginBottom: '1rem'}}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        {
                            (selectedCustomPrint === "Print selection") && (
                                <div className='col-10'>
                                    <div style={{ display: 'flex' }}>
                                        <input
                                            type="number"
                                            id="firstNumberPage"
                                            value={firstNumberPage}
                                            onChange={handleFirstNumberPageChange}
                                            className="custom-input"
                                            min="1"
                                            step="1"
                                            style={{ width: '4rem', marginRight: '0.2rem', marginBottom: '1rem' }}
                                        />
                                        <span style={{ margin: '0 0.5rem' }}>-</span>
                                        <input
                                            type="number"
                                            id="secondNumberPage"
                                            value={secondNumberPage}
                                            onChange={handleSecondNumberPageChange}
                                            className="custom-input"
                                            min={toString(firstNumberPage)}
                                            step="1"
                                            style={{ width: '4rem', marginLeft: '0.2rem', marginBottom: '1rem' }}
                                        />
                                    </div>
                                </div>
                                )
                        }

                        <div className='col-12'>
                            <div className="config-box">
                                <select id="printside" value={selectedPrintSide} onChange={handlePrintSideChange} className="custom-select">
                                    <option value="Nohing" hidden>{" "}</option>
                                    <option value="Print One Sided">Print One Sided</option>
                                    <option value="Manually Print on Both Sides">Manually Print on Both Sides</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="config-box">
                                <select id="orientation" value={selectedOrientation} onChange={handleOrientationChange} className="custom-select">
                                    <option value="Nohing" hidden>{" "}</option>
                                    <option value="Portrait Orientation">Portrait Orientation</option>
                                    <option value="Landscape Orientation">Landscape Orientation</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="config-box">
                                <select id="pagesize" value={selectedSizePage} onChange={handleSizePageChange} className="custom-select">
                                    <option value="Nohing" hidden>{" "}</option>
                                    <option value="Letter">Letter</option>
                                    <option value="Tabloid">Tabloid</option>
                                    <option value="Legal">Legal</option>
                                    <option value="Executive">Executive</option>
                                    <option value="A3">A3</option>
                                    <option value="A4">A4</option>
                                    <option value="B4(JIS)">B4(JIS)</option>
                                    <option value="B5(JIS)">B5(JIS)</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="config-box">
                                <select id="pagemargin" value={selectedMarginPage} onChange={handleMarginPageChange} className="custom-select">
                                    <option value="Nohing" hidden>{" "}</option>
                                    <option value="Norml Margin">Norml Margin</option>
                                    <option value="Narrow Margin">Narrow Margin</option>
                                    <option value="Moderate Margin">Moderate Margin</option>
                                    <option value="wide Margin">wide Margin</option>
                                    <option value="Mirrored Margin">Mirrored Margin</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="config-box">
                                <select id="sheetpage" value={selectedSheetPage} onChange={handleSheetPageChange} className="custom-select">
                                    <option value="Nohing" hidden>{" "}</option>
                                    <option value="1 Page Per Sheet">1 Page Per Sheet</option>
                                    <option value="2 Page Per Sheet">2 Page Per Sheet</option>
                                    <option value="4 Page Per Sheet">4 Page Per Sheet</option>
                                    <option value="6 Page Per Sheet">6 Page Per Sheet</option>
                                    <option value="8 Page Per Sheet">8 Page Per Sheet</option>
                                    <option value="16 Page Per Sheet">16 Page Per Sheet</option>
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
