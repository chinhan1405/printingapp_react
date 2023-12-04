import React, { useState, useEffect } from 'react';
import './ConfigPrint.css';
import { useNavigate } from 'react-router-dom';

const ConfigPrint = () => {
    const [selectedPrinter, setSelectedPrinter] = useState("Printer 1");
    const [numberCopy, setNumberCopy] = useState(1);
    const [selectedCustomPrint, setSelectedCustomPrint] = useState("Print all Pages");
    const [firstNumberPage, setFirstNumberPage] = useState(0);
    const [secondNumberPage, setSecondNumberPage] = useState(0);
    const [selectedPrintSide, setSelectedPrintSide] = useState("Print One Sided");
    const [selectedCollated, setSelectedCollated] = useState("Nothing");
    const [selectedOrientation, setSelectedOrientation] = useState("Portrait Orientation");
    const [selectedSizePage, setSelectedSizePage] = useState("A4");
    const [selectedMarginPage, setSelectedMarginPage] = useState("Normal Margin");
    const [selectedSheetPage, setSelectedSheetPage] = useState("1 Page Per Sheet");
    const [checkConfigs, selectedCheckConfigs] = useState(false);
    const navigate = useNavigate();

    const checkConfig = () => {
        console.log([selectedPrinter, numberCopy, selectedCustomPrint, selectedPrintSide, selectedOrientation, selectedSizePage, selectedMarginPage, selectedSheetPage]);
        selectedCheckConfigs((selectedPrinter !== "Nothing") && (numberCopy !== "Nothing") &&
            (selectedCustomPrint !== "Nothing") && (selectedPrintSide !== "Nothing") &&
            (selectedOrientation !== "Nothing") && (selectedSizePage !== "Nothing") &&
            (selectedMarginPage !== "Nothing") && (selectedSheetPage !== "Nothing"));
    };
    const handlePrinterChange = (event) => {
        setSelectedPrinter(event.target.value);
    };

    const handleCustomPrintChange = (event) => {
        setSelectedCustomPrint(event.target.value);

    };

    const handlePrintSideChange = (event) => {
        setSelectedPrintSide(event.target.value);

    };

    const handleFirstNumberPageChange = (event) => {
        setFirstNumberPage(event.target.value);
    };
    const handleSecondNumberPageChange = (event) => {
        setSecondNumberPage(event.target.value);
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
        navigate('/printconfirm/', { state: printconfigs });
    };

    const handleCopyChange = (event) => {
        setNumberCopy(event.target.value);
    };
    useEffect(() => {
        if (document.getElementById('secondNumberPage')) {
            document.getElementById('secondNumberPage').min = firstNumberPage;
            setSecondNumberPage(firstNumberPage);
        }
        checkConfig();

    }, [firstNumberPage, selectedPrinter, numberCopy, selectedCustomPrint, selectedPrintSide, selectedOrientation, selectedSizePage, selectedMarginPage, selectedSheetPage]);
    return (
        <div className='container d-flex flex-column py-4 py-xl-5'>
            <div className='row '>
                <div className='col-sm-6'>
                    <div className='row'>
                        <div className='col-3' id='print-button'>
<<<<<<< HEAD
                            <button onClick={handlePrintButtonClick} className={((checkConfigs) ? "enabled" : "disabled") + "-print-button"} disabled={!checkConfigs}>Print</button>
=======
                            <button onClick={handlePrintButtonClick} className={((checkConfigs)? "enabled":"disabled")+"-print-button"} disabled={!checkConfigs}>In tài liệu</button>
>>>>>>> 7fb9c63cccfb5b04f5713a69c07f441d3d3902b0
                        </div>
                        <div className='col-9' style={{ paddingLeft: '2rem' }}>
                            <label htmlFor="numberCopy" style={{ marginRight: '2rem' }}>Copy:</label>
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
<<<<<<< HEAD
                                    <option value="Fax">Fax</option>
                                    <option value="Print to PDF">Print to PDF</option>
                                    <option value="Onenote">Onenote</option>
=======
                                    <option value="Printer 1">Printer 1</option>
                                    <option value="Printer 2">Printer 2</option>
                                    <option value="Printer 3">Printer 3</option>
>>>>>>> 7fb9c63cccfb5b04f5713a69c07f441d3d3902b0
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <label htmlFor="customprint" className="daudong" style={{ marginTop: '1rem' }}>Settings:</label>
                            <div className="config-box">
                                <select id="customprint" value={selectedCustomPrint} onChange={handleCustomPrintChange} className="custom-select">
                                    <option value="Print all Pages">Print all Pages</option>
<<<<<<< HEAD
                                    <option value="Custom print">Custom print</option>
=======
                                    <option value="Print selection">Custom print</option>
>>>>>>> 7fb9c63cccfb5b04f5713a69c07f441d3d3902b0
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
                                    <option value="Print One Sided">Print One Sided</option>
                                    <option value="Manually Print on Both Sides">Print on Both Sides</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="config-box">
                                <select id="orientation" value={selectedOrientation} onChange={handleOrientationChange} className="custom-select">
                                    <option value="Portrait Orientation">Portrait Orientation</option>
                                    <option value="Landscape Orientation">Landscape Orientation</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="config-box">
                                <select id="pagesize" value={selectedSizePage} onChange={handleSizePageChange} className="custom-select">
<<<<<<< HEAD
                                    <option value="Letter">Letter</option>
                                    <option value="Tabloid">Tabloid</option>
                                    <option value="Legal">Legal</option>
                                    <option value="Executive">Executive</option>
                                    <option value="A3">A3</option>
=======
>>>>>>> 7fb9c63cccfb5b04f5713a69c07f441d3d3902b0
                                    <option value="A4">A4</option>
                                    <option value="A3">A3</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="config-box">
                                <select id="pagemargin" value={selectedMarginPage} onChange={handleMarginPageChange} className="custom-select">
<<<<<<< HEAD
                                    <option value="Norml Margin">Norml Margin</option>
=======
                                    <option value="Normal Margin">Normal Margin</option>
>>>>>>> 7fb9c63cccfb5b04f5713a69c07f441d3d3902b0
                                    <option value="Narrow Margin">Narrow Margin</option>
                                    <option value="Moderate Margin">Moderate Margin</option>
                                    <option value="Wide Margin">Wide Margin</option>
                                    <option value="Mirrored Margin">Mirrored Margin</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className="config-box">
                                <select id="sheetpage" value={selectedSheetPage} onChange={handleSheetPageChange} className="custom-select">
                                    <option value="1 Page Per Sheet">1 Page Per Sheet</option>
                                    <option value="2 Pages Per Sheet">2 Pages Per Sheet</option>
                                    <option value="4 Pages Per Sheet">4 Pages Per Sheet</option>
                                    <option value="6 Pages Per Sheet">6 Pages Per Sheet</option>
                                    <option value="8 Pages Per Sheet">8 Pages Per Sheet</option>
                                    <option value="16 Pages Per Sheet">16 Pages Per Sheet</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
                <div className='col-sm-6' style={{ textAlign: 'center' }}>
                    <img id='thumbnail-image' className='d-flex' src='https://random.imagecdn.app/100/160' alt='thumbnail' />
=======
                <div className='col-sm-6' style={{textAlign: 'center'}}>
                    <img id='thumbnail-image' className='d-flex' src='../img/pdf.png' alt='thumbnail' />
>>>>>>> 7fb9c63cccfb5b04f5713a69c07f441d3d3902b0
                </div>
            </div>
        </div>
    );
};

export default ConfigPrint;