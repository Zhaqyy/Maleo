/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useMemo } from "react";
// import { useTable } from "react-table";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import "../Style/Component/Component.css";


const Table = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: "TYPE D’ADHÉSIF / UTILISATION", accessorKey: "type" },
      { Header: "pvc", accessorKey: "pvc" },
      { Header: "pp acrylique", accessorKey: "acrylique" },
      { Header: "Silencieux", accessorKey: "silencieux" },
      { Header: "Pp solvant", accessorKey: "solvant" },
      { Header: "Pp hot melt", accessorKey: "hotmelt" },
      { Header: "papier kraft", accessorKey: "papier" }
    ],
    []
  );


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <div className="table-container">
       <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      {/* <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr key={index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, colIndex) => (
              <th key={colIndex} {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr key={rowIndex} {...row.getRowProps()}>
              {row.cells.map((cell, cellIndex) => (
                <td key={cellIndex} {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table> */}
    </div>
  );
};

export default Table;
