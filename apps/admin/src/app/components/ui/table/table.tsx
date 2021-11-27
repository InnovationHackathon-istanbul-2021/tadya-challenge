/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  useTable,
  usePagination,
  useResizeColumns,
  useFlexLayout,
  useGroupBy,
  useSortBy,
  useRowSelect,
} from 'react-table';
import { Pagination } from './pagination';
import SpinLoader from '../loader';
const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }: any, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef: any = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <input type="checkbox" ref={resolvedRef} {...rest} />
    );
  },
);
const Styles = styled.div`
  table {
    width: 100%;
  }
`;

const hooks = [
  useGroupBy,
  useSortBy,
  useFlexLayout,
  usePagination,
  useResizeColumns,
  useRowSelect,
];

export const Table = ({
  columns,
  data,
  perPage,
  loading,
  onFetchData,
  rowSelection = false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onRowSelection = (data: any) => {},
  ...props
}: any) => {
  // Use the state and functions returned from useTable to build your UI

  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      maxWidth: 200, // maxWidth is only used as a limit for resizing
    }),
    [],
  );

  const instance = useTable(
    {
      columns,
      data,
      ...props,
      defaultColumn,
      initialState: {
        pageSize: perPage || 20,
        pageIndex: props.pageIndex || 0,
      },
      autoResetPage: false,
      pageCount: Math.floor(props.numOfPages),

      manualPagination: props.manualPagination,
    } as any,

    ...hooks,
    (    hooks: any) => {
      rowSelection? hooks.visibleColumns.push((columns: any) => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }: any) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }: any) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        } as any,
        ...columns as any,
      ]): []
    },
  );
  const {
    gotoPage,
    rows,
    getTableProps,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    pageOptions,
    setPageSize,
    pageCount,
    headerGroups,
    getTableBodyProps,
    page,
    prepareRow,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
  } = instance as any;

  useEffect(() => {
    props.manualPagination && onFetchData(pageIndex, pageSize);
  }, [pageIndex]);

  useEffect(() => {
    props.manualPagination && onFetchData(pageIndex, pageSize);
  }, [pageSize]);

  useEffect(() => {
    onRowSelection({
      selectedRowIds: selectedRowIds,
      'selectedFlatRows[].original': selectedFlatRows.map((d: any) => d.original),
    });
  }, [selectedRowIds]);

  const rowData = props.manualPagination ? rows : page;

  if (!loading && !data.length) return <div className="no-data">No data loaded</div>;
  if (loading) return <SpinLoader type="Bars" />;

  // Render the UI for your table
  return (
    <>
      <Styles className={props.className}>
        <div className="mt-4 flex flex-col">
          <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className=" overflow-hidden ">
                <table
                  {...getTableProps()}
                  className="min-w-full divide-y divide-gray-200"
                >
                  <thead className="bg-gray-50">
                    {headerGroups.map((headerGroup: any) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any, columnIndex: any) => (
                          <th
                            scope="col"
                            className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            key={columnIndex}
                            {...column.getHeaderProps({
                              style: {
                                minWidth: column.minWidth,
                                width: column.width,
                              },
                            })}
                          >
                            <div className="flex items-center justify-between">
                              {column.render('Header')}
                            </div>
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody
                    {...getTableBodyProps()}
                    className="bg-white divide-y divide-gray-200"
                  >
                    {rowData.map((row: any, i: number) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell: any) => {
                            return (
                              <td
                                className="px-6 py-4 whitespace-nowrap overflow-hidden text-sm text-gray-700"
                                role="cell"
                                {...cell.getCellProps({
                                  style: {
                                    minWidth: cell.column.minWidth,
                                    width: cell.column.width,
                                  },
                                })}
                              >
                                {cell.render('Cell')}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Styles>

      <Pagination
        adjacents={3}
        pageCount={pageCount}
        currentPage={pageIndex + 1}
        gotoPage={(pageNumber:number) => {
          gotoPage(pageNumber);
        }}
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageOptions={pageOptions}
      />
    </>
  );
};
