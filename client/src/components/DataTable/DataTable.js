import "./DataTable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, accountColumns } from "../../datatablesource";
import { API } from "../../Api/BankApi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const DataTable = ({ type }) => {
  const [data, setUserData] = useState([]);
  // const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const rowToShow = type === "users" ? userColumns : accountColumns;
  const url_link_get_all =
    type === "users" ? "/users/get-all-users" : "/accounts/get-all-accounts";
  const url_link_delete_id =
    type === "users" ? "/users/delete-user" : "/accounts/delete-account";
  useEffect(() => {
    const fetchUserRows = async () => {
      try {
        const { data } = await API.get(url_link_get_all);
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserRows();
  }, []);
  const handleDelete = async (id) => {
    const filterData = data.filter((item) =>
      type === "users" ? item.personal_id === id : item.accountNum === id
    );
    console.log(filterData);
    const options = {
      ...filterData,
    };
    try {
      const { data } = await API.delete(
        url_link_delete_id,
        type === "users"
          ? {
              params: { personal_id: filterData[0].personal_id },
            }
          : { params: { accountNum: filterData[0].accountNum } }
      );

      setUserData(data);
    } catch (error) {
      console.log(error.message);
    }
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
              onClick={() =>
                handleDelete(
                  type === "users"
                    ? params.row.personal_id
                    : params.row.accountNum
                )
              }
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
          הוסף משתמש חדש
          <Link to="/users/newuser" className="link">
            הוסף חדש
          </Link>
        </div>
      ) : (
        <div className="datatableTitle">
          הוסף חשבון חדש
          <Link to="/accounts/new-account" className="link">
            הוסף חדש
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
        getRowId={
          type === "users"
            ? (data) => data.personal_id
            : (data) => data.accountNum
        }
      />
    </div>
  );
};

export default DataTable;
