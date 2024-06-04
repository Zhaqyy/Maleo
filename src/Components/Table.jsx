/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useMemo } from "react";
// import { useTable } from "react-table";
import {
  // createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import "../Style/Component/Component.css";


const Table = ({ data }) => {
  const columns = useMemo(
    () => [
      { header: "TYPE D’ADHÉSIF / UTILISATION", accessorKey: "type" },
      { header: "pvc", accessorKey: "pvc" },
      { header: "pp acrylique Silencieux", accessorKey: "acrylique" },
      { header: "Pp solvant", accessorKey: "solvant" },
      { header: "Pp hot melt", accessorKey: "hotmelt" },
      { header: "papier kraft", accessorKey: "papier" }
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
      </table>
    </div>
  );
};

export default Table;
