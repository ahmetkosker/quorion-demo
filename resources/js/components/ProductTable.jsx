import React from "react";
import { useExpanded, useGroupBy, useSortBy, useTable } from "react-table";

export default function ProductTable({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data }, useGroupBy, useSortBy, useExpanded);

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps(
                                    column.getSortByToggleProps()
                                )}
                            >
                                {" "}
                                {column.render("Header")}
                                <span>
                                    {" "}
                                    {column.isSorted
                                        ? column.isSortedDesc
                                            ? " ▼"
                                            : " ▲"
                                        : ""}{" "}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.isGrouped ? (
                                            // If it's a grouped cell, add an expander and row count
                                            <>
                                                <span
                                                    {...row.getToggleRowExpandedProps()}
                                                ></span>
                                                {cell.render("Cell")} (
                                                {row.subRows.length})
                                            </>
                                        ) : cell.isAggregated ? (
                                            cell.render("Aggregated")
                                        ) : cell.isPlaceholder ? null : (
                                            cell.render("Cell")
                                        )}

                                        {cell.column.Header === "Price" ||
                                        cell.column.Header === "Fiyat" ||
                                        cell.column.Header ===
                                            "Wholesale Price" ||
                                        cell.column.Header ===
                                            "Toptan Satış Fiyatı"
                                            ? " TL"
                                            : ""}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
