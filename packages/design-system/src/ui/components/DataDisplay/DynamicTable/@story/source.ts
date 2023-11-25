export const importTableCode = `#### First import component:
~~~tsx
import { DynamicTable, Filter, createColumn, IlikeFilter, Avatar} from "@/ui"
`;

export const filterCode = `#### Filter component:
~~~tsx
const options = [
			{ label: "Active", value: "active" },
			{ label: "Inactive", value: "inactive" },
		]

() => (
		<Filter id="my-table" 
				type="primary"
				actions={{
					select:{
						name: "select",
						options: options,
						order: 2
					},
		}} />
)
`;
// select: {
// 	name: "select",
// 	options: [
// 		{ label: "Active", value: "active" },
// 		{ label: "Inactive", value: "inactive" },
// 	],
// 	order: 2
// },
// toggle: {
// 	name: "isPositive",
// 	label: "is positive?",
// 	order: 3
// }

export const tableCode = `#### When to Use.
~~~tsx
const Table = ({ args }: any) => {
	const ApiService = {
		load: async (url, params) => {
			var myInit = {
				method: "GET",
			};

			var myRequest = new Request(url, myInit as any);
			return fetch(myRequest)
				.then(async (res) => await res.json())
				.then((data) => {
				return { result: data.users, total: data.total };
				});
			},
	}

	const column = createColumn<any>()

	const columns = [
		column.set('Name', {
			key: "firstName",
			primary: true,
			render: (_, data) => <Avatar size="small" name = { data.firstName + " " + data.lastName } src = { data.image } />,
			filter: IlikeFilter(<></>),
		}),
		column.set('E-mail', {
			key: 'email',
			render: (_, data) => <>{data.email}</>,
			filter: IlikeFilter(<></>)
		}),
		column.set('Phone', {
			key: 'phone',
			render: (_, data) => <>{data.phone} </>,
			filter: IlikeFilter(<></>)
		}),
		column.action(null, [
			{
				label: 'Edit',
			},
		])
	]

  return (
		<DynamicTable 
			{...args}
			id="my-table"
			url="https://dummyjson.com/users"
			columns={columns}
			orderBy={["-created_date"]}
			ApiService={ApiService}
		/>
  )
`;
