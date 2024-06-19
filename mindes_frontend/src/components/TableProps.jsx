import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  Pagination,
} from "@nextui-org/react";
import { Search, ChevronDown, Plus } from "react-feather";

function TableProps({
  statusColorMap,
  INITIAL_VISIBLE_COLUMNS,
  columns,
  statusOptions,
  isi,
  filterKeys,
  tambahKegiatanURL,
  actionButtons,
}) {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState(new Set(["all"]));
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "tgl",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(isi.length / rowsPerPage);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns, columns]);

  const filteredItems = React.useMemo(() => {
    let filteredIsi = [...isi];

    if (filterValue) {
      filteredIsi = filteredIsi.filter((item) =>
        filterKeys.some((key) => {
          const value = item[key]?.toString().toLowerCase();
          return value && value.includes(filterValue.toLowerCase());
        })
      );
    }

    if (!statusFilter.has("all")) {
      filteredIsi = filteredIsi.filter((item) =>
        Array.from(statusFilter).includes(item.status)
      );
    }

    return filteredIsi;
  }, [filterValue, statusFilter, isi, filterKeys]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, rowsPerPage, filteredItems]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [items, sortDescriptor]);

  const renderCell = React.useCallback(
    (item, columnKey) => {
      const cellValue = item[columnKey];

      switch (columnKey) {
        case "judul":
          return <div>{item.judul}</div>;
        case "status":
          return (
            <Chip
              className="capitalize border-none gap-1 text-default-600"
              color={statusColorMap[item.status]}
              size="sm"
              variant="dot"
            >
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="flex items-center justify-start -ml-5">
              {actionButtons.map((action, index) => (
                <Button
                  key={index}
                  isIconOnly
                  radius="full"
                  size="sm"
                  variant="light"
                  onClick={() => action.onClick(item)}
                >
                  {action.icon}
                </Button>
              ))}
            </div>
          );
        default:
          return cellValue;
      }
    },
    [statusColorMap, actionButtons]
  );

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder={`Cari Data...`}
            size="sm"
            startContent={<Search className="w-5 h-5" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDown className="w-5 h-5" />}
                  size="sm"
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDown className="w-5 h-5" />}
                  size="sm"
                  variant="flat"
                >
                  Kolom
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              className="bg-primary-30 text-white flex gap-1 items-center"
              size="sm"
              variant="flat"
              as={Link}
              to={tambahKegiatanURL}
            >
              Tambah <Plus className="w-5" />
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {isi.length} isi
          </span>
          <label className="flex items-center text-default-400 text-small">
            Baris per halaman:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    onSearchChange,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    isi.length,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{ cursor: "bg-primary-30 text-white" }}
          color="default"
          isDisabled={filteredItems.length === 0}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys.size === isi.length
            ? "Semua isi ditandai"
            : `${selectedKeys.size} dari ${filteredItems.length} ditandai`}
        </span>
      </div>
    );
  }, [page, pages, selectedKeys, filteredItems.length, isi.length]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-primary-30 after:text-blue text-white",
        },
      }}
      classNames={classNames}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No isi found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

TableProps.propTypes = {
  statusColorMap: PropTypes.object.isRequired,
  INITIAL_VISIBLE_COLUMNS: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  statusOptions: PropTypes.array.isRequired,
  isi: PropTypes.array.isRequired,
  filterKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  tambahKegiatanURL: PropTypes.string.isRequired,
  actionButtons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default TableProps;
