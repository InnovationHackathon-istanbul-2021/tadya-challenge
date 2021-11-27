import * as React from 'react';
import {
  HiChevronDoubleLeft,
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleRight,
} from 'react-icons/hi';
import { classNames } from '../../../utils/helper';

export function PageButton({ children, className, ...rest }: any) {
  return (
    <button
      type="button"
      className={classNames(
        'relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
export const Pagination = ({
  pageCount,
  currentPage,
  adjacents,
  gotoPage,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  pageSize,
  setPageSize,
  pageOptions,
}: any) => {
  return (
    <div className="mx-3 py-3 flex items-center justify-between">
      <div className="flex-1 flex justify-between sm:hidden">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div className="flex gap-x-2 items-baseline">
          <span className="text-sm text-gray-700">
            Page <span className="font-medium">{currentPage }</span> of{' '}
            <span className="font-medium">{pageOptions.length}</span>
          </span>
          <label>
            <span className="sr-only">Items Per Page</span>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <PageButton
              className="rounded-l-md"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <span className="sr-only">First</span>
              <HiChevronDoubleLeft
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </PageButton>
            <PageButton
              className
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <span className="sr-only">Previous</span>
              <HiChevronLeft
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </PageButton>
            <PageButton className onClick={() => nextPage()} disabled={!canNextPage}>
              <span className="sr-only">Next</span>
              <HiChevronRight
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </PageButton>
            <PageButton
              className="rounded-r-md"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <span className="sr-only">Last</span>
              <HiChevronDoubleRight
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </PageButton>
          </nav>
        </div>
      </div>
    </div>
  );
};
