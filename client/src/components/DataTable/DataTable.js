import "./DataTable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, accountColumns } from "../../datatablesource";
import { API } from "../../Api/BankApi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const DataTable = ({ type }) => {
  // const [data, setData] = useState(userRows);
  const [data, setUserData] = useState([]);
  const rowToShow = type === "users" ? userColumns : accountColumns;
  useEffect(() => {
    const fetchUserRows = async () => {
      const url_link =
        type === "users"
          ? "/users/get-all-users"
          : "/accounts/get-all-accounts";

      try {
        const { data } = await API.get(url_link);
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserRows();
  }, []);
  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "פעולות",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {type === "users" ? (
              <Link to="/users/test" style={{ textDecoration: "none" }}>
                <div className="viewButton">צפה</div>
              </Link>
            ) : (
              ""
            )}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              מחק
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      {type === "users" ? (
        <div className="datatableTitle">
          Add New User
          <Link to="/users/newuser" className="link">
            Add New
          </Link>
        </div>
      ) : (
        <div className="datatableTitle">
          Add New Account
          <Link to="/users/newAccount" className="link">
            Add New
          </Link>
        </div>
      )}
      <DataGrid
        className="datagrid"
        rows={data}
        columns={rowToShow.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
