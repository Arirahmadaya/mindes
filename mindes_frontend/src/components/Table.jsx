import React from "react";
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
  User,
  Pagination,
} from "@nextui-org/react";
import {
  Plus,
  MoreVertical,
  Search,
  ChevronDown,
  Settings,
  Eye,
  Edit,
  Trash2,
} from "react-feather";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

export default function Tablenih() {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(users.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
      t;
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter, hasSearchFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "full", size: "sm", src: user.avatar }}
            classNames={{
              description: "text-default-500",
            }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-500">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[user.status]}
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="flex  items-center justify-start -ml-5  ">
            <Button isIconOnly radius="full" size="sm" variant="light">
              <Eye className="w-4 h-4 text-black " />
            </Button>
            <Button isIconOnly radius="full" size="sm" variant="light">
              <Tooltip content="Edit">
                <span className=" active:opacity-50">
                  <Edit className="w-4 h-4 text-warning" />
                </span>
              </Tooltip>
            </Button>
            <Button isIconOnly radius="full" size="sm" variant="light">
              <Tooltip content="Hapus">
                <span className=" active:opacity-50">
                  <Trash2 className="w-4 h-4 text-danger " />
                </span>
              </Tooltip>
            </Button>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

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
            placeholder="Search by name..."
            size="sm"
            startContent={<Search className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDown className="text-small" />}
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
                  endContent={<ChevronDown className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Columns
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
              className="bg-primary-30 text-white"
              endContent={<Plus />}
              size="sm"
            >
              Tambah Item
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {users.length} users
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-primary-30 text-white",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

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
      <TableBody emptyContent={"No users found"} items={sortedItems}>
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

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAMA", uid: "nama", sortable: true },
  { name: "UMUR", uid: "umur", sortable: true },
  { name: "ROLE", uid: "role", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "EMAIL", uid: "email" },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];
const users = [
  {
    id: 1,
    nama: "Budi Santoso",
    role: "superadmin",
    status: "active",
    umur: "45",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024a",
    email: "budi.santoso@example.com",
  },
  {
    id: 2,
    nama: "Ani Yulianti",
    role: "admin",
    status: "paused",
    umur: "35",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
    email: "ani.yulianti@example.com",
  },
  {
    id: 3,
    nama: "Tono Sutrisno",
    role: "admin",
    status: "active",
    umur: "40",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702c",
    email: "tono.sutrisno@example.com",
  },
  {
    id: 4,
    nama: "Rina Wijaya",
    role: "umum",
    status: "vacation",
    umur: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "rina.wijaya@example.com",
  },
  {
    id: 5,
    nama: "Siti Nurhaliza",
    role: "umum",
    status: "active",
    umur: "32",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700e",
    email: "siti.nurhaliza@example.com",
  },
  {
    id: 6,
    nama: "Andi Saputra",
    role: "umum",
    status: "active",
    umur: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "andi.saputra@example.com",
  },
  {
    id: 7,
    nama: "Dewi Kartika",
    role: "umum",
    status: "paused",
    umur: "27",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007e",
    email: "dewi.kartika@example.com",
  },
  {
    id: 8,
    nama: "Eka Prasetyo",
    role: "umum",
    status: "active",
    umur: "31",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008f",
    email: "eka.prasetyo@example.com",
  },
  {
    id: 9,
    nama: "Farida Susanti",
    role: "umum",
    status: "vacation",
    umur: "33",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "farida.susanti@example.com",
  },
  {
    id: 10,
    nama: "Gunawan Hidayat",
    role: "umum",
    status: "active",
    umur: "35",
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "gunawan.hidayat@example.com",
  },
  {
    id: 11,
    nama: "Hanafi Putra",
    role: "umum",
    status: "active",
    umur: "22",
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "hanafi.putra@example.com",
  },
  {
    id: 12,
    nama: "Intan Maharani",
    role: "umum",
    status: "paused",
    umur: "28",
    avatar: "https://i.pravatar.cc/150?img=10",
    email: "intan.maharani@example.com",
  },
  {
    id: 13,
    nama: "Joko Susanto",
    role: "umum",
    status: "active",
    umur: "37",
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "joko.susanto@example.com",
  },
];
