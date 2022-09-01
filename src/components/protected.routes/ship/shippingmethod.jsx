import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
function Shippingmethod() {
  const [rowdata,setrowdata]=useState({id: 3, name: 'Item 4', price: 58.99, yourcost: 3302})
    const customStyles = {
    
        rows: {
          style: {
            minHeight: '35px',
            fontSize: '0.8rem',
            fontWeight: '700',
           
           
          }

        },
        cell: {
            style: {
              minHeight: '35px',
              fontSize: '0.8rem',
              backgroundColor:"red",
              fontWeight: '700',
             
             
            }
            
          },
        headCells: {
          style: {
            paddingLeft:"4px",
            fontSize: '0.8rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            paddingLeft: ' 12px',
            backgroundColor:"#F3F6F9",
            borderRadius:"2px"
          },
        },

        table: {
          style: {
            fontSize: '50px',
            paddingLeft: '0 8px',
           
          },
        },
      };
      let dataall = [
        { id: 1, name: "Item 1", price: 100, yourcost:1002 },
        { id: 2, name: "Item 2", price: 102 ,yourcost:1902},
        { id: 3, name: "Item 3", price: 100,yourcost:2002 },
        
       
      ];
      const coloum = [
        {
          name: "id",
          selector: (row) => row.id,
          sortable: true,
        },
        {
          name: "Name",
          selector: (row) => row.name,
          sortable: true,
        },
        {
          name: "Price",
          selector: (row) => row.price,
          sortable: true,
        },
        {
          name: "Your cost",
          selector: (row) => row.yourcost,
          sortable: true,
        },
      ];
  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-8 ">
        <h5 className="" style={{ position: "relative", top: "0.5rem", }}>
                <small className="mt-5 ">UPS</small>
              </h5>
              <hr style={{ color: "#E2E2E2" }} />
        <div className="mb-5" style={{border:"1px solid #B5B5C3 ", borderTop:"none", borderLeft:"none",borderBottom:"none",}}>
      <DataTable className="bg-dark"
                columns={coloum}
                data={dataall}
               
                customStyles={customStyles}
                // sortIcon={<h5>jjj</h5>}
                paginationPerPage={5}
                onRowClicked={(row) => {
                  setrowdata(row);
                  console.log(row);
                }}
              />
              </div>
              </div>
              <div className="col-sm-4 row mt-6">
<div className="col-sm-6 mt-5">
<h6 className="text-center text-justify text-bold"> <strong>Insurance Charges</strong></h6>
<h4><strong className="float-right text-bold">{rowdata.name}</strong></h4> 
<br/>
<h6 className="text-center text-justify text-bold mt-4" style={{ whiteSpace:"nowrap", }}> <strong>Shipping Charges</strong></h6>
<h4 ><strong className="float-right  text-bold">${rowdata.yourcost}</strong> </h4>

</div>
<div className="col-sm-6 mt-5">
<h5 className="text-center"style={{color:"#FFA800"}}>TOTAL AMOUNT</h5>
<h4><strong className="float-right text-bold ">${rowdata.price}</strong></h4>
<br/>
<h6 className="  " style={{color:"#B5B5C3", position:"relative", left:"1rem"}}> <small className="float-right">Taxes included</small></h6>
</div>
{/* <div className="col-sm-6">
<h6 className="text-center text-justify text-bold"> <strong>Shipping Charges</strong></h6>
<h4 ><strong className="float-right  text-bold">${rowdata.yourcost}</strong> </h4>
</div> */}
              </div>
              </div>
    </div>
  );
}

export default Shippingmethod;
