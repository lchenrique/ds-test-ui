import {
  Avatar,
  DynamicTable,
  Filter,
  Flex,
  Icon,
  IlikeFilter,
  QueryClient,
  QueryClientProvider,
  createColumn,
} from "@/ui";
import { Meta } from "@storybook/react";
// import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import pets from "@/exemple/pets.json";
import {
  AllPetsFilter,
  AllPetsFilterInline,
  SearchFilter,
} from "../filter/AllPetsFilter";

const queryClient = new QueryClient();

export default {
  title: "Components/DataDisplay/DynamicTable",
  component: DynamicTable,
} as Meta<typeof DynamicTable>;

export const TableStory = {
  argTypes: {
    radio: {
      control: "boolean",
    },
    select: {
      control: "boolean",
    },
    toggle: {
      control: "boolean",
    },
    type: {
      control: "inline-radio",
      options: ["primary", "secondary"],
    },
  },
  args: {
    radio: true,
    select: true,
    toggle: true,
    limit: 3,
    type: "primary",
  },

  render: (args: typeof DynamicTable) => (
    <App>
      <Table {...args} />
    </App>
  ),
};

const Table = ({ radio, select, toggle, type, ...args }: any) => {
  const column = createColumn<any>();

  const columns = [
    column.set("Name", {
      key: "name",
      primary: true,
      render: (_, data) => (
        <Flex gap="spacing-xxs" wrap="nowrap">
          <Avatar
            showInfo={false}
            size="small"
            shape="circle"
            name={data.name}
            src={
              data.picture &&
              `https://cdn.dev.adopets.com/organization/pet/picture/${data.picture}?width=100`
            }
          />
          <span className="whitespace-nowrap">{data.name}</span>
        </Flex>
      ),
      filter: IlikeFilter(<></>),
    }),
    column.set("Specie", {
      mobileIcon: "heart",
      key: "specie",
      render: (_, data) => <>{data.specie?.name}</>,
      sorterKey: "specie.name",
    }),
    column.set("Breed", {
      mobileIcon: "dog",
      key: "breed_primary",
      render: (_, data) => <>{data.breed_primary?.name}</>,
      sorterKey: "breed_primary.name",
    }),
    column.set("Breed", {
      mobileIcon: "dog",
      key: "breed_primary",
      render: (_, data) => <>{data.breed_primary?.name}</>,
      sorterKey: "breed_primary.name",
    }),
    column.set("Breed", {
      mobileIcon: "dog",
      key: "breed_primary",
      render: (_, data) => <>{data.breed_primary?.name}</>,
      sorterKey: "breed_primary.name",

      options: {
        sorter: false,
      },
    }),
    column.action(null, [
      {
        label: "Edit",
        type: "primary",
        icon: <Icon name="edit" size="spacing-s" fill="surface-primary" />,
      },
      {
        label: "Details",
        icon: <Icon name="eye" size="spacing-s" fill="surface-primary" />,
      },
    ]),
  ];

  let petss = { ...pets, _fields: undefined };
  delete petss._fields;

  return (
    <>
      <Filter
        id="my-table"
        type={type}
        search={SearchFilter}
        inlineFilter={AllPetsFilterInline}
        actions={
          select && {
            options: [
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ],
          }
        }
        filters={AllPetsFilter}
      />

      <DynamicTable
        {...args}
        id="my-table"
        url="https://organization.alpha.adopets.app/v2/pet/search"
        columns={columns}
        load={["specie_id", "picture", "breed_primary_id"]}
        orderBy={["-created_date"]}
        join={[
          {
            breed_primary: {
              with: {
                _fields: ["id", "uuid", "name"],
              },
            },
            specie: {
              with: {
                _fields: ["id", "name"],
              },
            },
          },
        ]}
        ApiService={{
          load: async (url: any, params: any) => {
            petss.options.limit = params._options.limit;
            petss.options.page = params._options.page + 1;
            petss.options.sort = params._options.sort;

            const joinObj = params._join.reduce((obj: any, item: any) => {
              for (const key in item) {
                Object.assign(obj, { [key]: item[key] });
              }
              return obj;
            }, {});

            const othersFilters = {
              ...params._filters,
              [SearchFilter.name]: undefined,
            };

            const searchFilter = {
              ...params._filters?.[SearchFilter.name],

              // ...othersFilters
            } as any;

            for (const key in joinObj) {
              if (searchFilter[key]) {
                Object.assign(searchFilter[key], joinObj[key]);
              }
            }

            petss.search = {
              ...joinObj,
              _fields: params._select,
              ...othersFilters,
              ...searchFilter,
            };
            console.log("petss.search ", petss.search);
            var myInit = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkubG9jYWwuYWRvcGV0cy5jb20iLCJhdWQiOiJvcmdhbml6YXRpb25fc2Vzc2lvbiIsImp0aSI6IjMyOGJmZGU4LWUyMjctNGIzMy1hMDIyLTRlZDQwMDQwMTk4MiIsImlhdCI6MTY5NzIyMjc4NSwic3ViIjoiM2Q3MmQyMGUtZThkMC00YmVhLTlkZjgtMjIwOWYzMTI5N2E3IiwibG9nZ2VkIjp0cnVlLCJyb2xlIjoib3duZXIifQ.hUOlYRcfSbHuwKbaKsTpX2jQp6Dj3D1xvAQxXbHUHUI",
              },
              body: JSON.stringify(petss),
            };

            var myRequest = new Request(url, myInit as any);

            return fetch(myRequest)
              .then(async (res) => await res.json())
              .then((res) => {
                return { result: res.data?.result, total: res.data?.count };
              });
          },
        }}
      />

      {/* <CodeBlock code={importTableCode} isOpen />
			<CodeBlock code={filterCode} />
			<CodeBlock code={tableCode} /> */}
    </>
  );
};

const App = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
