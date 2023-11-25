import Table from "rc-table";
import { AutoSizer, WindowScroller } from "react-virtualized";

function generateData(count) {
  const data = [];

  for (let i = 1; i <= count; i++) {
    data.push({
      id: i,
      name: `User ${i}`,
      age: Math.floor(Math.random() * 30) + 20, // Gera uma idade aleatória entre 20 e 49 anos
      // Adicione mais propriedades conforme necessário
    });
  }

  return data;
}

const VirtualizedTable = ({ columns, data, rowHeight }) => {
  const renderTable = ({ width, height, isScrolling, scrollTop }) => (
    <Table
      columns={columns}
      data={data}
      scroll={{ y: height }}
      style={{ width }}
    />
  );

  return (
    <WindowScroller>
      {({ height, isScrolling, onChildScroll, scrollTop }) => (
        <AutoSizer disableHeight>
          {({ width }) => (
            <div>{renderTable({ height, isScrolling, scrollTop, width })}</div>
          )}
        </AutoSizer>
      )}
    </WindowScroller>
  );
};

const MyTable = () => {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    // Adicione mais colunas conforme necessário
  ];

  const data = generateData(1000); // Gera 1000 itens de dados fictícios

  return <VirtualizedTable columns={columns} data={data} rowHeight={50} />;
};

export { MyTable };
