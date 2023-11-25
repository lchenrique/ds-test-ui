export const headerImportCode = `#### First import component:
~~~tsx
import { PageHeader, Avatar, Button } from '@adopets/react'
`;

export const headerCodeExemple = `~~~tsx
<PageHeader
				title="Adopt information"
				subTitle={<div className="flex gap-3">Payment collected by: <Avatar size="xSmall" shape="circle">
					<Avatar.Name className="font-semibold text-sm">Carlos Santos</Avatar.Name>
				</Avatar></div>}
				actions={<><Button>Actions</Button></>}
				onBack={() => { }}
/>
`;

export const headerCodeExmeple2 = `#### You can customize component:
~~~tsx
<PageHeader title="Adopt information" onBack={() => { }}>
				<PageHeader.SubTitle className="gap-3" >
						Payment collected by: 
						<Avatar size="xSmall" shape="circle">
							<Avatar.Name className="font-semibold text-sm">Carlos Santos</Avatar.Name>
						</Avatar>
				</PageHeader.SubTitle>
				<PageHeader.Actions>
					<Button>Actions</Button>
				</PageHeader.Actions>
</PageHeader>
`;
