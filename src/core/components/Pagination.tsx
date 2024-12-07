import { cx } from "../helpers";

export default function Pagination({
  pagination = {
    currentPage: 1,
    totalItem: 0,
    totalPage: 0,
    items: [],
  },
  pageSize = 0,
  boxStyle = "",
  onFetch = () => {},
}: {
  pagination?: Pagination<any> | null;
  onFetch?: (page: number) => void;
  boxStyle?: string;
  pageSize?: number;
}) {
  return (
    <div
      className={cx(
        "flex flex-col-reverse items-center justify-between gap-5 p-3 sm:flex-row",
        boxStyle,
      )}
    >
      <p className="text-sm text-gray-500">
        Showing <span>{pagination?.currentPage}</span> of{" "}
        <span>{pagination?.totalPage}</span> of <span>{pageSize}</span> entries
      </p>
      <div className="flex items-center justify-end gap-3">
        <button
          onClick={() =>
            onFetch(pagination?.currentPage ? pagination.currentPage - 1 : 0)
          }
          disabled={pagination?.currentPage === 1}
          className="flex !h-10 items-center gap-5 border !border-gray-200 bg-white !px-2 !py-1 !text-xs !font-medium shadow-sm hover:bg-blue-900 hover:text-white disabled:cursor-not-allowed"
        >
          <span className="ion--arrow-left-b iconify text-lg"></span>
          <span>Previous</span>
        </button>

        <div className="flex h-10 w-16 items-center justify-center bg-blue-800 text-white">
          {pagination?.currentPage}
        </div>

        <button
          disabled={pagination?.currentPage === pagination?.totalPage}
          onClick={() =>
            onFetch(pagination?.currentPage ? pagination.currentPage + 1 : 0)
          }
          className="flex !h-10 items-center gap-5 border !border-blue-800 bg-white !px-2 !py-1 !text-xs !font-medium text-blue-800 shadow-sm hover:bg-blue-900 hover:text-white disabled:cursor-not-allowed"
        >
          <span>Next</span>
          <span className="ion--arrow-right-b iconify text-lg"></span>
        </button>
      </div>
    </div>
  );
}
