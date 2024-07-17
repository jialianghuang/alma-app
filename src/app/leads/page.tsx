'use client'
import { JsonForms } from '@jsonforms/react';
import {
  RankedTester,
  rankWith,
  formatIs
} from '@jsonforms/core';
import schema from './schema.json';
import uischema from './uischema.json';
import React from 'react'
import Search from './search'

  import {
    materialCells,
    materialRenderers,
  } from '@jsonforms/material-renderers';
import styled from 'styled-components';


const initialData = {
    "leads": [
        {
            "name":"jialiang",
            "submitted": "2024-07-01",
            "status": "pending",
            "country": "US"
        },
        {
            "name": "david",
            "submitted": "2024-07-02",
            "status": "reached out",
            "country": "CA"
        },
        {
            "name": "mike",
            "submitted": "2024-07-02",
            "status": "pending",
            "country": "CA"
        },
        {
            "name": "leo",
            "submitted": "2024-07-02",
            "status": "pending",
            "country": "CA"
        },
        {
            "name": "Simon",
            "submitted": "2024-07-02",
            "status": "pending",
            "country": "CA"
        },
        {
            "name": "Jessica",
            "submitted": "2024-07-02",
            "status": "pending",
            "country": "CA"
        }
    ]
  };
const Sidebar = styled.div`
    position:fixed;
    top: 0;
    bottom:0;
    left: 0;
    width: 300px;
    padding: 2;
    background: #FFFFFF
`;
const MainContent = styled.div`
    padding: 1rem;
    margin-left: 300px
`;
function getIdFromPath(path:string) {
   return path.split('.')[1] ?? 0
}

export default function Leads() {
    const [data, setData] = React.useState<Object>(initialData);

    const renderers = [
      ...materialRenderers,
      //register custom renderers
      // { tester: StatusButtonTester, renderer: StatusButtonRenderer }
    ];
    const changeStatusCellTester: RankedTester = rankWith(5, formatIs('button1'));
  const cells = [
      ...materialCells,
      //register custom renderers
      { tester: changeStatusCellTester, cell: (props: any) => 
        {
         const { data,handleChange, path } = props
         console.log(getIdFromPath(path))
         const handleClick = () => {
          setData((oldArr:any) => {
            const updated = oldArr.leads.map((lead:any, i:number) => i === Number(getIdFromPath(path))? {...lead, status:'reached out'} : lead)
            return {leads:updated}
          })
         }
           return (
               <button onClick = {handleClick}>
                Change Status
               </button>
           )
       } }
    ];
  
    return (
        <div>
        <Sidebar className='sidebar overflow-y-auto text-center'>
        <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
      >
        <i className="bi bi-house-door-fill"></i>
        <span className="ml-4 font-bold">alma</span>
      </div>
        </Sidebar>
        <MainContent>
        <Search />
        <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={renderers}
        cells={cells}
        onChange={({ data }) => setData(data)}
      />
      </MainContent>
      </div>
    )
}
