export const paginationImportCode = `#### First import component:
~~~tsx
import { IPaginationProps, Pagination } from '@adopets/react'
`;

export const paginationCode = `~~~tsx
<Pagination
		current={page}
		total={args.total}
		pageSize={args.pageSize}
		onChange={(page, pageSize) => {
			if (page) {
				setPage(page)
			}
		}}
/>
`;
