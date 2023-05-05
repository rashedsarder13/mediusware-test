import React, { useEffect, useState } from 'react';
import AllContactsModal from './ModalA';
import UsContactsModal from './ModalB';

const Problem2 = () => {
    const [openModalA, setOpenModalA] = useState(false);
    const [openModalB, setOpenModalB] = useState(false);
    const [data, setData] = useState([]);
    const [usData, setUsData] = useState([]);

    useEffect(() => {
      // fetch data
      const dataFetch = async () => {
        const data = await (
          await fetch(
            "https://contact.mediusware.com/api/contacts/?page=1&page_size=10"
          )
        ).json();
  
        // set state when the data received
        setData(data ? data.results : []);
      };
      const usDataFetch = async () => {
        const data = await (
          await fetch(
            "https://contact.mediusware.com/api/country-contacts/United%20States/?page=1&page_size=10"
          )
        ).json();
  
        // set state when the data received
        setUsData(data ? data.results : []);
      };
  
      usDataFetch();
      dataFetch();
    }, []);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => setOpenModalA(true)} >All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button" onClick={() => setOpenModalB(true)}>US Contacts</button>
                </div>
                <AllContactsModal show={openModalA} showAnother={setOpenModalB} setShow={setOpenModalA} data={data} />
                <UsContactsModal show={openModalB} showAnother={setOpenModalA} setShow={setOpenModalB} data={usData} />
            </div>
        </div>
    );
};

export default Problem2;