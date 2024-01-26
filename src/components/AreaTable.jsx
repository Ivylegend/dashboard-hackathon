import AreaTableAction from "./AreaTableAction";
import { user1, user2, user3, user4, user5 } from "../assets";
import "./AreaTable.scss";

const TABLE_HEADS = ["Name", "Date", "Amount", "Status", "Invoice"];

const TABLE_DATA = [
  {
    id: 100,
    name: "Marcus Bergson",
    date: "Nov15, 2023",
    amount: "80,000",
    status: "Paid",
    picture: user1,
  },
  {
    id: 101,
    name: "Jaydon Vaccaro",
    date: "Nov15, 2023",
    amount: "150,000",
    status: "Refund",
    picture: user2,
  },
  {
    id: 102,
    name: "Corey Schleifer",
    date: "Nov15, 2023",
    amount: "87,000",
    status: "Paid",
    picture: user3,
  },
  {
    id: 103,
    name: "Cooper Press",
    date: "Nov15, 2023",
    amount: "100,000",
    status: "Refund",
    picture: user4,
  },
  {
    id: 104,
    name: "Phillip Lubin",
    date: "Nov13, 2023",
    amount: "78,000",
    status: "Paid",
    picture: user5,
  },
];

const AreaTable = ({darkMode}) => {
  return (
    <section className="content-area-table">
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index} className="text-[#9CA4AB] font-medium">
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td className="font-medium flex items-center gap-[10px]">
                    <img src={dataItem.picture} alt="" />
                    <p className={`${darkMode && "text-white"} text-[#3A3F51]`}>{dataItem.name}</p>
                  </td>
                  <td className="text-[#737373] font-normal">
                    {dataItem.date}
                  </td>
                  <td className={`${darkMode && "text-blue-900"} text-[#0D062D] font-medium`}>
                    ${dataItem.amount}
                  </td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-text dt-status-${dataItem.status}`}
                      >
                        {dataItem.status}
                      </span>
                    </div>
                  </td>
                  <td className="dt-cell-action">
                    <img src="" alt="" />
                    {/* <p>View</p> */}
                    <AreaTableAction darkMode={darkMode}/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
