import React, { useState } from "react";
import mockdata from "./pages/data.json";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Person = {
  id: number;
  name: string;
  email: string;
  phone: string;
};
const columnHelper = createColumnHelper<Person>();
const columns = [
  columnHelper.accessor("id", { cell: (info) => info.getValue() }),
  columnHelper.accessor("name", { cell: (info) => info.getValue() }),
  columnHelper.accessor((row) => row.email, {
    id: "e-mail",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Email Id</span>,
  }),
  // columnHelper.accessor("email", { cell: (info) => info.getValue() }),
  // columnHelper.accessor("phone", {
  //   header: () => "phone",
  //   cell: (info) => info.renderValue(),
  // }),
  columnHelper.accessor("phone", { cell: (info) => info.getValue() }),
  columnHelper.group({
    header: "name",
    columns: [
      columnHelper.accessor("email", { cell: (info) => info.getValue() }),
      columnHelper.accessor("phone", { cell: (info) => info.getValue() }),
    ],
  }),
];
//
const TableComponent: React.FC = () => {
  const [data] = useState(() => [...mockdata]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="border border-solid rounded-lg">
      <div className="flex justify-between">
        <p>transactions</p>
        <button>show more</button>
      </div>
      <div className="flex justify-center">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`text-start ${
                      header.id === "email"
                        ? "w-[200px]"
                        : header.id === "phone"
                        ? "w-[180px]"
                        : "w-[120px]"
                    } bg-slate-600`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {/* {console.log(header.id)} */}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="w-[200px] border-b border-solid">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableComponent;
