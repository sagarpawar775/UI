import React from "react";

const Table = (props) => {
  const { headers, data, columns } = props;
  return (
    <table border="2px">
      <thead>
        <tr>
          {headers?.map((val, ind) => {
            return <th key={val + ind}>{val}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {data &&
          Array.isArray(data) &&
          columns &&
          Array.isArray(columns) &&
          data.map((obj, ind) => (
            <tr key={obj + ind}>
              {columns.map((key, index) => (
                <td key={key + index}>{obj[key]}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const Students = ({ users }) => {
  return (
    <div>
      <h1>Students</h1>
      <Table
        headers={["UID", "PASSWORD", "ADDRESS", "COUNTRY"]}
        data={users}
        columns={["uid", "pwd", "address", "country"]}
      />
    </div>
  );
};

export default Students;
