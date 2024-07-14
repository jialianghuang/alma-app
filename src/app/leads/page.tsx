'use client'
import { JsonForms } from '@jsonforms/react';
import schema from './schema.json';
import uischema from './uischema.json';
import React from 'react'
import Search from './search'
import {
    vanillaCells, vanillaRenderers
  } from '@jsonforms/vanilla-renderers';
  import {
    materialCells,
    materialRenderers,
  } from '@jsonforms/material-renderers';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch, useAppStore } from '../lib/hooks'

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

const renderers = [
    ...materialRenderers,
    //register custom renderers
    // { tester: arrayLayoutTester, renderer: ArrayLayoutRenderer }
  ];

export default function Leads() {
    const [data, setData] = React.useState<Object>(initialData);
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
        cells={materialCells}
        onChange={({ data }) => setData(data)}
      />
      </MainContent>
      </div>
    )
}